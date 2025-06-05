export const typescriptAdvanced = {
  slug: "typescript-advanced",
  title: "TypeScript 高级特性详解",
  date: "2024-02-25",
  readTime: "12 分钟",
  tags: ["TypeScript", "JavaScript", "编程"],
  content: `
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">引言</h2>
    <p class="text-lg text-gray-700 dark:text-gray-300 mb-8">TypeScript 提供了许多强大的高级特性，如泛型、类型推断、高级类型等。本文将深入探讨这些特性及其实际应用场景。</p>

    <div class="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 mb-8">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">目录</h3>
      <ul class="space-y-2">
        <li><a href="#generics" class="text-indigo-600 dark:text-indigo-400 hover:underline">1. 泛型</a></li>
        <li><a href="#type-inference" class="text-indigo-600 dark:text-indigo-400 hover:underline">2. 类型推断</a></li>
        <li><a href="#utility-types" class="text-indigo-600 dark:text-indigo-400 hover:underline">3. 工具类型</a></li>
        <li><a href="#mapped-types" class="text-indigo-600 dark:text-indigo-400 hover:underline">4. 映射类型</a></li>
        <li><a href="#conditional-types" class="text-indigo-600 dark:text-indigo-400 hover:underline">5. 条件类型</a></li>
      </ul>
    </div>

    <section id="generics" class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">1. 泛型</h2>
      <div class="bg-gray-900 rounded-lg p-4 mb-4">
        <pre class="text-gray-100"><code>function identity<T>(arg: T): T {
  return arg;
}

// 使用泛型
let output = identity<string>("myString");
let output2 = identity<number>(42);</code></pre>
      </div>
    </section>

    <section id="type-inference" class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">2. 类型推断</h2>
      <div class="bg-gray-900 rounded-lg p-4 mb-4">
        <pre class="text-gray-100"><code>// TypeScript 会自动推断类型
let x = 3; // 推断为 number
let y = "hello"; // 推断为 string
let z = [1, 2, 3]; // 推断为 number[]</code></pre>
      </div>
    </section>

    <section id="utility-types" class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">3. 工具类型</h2>
      <div class="bg-gray-900 rounded-lg p-4 mb-4">
        <pre class="text-gray-100"><code>interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// 使用 Partial 使所有属性变为可选
type PartialTodo = Partial<Todo>;

// 使用 Pick 选择特定属性
type TodoTitle = Pick<Todo, "title">;

// 使用 Omit 排除特定属性
type TodoWithoutDescription = Omit<Todo, "description">;</code></pre>
      </div>
    </section>

    <section id="mapped-types" class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">4. 映射类型</h2>
      <div class="bg-gray-900 rounded-lg p-4 mb-4">
        <pre class="text-gray-100"><code>type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Optional<T> = {
  [P in keyof T]?: T[P];
};

interface Person {
  name: string;
  age: number;
}

type ReadonlyPerson = Readonly<Person>;
type OptionalPerson = Optional<Person>;</code></pre>
      </div>
    </section>

    <section id="conditional-types" class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">5. 条件类型</h2>
      <div class="bg-gray-900 rounded-lg p-4 mb-4">
        <pre class="text-gray-100"><code>type TypeName<T> = 
  T extends string ? "string" :
  T extends number ? "number" :
  T extends boolean ? "boolean" :
  T extends undefined ? "undefined" :
  T extends Function ? "function" :
  "object";

type T0 = TypeName<string>; // "string"
type T1 = TypeName<number>; // "number"
type T2 = TypeName<boolean>; // "boolean"</code></pre>
      </div>
    </section>
  `,
};
