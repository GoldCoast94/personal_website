"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderStyle, setSliderStyle] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname(); // 这个 pathname 已经不包含语言前缀了

  const isActive = useCallback(
    (path: string) => {
      // pathname 已经是去除语言前缀后的路径
      if (path === "/") return pathname === "/";
      // 对于其他路径，检查是否以该路径开头（支持子路径）
      return pathname.startsWith(path);
    },
    [pathname]
  );

  useEffect(() => {
    const paths = ["/", "/tech", "/blog", "/about"];
    const index = paths.findIndex((path) => isActive(path));
    if (index !== -1) {
      setActiveIndex(index);
    }
  }, [isActive]);

  useEffect(() => {
    if (navRef.current) {
      const navItems = navRef.current.children;
      const activeItem = navItems[activeIndex] as HTMLElement;
      if (activeItem) {
        const { offsetLeft, offsetWidth } = activeItem;
        setSliderStyle({
          transform: `translateX(${offsetLeft}px)`,
          width: `${offsetWidth}px`,
        });
      }
    }
  }, [activeIndex, pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#1e1e2f]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className={`text-lg font-semibold transition-colors duration-300 ease-in-out ${
                isActive("/")
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-gray-900 dark:text-gray-100 hover:text-indigo-500 dark:hover:text-indigo-400"
              }`}
            >
              {t("brandName")}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div
            className="hidden md:flex items-center space-x-8 relative"
            ref={navRef}
          >
            <Link
              href="/"
              className={`text-lg font-semibold relative transition-colors duration-300 ease-in-out ${
                isActive("/")
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-gray-900 dark:text-gray-100 hover:text-indigo-500 dark:hover:text-indigo-400"
              }`}
            >
              {t("home")}
            </Link>
            <Link
              href="/tech"
              className={`text-lg font-semibold relative transition-colors duration-300 ease-in-out ${
                isActive("/tech")
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-gray-900 dark:text-gray-100 hover:text-indigo-500 dark:hover:text-indigo-400"
              }`}
            >
              {t("tech")}
            </Link>
            <Link
              href="/blog"
              className={`text-lg font-semibold relative transition-colors duration-300 ease-in-out ${
                isActive("/blog")
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-gray-900 dark:text-gray-100 hover:text-indigo-500 dark:hover:text-indigo-400"
              }`}
            >
              {t("blog")}
            </Link>
            <Link
              href="/about"
              className={`text-lg font-semibold relative transition-colors duration-300 ease-in-out ${
                isActive("/about")
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-gray-900 dark:text-gray-100 hover:text-indigo-500 dark:hover:text-indigo-400"
              }`}
            >
              {t("about")}
            </Link>
            <div
              className="absolute bottom-0 left-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 ease-in-out"
              style={sliderStyle}
            />
          </div>

          {/* Mobile Menu Button, Language Toggle and Theme Toggle */}
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden h-10 w-10 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-48 opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="py-2 space-y-1">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 ${
                isActive("/")
                  ? "bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400"
                  : ""
              }`}
            >
              {t("home")}
            </Link>
            <Link
              href="/tech"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 ${
                isActive("/tech")
                  ? "bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400"
                  : ""
              }`}
            >
              {t("tech")}
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 ${
                isActive("/blog")
                  ? "bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400"
                  : ""
              }`}
            >
              {t("blog")}
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 ${
                isActive("/about")
                  ? "bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400"
                  : ""
              }`}
            >
              {t("about")}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
