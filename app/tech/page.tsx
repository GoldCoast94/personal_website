"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const techCategories = [
  {
    id: "react",
    name: "React",
    description: "用于构建用户界面的 JavaScript 库",
    icon: "⚛️",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "css",
    name: "CSS",
    description: "层叠样式表，用于设计网页样式",
    icon: "🎨",
    color: "from-pink-500 to-purple-500",
  },
  {
    id: "javascript",
    name: "JavaScript",
    description: "轻量级的解释型编程语言",
    icon: "📜",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "threejs",
    name: "Three.js",
    description: "JavaScript 3D 库，用于创建和显示三维图形",
    icon: "🎮",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "gsap",
    name: "GSAP",
    description: "专业的 JavaScript 动画库",
    icon: "✨",
    color: "from-indigo-500 to-violet-500",
  },
];

export default function TechPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="h-[calc(100vh-3.5rem)] md:h-[calc(100vh-4rem)] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8">
          技术栈
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {techCategories.map((tech) => (
            <Link
              key={tech.id}
              href={`/tech/${tech.id}`}
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
                      {tech.name}
                    </h2>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {tech.description}
                  </p>
                  <div className="mt-4 flex items-center text-indigo-400 dark:text-indigo-400">
                    <span className="text-sm font-medium">查看详情</span>
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
