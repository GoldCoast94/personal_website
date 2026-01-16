"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { useTheme } from "next-themes";
import styles from "./index.module.css";

const BgAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const bubblesRef = useRef<HTMLDivElement[]>([]);
  const MAX_BUBBLES = 20; // 限制最大气泡数量

  // 根据主题生成随机颜色 - 使用 useCallback 优化
  const getRandomColor = useCallback(() => {
    if (theme === "dark") {
      // 暗色模式：使用亮色气泡
      const lightColors = [
        "rgba(255, 255, 255, 0.3)",
        "rgba(255, 255, 255, 0.4)",
        "rgba(240, 240, 240, 0.4)",
        "rgba(220, 220, 220, 0.3)",
      ];
      return lightColors[Math.floor(Math.random() * lightColors.length)];
    } else {
      // 亮色模式：使用深色气泡
      const darkColors = [
        "rgba(0, 0, 0, 0.2)",
        "rgba(20, 20, 20, 0.3)",
        "rgba(40, 40, 40, 0.2)",
        "rgba(60, 60, 60, 0.3)",
      ];
      return darkColors[Math.floor(Math.random() * darkColors.length)];
    }
  }, [theme]);

  const createBubble = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    // 限制气泡数量，移除旧气泡
    if (bubblesRef.current.length >= MAX_BUBBLES) {
      const oldBubble = bubblesRef.current.shift();
      oldBubble?.remove();
    }

    const bubble = document.createElement("div");
    bubble.className = styles.bubble;

    // Random position
    const startPositionX = Math.random() * 100;
    const startPositionY = Math.random() * 100;

    // Random size (减小范围以提升性能)
    const size = Math.random() * 40 + 30;

    // Random animation duration
    const duration = Math.random() * 15 + 10;

    // Random opacity
    const opacity = Math.random() * 0.4 + 0.1;

    // Set random color based on theme
    const color = getRandomColor();

    bubble.style.left = `${startPositionX}%`;
    bubble.style.top = `${startPositionY}%`;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.animationDuration = `${duration}s`;
    bubble.style.opacity = opacity.toString();
    bubble.style.background = color;

    container.appendChild(bubble);
    bubblesRef.current.push(bubble);

    // Remove bubble after animation
    setTimeout(() => {
      bubble.remove();
      bubblesRef.current = bubblesRef.current.filter((b) => b !== bubble);
    }, duration * 1000);
  }, [getRandomColor]);

  // 主题切换时只更新颜色，不重建气泡
  useEffect(() => {
    if (bubblesRef.current.length > 0) {
      // 只更新现有气泡的颜色，避免闪烁
      bubblesRef.current.forEach((bubble) => {
        bubble.style.background = getRandomColor();
      });
    }
  }, [theme, getRandomColor]);

  // 初始化和创建气泡的逻辑
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create initial bubbles (减少初始数量)
    for (let i = 0; i < 10; i++) {
      createBubble();
    }

    // Create new bubbles periodically (增加间隔时间)
    const interval = setInterval(() => {
      createBubble();
    }, 3000);

    return () => {
      clearInterval(interval);
      // 清理所有气泡
      bubblesRef.current.forEach((bubble) => bubble.remove());
      bubblesRef.current = [];
    };
  }, [createBubble]);

  return (
    <div ref={containerRef} className={styles.container}>
      {/* Background animation container */}
    </div>
  );
};

export default React.memo(BgAnimation);
