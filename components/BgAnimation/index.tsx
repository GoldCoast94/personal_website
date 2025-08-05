"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import styles from "./index.module.css";

const BgAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  // 根据主题生成随机颜色
  const getRandomColor = () => {
    if (theme === "dark") {
      // 暗色模式：使用亮色气泡
      const lightColors = [
        "rgba(255, 255, 255, 0.3)", // 白色
        "rgba(255, 255, 255, 0.4)", // 白色
        "rgba(255, 255, 255, 0.5)", // 白色
        "rgba(240, 240, 240, 0.4)", // 浅灰
        "rgba(220, 220, 220, 0.3)", // 浅灰
        "rgba(200, 200, 200, 0.4)", // 浅灰
        "rgba(180, 180, 180, 0.3)", // 浅灰
        "rgba(160, 160, 160, 0.4)", // 浅灰
      ];
      return lightColors[Math.floor(Math.random() * lightColors.length)];
    } else {
      // 亮色模式：使用深色气泡
      const darkColors = [
        "rgba(0, 0, 0, 0.2)", // 黑色
        "rgba(20, 20, 20, 0.3)", // 深灰
        "rgba(40, 40, 40, 0.2)", // 深灰
        "rgba(60, 60, 60, 0.3)", // 深灰
        "rgba(80, 80, 80, 0.2)", // 深灰
        "rgba(100, 100, 100, 0.3)", // 深灰
        "rgba(120, 120, 120, 0.2)", // 深灰
        "rgba(140, 140, 140, 0.3)", // 深灰
      ];
      return darkColors[Math.floor(Math.random() * darkColors.length)];
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createBubble = () => {
      const bubble = document.createElement("div");
      bubble.className = styles.bubble;

      // Random position
      const startPositionX = Math.random() * 100;
      const startPositionY = Math.random() * 100;

      // Random size
      const size = Math.random() * 60 + 20;

      // Random animation duration
      const duration = Math.random() * 20 + 10;

      // Random opacity
      const opacity = Math.random() * 0.5 + 0.1;

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

      // Remove bubble after animation
      setTimeout(() => {
        bubble.remove();
      }, duration * 1000);
    };

    // Create initial bubbles
    for (let i = 0; i < 15; i++) {
      createBubble();
    }

    // Create new bubbles periodically
    const interval = setInterval(() => {
      createBubble();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [theme]); // 添加 theme 作为依赖项

  return (
    <div ref={containerRef} className={styles.container}>
      {/* Background animation container */}
    </div>
  );
};

export default BgAnimation;
