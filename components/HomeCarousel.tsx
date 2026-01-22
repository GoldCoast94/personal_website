"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

const slides = [
  {
    id: "react",
    icon: "⚛️",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "css",
    icon: "🎨",
    color: "from-pink-500 to-purple-500",
  },
  {
    id: "javascript",
    icon: "📜",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "threejs",
    icon: "🎮",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "gsap",
    icon: "✨",
    color: "from-indigo-500 to-violet-500",
  },
];

export default function HomeCarousel() {
  const t = useTranslations("home");
  const locale = useLocale();
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
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 背景层 - 星空和渐变 */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          key={slides[currentSlide].id}
          className="absolute inset-0 transition-opacity duration-1000"
        >
          {/* 星空背景 - 多层星星 */}
          <div className="absolute inset-0 starfield">
            {/* 大星星层 */}
            <div className="star-layer-large"></div>
            {/* 特大星星层 */}
            <div className="star-layer-xlarge"></div>
          </div>
          {/* 颜色渐变叠加 */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].color} opacity-10`}
          />
        </div>
      </div>

      {/* 内容层 - 文字和按钮 */}
      <div className="relative h-full flex items-center justify-center z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-6">
            <span className="text-5xl md:text-6xl mb-4 inline-block drop-shadow-lg">
              {slides[currentSlide].icon}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              {t(`slides.${slides[currentSlide].id}.title`)}
            </h2>
            <p className="text-lg md:text-xl text-slate-800 dark:text-gray-100 mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] dark:drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              {t(`slides.${slides[currentSlide].id}.description`)}
            </p>
            <Link
              href={`/${locale}/tech/${slides[currentSlide].id}`}
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              {t("learnMore")}
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

      {/* 左右切换箭头 */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-8 cursor-pointer top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group z-20"
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
        className="absolute right-8 cursor-pointer top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group z-20"
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

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
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
