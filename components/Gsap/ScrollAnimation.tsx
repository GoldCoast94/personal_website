"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ScrollAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = "";

    // 创建卡片容器
    const cardsContainer = document.createElement("div");
    cardsContainer.className = "space-y-16 p-8";
    containerRef.current.appendChild(cardsContainer);

    // 只创建两张卡片
    const cards = Array.from({ length: 2 }, (_, i) => {
      const card = document.createElement("div");
      card.className = `scroll-card w-full h-64 bg-gradient-to-br ${
        i === 0 ? "from-pink-500 to-purple-500" : "from-blue-500 to-cyan-500"
      } rounded-xl shadow-lg flex items-center justify-center text-white text-2xl font-bold`;
      card.textContent = `Card ${i + 1}`;
      return card;
    });

    // 添加卡片到容器
    cards.forEach((card) => cardsContainer.appendChild(card));

    // 为每个卡片创建动画
    cards.forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          end: "top center",
          toggleActions: "play none none reverse",
          markers: false,
        },
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    });

    return () => {
      // 清理动画和容器
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      cardsContainer.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    />
  );
};
