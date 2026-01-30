"use client";

import { Suspense, lazy } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Chapter, Section } from '../data/go-docs';

interface GoDocsContentProps {
  chapter: Chapter | undefined;
  section: Section | undefined;
  onPrevious?: () => void;
  onNext?: () => void;
  hasPrevious?: boolean;
  hasNext?: boolean;
  namespace?: string; // 翻译命名空间，默认为 'goDocs'
  chaptersPath?: string; // 章节文件路径，默认为 'go-chapters-i18n'
}

// 动态导入章节组件
const loadSectionComponent = (locale: string, chapterPath: string, componentName: string, errorMessage: string, chaptersBasePath: string = 'go-chapters-i18n') => {
  // 支持的语言，默认为中文
  const supportedLocales = ['zh', 'en', 'ja'];
  const normalizedLocale = supportedLocales.includes(locale) ? locale : 'zh';

  return lazy(() =>
    import(`../data/${chaptersBasePath}/${normalizedLocale}/${chapterPath}/${componentName}.tsx`)
      .then((mod) => ({ default: mod.default }))
      .catch((err) => {
        console.error(`Failed to load component: ${normalizedLocale}/${chapterPath}/${componentName}`, err);
        // 如果加载失败且不是中文，尝试加载中文版本作为后备
        if (normalizedLocale !== 'zh') {
          return import(`../data/${chaptersBasePath}/zh/${chapterPath}/${componentName}.tsx`)
            .then((mod) => ({ default: mod.default }))
            .catch(() => ({ default: () => <div className="text-red-600 dark:text-red-400">{errorMessage}</div> }));
        }
        return { default: () => <div className="text-red-600 dark:text-red-400">{errorMessage}</div> };
      })
  );
};

export function GoDocsContent({ chapter, section, onPrevious, onNext, hasPrevious, hasNext, namespace = 'goDocs', chaptersPath = 'go-chapters-i18n' }: GoDocsContentProps) {
  const t = useTranslations(namespace);
  const locale = useLocale();

  if (!chapter || !section) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="text-6xl mb-4">📚</div>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            {t('selectSection')}
          </p>
        </div>
      </div>
    );
  }

  const SectionComponent = loadSectionComponent(locale, chapter.path, section.component, t('loadError'), chaptersPath);

  return (
    <div className="max-w-4xl mx-auto">
      {/* 面包屑导航 */}
      <div className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <span>{chapter.id}. {t(`chapters.${chapter.id}`)}</span>
        <span className="mx-2">/</span>
        <span className="text-gray-700 dark:text-gray-300 font-medium">
          {section.section} {t(`sections.${section.id}`)}
        </span>
      </div>

      {/* 章节内容 */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <Suspense fallback={
          <div className="flex items-center justify-center py-12">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-500 dark:text-gray-400">{t('loading')}</p>
            </div>
          </div>
        }>
          <article className="prose prose-slate dark:prose-invert max-w-none
            prose-headings:text-gray-900 dark:prose-headings:text-white
            prose-p:text-gray-700 dark:prose-p:text-gray-300
            prose-a:text-indigo-600 dark:prose-a:text-indigo-400
            prose-strong:text-gray-900 dark:prose-strong:text-white
            prose-code:text-indigo-600 dark:prose-code:text-indigo-400
            prose-code:bg-gray-100 dark:prose-code:bg-gray-800
            prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-gray-900 dark:prose-pre:bg-gray-950
            prose-pre:text-gray-100
            prose-ul:text-gray-700 dark:prose-ul:text-gray-300
            prose-ol:text-gray-700 dark:prose-ol:text-gray-300
            prose-li:text-gray-700 dark:prose-li:text-gray-300
          ">
            <SectionComponent />
          </article>
        </Suspense>
      </div>

      {/* 导航按钮 */}
      <div className="mt-8 flex justify-between items-center">
        <button
          className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            hasPrevious
              ? 'text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
              : 'text-gray-400 dark:text-gray-600 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 cursor-not-allowed'
          }`}
          onClick={onPrevious}
          disabled={!hasPrevious}
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          {t('previousSection')}
        </button>

        <button
          className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            hasNext
              ? 'text-white bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600'
              : 'text-gray-400 dark:text-gray-600 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 cursor-not-allowed'
          }`}
          onClick={onNext}
          disabled={!hasNext}
        >
          {t('nextSection')}
          <svg
            className="w-4 h-4 ml-2"
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
        </button>
      </div>
    </div>
  );
}
