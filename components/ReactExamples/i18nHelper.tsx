// 这个文件提供一个辅助工具，用于在客户端组件中获取翻译
import { useTranslations } from 'next-intl';

export function useExamplesTranslations() {
  return useTranslations('examples');
}
