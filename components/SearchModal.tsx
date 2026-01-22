"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useRouter } from "@/i18n/navigation";

interface SearchResult {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  matchType: "title" | "tag" | "content";
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// 博客文章元数据
const blogPostsMetadata = [
  { slug: "react-hooks", date: "2026-01-05" },
  { slug: "nextjs-15", date: "2026-01-06" },
  { slug: "typescript-advanced", date: "2026-01-04" },
  { slug: "react-performance", date: "2026-01-03" },
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const t = useTranslations("blog");
  const searchT = useTranslations("search");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  // 搜索逻辑
  const performSearch = useCallback(
    (searchQuery: string) => {
      if (!searchQuery.trim()) {
        setResults([]);
        return;
      }

      const lowerQuery = searchQuery.toLowerCase();
      const searchResults: SearchResult[] = [];

      blogPostsMetadata.forEach((post) => {
        const postData = t.raw(`posts.${post.slug}`);
        const title = postData.title.toLowerCase();
        const tags = postData.tags.map((tag: string) => tag.toLowerCase());

        let matchType: "title" | "tag" | "content" | null = null;

        // 标题匹配（最高优先级）
        if (title.includes(lowerQuery)) {
          matchType = "title";
        }
        // 标签匹配
        else if (tags.some((tag: string) => tag.includes(lowerQuery))) {
          matchType = "tag";
        }

        if (matchType) {
          searchResults.push({
            slug: post.slug,
            title: postData.title,
            date: post.date,
            readTime: postData.readTime,
            tags: postData.tags,
            matchType,
          });
        }
      });

      setResults(searchResults);
      setSelectedIndex(0);
    },
    [t]
  );

  // 处理输入变化
  useEffect(() => {
    const timer = setTimeout(() => {
      performSearch(query);
    }, 150); // 防抖

    return () => clearTimeout(timer);
  }, [query, performSearch]);

  // 键盘导航
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!results.length) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % results.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
      } else if (e.key === "Enter" && results[selectedIndex]) {
        e.preventDefault();
        router.push(`/blog/${results[selectedIndex].slug}`);
        onClose();
      } else if (e.key === "Escape") {
        onClose();
      }
    },
    [results, selectedIndex, router, onClose]
  );

  // 关闭时重置状态
  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      setResults([]);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // ESC键关闭
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 搜索框 */}
        <div className="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-gray-700">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={searchT("placeholder")}
            className="flex-1 bg-transparent border-none outline-none text-gray-900 dark:text-gray-100 text-lg placeholder-gray-400"
            autoFocus
          />
          <kbd className="hidden sm:inline-block px-2 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded">
            ESC
          </kbd>
        </div>

        {/* 搜索结果 */}
        <div className="max-h-[60vh] overflow-y-auto">
          {query && results.length === 0 ? (
            <div className="p-8 text-center text-gray-500 dark:text-gray-400">
              {searchT("noResults")}
            </div>
          ) : results.length > 0 ? (
            <div className="p-2">
              {results.map((result, index) => (
                <Link
                  key={result.slug}
                  href={`/blog/${result.slug}`}
                  onClick={onClose}
                  className={`block p-4 rounded-lg transition-colors ${
                    index === selectedIndex
                      ? "bg-indigo-50 dark:bg-indigo-900/30"
                      : "hover:bg-gray-50 dark:hover:bg-gray-700/50"
                  }`}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 truncate">
                        {result.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <span>{result.date}</span>
                        <span>•</span>
                        <span>{result.readTime}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {result.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    {index === selectedIndex && (
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <kbd className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">
                          ↵
                        </kbd>
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center">
              <div className="text-gray-400 dark:text-gray-500 mb-2">
                <svg
                  className="w-16 h-16 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <p className="text-gray-500 dark:text-gray-400">{searchT("hint")}</p>
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-400">
                <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">↑</kbd>
                <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">↓</kbd>
                <span>{searchT("navigation")}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
