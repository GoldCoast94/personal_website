export const nextjs13 = {
  slug: "nextjs-13",
  title: "Next.js 13 新特性完全指南",
  date: "2024-02-20",
  readTime: "15 分钟",
  tags: ["Next.js", "React", "前端"],
  content: `
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">引言</h2>
    <p class="text-lg text-gray-700 dark:text-gray-300 mb-8">Next.js 13 带来了许多激动人心的新特性，包括 App Router、Server Components、Streaming 等。本文将深入探讨这些新特性及其使用方法。</p>

    <div class="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 mb-8">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">目录</h3>
      <ul class="space-y-2">
        <li><a href="#app-router" class="text-indigo-600 dark:text-indigo-400 hover:underline">1. App Router</a></li>
        <li><a href="#server-components" class="text-indigo-600 dark:text-indigo-400 hover:underline">2. Server Components</a></li>
        <li><a href="#streaming" class="text-indigo-600 dark:text-indigo-400 hover:underline">3. Streaming</a></li>
        <li><a href="#data-fetching" class="text-indigo-600 dark:text-indigo-400 hover:underline">4. 数据获取</a></li>
        <li><a href="#metadata" class="text-indigo-600 dark:text-indigo-400 hover:underline">5. Metadata API</a></li>
      </ul>
    </div>

    <section id="app-router" class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">1. App Router</h2>
      <div class="bg-gray-900 rounded-lg p-4 mb-4">
        <pre class="text-gray-100"><code>// app/page.tsx
export default function Page() {
  return <h1>Hello, Next.js 13!</h1>
}

// app/blog/[slug]/page.tsx
export default function BlogPost({ params }) {
  return <h1>Blog Post: {params.slug}</h1>
}</code></pre>
      </div>
    </section>

    <section id="server-components" class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">2. Server Components</h2>
      <div class="bg-gray-900 rounded-lg p-4 mb-4">
        <pre class="text-gray-100"><code>// app/components/ServerComponent.tsx
export default async function ServerComponent() {
  const data = await fetch('https://api.example.com/data');
  const json = await data.json();

  return <div>{json.title}</div>;
}</code></pre>
      </div>
    </section>

    <section id="streaming" class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">3. Streaming</h2>
      <div class="bg-gray-900 rounded-lg p-4 mb-4">
        <pre class="text-gray-100"><code>// app/page.tsx
import { Suspense } from 'react';
import Loading from './loading';

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <SlowComponent />
    </Suspense>
  );
}</code></pre>
      </div>
    </section>

    <section id="data-fetching" class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">4. 数据获取</h2>
      <div class="bg-gray-900 rounded-lg p-4 mb-4">
        <pre class="text-gray-100"><code>// app/page.tsx
async function getData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <main>{data.title}</main>;
}</code></pre>
      </div>
    </section>

    <section id="metadata" class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">5. Metadata API</h2>
      <div class="bg-gray-900 rounded-lg p-4 mb-4">
        <pre class="text-gray-100"><code>// app/layout.tsx
export const metadata = {
  title: 'My App',
  description: 'Welcome to my app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}</code></pre>
      </div>
    </section>
  `,
};
