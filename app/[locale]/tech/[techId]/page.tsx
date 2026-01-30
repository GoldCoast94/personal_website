"use client";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { getTechDetails } from './data';
import { TechSidebar, TechContent, ExampleModals } from './components';

export default function TechDetailPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('tech');
  const techId = params.techId as string;
  const [selectedExample, setSelectedExample] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string>("");
  const [selectedSection, setSelectedSection] = useState<string>("");

  // 根据当前语言获取技术栈数据
  const techDetails = getTechDetails(locale);
  const tech = techDetails[techId];

  // 从 URL 参数读取选中的项目
  useEffect(() => {
    if (!tech) return;

    const itemParam = searchParams.get('item');

    if (itemParam) {
      // 如果 URL 有 item 参数，使用它
      const item = tech.content
        .flatMap(section => section.items)
        .find(item => item.id === itemParam);

      if (item) {
        setActiveItem(itemParam);
        // 找到该项目所属的章节
        const section = tech.content.find(sec =>
          sec.items.some(i => i.id === itemParam)
        );
        if (section) {
          setSelectedSection(section.title);
        }
      } else {
        // 如果参数无效，使用默认项
        setDefaultItem();
      }
    } else {
      // 如果没有参数，使用默认项
      setDefaultItem();
    }
  }, [searchParams, techId, tech, router]);

  // 设置默认选中项
  const setDefaultItem = () => {
    if (tech && tech.content.length > 0 && tech.content[0].items.length > 0) {
      const defaultItem = tech.content[0].items[0];
      setActiveItem(defaultItem.id);
      setSelectedSection(tech.content[0].title);
      router.replace(`?item=${defaultItem.id}`, { scroll: false });
    }
  };

  // 处理导航项点击
  const handleItemClick = (itemId: string, sectionTitle: string) => {
    setActiveItem(itemId);
    setSelectedSection(sectionTitle);
    router.push(`?item=${itemId}`, { scroll: false });
  };

  // 重定向到专门的文档页面
  useEffect(() => {
    if (techId === 'go') {
      router.push(`/${locale}/tech/go-docs`);
    } else if (techId === 'javascript') {
      router.push(`/${locale}/tech/javascript-docs`);
    }
  }, [techId, router, locale]);

  if (!tech) {
    return (
      <div className="h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            404 - {t('pageNotFound')}
          </h1>
          <Link
            href="/tech"
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            {t('backToTech')}
          </Link>
        </div>
      </div>
    );
  }

  // 获取当前选中的项目
  const currentItem = tech.content
    .flatMap(section => section.items)
    .find(item => item.id === activeItem);

  return (
    <div className="h-[calc(100vh-3.5rem)] md:h-[calc(100vh-4rem)] overflow-hidden">
      <div className="h-full flex flex-col">
        {/* 顶部标题栏 */}
        <div className="flex-shrink-0 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <Link
              href="/tech"
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-200 mb-4 group"
            >
              <svg
                className="w-5 h-5 mr-2 transform -rotate-180 group-hover:-translate-x-1 transition-transform duration-300"
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
              {t('backToTech')}
            </Link>

            <div className="flex items-center space-x-4">
              {(tech.icon.startsWith('http') || tech.icon.startsWith('/')) ? (
                <div className="w-14 h-14 rounded-lg bg-white dark:bg-gray-100 flex items-center justify-center p-2.5 shadow-sm">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <span className="text-4xl">{tech.icon}</span>
              )}
              <div>
                <div className="flex items-center space-x-4">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {tech.name}
                  </h1>
                  <a
                    href={tech.officialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline flex items-center"
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
                <p className="text-gray-600 dark:text-gray-300 mt-1 text-sm md:text-base">
                  {tech.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 主要内容区域：左侧导航 + 右侧内容 */}
        <div className="flex-1 flex overflow-hidden">
          {/* 左侧导航 */}
          <TechSidebar
            sections={tech.content}
            activeItem={activeItem}
            onItemClick={handleItemClick}
          />

          {/* 右侧内容 */}
          <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-full">
            <div className="max-w-4xl mx-auto px-6 md:px-8 py-8">
              <TechContent
                currentItem={currentItem}
                selectedSection={selectedSection}
                techId={techId}
                onExampleClick={setSelectedExample}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 案例演示 Modals */}
      <ExampleModals
        selectedExample={selectedExample}
        onClose={() => setSelectedExample(null)}
      />
    </div>
  );
}
