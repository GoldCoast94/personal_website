import { TechDetail } from '../types';
import { reactData } from './react';
import { cssData } from './css';
import { javascriptData } from './javascript';
import { threejsData } from './threejs';
import { gsapData } from './gsap';
import { goData } from './go';
import { reactDataEn } from './locales/en/react';
import { cssDataEn } from './locales/en/css';
import { javascriptDataEn } from './locales/en/javascript';
import { threejsDataEn } from './locales/en/threejs';
import { gsapDataEn } from './locales/en/gsap';
import { goDataEn } from './locales/en/go';
import { reactDataJa } from './locales/ja/react';
import { cssDataJa } from './locales/ja/css';
import { javascriptDataJa } from './locales/ja/javascript';
import { threejsDataJa } from './locales/ja/threejs';
import { gsapDataJa } from './locales/ja/gsap';
import { goDataJa } from './locales/ja/go';

// 中文数据
const techDetailsZh: Record<string, TechDetail> = {
  react: reactData,
  css: cssData,
  javascript: javascriptData,
  threejs: threejsData,
  gsap: gsapData,
  go: goData,
};

// 英文数据
const techDetailsEn: Record<string, TechDetail> = {
  react: reactDataEn,
  css: cssDataEn,
  javascript: javascriptDataEn,
  threejs: threejsDataEn,
  gsap: gsapDataEn,
  go: goDataEn,
};

// 日文数据
const techDetailsJa: Record<string, TechDetail> = {
  react: reactDataJa,
  css: cssDataJa,
  javascript: javascriptDataJa,
  threejs: threejsDataJa,
  gsap: gsapDataJa,
  go: goDataJa,
};

/**
 * 根据语言获取技术栈数据
 * @param locale 语言代码 ('zh', 'en', 'ja')
 * @returns 技术栈数据对象
 */
export function getTechDetails(locale: string): Record<string, TechDetail> {
  switch (locale) {
    case 'en':
      return techDetailsEn;
    case 'ja':
      return techDetailsJa;
    case 'zh':
    default:
      return techDetailsZh;
  }
}
