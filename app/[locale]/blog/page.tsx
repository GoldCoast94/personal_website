"use client";
import React from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

// 定义博客文章的基本信息（slug和date是固定的）
const blogPostsMetadata = [
  { slug: "react-hooks", date: "2026-01-05" },
  { slug: "nextjs-15", date: "2026-01-06" },
  { slug: "typescript-advanced", date: "2026-01-04" },
  { slug: "react-performance", date: "2026-01-03" },
];

// 为每个博客文章定义不同的渐变背景
const gradientBackgrounds = {
  "react-hooks":
    "bg-gradient-to-r from-blue-400/40 via-indigo-400/40 to-blue-400/40 dark:from-blue-500/50 dark:via-indigo-500/50 dark:to-blue-500/50",
  "nextjs-15":
    "bg-gradient-to-r from-purple-400/40 via-pink-400/40 to-purple-400/40 dark:from-purple-500/50 dark:via-pink-500/50 dark:to-purple-500/50",
  "typescript-advanced":
    "bg-gradient-to-r from-emerald-400/40 via-teal-400/40 to-emerald-400/40 dark:from-emerald-500/50 dark:via-teal-500/50 dark:to-emerald-500/50",
  "react-performance":
    "bg-gradient-to-r from-amber-400/40 via-orange-400/40 to-amber-400/40 dark:from-amber-500/50 dark:via-orange-500/50 dark:to-amber-500/50",
};

export default function BlogPage() {
  const t = useTranslations("blog");
  const locale = useLocale();

  return (
    <div className="h-[calc(100vh-3.5rem)] md:h-[calc(100vh-4rem)] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8">
          {t("title")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {blogPostsMetadata.map((post) => {
            const postData = t.raw(`posts.${post.slug}`);
            return (
              <Link
                key={post.slug}
                href={`/${locale}/blog/${post.slug}`}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  {/* 渐变背景 */}
                  <div
                    className={`absolute inset-0 ${
                      gradientBackgrounds[
                        post.slug as keyof typeof gradientBackgrounds
                      ]
                    } opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                  />

                  <div className="relative z-10 p-4 md:p-6">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                      {postData.title}
                    </h2>
                    <div className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-3 md:mb-4">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{postData.readTime}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {postData.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-2 md:px-3 py-1 bg-white/70 dark:bg-gray-700/70 text-gray-700 dark:text-gray-300 rounded-full text-xs md:text-sm backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
