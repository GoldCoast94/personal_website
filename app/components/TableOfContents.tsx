"use client";

import React, { useState, useEffect, useRef } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const scrollContainerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // 找到滚动容器（文章内容的滚动容器）
    const findScrollContainer = () => {
      // 优先查找带有 id 的文章容器
      const container = document.getElementById('article-container') as HTMLElement;
      scrollContainerRef.current = container || document.documentElement;
    };

    findScrollContainer();
  }, []);

  useEffect(() => {
    // 从 markdown 内容中提取标题
    const extractHeadings = () => {
      const headingRegex = /^(#{1,6})\s+(.+)$/gm;
      const matches = Array.from(content.matchAll(headingRegex));

      const extracted = matches.map((match, index) => {
        const level = match[1].length;
        const text = match[2].trim();
        // 生成 ID：移除特殊字符，转小写，空格替换为连字符
        let id = text
          .toLowerCase()
          .replace(/[^\w\s\u4e00-\u9fa5-]/g, "")
          .replace(/\s+/g, "-");

        // 如果 ID 为空或只有连字符，使用索引作为后缀
        if (!id || id === "-") {
          id = `heading-${index}`;
        } else {
          // 添加索引确保唯一性
          id = `${id}-${index}`;
        }

        return { id, text, level };
      });

      setHeadings(extracted);
    };

    extractHeadings();
  }, [content]);

  useEffect(() => {
    if (!scrollContainerRef.current) return;

    // 监听滚动，高亮当前章节
    const handleScroll = () => {
      const headingElements = headings.map((heading) =>
        document.getElementById(heading.id)
      );

      // 找到当前在视窗中的标题
      let currentHeading: HTMLElement | null = null;
      let minDistance = Infinity;

      headingElements.forEach((element) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top - 100);

          // 找到距离顶部最近的标题
          if (rect.top <= 200 && distance < minDistance) {
            minDistance = distance;
            currentHeading = element;
          }
        }
      });

      if (currentHeading) {
        setActiveId(currentHeading.id);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });

    // 初始化时也执行一次
    handleScroll();

    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, [headings]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    const scrollContainer = scrollContainerRef.current;

    if (element && scrollContainer) {
      // 获取元素相对于滚动容器的位置
      const containerRect = scrollContainer.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();

      // 计算需要滚动的距离
      const scrollTop = scrollContainer.scrollTop;
      const targetPosition = scrollTop + elementRect.top - containerRect.top - 100;

      scrollContainer.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      setActiveId(id);
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className="w-full">
      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-6 uppercase tracking-wide flex items-center gap-2">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
        目录
      </h3>
      <ul className="space-y-1">
        {headings.map((heading) => {
          const isActive = activeId === heading.id;
          const indent = (heading.level - 1) * 16;

          return (
            <li key={heading.id} style={{ marginLeft: `${indent}px` }}>
              <button
                onClick={() => handleClick(heading.id)}
                className={`
                  text-left w-full text-sm py-2 px-3 rounded-lg transition-all duration-200
                  hover:bg-indigo-50 dark:hover:bg-indigo-900/30
                  border-l-2 transition-all
                  ${
                    isActive
                      ? "text-indigo-600 dark:text-indigo-400 font-semibold bg-indigo-50/50 dark:bg-indigo-900/20 border-indigo-500 dark:border-indigo-400"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 border-transparent"
                  }
                  ${heading.level === 1 ? "font-bold text-base" : ""}
                  ${heading.level === 2 ? "font-semibold" : ""}
                `}
                title={heading.text}
              >
                <span className="line-clamp-2 block">{heading.text}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
