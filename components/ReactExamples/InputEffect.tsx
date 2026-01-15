import React, { useState, useEffect } from "react";
import { useTranslations } from 'next-intl';
import { Modal } from "./Modal";
import { CodeBlock } from "./CodeBlock";

const commonCardStyles =
  "relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between hover:scale-[1.02] group overflow-hidden";

const overlayStyles =
  "absolute inset-0 bg-white/30 dark:bg-white/20 backdrop-blur-sm transition-all duration-500 scale-150 group-hover:scale-0 bg-[url('/noise.svg')] bg-repeat rounded-[inherit]";

const contentStyles = "relative z-10";

export const InputEffect: React.FC = () => {
  const t = useTranslations('examples');
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setCount(input.length);
  }, [input]);

  const code = `const InputEffect = () => {
  const [input, setInput] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(input.length);
  }, [input]);

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>字符数: {count}</p>
    </div>
  );
};`;

  return (
    <>
      <div className={commonCardStyles} onClick={() => setIsModalOpen(true)}>
        <div className={overlayStyles} />
        <div className={contentStyles}>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            {t('inputEffect.title')}
          </h3>
          <div className="flex flex-col items-center gap-4">
            <p className="text-gray-600 dark:text-gray-300">{t('clickToView')}</p>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={t('inputEffect.modalTitle')}
      >
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {t('functionalDescription')}
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              {t('inputEffect.description')}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {t('codeImplementation')}
            </h4>
            <CodeBlock code={code} />
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {t('liveDemo')}
            </h4>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                  placeholder={t('inputEffect.placeholder')}
                />
                <p className="text-gray-600 dark:text-gray-300">
                  {t('inputEffect.charCount', { count })}
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {t('keyPoints')}
            </h4>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>{t('inputEffect.key1')}</li>
              <li>{t('inputEffect.key2')}</li>
              <li>{t('inputEffect.key3')}</li>
            </ul>
          </div>
        </div>
      </Modal>
    </>
  );
};
