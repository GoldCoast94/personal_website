import { useTranslations, useLocale } from 'next-intl';
import { getGsapExamples, getThreejsExamples } from '../data/examples';
import { Example } from '../types';

interface CaseShowcaseProps {
  type: 'threejs' | 'gsap';
  onExampleClick: (exampleId: string) => void;
}

export function CaseShowcase({ type, onExampleClick }: CaseShowcaseProps) {
  const t = useTranslations('tech');
  const locale = useLocale();
  const examples: Example[] = type === 'threejs' ? getThreejsExamples(locale) : getGsapExamples(locale);
  const gradientColor = type === 'threejs'
    ? 'from-green-500 to-emerald-500'
    : 'from-indigo-500 to-violet-500';
  const badgeColor = type === 'threejs'
    ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300'
    : 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300';
  const buttonColor = type === 'threejs'
    ? 'bg-green-600 hover:bg-green-700'
    : 'bg-indigo-600 hover:bg-indigo-700';

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
        {type === 'threejs' ? 'Three.js' : 'GSAP'} {t('caseShowcase')}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {examples.map((example) => (
          <div
            key={example.id}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => onExampleClick(example.id)}
          >
            <div className={`relative h-48 bg-gradient-to-br ${gradientColor} flex items-center justify-center`}>
              <div className="text-6xl">{example.icon}</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {example.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                {example.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {example.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 text-sm ${badgeColor} rounded-full`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className={`inline-flex items-center px-4 py-2 text-sm font-medium text-white ${buttonColor} rounded-lg transition-colors duration-200`}>
                {t('viewDemo')}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
