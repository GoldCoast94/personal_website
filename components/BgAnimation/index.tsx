"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import styles from "./index.module.css";

interface Meteor {
  x: number; // 起始水平位置 (0-1)
  y: number; // 起始垂直位置 (0-1)
  length: number; // 流星长度
  speed: number; // 移动速度
  angle: number; // 移动角度（弧度）
  opacity: number; // 不透明度
  life: number; // 生命周期 (0-1)
  maxLife: number; // 最大生命周期（秒）
}

const BgAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const meteorsRef = useRef<Meteor[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const lastTimeRef = useRef<number>(0);
  const lastCreateTimeRef = useRef<number>(0);

  const MAX_METEORS = 40; // 流星数量
  const CREATE_INTERVAL = 1200; // 每1.2秒创建一个新流星

  // 根据主题获取流星颜色
  const getMeteorColors = (isDark: boolean) => {
    if (isDark) {
      return [
        { head: "rgba(255, 255, 255, 0.9)", tail: "rgba(150, 200, 255, 0)" },
        { head: "rgba(200, 220, 255, 0.8)", tail: "rgba(100, 150, 255, 0)" },
        { head: "rgba(255, 240, 200, 0.9)", tail: "rgba(255, 200, 100, 0)" },
      ];
    } else {
      return [
        { head: "rgba(100, 100, 120, 0.7)", tail: "rgba(180, 180, 200, 0)" },
        { head: "rgba(120, 140, 180, 0.6)", tail: "rgba(200, 210, 230, 0)" },
        { head: "rgba(80, 100, 140, 0.7)", tail: "rgba(160, 180, 200, 0)" },
      ];
    }
  };

  // 创建新流星（从左上到右下）
  const createMeteor = (initialLife?: number): Meteor => {
    const maxLife = 3 + Math.random() * 4; // 3-7秒，显著延长生命周期

    // 流星从左上方区域开始，沿对角线向右下方移动
    // 让流星从屏幕左上角的扩展区域开始（包括屏幕外）
    const startX = -0.2 + Math.random() * 0.8; // -0.2 到 0.6
    const startY = -0.2 + Math.random() * 0.8; // -0.2 到 0.6

    return {
      x: startX,
      y: startY,
      length: 80 + Math.random() * 150, // 增加流星长度，80-230像素的拖尾
      speed: 0.15 + Math.random() * 0.15, // 显著降低速度，0.15-0.3
      angle: Math.PI / 4 + (Math.random() - 0.5) * 0.15, // 45度角，轻微变化±4度
      opacity: 0.7 + Math.random() * 0.3,
      life: initialLife !== undefined ? initialLife : 0,
      maxLife,
    };
  };

  // 绘制流星
  const drawMeteor = (
    ctx: CanvasRenderingContext2D,
    meteor: Meteor,
    width: number,
    height: number,
    colors: Array<{ head: string; tail: string }>
  ) => {
    // 计算流星当前位置（沿着角度方向移动）
    const progress = meteor.life;
    const distance = progress * meteor.speed * Math.max(width, height);
    const headX = meteor.x * width + Math.cos(meteor.angle) * distance;
    const headY = meteor.y * height + Math.sin(meteor.angle) * distance;

    // 计算尾部位置
    const tailX = headX - Math.cos(meteor.angle) * meteor.length;
    const tailY = headY - Math.sin(meteor.angle) * meteor.length;

    // 计算淡入淡出效果
    let alpha = meteor.opacity;
    if (progress < 0.1) {
      alpha *= progress / 0.1; // 淡入
    } else if (progress > 0.8) {
      alpha *= (1 - progress) / 0.2; // 淡出
    }

    // 选择颜色（处理负数索引）
    const rawIndex = Math.floor(Math.abs(meteor.x) * colors.length);
    const colorIndex = rawIndex % colors.length;
    const color = colors[colorIndex];

    // 创建从尾部到头部的渐变
    const gradient = ctx.createLinearGradient(tailX, tailY, headX, headY);

    // 解析头部颜色并应用alpha
    const headMatch = color.head.match(/rgba?\(([^)]+)\)/);
    if (headMatch) {
      const parts = headMatch[1].split(",").map((p) => p.trim());
      const headAlpha = parts.length === 4 ? parseFloat(parts[3]) : 1;
      gradient.addColorStop(0, color.tail);
      gradient.addColorStop(0.5, `rgba(${parts[0]}, ${parts[1]}, ${parts[2]}, ${headAlpha * alpha * 0.5})`);
      gradient.addColorStop(1, `rgba(${parts[0]}, ${parts[1]}, ${parts[2]}, ${headAlpha * alpha})`);
    }

    // 绘制流星拖尾（多层渲染创造彗星效果）

    // 外层发光（最宽的光晕）
    ctx.shadowBlur = 25;
    ctx.shadowColor = color.head;
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 6;
    ctx.lineCap = "round";
    ctx.globalAlpha = alpha * 0.3;
    ctx.beginPath();
    ctx.moveTo(tailX, tailY);
    ctx.lineTo(headX, headY);
    ctx.stroke();

    // 中层发光
    ctx.shadowBlur = 15;
    ctx.lineWidth = 4;
    ctx.globalAlpha = alpha * 0.6;
    ctx.beginPath();
    ctx.moveTo(tailX, tailY);
    ctx.lineTo(headX, headY);
    ctx.stroke();

    // 核心亮线（最亮）
    ctx.shadowBlur = 8;
    ctx.lineWidth = 2;
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    ctx.moveTo(tailX, tailY);
    ctx.lineTo(headX, headY);
    ctx.stroke();

    // 重置
    ctx.shadowBlur = 0;
    ctx.globalAlpha = 1;
  };

  // 动画循环
  const animate = (currentTime: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const deltaTime = lastTimeRef.current ? (currentTime - lastTimeRef.current) / 1000 : 0;
    lastTimeRef.current = currentTime;

    // 创建新流星
    if (
      currentTime - lastCreateTimeRef.current > CREATE_INTERVAL &&
      meteorsRef.current.length < MAX_METEORS
    ) {
      meteorsRef.current.push(createMeteor());
      lastCreateTimeRef.current = currentTime;
    }

    // 更新流星
    meteorsRef.current = meteorsRef.current.filter((meteor) => {
      meteor.life += deltaTime / meteor.maxLife;
      return meteor.life <= 1;
    });

    // 清空画布（透明背景）
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 获取流星颜色
    const isDark = theme === "dark";
    const meteorColors = getMeteorColors(isDark);

    // 绘制所有流星
    meteorsRef.current.forEach((meteor) => {
      drawMeteor(ctx, meteor, canvas.width, canvas.height, meteorColors);
    });

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  // 处理canvas尺寸
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.scale(dpr, dpr);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // 初始化canvas尺寸
    resizeCanvas();

    // 创建初始流星，随机分布在不同阶段
    for (let i = 0; i < 20; i++) {
      meteorsRef.current.push(createMeteor(Math.random())); // 随机初始life值
    }

    // 启动动画循环
    animationFrameRef.current = requestAnimationFrame(animate);

    // 监听窗口大小变化
    const handleResize = () => {
      resizeCanvas();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("resize", handleResize);
      meteorsRef.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 主题切换时不需要特殊处理，动画循环会自动使用新主题颜色

  return (
    <canvas
      ref={canvasRef}
      className={styles.canvas}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default React.memo(BgAnimation);
