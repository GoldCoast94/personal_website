"use client";
import { useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

const techCategories = [
  {
    id: "react",
    icon: "/images/react-logo.svg",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "css",
    icon: "/images/css-logo.svg",
    color: "from-pink-500 to-purple-500",
  },
  {
    id: "javascript",
    icon: "/images/javascript-logo.svg",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "threejs",
    icon: "/images/threejs-logo.png",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "gsap",
    icon: "/images/gsap-logo.png",
    color: "from-indigo-500 to-violet-500",
  },
  {
    id: "go",
    icon: "/images/go-gopher.png",
    color: "from-cyan-500 to-blue-600",
  },
];

export default function TechPage() {
  const t = useTranslations("tech");
  const locale = useLocale();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="h-[calc(100vh-3.5rem)] md:h-[calc(100vh-4rem)] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-120%) translateY(-120%) rotate(30deg);
          }
          100% {
            transform: translateX(120%) translateY(120%) rotate(30deg);
          }
        }
        .shimmer-effect {
          animation: shimmer 0.8s ease-out;
          opacity: 1;
        }
        .shimmer-layer {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 25%,
            rgba(255, 255, 255, 0.5) 50%,
            rgba(255, 255, 255, 0.1) 75%,
            transparent 100%
          );
          transition: opacity 0s;
        }
        .dark .shimmer-layer {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.08) 25%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0.08) 75%,
            transparent 100%
          );
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8">
          {t("title")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-fr">
          {techCategories.map((tech) => (
            <Link
              key={tech.id}
              href={tech.id === 'go' ? `/${locale}/tech/go-docs` : `/${locale}/tech/${tech.id}`}
              className="group relative h-full"
              onMouseEnter={() => setHoveredId(tech.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`relative overflow-hidden rounded-xl p-4 md:p-6 h-full min-h-[200px] flex flex-col transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl ${
                  hoveredId === tech.id ? "shadow-2xl" : "shadow-lg"
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                />
                {/* 流光效果 */}
                <div
                  className={`absolute inset-0 pointer-events-none shimmer-layer ${
                    hoveredId === tech.id ? 'shimmer-effect' : 'opacity-0'
                  }`}
                  style={{
                    width: '200%',
                    height: '200%',
                  }}
                />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center space-x-4 mb-4">
                    {(tech.icon.startsWith('http') || tech.icon.startsWith('/')) ? (
                      <div className="w-12 h-12 rounded-lg bg-white dark:bg-gray-100 flex items-center justify-center p-2 shadow-sm">
                        <img
                          src={tech.icon}
                          alt={tech.id}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <span className="text-4xl">{tech.icon}</span>
                    )}
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {t(`categories.${tech.id}.name`)}
                    </h2>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-3 flex-grow">
                    {t(`categories.${tech.id}.description`)}
                  </p>
                  <div className="mt-4 flex items-center text-indigo-400 dark:text-indigo-400">
                    <span className="text-sm font-medium">{t("viewDetails")}</span>
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
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
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
