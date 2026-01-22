"use client";

import React, { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

// 生成标题 ID（与 TableOfContents 保持一致）
const generateHeadingId = (text: string, index: number): string => {
  let id = text
    .toLowerCase()
    .replace(/[^\w\s\u4e00-\u9fa5-]/g, "")
    .replace(/\s+/g, "-");

  if (!id || id === "-") {
    id = `heading-${index}`;
  } else {
    id = `${id}-${index}`;
  }

  return id;
};

export default function MarkdownRenderer({
  content,
  className = "",
}: MarkdownRendererProps) {
  // 预先从 markdown 内容中提取所有标题并生成 ID
  const headingIds = useMemo(() => {
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const matches = Array.from(content.matchAll(headingRegex));

    const ids = new Map<string, string>();
    matches.forEach((match, index) => {
      const text = match[2].trim();
      const id = generateHeadingId(text, index);
      ids.set(text, id);
    });

    return ids;
  }, [content]);

  return (
    <div
      className={`prose dark:prose-invert max-w-none prose-lg markdown-content
        prose-headings:font-extrabold prose-headings:text-gray-900 dark:prose-headings:text-white
        prose-headings:scroll-mt-20 prose-headings:tracking-tight prose-headings:leading-tight
        prose-h1:text-5xl prose-h1:mb-8 prose-h1:mt-12 prose-h1:pb-4 prose-h1:border-b prose-h1:border-gray-200 dark:prose-h1:border-gray-700
        prose-h2:text-4xl prose-h2:mb-6 prose-h2:mt-12 prose-h2:pb-3 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700
        prose-h3:text-3xl prose-h3:mb-5 prose-h3:mt-10 prose-h3:font-bold
        prose-h4:text-2xl prose-h4:mb-4 prose-h4:mt-8 prose-h4:font-bold
        prose-h5:text-xl prose-h5:mb-3 prose-h5:mt-6 prose-h5:font-semibold
        prose-h6:text-lg prose-h6:mb-3 prose-h6:mt-6 prose-h6:font-semibold
        prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-5 prose-p:text-base
        prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline prose-a:font-medium
        prose-code:text-pink-600 dark:prose-code:text-pink-400 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-code:font-semibold prose-code:text-sm
        prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900 prose-pre:p-5 prose-pre:rounded-xl prose-pre:overflow-x-auto prose-pre:my-6
        prose-pre:border prose-pre:border-gray-300 dark:prose-pre:border-gray-700 prose-pre:shadow-sm
        prose-ul:list-disc prose-ul:ml-6 prose-ul:mb-5 prose-ul:space-y-2
        prose-ol:list-decimal prose-ol:ml-6 prose-ol:mb-5 prose-ol:space-y-2
        prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:leading-relaxed
        prose-blockquote:border-l-4 prose-blockquote:border-indigo-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-400 prose-blockquote:my-6 prose-blockquote:py-2
        prose-table:border-collapse prose-table:w-full prose-table:my-6
        prose-th:bg-gray-100 dark:prose-th:bg-gray-800 prose-th:p-3 prose-th:border prose-th:border-gray-300 dark:prose-th:border-gray-700 prose-th:font-bold
        prose-td:p-3 prose-td:border prose-td:border-gray-300 dark:prose-td:border-gray-700
        prose-img:rounded-lg prose-img:shadow-lg prose-img:my-6
        prose-hr:border-gray-300 dark:prose-hr:border-gray-700 prose-hr:my-10
        prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-bold
        ${className}`}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
        components={{
          h1({ children, ...props }) {
            const text = children?.toString() || "";
            const id = headingIds.get(text);
            return (
              <h1 id={id} {...props}>
                {children}
              </h1>
            );
          },
          h2({ children, ...props }) {
            const text = children?.toString() || "";
            const id = headingIds.get(text);
            return (
              <h2 id={id} {...props}>
                {children}
              </h2>
            );
          },
          h3({ children, ...props }) {
            const text = children?.toString() || "";
            const id = headingIds.get(text);
            return (
              <h3 id={id} {...props}>
                {children}
              </h3>
            );
          },
          h4({ children, ...props }) {
            const text = children?.toString() || "";
            const id = headingIds.get(text);
            return (
              <h4 id={id} {...props}>
                {children}
              </h4>
            );
          },
          h5({ children, ...props }) {
            const text = children?.toString() || "";
            const id = headingIds.get(text);
            return (
              <h5 id={id} {...props}>
                {children}
              </h5>
            );
          },
          h6({ children, ...props }) {
            const text = children?.toString() || "";
            const id = headingIds.get(text);
            return (
              <h6 id={id} {...props}>
                {children}
              </h6>
            );
          },
          a({ children, href, ...props }) {
            return (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                {...props}
              >
                {children}
              </a>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
