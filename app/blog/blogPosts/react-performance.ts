export const reactPerformance = {
  slug: "react-performance",
  title: "React 性能优化完全指南",
  date: "2024-03-01",
  readTime: "15 分钟",
  tags: ["React", "性能优化", "前端"],
  content: `
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">引言</h2>
    <p class="text-lg text-gray-700 dark:text-gray-300 mb-8">React 应用的性能优化是一个重要的主题。本文将深入探讨 React 性能优化的各个方面，包括组件优化、状态管理、渲染优化等。</p>

    <div class="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 mb-8">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">目录</h3>
      <ul class="space-y-2">
        <li><a href="#memo" class="text-indigo-600 dark:text-indigo-400 hover:underline">1. React.memo</a></li>
        <li><a href="#useMemo" class="text-indigo-600 dark:text-indigo-400 hover:underline">2. useMemo</a></li>
        <li><a href="#useCallback" class="text-indigo-600 dark:text-indigo-400 hover:underline">3. useCallback</a></li>
        <li><a href="#virtualization" class="text-indigo-600 dark:text-indigo-400 hover:underline">4. 虚拟列表</a></li>
        <li><a href="#code-splitting" class="text-indigo-600 dark:text-indigo-400 hover:underline">5. 代码分割</a></li>
      </ul>
    </div>

    <section id="memo" class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">1. React.memo</h2>
      <div class="bg-gray-900 rounded-lg p-4 mb-4">
        <pre class="text-gray-100"><code>const MyComponent = React.memo(function MyComponent(props) {
  // 只有当 props 改变时才会重新渲染
  return <div>{props.value}</div>;
});</code></pre>
      </div>
    </section>

    <section id="useMemo" class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">2. useMemo</h2>
      <div class="bg-gray-900 rounded-lg p-4 mb-4">
        <pre class="text-gray-100"><code>function ExpensiveComponent({ data }) {
  const processedData = useMemo(() => {
    return expensiveOperation(data);
  }, [data]);

  return <div>{processedData}</div>;
}</code></pre>
      </div>
    </section>

    <section id="useCallback" class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">3. useCallback</h2>
      <div class="bg-gray-900 rounded-lg p-4 mb-4">
        <pre class="text-gray-100"><code>function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []); // 依赖数组为空，函数引用保持不变

  return <ChildComponent onClick={handleClick} />;
}</code></pre>
      </div>
    </section>

    <section id="virtualization" class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">4. 虚拟列表</h2>
      <div class="bg-gray-900 rounded-lg p-4 mb-4">
        <pre class="text-gray-100"><code>import { FixedSizeList } from 'react-window';

function VirtualList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index]}
    </div>
  );

  return (
    <FixedSizeList
      height={400}
      width={300}
      itemCount={items.length}
      itemSize={50}
    >
      {Row}
    </FixedSizeList>
  );
}</code></pre>
      </div>
    </section>

    <section id="code-splitting" class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">5. 代码分割</h2>
      <div class="bg-gray-900 rounded-lg p-4 mb-4">
        <pre class="text-gray-100"><code>// 使用 React.lazy 进行代码分割
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}</code></pre>
      </div>
    </section>
  `,
};
