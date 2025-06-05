"use client";
import Image from "next/image";
import { useState } from "react";

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  codeUrl?: string;
}

// 弹窗组件
function DemoModal({
  isOpen,
  onClose,
  title,
  description,
  demoId,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  demoId: string;
}) {
  if (!isOpen) return null;

  const renderDemo = () => {
    switch (demoId) {
      case "css-1":
        return (
          <div className="w-full bg-white dark:bg-gray-800 p-4 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <pattern
                    id="nav-pattern"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M0 10h20M10 0v20"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#nav-pattern)" />
              </svg>
            </div>
            <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg relative z-10">
              <div className="text-xl font-bold">Logo</div>
              <div className="hidden md:flex space-x-4">
                <a href="#" className="hover:text-pink-600 transition-colors">
                  首页
                </a>
                <a href="#" className="hover:text-pink-600 transition-colors">
                  关于
                </a>
                <a href="#" className="hover:text-pink-600 transition-colors">
                  服务
                </a>
                <a href="#" className="hover:text-pink-600 transition-colors">
                  联系
                </a>
              </div>
              <div className="md:hidden">
                <div className="w-6 h-6 flex flex-col justify-between cursor-pointer">
                  <span className="w-full h-0.5 bg-gray-600 dark:bg-gray-300"></span>
                  <span className="w-full h-0.5 bg-gray-600 dark:bg-gray-300"></span>
                  <span className="w-full h-0.5 bg-gray-600 dark:bg-gray-300"></span>
                </div>
              </div>
            </nav>
          </div>
        );
      case "css-2":
        return (
          <div className="w-full flex justify-center items-center p-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <pattern
                    id="card-pattern"
                    x="0"
                    y="0"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="20" cy="20" r="2" fill="currentColor" />
                    <circle cx="60" cy="20" r="2" fill="currentColor" />
                    <circle cx="20" cy="60" r="2" fill="currentColor" />
                    <circle cx="60" cy="60" r="2" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#card-pattern)" />
              </svg>
            </div>
            <div className="w-64 h-80 perspective-1000 relative z-10">
              <div className="w-full h-full relative transition-transform duration-500 transform-style-3d hover:rotate-y-180">
                <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-xl">
                  正面
                </div>
                <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl flex items-center justify-center text-white text-xl rotate-y-180">
                  背面
                </div>
              </div>
            </div>
          </div>
        );
      case "css-3":
        return (
          <div className="w-full flex flex-col items-center justify-center gap-8 p-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <pattern
                    id="loading-pattern"
                    x="0"
                    y="0"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M0 5h10M5 0v10"
                      stroke="currentColor"
                      strokeWidth="0.2"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#loading-pattern)" />
              </svg>
            </div>
            <div className="w-12 h-12 border-4 border-t-pink-500 border-gray-200 rounded-full animate-spin relative z-10"></div>
            <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden relative z-10">
              <div className="w-1/3 h-full bg-pink-500 animate-progress"></div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl w-[90vw] max-w-4xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 cursor-pointer"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
            {description}
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            {renderDemo()}
          </div>
        </div>
      </div>
    </div>
  );
}

const caseStudies: CaseStudy[] = [
  {
    id: "css-1",
    title: "响应式导航栏",
    description:
      "使用 Flexbox 和 Grid 实现的现代化响应式导航栏，支持移动端菜单和动画效果。包含汉堡菜单、下拉菜单和滚动效果。导航栏会根据屏幕尺寸自动调整布局，在移动端显示汉堡菜单，点击后展开侧边导航。支持平滑的过渡动画和交互效果。",
    image:
      "https://res.cloudinary.com/demo/image/upload/v1/samples/landscapes/nature-mountains.jpg",
    tags: ["Flexbox", "Grid", "响应式设计", "动画"],
    codeUrl: "https://github.com/example/css-nav",
  },
  {
    id: "css-2",
    title: "卡片悬停效果",
    description:
      "使用 CSS 变换和过渡效果实现的精美卡片悬停动画，包括 3D 翻转、阴影效果和渐变背景。支持多层级动画和交互反馈。卡片在鼠标悬停时会进行 3D 翻转，展示背面内容，同时添加阴影和缩放效果，提升用户体验。",
    image:
      "https://res.cloudinary.com/demo/image/upload/v1/samples/landscapes/architecture-signs.jpg",
    tags: ["Transform", "Transition", "3D 效果", "阴影"],
    codeUrl: "https://github.com/example/css-cards",
  },
  {
    id: "css-3",
    title: "加载动画",
    description:
      "使用 CSS 动画和关键帧实现的流畅加载动画，包括进度条、旋转效果和脉冲动画。支持自定义颜色和大小。动画效果包括旋转的加载图标、进度条动画和脉冲效果，可以用于提升页面加载时的用户体验。",
    image:
      "https://res.cloudinary.com/demo/image/upload/v1/samples/landscapes/beach-boat.jpg",
    tags: ["Animation", "Keyframes", "Loading", "进度条"],
    codeUrl: "https://github.com/example/css-loading",
  },
];

export default function CSSCaseStudies() {
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);
  const [imageError, setImageError] = useState<Record<string, boolean>>({});

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        案例展示
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {caseStudies.map((caseStudy) => (
          <div
            key={caseStudy.id}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48 bg-gray-100 dark:bg-gray-700">
              {!imageError[caseStudy.id] ? (
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                  onError={() =>
                    setImageError((prev) => ({ ...prev, [caseStudy.id]: true }))
                  }
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  {caseStudy.title}
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {caseStudy.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                {caseStudy.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {caseStudy.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => setSelectedDemo(caseStudy.id)}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-pink-700 transition-colors duration-200"
                >
                  查看演示
                </button>
                {caseStudy.codeUrl && (
                  <a
                    href={caseStudy.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    查看代码
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <DemoModal
        isOpen={!!selectedDemo}
        onClose={() => setSelectedDemo(null)}
        title={
          selectedDemo
            ? caseStudies.find((c) => c.id === selectedDemo)?.title || ""
            : ""
        }
        description={
          selectedDemo
            ? caseStudies.find((c) => c.id === selectedDemo)?.description || ""
            : ""
        }
        demoId={selectedDemo || ""}
      />
    </div>
  );
}
