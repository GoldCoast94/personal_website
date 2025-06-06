"use client";

import React, { useEffect, useRef } from "react";
import styles from "./index.module.css";

const BgAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 生成随机颜色
  const getRandomColor = () => {
    const colors = [
      "rgba(255, 107, 107, 0.6)", // 红色
      "rgba(255, 159, 67, 0.6)", // 橙色
      "rgba(255, 214, 10, 0.6)", // 黄色
      "rgba(48, 209, 88, 0.6)", // 绿色
      "rgba(10, 132, 255, 0.6)", // 蓝色
      "rgba(94, 92, 230, 0.6)", // 靛蓝色
      "rgba(191, 90, 242, 0.6)", // 紫色
      "rgba(255, 69, 58, 0.6)", // 粉红色
    ];
    return colors[Math.floor(Math.random() * colors.length)];
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

      // Set random color
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
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      {/* Background animation container */}
    </div>
  );
};

export default BgAnimation;
