export const reactPerformance = {
  slug: "react-performance",
  title: "React 性能优化最佳实践",
  date: "2024-02-05",
  readTime: "12 分钟",
  tags: ["React", "性能优化", "最佳实践"],
  content: `
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">引言</h2>
    <p class="text-lg text-gray-700 dark:text-gray-300 mb-8">React 应用性能优化是前端开发中的重要课题。本文将介绍 React 性能优化的核心概念和实用技巧，帮助你构建更高效的 React 应用。</p>

    <section class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">1. React.memo</h2>
      <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
        <pre class="text-gray-800 dark:text-gray-100"><code>const ExpensiveComponent = React.memo(({ data }) => {
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
});</code></pre>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">2. useMemo</h2>
      <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
        <pre class="text-gray-800 dark:text-gray-100"><code>function ExpensiveCalculation({ items }) {
  const expensiveValue = useMemo(() => {
    return items.reduce((sum, item) => sum + item.value, 0);
  }, [items]);

  return <div>Total: {expensiveValue}</div>;
}</code></pre>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">3. useCallback</h2>
      <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
        <pre class="text-gray-800 dark:text-gray-100"><code>function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []); // 空依赖数组，函数永远不会重新创建

  return (
    <div>
      <ChildComponent onClick={handleClick} />
      <p>Count: {count}</p>
    </div>
  );
}</code></pre>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">4. 虚拟化</h2>
      <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
        <pre class="text-gray-800 dark:text-gray-100"><code>import { FixedSizeList as List } from 'react-window';

function VirtualizedList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index].name}
    </div>
  );

  return (
    <List
      height={400}
      itemCount={items.length}
      itemSize={35}
    >
      {Row}
    </List>
  );
}</code></pre>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">5. 代码分割</h2>
      <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
        <pre class="text-gray-800 dark:text-gray-100"><code>// 使用 React.lazy 进行代码分割
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
