export const nextjs13 = {
  slug: "nextjs-13",
  title: "Next.js 13 新特性详解",
  date: "2024-01-30",
  readTime: "18 分钟",
  tags: ["Next.js", "React", "全栈开发"],
  content: `
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">引言</h2>
    <p class="text-lg text-gray-700 dark:text-gray-300 mb-8">Next.js 13 带来了许多激动人心的新特性，包括 App Router、Server Components、Streaming 等。本文将深入探讨这些新特性及其使用方法。</p>

    <section class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">1. App Router</h2>
      <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
        <pre class="text-gray-800 dark:text-gray-100"><code>// app/page.tsx
export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Next.js 13</h1>
      <p>This is a Server Component by default</p>
    </div>
  );
}

// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}</code></pre>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">2. Server Components</h2>
      <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
        <pre class="text-gray-800 dark:text-gray-100"><code>// Server Component (默认)
async function UserProfile({ userId }: { userId: string }) {
  const user = await fetchUser(userId);
  
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

// Client Component
'use client';
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}</code></pre>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">3. Streaming</h2>
      <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
        <pre class="text-gray-800 dark:text-gray-100"><code>// app/page.tsx
import { Suspense } from 'react';
import { SlowComponent } from './SlowComponent';

export default function Page() {
  return (
    <div>
      <h1>Welcome</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}

// app/SlowComponent.tsx
async function SlowComponent() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  return <div>This content was streamed!</div>;
}</code></pre>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">4. Data Fetching</h2>
      <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
        <pre class="text-gray-800 dark:text-gray-100"><code>// app/posts/page.tsx
async function getPosts() {
  const res = await fetch('https://api.example.com/posts', {
    cache: 'no-store' // 禁用缓存
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();
  
  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}</code></pre>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">5. Metadata API</h2>
      <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
        <pre class="text-gray-800 dark:text-gray-100"><code>// app/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | My App',
    default: 'My App',
  },
  description: 'Welcome to my Next.js app',
  openGraph: {
    title: 'My App',
    description: 'Welcome to my Next.js app',
  },
};

// app/blog/[slug]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPost(params.slug);
  
  return {
    title: post.title,
    description: post.excerpt,
  };
}</code></pre>
      </div>
    </section>
  `,
};
