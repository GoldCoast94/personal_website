"use client";
import { useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

const techCategories = [
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

export default function TechPage() {
  const t = useTranslations("tech");
  const locale = useLocale();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="h-[calc(100vh-3.5rem)] md:h-[calc(100vh-4rem)] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8">
          {t("title")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {techCategories.map((tech) => (
            <Link
              key={tech.id}
              href={`/${locale}/tech/${tech.id}`}
              className="group relative"
              onMouseEnter={() => setHoveredId(tech.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`relative overflow-hidden rounded-xl p-4 md:p-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl ${
                  hoveredId === tech.id ? "shadow-2xl" : "shadow-lg"
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                />
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-4xl">{tech.icon}</span>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {t(`categories.${tech.id}.name`)}
                    </h2>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
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
