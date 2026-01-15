import { useTranslations } from 'next-intl';
import { NavItem } from '../types';
import { CodeBlock } from '@/components/Gsap/CodeBlock';
import CSSCaseStudies from '@/components/CSSCaseStudies';
import ReactExamples from '@/components/ReactExamples';
import { CaseShowcase } from './CaseShowcase';

interface TechContentProps {
  currentItem: NavItem | undefined;
  selectedSection: string;
  techId: string;
  onExampleClick: (exampleId: string) => void;
}

export function TechContent({ currentItem, selectedSection, techId, onExampleClick }: TechContentProps) {
  const t = useTranslations('tech');

  if (!currentItem) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500 dark:text-gray-400">
          {t('selectTopic')}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* 面包屑导航 */}
      <div className="text-sm text-gray-500 dark:text-gray-400">
        {selectedSection} / {currentItem.name}
      </div>

      {/* 标题 */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {currentItem.name}
        </h2>
        <a
          href={currentItem.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline text-sm"
        >
          {t('officialDocs')}
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

      {/* 简短描述 */}
      {currentItem.description && (
        <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {currentItem.description}
          </p>
        </div>
      )}

      {/* 详细内容 */}
      {currentItem.content && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {t('detailDescription')}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {currentItem.content}
          </p>
        </div>
      )}

      {/* 代码示例 */}
      {currentItem.codeExample && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {t('codeExample')}
          </h3>
          <CodeBlock code={currentItem.codeExample} />
        </div>
      )}

      {/* 实际案例 */}
      {currentItem.cases && currentItem.cases.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {t('actualCases')}
          </h3>
          {currentItem.cases.map((caseItem, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {caseItem.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {caseItem.description}
              </p>
              {caseItem.code && (
                <CodeBlock code={caseItem.code} />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Three.js 案例展示 */}
      {techId === "threejs" && currentItem.id === "threejs-examples" && (
        <CaseShowcase type="threejs" onExampleClick={onExampleClick} />
      )}

      {/* GSAP 案例展示 */}
      {techId === "gsap" && currentItem.id === "gsap-examples" && (
        <CaseShowcase type="gsap" onExampleClick={onExampleClick} />
      )}

      {/* CSS 案例展示 */}
      {techId === "css" && currentItem.id === "css-examples" && (
        <div className="mt-8">
          <CSSCaseStudies />
        </div>
      )}

      {/* React 案例展示 */}
      {techId === "react" && currentItem.id === "react-examples" && (
        <div className="mt-8">
          <ReactExamples />
        </div>
      )}
    </div>
  );
}
