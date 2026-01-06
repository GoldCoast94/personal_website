"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { reactHooks } from "@/app/[locale]/blog/blogPosts/react-hooks";
import { nextjs15 } from "@/app/[locale]/blog/blogPosts/nextjs-15";
import { reactPerformance } from "@/app/[locale]/blog/blogPosts/react-performance";
import { typescriptAdvanced } from "@/app/[locale]/blog/blogPosts/typescript-advanced";
import type { BlogPost } from "@/app/[locale]/blog/blogPosts/types";
import MarkdownRenderer from "@/app/components/MarkdownRenderer";
import TableOfContents from "@/app/components/TableOfContents";

// 博客文章内容映射（只包含content，其他信息从翻译文件获取）
const blogPostsContent: Record<
  string,
  { content: string | Record<"zh" | "en" | "ja", string>; date: string }
> = {
  "react-hooks": { content: reactHooks.content, date: reactHooks.date },
  "nextjs-15": { content: nextjs15.content, date: nextjs15.date },
  "typescript-advanced": {
    content: typescriptAdvanced.content,
    date: typescriptAdvanced.date,
  },
  "react-performance": {
    content: reactPerformance.content,
    date: reactPerformance.date,
  },
};

export default function BlogPostPage() {
  const t = useTranslations("blog");
  const params = useParams();
  const slug = params.slug as string;
  const locale = params.locale as string;

  try {
    const postContent = blogPostsContent[slug];

    if (!postContent) {
      console.log("Post not found for slug:", slug);
      return (
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {t("notFound")}
          </h1>
        </div>
      );
    }

    // 获取当前语言的内容
    let content: string;
    if (typeof postContent.content === 'string') {
      content = postContent.content;
    } else {
      content = postContent.content[locale as 'zh' | 'en' | 'ja'] || postContent.content.zh;
    }

    // 从翻译文件获取元数据
    const postData = t.raw(`posts.${slug}`);

    return (
      <div className="h-[calc(100vh-3.5rem)] md:h-[calc(100vh-4rem)] flex">
        {/* 目录侧边栏 - 固定在左侧，仅在大屏幕显示 */}
        <aside className="hidden xl:block w-80 flex-shrink-0 h-full overflow-y-auto border-r border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/50 p-6">
          <TableOfContents content={content} />
        </aside>

        {/* 主内容区域 - 可滚动 */}
        <div id="article-container" className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
            {/* 文章头部 */}
            <header className="mb-12 text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                {postData.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm font-medium bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {postData.title}
              </h1>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <time dateTime={postContent.date} className="flex items-center">
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
                  {postContent.date}
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
                  {postData.readTime}
                </span>
              </div>
            </header>

            {/* 文章内容 */}
            <article className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8">
              <MarkdownRenderer content={content} />
            </article>

            {/* 文章底部 */}
            <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {t("lastUpdated")} {postContent.date}
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
