import { getRequestConfig } from "next-intl/server";

export const locales = ["zh", "en", "ja"] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // 验证并确保 locale 有效
  if (!locale || !locales.includes(locale as Locale)) {
    locale = "zh";
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
