"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const TimelineAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
    });

    // 外层方块动画
    tl.to(".box-outer", {
      duration: 1,
      x: 100,
      rotation: 360,
      ease: "power2.out",
    })
      // 中层方块动画
      .to(".box-middle", {
        duration: 1,
        y: 100,
        scale: 1.5,
        ease: "bounce.out",
      })
      // 内层方块动画
      .to(".box-inner", {
        duration: 1,
        x: -100,
        y: -100,
        rotation: -360,
        ease: "power2.inOut",
      });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-indigo-500 rounded-lg shadow-lg box-outer" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-500 rounded-lg shadow-lg box-middle" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-cyan-500 rounded-lg shadow-lg box-inner" />
    </div>
  );
};
