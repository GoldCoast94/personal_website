export type Locale = 'zh' | 'en' | 'ja';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string | Record<Locale, string>;
  getContent?: (locale: Locale) => string;
}
