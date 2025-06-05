"use client";
import React from "react";
import Link from "next/link";
import { reactHooks } from "./blogPosts/react-hooks";
import { nextjs13 } from "./blogPosts/nextjs-13";
import { typescriptAdvanced } from "./blogPosts/typescript-advanced";
import { reactPerformance } from "./blogPosts/react-performance";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

const blogPosts: BlogPost[] = [
  reactHooks,
  nextjs13,
  typescriptAdvanced,
  reactPerformance,
];

// 为每个博客文章定义不同的渐变背景
const gradientBackgrounds = {
  "react-hooks":
    "bg-gradient-to-r from-blue-400/40 via-indigo-400/40 to-blue-400/40 dark:from-blue-500/50 dark:via-indigo-500/50 dark:to-blue-500/50",
  "nextjs-13":
    "bg-gradient-to-r from-purple-400/40 via-pink-400/40 to-purple-400/40 dark:from-purple-500/50 dark:via-pink-500/50 dark:to-purple-500/50",
  "typescript-advanced":
    "bg-gradient-to-r from-emerald-400/40 via-teal-400/40 to-emerald-400/40 dark:from-emerald-500/50 dark:via-teal-500/50 dark:to-emerald-500/50",
  "react-performance":
    "bg-gradient-to-r from-amber-400/40 via-orange-400/40 to-amber-400/40 dark:from-amber-500/50 dark:via-orange-500/50 dark:to-amber-500/50",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          博客文章
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative block rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800"
            >
              {/* 渐变背景 */}
              <div
                className={`absolute inset-0 ${
                  gradientBackgrounds[
                    post.slug as keyof typeof gradientBackgrounds
                  ]
                } transition-colors duration-300`}
                style={{ zIndex: 0 }}
              />

              {/* 流光效果 */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                style={{ zIndex: 1 }}
              />

              {/* 内容 */}
              <div
                className="relative p-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm"
                style={{ zIndex: 2 }}
              >
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {post.title}
                </h2>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100/95 dark:bg-gray-700/95 text-gray-600 dark:text-gray-300 rounded-full text-sm backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
