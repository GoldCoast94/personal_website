export const nextjs15 = {
  slug: "nextjs-15",
  title: "Next.js 15 新特性详解",
  date: "2026-01-06",
  readTime: "20 分钟",
  tags: ["Next.js", "React", "全栈开发"],
  content: {
    zh: `
## 引言

Next.js 15 是一个重要的版本更新,带来了 React 19 支持、稳定的 Turbopack、改进的缓存策略、部分预渲染等众多新特性。本文将深入探讨这些新特性及其使用方法。

## 1. React 19 支持

Next.js 15 全面支持 React 19,包括新的 Hooks 和改进的并发特性。

\`\`\`tsx
// app/page.tsx
'use client';
import { use } from 'react';

// 使用新的 use() Hook
function UserProfile({ userPromise }) {
  const user = use(userPromise);

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

// 使用新的 useFormStatus
import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? '提交中...' : '提交'}
    </button>
  );
}
\`\`\`

## 2. 改进的缓存策略

Next.js 15 改变了默认的缓存行为,fetch 请求默认不再缓存,GET 路由处理器也默认不缓存。

\`\`\`tsx
// app/posts/page.tsx
async function getPosts() {
  // Next.js 15: 默认 cache: 'no-store'
  const res = await fetch('https://api.example.com/posts');
  return res.json();
}

// 如果需要缓存,显式指定
async function getCachedData() {
  const res = await fetch('https://api.example.com/data', {
    cache: 'force-cache' // 启用缓存
  });
  return res.json();
}

// 使用 revalidate 选项
async function getRevalidatedData() {
  const res = await fetch('https://api.example.com/data', {
    next: { revalidate: 3600 } // 每小时重新验证
  });
  return res.json();
}
\`\`\`

## 3. Turbopack 稳定版

Turbopack 在开发模式下已经稳定,提供了更快的启动和更新速度。

\`\`\`json
// package.json
{
  "scripts": {
    "dev": "next dev --turbo",
    "build": "next build"
  }
}
\`\`\`

\`\`\`javascript
// next.config.js
module.exports = {
  experimental: {
    turbo: {
      // Turbopack 配置选项
      loaders: {
        '.svg': ['@svgr/webpack'],
      },
    },
  },
};
\`\`\`

## 4. 部分预渲染 (Partial Prerendering)

PPR 允许在同一路由中结合静态和动态内容,提供更好的性能和用户体验。

\`\`\`javascript
// next.config.js
module.exports = {
  experimental: {
    ppr: 'incremental', // 启用 PPR
  },
};
\`\`\`

\`\`\`tsx
// app/page.tsx
import { Suspense } from 'react';

export const experimental_ppr = true;

export default function Page() {
  return (
    <div>
      {/* 静态内容 - 立即渲染 */}
      <header>
        <h1>欢迎来到我的网站</h1>
      </header>

      {/* 动态内容 - 流式传输 */}
      <Suspense fallback={<div>加载中...</div>}>
        <DynamicContent />
      </Suspense>

      {/* 静态内容 - 立即渲染 */}
      <footer>
        <p>© 2026 版权所有</p>
      </footer>
    </div>
  );
}

async function DynamicContent() {
  const data = await fetch('https://api.example.com/dynamic');
  return <div>{/* 动态内容 */}</div>;
}
\`\`\`

## 5. next/after API

新的 after() API 允许在响应发送后执行代码,适合日志记录和分析。

\`\`\`typescript
// app/api/route.ts
import { after } from 'next/server';

export async function GET(request: Request) {
  const response = new Response('Hello World');

  // 在响应发送后执行
  after(() => {
    // 记录日志、发送分析数据等
    console.log('响应已发送');
    logAnalytics({
      path: request.url,
      timestamp: Date.now(),
    });
  });

  return response;
}

// Server Action 中使用
export async function submitForm(formData: FormData) {
  const result = await processForm(formData);

  after(() => {
    // 发送通知邮件
    sendNotificationEmail(result);
  });

  return result;
}
\`\`\`

## 6. 增强的 Server Actions

Server Actions 现在更加稳定,支持更多功能和更好的类型安全。

\`\`\`typescript
// app/actions.ts
'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  // 验证数据
  if (!title || !content) {
    return { error: '标题和内容不能为空' };
  }

  // 保存到数据库
  const post = await db.post.create({
    data: { title, content },
  });

  // 重新验证缓存
  revalidatePath('/posts');

  // 重定向到新文章
  redirect(\`/posts/\${post.id}\`);
}
\`\`\`

\`\`\`tsx
// app/posts/new/page.tsx
import { createPost } from '@/app/actions';

export default function NewPostPage() {
  return (
    <form action={createPost}>
      <input type="text" name="title" placeholder="标题" />
      <textarea name="content" placeholder="内容" />
      <button type="submit">发布</button>
    </form>
  );
}
\`\`\`

## 7. 改进的静态生成

generateStaticParams 现在支持更灵活的配置和增量静态生成。

\`\`\`tsx
// app/posts/[slug]/page.tsx
export async function generateStaticParams() {
  const posts = await fetch('https://api.example.com/posts').then(res => res.json());

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = true; // 允许动态生成未列出的参数

export default async function PostPage({
  params
}: {
  params: { slug: string }
}) {
  const post = await fetch(\`https://api.example.com/posts/\${params.slug}\`)
    .then(res => res.json());

  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
\`\`\`

## 8. instrumentation Hook

新的 instrumentation.ts 文件允许在应用启动时执行代码,用于监控和性能追踪。

\`\`\`typescript
// instrumentation.ts (根目录)
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // 初始化监控工具
    const { initMonitoring } = await import('./lib/monitoring');
    await initMonitoring();
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    // Edge Runtime 专用初始化
    const { initEdge } = await import('./lib/edge-monitoring');
    await initEdge();
  }
}
\`\`\`

\`\`\`javascript
// next.config.js
module.exports = {
  experimental: {
    instrumentationHook: true,
  },
};
\`\`\`

## 9. 改进的错误处理

Next.js 15 提供了更好的错误处理和错误边界。

\`\`\`tsx
// app/error.tsx
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>出错了!</h2>
      <p>{error.message}</p>
      <button onClick={reset}>重试</button>
    </div>
  );
}
\`\`\`

\`\`\`tsx
// app/global-error.tsx
'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>应用出现严重错误</h2>
        <p>{error.message}</p>
        <button onClick={reset}>重试</button>
      </body>
    </html>
  );
}
\`\`\`

## 10. 性能优化

Next.js 15 在构建速度、运行时性能和包大小方面都有显著提升。

\`\`\`tsx
// 使用 Image 组件的改进
import Image from 'next/image';

export default function Gallery() {
  return (
    <div>
      <Image
        src="/photo.jpg"
        alt="Photo"
        width={800}
        height={600}
        priority // 优先加载
        placeholder="blur" // 模糊占位符
        blurDataURL="data:image/jpeg;base64,..."
      />
    </div>
  );
}
\`\`\`

\`\`\`tsx
// 使用动态导入优化包大小
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>加载中...</p>,
  ssr: false, // 禁用服务端渲染
});
\`\`\`

## 总结

Next.js 15 带来了许多重要的改进:

- React 19 支持和新的 Hooks
- 更合理的默认缓存策略
- 稳定的 Turbopack 开发模式
- 部分预渲染 (PPR) 提供更好的性能
- next/after API 用于响应后处理
- 增强的 Server Actions
- instrumentation Hook 用于应用监控
- 改进的错误处理和类型安全

这些特性使 Next.js 15 成为构建现代 Web 应用的强大框架,值得每个开发者尝试和学习。
`,
    en: `
## Introduction

Next.js 15 is a significant version update, bringing React 19 support, stable Turbopack, improved caching strategies, Partial Prerendering, and many other new features. This article will deeply explore these new features and how to use them.

## 1. React 19 Support

Next.js 15 fully supports React 19, including new Hooks and improved concurrent features.

\`\`\`tsx
// app/page.tsx
'use client';
import { use } from 'react';

// Using the new use() Hook
function UserProfile({ userPromise }) {
  const user = use(userPromise);

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

// Using the new useFormStatus
import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}
\`\`\`

## 2. Improved Caching Strategy

Next.js 15 changed the default caching behavior. Fetch requests are no longer cached by default, and GET route handlers are also not cached by default.

\`\`\`tsx
// app/posts/page.tsx
async function getPosts() {
  // Next.js 15: default cache: 'no-store'
  const res = await fetch('https://api.example.com/posts');
  return res.json();
}

// If caching is needed, specify explicitly
async function getCachedData() {
  const res = await fetch('https://api.example.com/data', {
    cache: 'force-cache' // Enable caching
  });
  return res.json();
}

// Using revalidate option
async function getRevalidatedData() {
  const res = await fetch('https://api.example.com/data', {
    next: { revalidate: 3600 } // Revalidate every hour
  });
  return res.json();
}
\`\`\`

## 3. Stable Turbopack

Turbopack is now stable in development mode, providing faster startup and update speeds.

\`\`\`json
// package.json
{
  "scripts": {
    "dev": "next dev --turbo",
    "build": "next build"
  }
}
\`\`\`

## 4. Partial Prerendering (PPR)

PPR allows combining static and dynamic content in the same route, providing better performance and user experience.

\`\`\`tsx
// app/page.tsx
import { Suspense } from 'react';

export const experimental_ppr = true;

export default function Page() {
  return (
    <div>
      {/* Static content - rendered immediately */}
      <header>
        <h1>Welcome to my website</h1>
      </header>

      {/* Dynamic content - streamed */}
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicContent />
      </Suspense>

      {/* Static content - rendered immediately */}
      <footer>
        <p>© 2026 All rights reserved</p>
      </footer>
    </div>
  );
}
\`\`\`

## 5. next/after API

The new after() API allows executing code after sending the response, suitable for logging and analytics.

\`\`\`typescript
// app/api/route.ts
import { after } from 'next/server';

export async function GET(request: Request) {
  const response = new Response('Hello World');

  // Execute after response is sent
  after(() => {
    console.log('Response sent');
    logAnalytics({
      path: request.url,
      timestamp: Date.now(),
    });
  });

  return response;
}
\`\`\`

## 6. Enhanced Server Actions

Server Actions are now more stable, supporting more features and better type safety.

\`\`\`typescript
// app/actions.ts
'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  if (!title || !content) {
    return { error: 'Title and content cannot be empty' };
  }

  const post = await db.post.create({
    data: { title, content },
  });

  revalidatePath('/posts');
  redirect(\`/posts/\${post.id}\`);
}
\`\`\`

## Summary

Next.js 15 brings many important improvements:

- React 19 support with new Hooks
- More reasonable default caching strategy
- Stable Turbopack development mode
- Partial Prerendering (PPR) for better performance
- next/after API for post-response processing
- Enhanced Server Actions
- instrumentation Hook for application monitoring
- Improved error handling and type safety

These features make Next.js 15 a powerful framework for building modern web applications.
`,
    ja: `
## はじめに

Next.js 15は重要なバージョンアップデートで、React 19のサポート、安定したTurbopack、改善されたキャッシング戦略、部分的プリレンダリングなど、多くの新機能をもたらします。

## 1. React 19 サポート

Next.js 15はReact 19を完全にサポートし、新しいHooksと改善された同時実行機能を含みます。

\`\`\`tsx
// app/page.tsx
'use client';
import { use } from 'react';

function UserProfile({ userPromise }) {
  const user = use(userPromise);

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}
\`\`\`

## 2. 改善されたキャッシング戦略

Next.js 15ではデフォルトのキャッシング動作が変更されました。フェッチリクエストはデフォルトでキャッシュされなくなりました。

## 3. 安定したTurbopack

Turbopackは開発モードで安定しており、より高速な起動と更新速度を提供します。

## まとめ

Next.js 15は多くの重要な改善をもたらします：

- React 19のサポート
- より合理的なデフォルトキャッシング戦略
- 安定したTurbopack開発モード
- より良いパフォーマンスのための部分的プリレンダリング（PPR）
`,
  },
};
