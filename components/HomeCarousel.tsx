"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    id: "react",
    title: "React 核心概念",
    description: "深入理解 React 的核心概念和最佳实践",
    icon: "⚛️",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "css",
    title: "CSS 动画与过渡",
    description: "探索现代 CSS 动画和过渡效果的实现",
    icon: "🎨",
    color: "from-pink-500 to-purple-500",
  },
  {
    id: "javascript",
    title: "JavaScript 高级特性",
    description: "掌握 JavaScript 的高级特性和设计模式",
    icon: "📜",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "threejs",
    title: "Three.js 3D 开发",
    description: "使用 Three.js 创建沉浸式 3D 体验",
    icon: "🎮",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "gsap",
    title: "GSAP 动画库",
    description: "使用 GSAP 创建流畅的动画效果",
    icon: "✨",
    color: "from-indigo-500 to-violet-500",
  },
];

export default function HomeCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div
      className="relative w-full h-[600px] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        key={slides[currentSlide].id}
        className="absolute inset-0 transition-opacity duration-1000"
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].color} opacity-10`}
        />
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-6">
              <span className="text-5xl md:text-6xl mb-4 inline-block">
                {slides[currentSlide].icon}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {slides[currentSlide].title}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
                {slides[currentSlide].description}
              </p>
              <Link
                href={`/tech/${slides[currentSlide].id}`}
                className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
              >
                了解更多
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 左右切换箭头 */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-8 cursor-pointer top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <svg
          className="w-8 h-8 text-white transform group-hover:-translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={handleNextSlide}
        className="absolute right-8 cursor-pointer top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <svg
          className="w-8 h-8 text-white transform group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-indigo-600 scale-125"
                : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
