"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const languages = [
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
];

export default function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [currentLang, setCurrentLang] = useState("zh");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    // 从路径中提取当前语言
    const pathLang = pathname.split("/")[1];
    if (["zh", "en", "ja"].includes(pathLang)) {
      setCurrentLang(pathLang);
    } else {
      setCurrentLang("zh");
    }
  }, [pathname]);

  if (!mounted) return null;

  const handleLanguageChange = (langCode: string) => {
    // 移除当前语言前缀
    const currentPathLang = pathname.split("/")[1];
    let newPath = pathname;

    if (["zh", "en", "ja"].includes(currentPathLang)) {
      // 如果路径包含语言前缀，替换它
      newPath = pathname.replace(`/${currentPathLang}`, `/${langCode}`);
    } else {
      // 如果路径不包含语言前缀，添加它
      newPath = `/${langCode}${pathname}`;
    }

    setIsOpen(false);
    router.push(newPath);
  };

  const currentLanguage = languages.find((lang) => lang.code === currentLang) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          h-10 px-2 rounded-lg transition-all duration-300
          bg-white dark:bg-gray-800
          hover:bg-gray-50 dark:hover:bg-gray-700
          border-2 border-gray-300 dark:border-gray-600
          text-gray-800 dark:text-gray-200
          shadow-sm hover:shadow-md
          focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500
          cursor-pointer
          flex items-center justify-center space-x-1
        `}
        aria-label="Toggle language"
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* 下拉菜单 */}
      {isOpen && (
        <>
          {/* 点击外部关闭 */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-2 border-gray-300 dark:border-gray-600 overflow-hidden z-20">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`
                  w-full px-4 py-2 text-left flex items-center space-x-2
                  transition-colors duration-200
                  ${
                    currentLang === lang.code
                      ? "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200"
                  }
                `}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
