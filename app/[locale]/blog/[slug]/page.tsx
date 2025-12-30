"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { reactHooks } from "@/app/[locale]/blog/blogPosts/react-hooks";
import { nextjs13 } from "@/app/[locale]/blog/blogPosts/nextjs-13";
import { reactPerformance } from "@/app/[locale]/blog/blogPosts/react-performance";
import { typescriptAdvanced } from "@/app/[locale]/blog/blogPosts/typescript-advanced";
import type { BlogPost } from "@/app/[locale]/blog/blogPosts/types";

const blogPosts: BlogPost[] = [
  reactHooks,
  nextjs13,
  typescriptAdvanced,
  reactPerformance,
];

export default function BlogPostPage() {
  const t = useTranslations("blog");
  const params = useParams();
  const slug = params.slug as string;

  try {
    const post = blogPosts.find((p) => {
      console.log("Comparing:", { current: p.slug, target: slug });
      return p.slug === slug;
    });

    if (!post) {
      console.log("Post not found for slug:", slug);
      return (
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {t("notFound")}
          </h1>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* 文章头部 */}
          <header className="mb-12 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-medium bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <time dateTime={post.date} className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {post.date}
              </time>
              <span className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {post.readTime}
              </span>
            </div>
          </header>

          {/* 文章内容 */}
          <article className="prose dark:prose-invert max-w-none prose-lg">
            <div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* 文章底部 */}
          <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {t("lastUpdated")} {post.date}
              </div>
              <div className="flex items-center gap-4">
                <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
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
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </button>
                <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error rendering blog post:", error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {t("loadError")}
        </h1>
      </div>
    );
  }
}
