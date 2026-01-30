"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { GoDocsSidebar } from "../[techId]/components/GoDocsSidebar";
import { GoDocsContent } from "../[techId]/components/GoDocsContent";
import {
  getAllJavaScriptChapters,
  getJavaScriptSectionById,
  getJavaScriptPreviousSection,
  getJavaScriptNextSection,
} from "../[techId]/data/javascript-docs";
import "../[techId]/docs-styles.css";

export default function JavaScriptDocsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const t = useTranslations("javascriptDocs");
  const [activeSection, setActiveSection] = useState<string>("1-1-1");

  // 性能优化：缓存章节数据
  const chapters = useMemo(() => getAllJavaScriptChapters(), []);

  // 从 URL 参数读取选中的小节
  useEffect(() => {
    const sectionParam = searchParams.get("section");
    if (sectionParam) {
      setActiveSection(sectionParam);
    } else {
      // 默认选择第一个小节
      router.replace("?section=1-1-1", { scroll: false });
    }
  }, [searchParams, router]);

  // 处理小节点击
  const handleSectionClick = useCallback(
    (sectionId: string) => {
      setActiveSection(sectionId);
      router.push(`?section=${sectionId}`, { scroll: false });
    },
    [router],
  );

  // 性能优化：使用 useMemo 缓存当前小节和导航信息
  const currentData = useMemo(() => getJavaScriptSectionById(activeSection), [activeSection]);
  const previousSection = useMemo(() => getJavaScriptPreviousSection(activeSection), [activeSection]);
  const nextSection = useMemo(() => getJavaScriptNextSection(activeSection), [activeSection]);

  // 导航到上一节
  const handlePrevious = useCallback(() => {
    const prev = getJavaScriptPreviousSection(activeSection);
    if (prev) {
      handleSectionClick(prev.section.id);
      // 滚动到顶部
      setTimeout(() => {
        const contentArea = document.querySelector(".overflow-y-auto");
        if (contentArea) {
          contentArea.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 50);
    }
  }, [activeSection, handleSectionClick]);

  // 导航到下一节
  const handleNext = useCallback(() => {
    const next = getJavaScriptNextSection(activeSection);
    if (next) {
      handleSectionClick(next.section.id);
      // 滚动到顶部
      setTimeout(() => {
        const contentArea = document.querySelector(".overflow-y-auto");
        if (contentArea) {
          contentArea.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 50);
    }
  }, [activeSection, handleSectionClick]);

  // 键盘快捷键支持
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 如果正在输入,不触发快捷键
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrevious, handleNext]); // 依赖导航函数

  return (
    <div className="h-[calc(100vh-3.5rem)] md:h-[calc(100vh-4rem)] overflow-hidden">
      <div className="h-full flex flex-col">
        {/* 顶部标题栏 */}
        <div className="flex-shrink-0 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <Link
              href="/tech"
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-200 mb-4 group"
            >
              <svg
                className="w-5 h-5 mr-2 transform -rotate-180 group-hover:-translate-x-1 transition-transform duration-300"
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
              {t("backToTech")}
            </Link>

            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-lg bg-white flex items-center justify-center p-2.5 shadow-sm">
                <img
                  src="/images/javascript-logo.svg"
                  alt="JavaScript"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="flex items-center space-x-4">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {t("title")}
                  </h1>
                  <a
                    href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline flex items-center"
                  >
                    {t("officialDocs")}
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-1 text-sm md:text-base">
                  {t("subtitle")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 主要内容区域:左侧导航 + 右侧内容 */}
        <div className="flex-1 flex overflow-hidden">
          {/* 左侧导航 */}
          <GoDocsSidebar
            chapters={chapters}
            activeSection={activeSection}
            onSectionClick={handleSectionClick}
            namespace="javascriptDocs"
          />

          {/* 右侧内容 */}
          <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-full">
            <div className="px-6 md:px-8 py-8">
              <GoDocsContent
                chapter={currentData?.chapter}
                section={currentData?.section}
                onPrevious={handlePrevious}
                onNext={handleNext}
                hasPrevious={!!previousSection}
                hasNext={!!nextSection}
                namespace="javascriptDocs"
                chaptersPath="javascript-chapters-i18n"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
