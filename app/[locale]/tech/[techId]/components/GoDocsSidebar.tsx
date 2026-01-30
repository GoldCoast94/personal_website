"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Chapter } from '../data/go-docs';

interface GoDocsSidebarProps {
  chapters: Chapter[];
  activeSection: string;
  onSectionClick: (sectionId: string, chapterId: string) => void;
  namespace?: string; // 翻译命名空间，默认为 'goDocs'
}

export function GoDocsSidebar({ chapters, activeSection, onSectionClick, namespace = 'goDocs' }: GoDocsSidebarProps) {
  const t = useTranslations(namespace);
  const [expandedChapters, setExpandedChapters] = useState<Set<string>>(new Set(['01']));

  const toggleChapter = (chapterId: string) => {
    setExpandedChapters(prev => {
      const newSet = new Set(prev);
      if (newSet.has(chapterId)) {
        newSet.delete(chapterId);
      } else {
        newSet.add(chapterId);
      }
      return newSet;
    });
  };

  return (
    <div className="w-80 flex-shrink-0 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
          {t('tutorial')}
        </h2>

        <nav className="space-y-1">
          {chapters.map((chapter) => {
            const isExpanded = expandedChapters.has(chapter.id);
            const hasActiveSections = chapter.sections.some(s => s.id === activeSection);

            return (
              <div key={chapter.id} className="space-y-1">
                {/* 章节标题 */}
                <button
                  onClick={() => toggleChapter(chapter.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    hasActiveSections
                      ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <span className="flex items-center">
                    <span className="mr-2">{chapter.id}.</span>
                    <span>{t(`chapters.${chapter.id}`)}</span>
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
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

                {/* 小节列表 */}
                {isExpanded && chapter.sections.length > 0 && (
                  <div className="ml-4 space-y-1 border-l border-gray-200 dark:border-gray-700 pl-2">
                    {chapter.sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => onSectionClick(section.id, chapter.id)}
                        className={`w-full text-left px-3 py-1.5 text-sm rounded-lg transition-colors ${
                          activeSection === section.id
                            ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-medium'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                        }`}
                      >
                        <span className="text-xs text-gray-500 dark:text-gray-500 mr-2">
                          {section.section}
                        </span>
                        {t(`sections.${section.id}`)}
                      </button>
                    ))}
                  </div>
                )}

                {/* 空章节提示 */}
                {isExpanded && chapter.sections.length === 0 && (
                  <div className="ml-4 px-3 py-2 text-xs text-gray-400 dark:text-gray-600">
                    {t('comingSoon')}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
