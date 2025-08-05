export const typescriptAdvanced = {
  slug: "typescript-advanced",
  title: "TypeScript 高级特性详解",
  date: "2024-02-10",
  readTime: "15 分钟",
  tags: ["TypeScript", "类型系统", "高级特性"],
  content: `
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">引言</h2>
    <p class="text-lg text-gray-700 dark:text-gray-300 mb-8">TypeScript 作为 JavaScript 的超集，提供了强大的类型系统和高级特性。本文将深入探讨 TypeScript 的高级特性，帮助你更好地利用类型系统。</p>

    <section class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">1. 泛型</h2>
      <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
        <pre class="text-gray-800 dark:text-gray-100"><code>function identity<T>(arg: T): T {
  return arg;
}

// 使用泛型
const result = identity<string>("Hello TypeScript");
const numberResult = identity(42); // 类型推断</code></pre>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">2. 条件类型</h2>
      <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
        <pre class="text-gray-800 dark:text-gray-100"><code>type NonNullable<T> = T extends null | undefined ? never : T;

type T0 = NonNullable<string | number | null>; // string | number
type T1 = NonNullable<string[] | null | undefined>; // string[]</code></pre>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">3. 映射类型</h2>
      <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
        <pre class="text-gray-800 dark:text-gray-100"><code>interface User {
  id: number;
  name: string;
  email: string;
}

// 将所有属性变为可选
type PartialUser = Partial<User>;

// 将所有属性变为只读
type ReadonlyUser = Readonly<User>;

// 自定义映射类型
type PickUser = Pick<User, 'name' | 'email'>;</code></pre>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">4. 模板字面量类型</h2>
      <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
        <pre class="text-gray-800 dark:text-gray-100"><code>type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type ApiEndpoint = \`/api/\${string}\`;

type ApiUrl = \`\${HttpMethod} \${ApiEndpoint}\`;

// 使用示例
const url: ApiUrl = 'GET /api/users'; // ✅ 正确
const invalidUrl: ApiUrl = 'PATCH /api/users'; // ❌ 错误</code></pre>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">5. 高级类型操作</h2>
      <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
        <pre class="text-gray-800 dark:text-gray-100"><code>// 提取函数返回类型
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

// 提取数组元素类型
type ArrayElement<T> = T extends (infer U)[] ? U : never;

// 使用示例
function fetchUser(): Promise<User> {
  return Promise.resolve({ id: 1, name: 'John', email: 'john@example.com' });
}

type FetchUserReturn = ReturnType<typeof fetchUser>; // Promise<User>
type UserArray = ArrayElement<User[]>; // User</code></pre>
      </div>
    </section>
  `,
};
