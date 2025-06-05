export const reactHooks = {
  slug: "react-hooks",
  title: "React Hooks 完全指南",
  date: "2024-02-15",
  readTime: "10 分钟",
  tags: ["React", "Hooks", "前端"],
  content: `
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">引言</h2>
    <p class="text-lg text-gray-700 dark:text-gray-300 mb-8">React Hooks 是 React 16.8 引入的新特性，它让我们可以在函数组件中使用状态和其他 React 特性。本文将深入探讨 React Hooks 的使用方法和最佳实践。</p>

    <div class="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 mb-8">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">目录</h3>
      <ul class="space-y-2">
        <li><a href="#useState" class="text-indigo-600 dark:text-indigo-400 hover:underline">1. useState</a></li>
        <li><a href="#useEffect" class="text-indigo-600 dark:text-indigo-400 hover:underline">2. useEffect</a></li>
        <li><a href="#useContext" class="text-indigo-600 dark:text-indigo-400 hover:underline">3. useContext</a></li>
        <li><a href="#useReducer" class="text-indigo-600 dark:text-indigo-400 hover:underline">4. useReducer</a></li>
        <li><a href="#custom-hooks" class="text-indigo-600 dark:text-indigo-400 hover:underline">5. 自定义 Hooks</a></li>
      </ul>
    </div>

    <section id="useState" class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">1. useState</h2>
      <div class="bg-gray-900 rounded-lg p-4 mb-4">
        <pre class="text-gray-100"><code>function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}</code></pre>
      </div>
    </section>

    <section id="useEffect" class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">2. useEffect</h2>
      <div class="bg-gray-900 rounded-lg p-4 mb-4">
        <pre class="text-gray-100"><code>function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // 空依赖数组表示只在组件挂载时执行

  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}</code></pre>
      </div>
    </section>

    <section id="useContext" class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">3. useContext</h2>
      <div class="bg-gray-900 rounded-lg p-4 mb-4">
        <pre class="text-gray-100"><code>const ThemeContext = React.createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Themed Button</button>;
}</code></pre>
      </div>
    </section>

    <section id="useReducer" class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">4. useReducer</h2>
      <div class="bg-gray-900 rounded-lg p-4 mb-4">
        <pre class="text-gray-100"><code>function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}</code></pre>
      </div>
    </section>

    <section id="custom-hooks" class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">5. 自定义 Hooks</h2>
      <div class="bg-gray-900 rounded-lg p-4 mb-4">
        <pre class="text-gray-100"><code>function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}</code></pre>
      </div>
    </section>
  `,
};
