export const reactPerformance = {
  slug: "react-performance",
  title: "React 性能优化最佳实践",
  date: "2024-02-05",
  readTime: "22 分钟",
  tags: ["React", "性能优化", "最佳实践"],
  content: {
    zh: `
## 引言

React 应用性能优化是构建高质量前端应用的关键环节。随着应用规模增长，不合理的组件设计和渲染策略可能导致严重的性能问题。本文将深入探讨 React 性能优化的核心概念、工具和实战技巧，帮助你构建快速、流畅的用户体验。

## 1. 性能分析工具

在优化性能之前，我们需要先定位问题。

### 1.1 React DevTools Profiler

React DevTools 提供了强大的性能分析工具：

\`\`\`jsx
// 在代码中使用 Profiler API
import { Profiler } from 'react';

function onRenderCallback(
  id, // 发生提交的 Profiler 树的 "id"
  phase, // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）
  actualDuration, // 本次更新提交花费的时间
  baseDuration, // 估计不使用 memoization 的情况下渲染整棵子树需要的时间
  startTime, // 本次更新中 React 开始渲染的时间
  commitTime, // 本次更新中 React committed 的时间
  interactions // 属于本次更新的 interactions 的集合
) {
  console.log(\`\${id} 的 \${phase} 阶段耗时 \${actualDuration}ms\`);
}

function App() {
  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <Dashboard />
    </Profiler>
  );
}
\`\`\`

### 1.2 Chrome DevTools Performance

使用 Chrome 的 Performance 面板记录和分析应用运行时性能：

1. 打开 Chrome DevTools (F12)
2. 切换到 Performance 标签
3. 点击录制按钮
4. 执行需要分析的操作
5. 停止录制并分析结果

### 1.3 why-did-you-render

检测不必要的组件重新渲染：

\`\`\`jsx
import React from 'react';

if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}

// 标记需要追踪的组件
MyComponent.whyDidYouRender = true;
\`\`\`

## 2. React.memo - 组件记忆化

React.memo 是一个高阶组件，用于优化函数组件的重新渲染。

### 2.1 基础用法

\`\`\`jsx
const ExpensiveComponent = React.memo(({ data }) => {
  console.log('ExpensiveComponent 渲染');
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
});

function Parent() {
  const [count, setCount] = useState(0);
  const data = [{ id: 1, name: 'Item 1' }];

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      {/* 当 count 变化时，ExpensiveComponent 不会重新渲染 */}
      <ExpensiveComponent data={data} />
    </div>
  );
}
\`\`\`

### 2.2 自定义比较函数

\`\`\`jsx
const UserCard = React.memo(
  ({ user, onUpdate }) => {
    return (
      <div>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <button onClick={onUpdate}>更新</button>
      </div>
    );
  },
  // 自定义比较函数
  (prevProps, nextProps) => {
    // 返回 true 表示不重新渲染
    // 返回 false 表示重新渲染
    return (
      prevProps.user.id === nextProps.user.id &&
      prevProps.user.name === nextProps.user.name &&
      prevProps.user.email === nextProps.user.email
    );
  }
);
\`\`\`

### 2.3 常见陷阱

❌ 内联对象和数组会导致 memo 失效：

\`\`\`jsx
function Parent() {
  return (
    <>
      {/* ❌ 每次渲染都创建新对象，memo 失效 */}
      <Child data={{ name: 'John' }} />
      <Child items={[1, 2, 3]} />

      {/* ✅ 使用 useMemo 缓存对象 */}
      <Child data={useMemo(() => ({ name: 'John' }), [])} />
      <Child items={useMemo(() => [1, 2, 3], [])} />
    </>
  );
}
\`\`\`

## 3. useMemo - 缓存计算结果

useMemo 用于缓存昂贵的计算结果。

### 3.1 基础用法

\`\`\`jsx
function ProductList({ products, searchTerm }) {
  // 只在 products 或 searchTerm 变化时重新计算
  const filteredProducts = useMemo(() => {
    console.log('过滤产品...');
    return products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  const totalPrice = useMemo(() => {
    console.log('计算总价...');
    return filteredProducts.reduce((sum, p) => sum + p.price, 0);
  }, [filteredProducts]);

  return (
    <div>
      <p>总价: ¥{totalPrice}</p>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            {product.name} - ¥{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

### 3.2 缓存对象和数组

\`\`\`jsx
function DataVisualization({ rawData }) {
  // 缓存处理后的数据对象
  const processedData = useMemo(() => {
    return {
      labels: rawData.map(d => d.label),
      values: rawData.map(d => d.value),
      colors: rawData.map(d => d.color),
    };
  }, [rawData]);

  // 缓存配置对象
  const chartConfig = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true },
    },
  }), []); // 空依赖数组，配置永远不变

  return <Chart data={processedData} config={chartConfig} />;
}
\`\`\`

### 3.3 使用场景

✅ **适合使用 useMemo 的场景：**
- 复杂的数据转换和过滤
- 大量数据的排序和计算
- 昂贵的递归计算
- 创建需要传递给子组件的对象/数组

❌ **不需要使用 useMemo 的场景：**
- 简单的计算（加减乘除）
- 基本类型值的比较
- 每次都需要重新计算的值

## 4. useCallback - 缓存函数

useCallback 用于缓存函数引用，防止子组件不必要的重新渲染。

### 4.1 基础用法

\`\`\`jsx
const ChildComponent = React.memo(({ onClick, data }) => {
  console.log('ChildComponent 渲染');
  return (
    <button onClick={() => onClick(data)}>
      处理数据
    </button>
  );
});

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  // ❌ 每次渲染都创建新函数
  const handleClick = (data) => {
    console.log('处理:', data);
  };

  // ✅ 函数被缓存
  const handleClick = useCallback((data) => {
    console.log('处理:', data);
  }, []); // 空依赖，函数永不变

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      <ChildComponent onClick={handleClick} data="test" />
    </div>
  );
}
\`\`\`

### 4.2 依赖项的使用

\`\`\`jsx
function SearchBar({ userId }) {
  const [query, setQuery] = useState('');

  // 依赖 userId 和 query
  const handleSearch = useCallback(() => {
    fetch(\`/api/search?userId=\${userId}&q=\${query}\`)
      .then(res => res.json())
      .then(data => console.log(data));
  }, [userId, query]); // 当 userId 或 query 变化时，函数会重新创建

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>搜索</button>
    </div>
  );
}
\`\`\`

### 4.3 useCallback vs useMemo

\`\`\`jsx
// useCallback 缓存函数本身
const handleClick = useCallback(() => {
  console.log('clicked');
}, []);

// useMemo 缓存函数的返回值
const handleClick = useMemo(() => {
  return () => console.log('clicked');
}, []);

// 两者等价，但 useCallback 更语义化
\`\`\`

## 5. 虚拟化长列表

对于大量数据的列表，使用虚拟化技术只渲染可见区域的元素。

### 5.1 使用 react-window

\`\`\`jsx
import { FixedSizeList as List } from 'react-window';

function VirtualizedList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style} className="list-item">
      <h4>{items[index].title}</h4>
      <p>{items[index].description}</p>
    </div>
  );

  return (
    <List
      height={600}        // 列表容器高度
      itemCount={items.length}  // 总项目数
      itemSize={80}       // 每项高度
      width="100%"
    >
      {Row}
    </List>
  );
}

// 使用示例
function App() {
  const items = Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    title: \`Item \${i}\`,
    description: \`Description for item \${i}\`,
  }));

  return <VirtualizedList items={items} />;
}
\`\`\`

### 5.2 可变高度列表

\`\`\`jsx
import { VariableSizeList as List } from 'react-window';

function DynamicList({ items }) {
  const listRef = useRef();

  // 根据内容动态计算高度
  const getItemSize = (index) => {
    const item = items[index];
    return item.type === 'header' ? 50 : 80;
  };

  const Row = ({ index, style }) => {
    const item = items[index];
    return (
      <div style={style} className={item.type}>
        {item.content}
      </div>
    );
  };

  return (
    <List
      ref={listRef}
      height={600}
      itemCount={items.length}
      itemSize={getItemSize}
      width="100%"
    >
      {Row}
    </List>
  );
}
\`\`\`

### 5.3 使用 react-virtuoso

更简单的虚拟化方案：

\`\`\`jsx
import { Virtuoso } from 'react-virtuoso';

function SimpleVirtualList({ items }) {
  return (
    <Virtuoso
      style={{ height: '600px' }}
      data={items}
      itemContent={(index, item) => (
        <div>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      )}
    />
  );
}
\`\`\`

## 6. 代码分割与懒加载

### 6.1 基于路由的代码分割

\`\`\`jsx
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 懒加载组件
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

// 加载提示组件
const LoadingSpinner = () => (
  <div className="loading-container">
    <div className="spinner">加载中...</div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
\`\`\`

### 6.2 基于组件的代码分割

\`\`\`jsx
const HeavyChart = lazy(() => import('./components/HeavyChart'));
const DataTable = lazy(() => import('./components/DataTable'));

function Analytics() {
  const [showChart, setShowChart] = useState(false);

  return (
    <div>
      <button onClick={() => setShowChart(!showChart)}>
        {showChart ? '隐藏' : '显示'}图表
      </button>

      {showChart && (
        <Suspense fallback={<div>加载图表中...</div>}>
          <HeavyChart />
        </Suspense>
      )}
    </div>
  );
}
\`\`\`

### 6.3 预加载

\`\`\`jsx
// 动态导入返回 Promise，可以手动预加载
const ChartModule = () => import('./components/HeavyChart');

function App() {
  // 鼠标悬停时预加载
  const handleMouseEnter = () => {
    ChartModule();
  };

  return (
    <div>
      <button onMouseEnter={handleMouseEnter}>
        显示图表
      </button>
    </div>
  );
}
\`\`\`

## 7. 避免不必要的渲染

### 7.1 状态下沉

将状态放到最需要它的组件中：

\`\`\`jsx
// ❌ 状态提升导致整个组件树重新渲染
function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <Header />
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <Results searchTerm={searchTerm} />
      <Footer />
    </div>
  );
}

// ✅ 状态下沉，只有 SearchSection 重新渲染
function App() {
  return (
    <div>
      <Header />
      <SearchSection />
      <Footer />
    </div>
  );
}

function SearchSection() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <Results searchTerm={searchTerm} />
    </>
  );
}
\`\`\`

### 7.2 状态分离

将频繁变化的状态与稳定状态分离：

\`\`\`jsx
// ❌ 输入框变化导致整个表单重新渲染
function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  return (
    <div>
      <ExpensiveComponent />
      <input
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      {/* 其他字段 */}
    </div>
  );
}

// ✅ 将输入框状态分离
function Form() {
  return (
    <div>
      <ExpensiveComponent />
      <NameInput />
      <EmailInput />
      <MessageInput />
    </div>
  );
}

function NameInput() {
  const [value, setValue] = useState('');
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
\`\`\`

### 7.3 使用 key 优化列表渲染

\`\`\`jsx
// ❌ 使用 index 作为 key
function BadList({ items }) {
  return items.map((item, index) => (
    <div key={index}>{item.name}</div>
  ));
}

// ✅ 使用唯一 ID 作为 key
function GoodList({ items }) {
  return items.map(item => (
    <div key={item.id}>{item.name}</div>
  ));
}

// ✅ 对于静态列表，可以使用 index
function StaticList({ items }) {
  return items.map((item, index) => (
    <div key={index}>{item}</div>
  ));
}
\`\`\`

## 8. 图片和资源优化

### 8.1 懒加载图片

\`\`\`jsx
function LazyImage({ src, alt }) {
  const [imageSrc, setImageSrc] = useState(null);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={imageSrc || '/placeholder.png'}
      alt={alt}
      loading="lazy"
    />
  );
}
\`\`\`

### 8.2 使用 WebP 格式

\`\`\`jsx
function OptimizedImage({ src, alt }) {
  const webpSrc = src.replace(/\.(jpg|png)$/, '.webp');

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img src={src} alt={alt} loading="lazy" />
    </picture>
  );
}
\`\`\`

## 9. 防抖和节流

### 9.1 防抖（Debounce）

\`\`\`jsx
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

// 使用示例：搜索输入
function SearchBox() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearch) {
      // 执行搜索 API 调用
      fetchSearchResults(debouncedSearch);
    }
  }, [debouncedSearch]);

  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="搜索..."
    />
  );
}
\`\`\`

### 9.2 节流（Throttle）

\`\`\`jsx
function useThrottle(value, limit) {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastRan = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRan.current >= limit) {
        setThrottledValue(value);
        lastRan.current = Date.now();
      }
    }, limit - (Date.now() - lastRan.current));

    return () => clearTimeout(handler);
  }, [value, limit]);

  return throttledValue;
}

// 使用示例：滚动事件
function ScrollTracker() {
  const [scrollY, setScrollY] = useState(0);
  const throttledScrollY = useThrottle(scrollY, 100);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div>滚动位置: {throttledScrollY}px</div>;
}
\`\`\`

## 10. Web Workers

将计算密集型任务移到 Web Worker：

\`\`\`jsx
// worker.js
self.addEventListener('message', (e) => {
  const { data } = e;
  // 执行复杂计算
  const result = expensiveComputation(data);
  self.postMessage(result);
});

// React 组件
function HeavyComputation() {
  const [result, setResult] = useState(null);
  const workerRef = useRef();

  useEffect(() => {
    workerRef.current = new Worker('worker.js');

    workerRef.current.onmessage = (e) => {
      setResult(e.data);
    };

    return () => workerRef.current.terminate();
  }, []);

  const handleCompute = (data) => {
    workerRef.current.postMessage(data);
  };

  return (
    <div>
      <button onClick={() => handleCompute(largeDataset)}>
        开始计算
      </button>
      {result && <div>结果: {result}</div>}
    </div>
  );
}
\`\`\`

## 11. 性能监控

### 11.1 Web Vitals

\`\`\`jsx
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  // 发送到分析服务
  console.log(metric);
}

// 监控核心 Web 指标
getCLS(sendToAnalytics);  // Cumulative Layout Shift
getFID(sendToAnalytics);  // First Input Delay
getFCP(sendToAnalytics);  // First Contentful Paint
getLCP(sendToAnalytics);  // Largest Contentful Paint
getTTFB(sendToAnalytics); // Time to First Byte
\`\`\`

### 11.2 自定义性能指标

\`\`\`jsx
function usePerformanceMetrics() {
  useEffect(() => {
    // 测量组件挂载时间
    const mountTime = performance.now();

    return () => {
      const unmountTime = performance.now();
      const duration = unmountTime - mountTime;
      console.log(\`组件存活时间: \${duration}ms\`);
    };
  }, []);
}
\`\`\`

## 12. 最佳实践总结

### 性能优化清单

✅ **必做优化：**
- 使用 React DevTools Profiler 分析性能
- 为长列表实现虚拟化
- 实施代码分割和懒加载
- 优化图片资源
- 使用防抖/节流处理频繁事件

⚠️ **谨慎使用：**
- React.memo - 不要过度使用
- useMemo/useCallback - 确认有性能收益
- Context - 避免频繁变化的值

❌ **避免：**
- 在 render 中创建新对象/数组
- 在循环中使用 index 作为 key
- 过早优化

### 优化原则

1. **测量优先**：先测量，再优化，确认效果
2. **渐进式优化**：从影响最大的地方开始
3. **用户体验优先**：确保优化不影响功能
4. **保持代码可读性**：不要为了优化牺牲可维护性

## 总结

React 性能优化是一个持续的过程，需要根据实际情况选择合适的优化策略。记住这些关键要点：

- 🔍 **分析工具** - 使用 Profiler 和 DevTools 定位问题
- 📝 **React.memo** - 优化组件重新渲染
- 💾 **useMemo/useCallback** - 缓存值和函数
- 📜 **虚拟化** - 优化长列表性能
- ✂️ **代码分割** - 按需加载减少初始包大小
- 🎯 **状态管理** - 合理组织状态避免不必要渲染
- 🖼️ **资源优化** - 懒加载和压缩图片
- ⏱️ **防抖节流** - 优化高频事件处理

持续关注性能指标，为用户提供流畅的体验！
`,
    en: `
## Introduction

React application performance optimization is a key aspect of building high-quality frontend applications. As applications scale, unreasonable component design and rendering strategies can lead to serious performance issues. This article will deeply explore the core concepts, tools, and practical techniques of React performance optimization to help you build fast and smooth user experiences.

## 1. Performance Analysis Tools

Before optimizing performance, we need to identify problems first.

### 1.1 React DevTools Profiler

React DevTools provides powerful performance analysis tools:

\`\`\`jsx
import { Profiler } from 'react';

function onRenderCallback(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
  interactions
) {
  console.log(\`\${id} \${phase} phase took \${actualDuration}ms\`);
}

function App() {
  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <Dashboard />
    </Profiler>
  );
}
\`\`\`

### 1.2 Chrome DevTools Performance

Use Chrome's Performance panel to record and analyze runtime performance.

### 1.3 why-did-you-render

Detect unnecessary component re-renders:

\`\`\`jsx
import React from 'react';

if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}

MyComponent.whyDidYouRender = true;
\`\`\`

## 2. React.memo - Component Memoization

React.memo is a higher-order component used to optimize re-rendering of function components.

### 2.1 Basic Usage

\`\`\`jsx
const ExpensiveComponent = React.memo(({ data }) => {
  console.log('ExpensiveComponent rendering');
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
});

function Parent() {
  const [count, setCount] = useState(0);
  const data = [{ id: 1, name: 'Item 1' }];

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      {/* ExpensiveComponent won't re-render when count changes */}
      <ExpensiveComponent data={data} />
    </div>
  );
}
\`\`\`

### 2.2 Custom Comparison Function

\`\`\`jsx
const UserCard = React.memo(
  ({ user, onUpdate }) => {
    return (
      <div>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <button onClick={onUpdate}>Update</button>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.user.id === nextProps.user.id &&
      prevProps.user.name === nextProps.user.name &&
      prevProps.user.email === nextProps.user.email
    );
  }
);
\`\`\`

## 3. useMemo - Caching Computed Results

useMemo is used to cache expensive computation results.

### 3.1 Basic Usage

\`\`\`jsx
function ProductList({ products, searchTerm }) {
  const filteredProducts = useMemo(() => {
    console.log('Filtering products...');
    return products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  const totalPrice = useMemo(() => {
    console.log('Calculating total...');
    return filteredProducts.reduce((sum, p) => sum + p.price, 0);
  }, [filteredProducts]);

  return (
    <div>
      <p>Total: ¥{totalPrice}</p>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            {product.name} - ¥{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

## 4. useCallback - Caching Functions

useCallback is used to cache function references and prevent unnecessary re-renders of child components.

### 4.1 Basic Usage

\`\`\`jsx
const ChildComponent = React.memo(({ onClick, data }) => {
  console.log('ChildComponent rendering');
  return (
    <button onClick={() => onClick(data)}>
      Process Data
    </button>
  );
});

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback((data) => {
    console.log('Processing:', data);
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      <ChildComponent onClick={handleClick} data="test" />
    </div>
  );
}
\`\`\`

## 5. Virtualizing Long Lists

For lists with large amounts of data, use virtualization techniques to render only visible elements.

### 5.1 Using react-window

\`\`\`jsx
import { FixedSizeList as List } from 'react-window';

function VirtualizedList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style} className="list-item">
      <h4>{items[index].title}</h4>
      <p>{items[index].description}</p>
    </div>
  );

  return (
    <List
      height={600}
      itemCount={items.length}
      itemSize={80}
      width="100%"
    >
      {Row}
    </List>
  );
}
\`\`\`

### 5.2 Variable Height Lists

\`\`\`jsx
import { VariableSizeList as List } from 'react-window';

function DynamicList({ items }) {
  const listRef = useRef();

  const getItemSize = (index) => {
    const item = items[index];
    return item.type === 'header' ? 50 : 80;
  };

  const Row = ({ index, style }) => {
    const item = items[index];
    return (
      <div style={style} className={item.type}>
        {item.content}
      </div>
    );
  };

  return (
    <List
      ref={listRef}
      height={600}
      itemCount={items.length}
      itemSize={getItemSize}
      width="100%"
    >
      {Row}
    </List>
  );
}
\`\`\`

## 6. Code Splitting and Lazy Loading

### 6.1 Route-based Code Splitting

\`\`\`jsx
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

const LoadingSpinner = () => (
  <div className="loading-container">
    <div className="spinner">Loading...</div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
\`\`\`

### 6.2 Component-based Code Splitting

\`\`\`jsx
const HeavyChart = lazy(() => import('./components/HeavyChart'));

function Analytics() {
  const [showChart, setShowChart] = useState(false);

  return (
    <div>
      <button onClick={() => setShowChart(!showChart)}>
        {showChart ? 'Hide' : 'Show'} Chart
      </button>

      {showChart && (
        <Suspense fallback={<div>Loading chart...</div>}>
          <HeavyChart />
        </Suspense>
      )}
    </div>
  );
}
\`\`\`

## 7. Avoiding Unnecessary Renders

### 7.1 State Colocation

Place state in the component that needs it most:

\`\`\`jsx
// ❌ State lifting causes entire component tree to re-render
function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <Header />
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <Results searchTerm={searchTerm} />
      <Footer />
    </div>
  );
}

// ✅ State colocation, only SearchSection re-renders
function App() {
  return (
    <div>
      <Header />
      <SearchSection />
      <Footer />
    </div>
  );
}

function SearchSection() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <Results searchTerm={searchTerm} />
    </>
  );
}
\`\`\`

## 8. Image and Resource Optimization

### 8.1 Lazy Loading Images

\`\`\`jsx
function LazyImage({ src, alt }) {
  const [imageSrc, setImageSrc] = useState(null);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={imageSrc || '/placeholder.png'}
      alt={alt}
      loading="lazy"
    />
  );
}
\`\`\`

## 9. Debouncing and Throttling

### 9.1 Debounce

\`\`\`jsx
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearch) {
      fetchSearchResults(debouncedSearch);
    }
  }, [debouncedSearch]);

  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}
\`\`\`

### 9.2 Throttle

\`\`\`jsx
function useThrottle(value, limit) {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastRan = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRan.current >= limit) {
        setThrottledValue(value);
        lastRan.current = Date.now();
      }
    }, limit - (Date.now() - lastRan.current));

    return () => clearTimeout(handler);
  }, [value, limit]);

  return throttledValue;
}
\`\`\`

## 10. Web Workers

Move computationally intensive tasks to Web Workers:

\`\`\`jsx
// worker.js
self.addEventListener('message', (e) => {
  const { data } = e;
  const result = expensiveComputation(data);
  self.postMessage(result);
});

// React component
function HeavyComputation() {
  const [result, setResult] = useState(null);
  const workerRef = useRef();

  useEffect(() => {
    workerRef.current = new Worker('worker.js');

    workerRef.current.onmessage = (e) => {
      setResult(e.data);
    };

    return () => workerRef.current.terminate();
  }, []);

  const handleCompute = (data) => {
    workerRef.current.postMessage(data);
  };

  return (
    <div>
      <button onClick={() => handleCompute(largeDataset)}>
        Start Computation
      </button>
      {result && <div>Result: {result}</div>}
    </div>
  );
}
\`\`\`

## 11. Performance Monitoring

### 11.1 Web Vitals

\`\`\`jsx
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  console.log(metric);
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
\`\`\`

## 12. Best Practices Summary

### Performance Optimization Checklist

✅ **Must-do Optimizations:**
- Use React DevTools Profiler to analyze performance
- Implement virtualization for long lists
- Implement code splitting and lazy loading
- Optimize image resources
- Use debounce/throttle for frequent events

⚠️ **Use Carefully:**
- React.memo - Don't overuse
- useMemo/useCallback - Confirm performance benefits
- Context - Avoid frequently changing values

❌ **Avoid:**
- Creating new objects/arrays in render
- Using index as key in loops
- Premature optimization

### Optimization Principles

1. **Measure First**: Measure, then optimize, confirm results
2. **Progressive Optimization**: Start with the biggest impact
3. **User Experience First**: Ensure optimization doesn't affect functionality
4. **Maintain Code Readability**: Don't sacrifice maintainability for optimization

## Summary

React performance optimization is a continuous process that requires selecting appropriate optimization strategies based on actual situations. Remember these key points:

- 🔍 **Analysis Tools** - Use Profiler and DevTools to identify issues
- 📝 **React.memo** - Optimize component re-rendering
- 💾 **useMemo/useCallback** - Cache values and functions
- 📜 **Virtualization** - Optimize long list performance
- ✂️ **Code Splitting** - Load on demand to reduce initial bundle size
- 🎯 **State Management** - Organize state reasonably to avoid unnecessary renders
- 🖼️ **Resource Optimization** - Lazy load and compress images
- ⏱️ **Debounce/Throttle** - Optimize high-frequency event handling

Continuously monitor performance metrics and provide smooth experiences for users!
`,
    ja: `
## はじめに

Reactアプリケーションのパフォーマンス最適化は、高品質なフロントエンドアプリケーションを構築する上で重要な要素です。アプリケーションの規模が大きくなるにつれて、不適切なコンポーネント設計やレンダリング戦略は深刻なパフォーマンス問題を引き起こす可能性があります。

## 1. パフォーマンス分析ツール

### 1.1 React DevTools Profiler

React DevToolsは強力なパフォーマンス分析ツールを提供します：

\`\`\`jsx
import { Profiler } from 'react';

function onRenderCallback(id, phase, actualDuration) {
  console.log(\`\${id} \${phase}フェーズは\${actualDuration}msかかりました\`);
}

function App() {
  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <Dashboard />
    </Profiler>
  );
}
\`\`\`

### 1.2 Chrome DevTools Performance

ChromeのPerformanceパネルを使用してランタイムパフォーマンスを記録および分析します。

## 2. React.memo - コンポーネントのメモ化

React.memoは、関数コンポーネントの再レンダリングを最適化するための高階コンポーネントです。

\`\`\`jsx
const ExpensiveComponent = React.memo(({ data }) => {
  console.log('ExpensiveComponentレンダリング');
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
});

function Parent() {
  const [count, setCount] = useState(0);
  const data = [{ id: 1, name: 'Item 1' }];

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        カウント: {count}
      </button>
      <ExpensiveComponent data={data} />
    </div>
  );
}
\`\`\`

## 3. useMemo - 計算結果のキャッシュ

useMemoは、高価な計算結果をキャッシュするために使用されます。

\`\`\`jsx
function ProductList({ products, searchTerm }) {
  const filteredProducts = useMemo(() => {
    console.log('製品をフィルタリング中...');
    return products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  const totalPrice = useMemo(() => {
    return filteredProducts.reduce((sum, p) => sum + p.price, 0);
  }, [filteredProducts]);

  return (
    <div>
      <p>合計: ¥{totalPrice}</p>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            {product.name} - ¥{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

## 4. useCallback - 関数のキャッシュ

useCallbackは、関数参照をキャッシュして、子コンポーネントの不必要な再レンダリングを防ぐために使用されます。

\`\`\`jsx
const ChildComponent = React.memo(({ onClick, data }) => {
  return (
    <button onClick={() => onClick(data)}>
      データを処理
    </button>
  );
});

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback((data) => {
    console.log('処理中:', data);
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        カウント: {count}
      </button>
      <ChildComponent onClick={handleClick} data="test" />
    </div>
  );
}
\`\`\`

## 5. 長いリストの仮想化

大量のデータを含むリストの場合、仮想化技術を使用して、表示される要素のみをレンダリングします。

### 5.1 react-windowの使用

\`\`\`jsx
import { FixedSizeList as List } from 'react-window';

function VirtualizedList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style} className="list-item">
      <h4>{items[index].title}</h4>
      <p>{items[index].description}</p>
    </div>
  );

  return (
    <List
      height={600}
      itemCount={items.length}
      itemSize={80}
      width="100%"
    >
      {Row}
    </List>
  );
}
\`\`\`

## 6. コード分割と遅延読み込み

### 6.1 ルートベースのコード分割

\`\`\`jsx
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>読み込み中...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
\`\`\`

## 7. 不要なレンダリングの回避

### 7.1 状態の配置

状態を最も必要とするコンポーネントに配置します：

\`\`\`jsx
// ✅ 状態の配置、SearchSectionのみが再レンダリング
function App() {
  return (
    <div>
      <Header />
      <SearchSection />
      <Footer />
    </div>
  );
}

function SearchSection() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <Results searchTerm={searchTerm} />
    </>
  );
}
\`\`\`

## 8. 画像とリソースの最適化

### 8.1 画像の遅延読み込み

\`\`\`jsx
function LazyImage({ src, alt }) {
  const [imageSrc, setImageSrc] = useState(null);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={imageSrc || '/placeholder.png'}
      alt={alt}
      loading="lazy"
    />
  );
}
\`\`\`

## 9. デバウンスとスロットル

### 9.1 デバウンス

\`\`\`jsx
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
\`\`\`

## まとめ

Reactのパフォーマンス最適化は継続的なプロセスです。実際の状況に基づいて適切な最適化戦略を選択する必要があります：

- 🔍 **分析ツール** - ProfilerとDevToolsを使用して問題を特定
- 📝 **React.memo** - コンポーネントの再レンダリングを最適化
- 💾 **useMemo/useCallback** - 値と関数をキャッシュ
- 📜 **仮想化** - 長いリストのパフォーマンスを最適化
- ✂️ **コード分割** - オンデマンドで読み込み、初期バンドルサイズを削減
- 🎯 **状態管理** - 不要なレンダリングを避けるために状態を適切に整理
- 🖼️ **リソース最適化** - 画像の遅延読み込みと圧縮
- ⏱️ **デバウンス/スロットル** - 高頻度イベント処理の最適化

パフォーマンスメトリクスを継続的に監視し、ユーザーにスムーズな体験を提供しましょう！
`,
  },
};
