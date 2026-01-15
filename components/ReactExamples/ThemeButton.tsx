import React, { useState, createContext, useContext } from "react";
import { useTranslations } from 'next-intl';
import { Modal } from "./Modal";
import { CodeBlock } from "./CodeBlock";

const commonCardStyles =
  "relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between hover:scale-[1.02] group overflow-hidden";

const overlayStyles =
  "absolute inset-0 bg-white/30 dark:bg-white/20 backdrop-blur-sm transition-all duration-500 scale-150 group-hover:scale-0 bg-[url('/noise.svg')] bg-repeat rounded-[inherit]";

const contentStyles = "relative z-10 text-gray-900 dark:text-white";

// 创建主题上下文
type Theme = "light" | "dark";
const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: "light",
  toggleTheme: () => {},
});

// 主题提供者组件
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`h-full ${theme === "dark" ? "dark" : ""}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// 主题切换按钮组件
export const ThemeButton: React.FC = () => {
  const t = useTranslations('examples');
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const code = `// 创建主题上下文
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

// 主题提供者组件
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === 'dark' ? 'dark' : ''}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// 使用主题的组件
const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      当前主题: {theme}
    </button>
  );
};`;

  return (
    <>
      <div className={commonCardStyles} onClick={() => setIsModalOpen(true)}>
        <div className={overlayStyles} />
        <div className={contentStyles}>
          <h3 className="text-lg font-semibold mb-4">{t('themeButton.title')}</h3>
          <div className="flex flex-col items-center gap-4">
            <p className="text-gray-600 dark:text-gray-300">{t('clickToView')}</p>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={t('themeButton.modalTitle')}
      >
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {t('functionalDescription')}
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              {t('themeButton.description')}
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
              <div className="flex flex-col items-center gap-4">
                <button
                  onClick={toggleTheme}
                  className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors"
                >
                  {t('themeButton.toggleTheme')}
                </button>
                <div className="text-center">
                  <p className="text-gray-600 dark:text-gray-300">
                    {t('themeButton.currentTheme', { theme })}
                  </p>
                  <div className="mt-2 p-4 bg-gray-100 dark:bg-gray-700 rounded">
                    <p className="text-gray-900 dark:text-white">
                      {t('themeButton.sampleContent')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {t('keyPoints')}
            </h4>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>{t('themeButton.key1')}</li>
              <li>{t('themeButton.key2')}</li>
              <li>{t('themeButton.key3')}</li>
              <li>{t('themeButton.key4')}</li>
            </ul>
          </div>
        </div>
      </Modal>
    </>
  );
};
