// app/[locale]/layout.tsx
import "../globals.css";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "@/i18n/request";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GoldCoast 博客",
  description: "炫酷夜间与白天模式切换博客",
  icons: {
    icon: [],
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // 验证 locale 是否有效
  if (!locales.includes(locale as typeof locales[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html suppressHydrationWarning lang={locale}>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen text-gray-900 dark:text-gray-100`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Navbar />
            <main className="pt-16 min-h-screen">{children}</main>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
