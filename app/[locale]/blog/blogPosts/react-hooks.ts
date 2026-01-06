export const reactHooks = {
  slug: "react-hooks",
  title: "React Hooks 完全指南",
  date: "2024-02-15",
  readTime: "20 分钟",
  tags: ["React", "Hooks", "前端"],
  content: {
    zh: `
## 引言

React Hooks 是 React 16.8 引入的革命性特性，它彻底改变了我们编写 React 组件的方式。通过 Hooks，我们可以在函数组件中使用状态、生命周期和其他 React 特性，无需编写类组件。本文将深入探讨 React Hooks 的核心概念、使用方法和最佳实践。

## 1. useState - 状态管理

useState 是最基础也是最常用的 Hook，它让函数组件拥有自己的状态。

### 1.1 基础用法

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>当前计数: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        增加
      </button>
      <button onClick={() => setCount(count - 1)}>
        减少
      </button>
      <button onClick={() => setCount(0)}>
        重置
      </button>
    </div>
  );
}
\`\`\`

### 1.2 函数式更新

当新状态依赖于旧状态时，应该使用函数式更新来确保获取到最新的状态：

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);

  const handleMultipleUpdates = () => {
    // ❌ 错误：这样只会增加 1
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);

    // ✅ 正确：使用函数式更新，会增加 3
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleMultipleUpdates}>增加 3</button>
    </div>
  );
}
\`\`\`

### 1.3 复杂状态管理

对于对象或数组类型的状态，需要注意不可变更新：

\`\`\`jsx
function UserProfile() {
  const [user, setUser] = useState({
    name: 'Alice',
    age: 25,
    address: {
      city: 'Beijing',
      street: 'Main St'
    }
  });

  const updateName = (newName) => {
    // ✅ 创建新对象
    setUser(prev => ({
      ...prev,
      name: newName
    }));
  };

  const updateCity = (newCity) => {
    // ✅ 深度更新嵌套对象
    setUser(prev => ({
      ...prev,
      address: {
        ...prev.address,
        city: newCity
      }
    }));
  };

  return (
    <div>
      <p>姓名: {user.name}</p>
      <p>城市: {user.address.city}</p>
      <button onClick={() => updateName('Bob')}>更新姓名</button>
      <button onClick={() => updateCity('Shanghai')}>更新城市</button>
    </div>
  );
}
\`\`\`

### 1.4 惰性初始化

对于复杂的初始状态计算，可以使用函数形式避免每次渲染都执行：

\`\`\`jsx
function ExpensiveComponent() {
  // ❌ 每次渲染都会执行
  const [data, setData] = useState(expensiveComputation());

  // ✅ 只在初始渲染时执行一次
  const [data, setData] = useState(() => expensiveComputation());

  return <div>{data}</div>;
}

function expensiveComputation() {
  console.log('计算中...');
  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    result += i;
  }
  return result;
}
\`\`\`

## 2. useEffect - 副作用处理

useEffect 用于处理副作用，如数据获取、订阅、DOM 操作等。

### 2.1 基础用法

\`\`\`jsx
function DataFetcher({ userId }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(\`https://api.example.com/users/\${userId}\`)
      .then(response => {
        if (!response.ok) throw new Error('请求失败');
        return response.json();
      })
      .then(data => {
        setData(data);
        setError(null);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [userId]); // 当 userId 变化时重新执行

  if (loading) return <div>加载中...</div>;
  if (error) return <div>错误: {error}</div>;
  return <div>{data && JSON.stringify(data)}</div>;
}
\`\`\`

### 2.2 清理副作用

返回清理函数来避免内存泄漏：

\`\`\`jsx
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // 清理函数：在组件卸载或依赖变化前执行
    return () => {
      clearInterval(interval);
      console.log('定时器已清理');
    };
  }, []); // 空数组表示只在挂载和卸载时执行

  return <div>已运行 {seconds} 秒</div>;
}
\`\`\`

### 2.3 多个 useEffect

将不相关的逻辑分离到不同的 useEffect 中：

\`\`\`jsx
function UserDashboard({ userId }) {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  // 获取用户信息
  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(setUser);
  }, [userId]);

  // 获取用户文章
  useEffect(() => {
    fetch(\`/api/users/\${userId}/posts\`)
      .then(res => res.json())
      .then(setPosts);
  }, [userId]);

  // 设置文档标题
  useEffect(() => {
    if (user) {
      document.title = \`\${user.name} 的主页\`;
    }
  }, [user]);

  return (
    <div>
      {user && <h1>{user.name}</h1>}
      {posts.map(post => <div key={post.id}>{post.title}</div>)}
    </div>
  );
}
\`\`\`

### 2.4 使用 async/await

useEffect 不能直接使用 async，需要在内部定义异步函数：

\`\`\`jsx
function AsyncDataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // 定义异步函数
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('获取数据失败:', error);
      }
    };

    fetchData();
  }, []);

  return <div>{data ? JSON.stringify(data) : '加载中...'}</div>;
}
\`\`\`

## 3. useContext - 上下文传递

useContext 让我们无需逐层传递 props 就能在组件树中共享数据。

### 3.1 创建和使用 Context

\`\`\`jsx
import { createContext, useContext, useState } from 'react';

// 创建 Context
const ThemeContext = createContext();

// Provider 组件
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 自定义 Hook 简化使用
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme 必须在 ThemeProvider 内使用');
  }
  return context;
}

// 使用示例
function ThemedButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff'
      }}
    >
      当前主题: {theme}
    </button>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemedButton />
    </ThemeProvider>
  );
}
\`\`\`

### 3.2 多个 Context 组合

\`\`\`jsx
const UserContext = createContext();
const NotificationContext = createContext();

function App() {
  return (
    <UserContext.Provider value={user}>
      <NotificationContext.Provider value={notifications}>
        <Dashboard />
      </NotificationContext.Provider>
    </UserContext.Provider>
  );
}

function Dashboard() {
  const user = useContext(UserContext);
  const notifications = useContext(NotificationContext);

  return (
    <div>
      <h1>欢迎, {user.name}</h1>
      <p>你有 {notifications.length} 条通知</p>
    </div>
  );
}
\`\`\`

## 4. useReducer - 复杂状态逻辑

当状态逻辑复杂时，useReducer 是比 useState 更好的选择。

### 4.1 基础用法

\`\`\`jsx
const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step };
    case 'decrement':
      return { ...state, count: state.count - state.step };
    case 'setStep':
      return { ...state, step: action.payload };
    case 'reset':
      return initialState;
    default:
      throw new Error(\`未知的 action 类型: \${action.type}\`);
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>计数: {state.count}</p>
      <p>步长: {state.step}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <input
        type="number"
        value={state.step}
        onChange={(e) => dispatch({
          type: 'setStep',
          payload: Number(e.target.value)
        })}
      />
      <button onClick={() => dispatch({ type: 'reset' })}>重置</button>
    </div>
  );
}
\`\`\`

### 4.2 结合 Context 实现全局状态管理

\`\`\`jsx
const TodoContext = createContext();

const initialState = {
  todos: [],
  filter: 'all' // all, active, completed
};

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, {
          id: Date.now(),
          text: action.payload,
          completed: false
        }]
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}

function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

function useTodos() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos 必须在 TodoProvider 内使用');
  }
  return context;
}
\`\`\`

## 5. useRef - 引用可变值

useRef 可以存储不触发重新渲染的可变值，或访问 DOM 元素。

### 5.1 访问 DOM 元素

\`\`\`jsx
function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
    inputRef.current.select();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>聚焦输入框</button>
    </div>
  );
}
\`\`\`

### 5.2 存储可变值

\`\`\`jsx
function Timer() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    if (intervalRef.current) return; // 防止重复启动

    intervalRef.current = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    return () => stop(); // 组件卸载时清理
  }, []);

  return (
    <div>
      <p>计时: {count}秒</p>
      <button onClick={start}>开始</button>
      <button onClick={stop}>停止</button>
    </div>
  );
}
\`\`\`

### 5.3 保存前一个值

\`\`\`jsx
function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div>
      <p>当前: {count}</p>
      <p>之前: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>增加</button>
    </div>
  );
}
\`\`\`

## 6. useMemo - 缓存计算结果

useMemo 用于缓存昂贵的计算结果，只在依赖变化时重新计算。

\`\`\`jsx
function ExpensiveList({ items, filter }) {
  // 只在 items 或 filter 变化时重新过滤
  const filteredItems = useMemo(() => {
    console.log('过滤数据...');
    return items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  // 只在 filteredItems 变化时重新计算
  const total = useMemo(() => {
    console.log('计算总和...');
    return filteredItems.reduce((sum, item) => sum + item.price, 0);
  }, [filteredItems]);

  return (
    <div>
      <p>总价: ¥{total}</p>
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name} - ¥{item.price}</li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

## 7. useCallback - 缓存函数

useCallback 用于缓存函数，避免子组件不必要的重新渲染。

\`\`\`jsx
const ChildComponent = React.memo(({ onItemClick }) => {
  console.log('子组件渲染');
  return <button onClick={() => onItemClick('data')}>点击</button>;
});

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  // ❌ 每次渲染都创建新函数，导致子组件重新渲染
  const handleItemClick = (item) => {
    console.log('点击了:', item);
  };

  // ✅ 函数被缓存，子组件不会重新渲染
  const handleItemClick = useCallback((item) => {
    console.log('点击了:', item);
  }, []); // 空依赖数组表示函数永远不变

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>增加</button>
      <ChildComponent onItemClick={handleItemClick} />
    </div>
  );
}
\`\`\`

## 8. 自定义 Hooks

自定义 Hooks 让我们能够复用状态逻辑。

### 8.1 useLocalStorage - 持久化状态

\`\`\`jsx
function useLocalStorage(key, initialValue) {
  // 从 localStorage 读取初始值
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // 更新状态和 localStorage
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function
        ? value(storedValue)
        : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

// 使用示例
function App() {
  const [name, setName] = useLocalStorage('name', 'Anonymous');

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="输入你的名字"
    />
  );
}
\`\`\`

### 8.2 useFetch - 数据获取

\`\`\`jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('请求失败');
        const result = await response.json();

        if (!isCancelled) {
          setData(result);
          setError(null);
        }
      } catch (err) {
        if (!isCancelled) {
          setError(err.message);
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isCancelled = true;
    };
  }, [url]);

  return { data, loading, error };
}

// 使用示例
function UserProfile({ userId }) {
  const { data, loading, error } = useFetch(
    \`https://api.example.com/users/\${userId}\`
  );

  if (loading) return <div>加载中...</div>;
  if (error) return <div>错误: {error}</div>;
  return <div>{data && data.name}</div>;
}
\`\`\`

### 8.3 useDebounce - 防抖

\`\`\`jsx
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// 使用示例
function SearchInput() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // 执行搜索
      console.log('搜索:', debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="搜索..."
    />
  );
}
\`\`\`

### 8.4 useMediaQuery - 响应式查询

\`\`\`jsx
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}

// 使用示例
function ResponsiveComponent() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
  const isDesktop = useMediaQuery('(min-width: 1025px)');

  return (
    <div>
      {isMobile && <MobileView />}
      {isTablet && <TabletView />}
      {isDesktop && <DesktopView />}
    </div>
  );
}
\`\`\`

## 9. Hooks 使用规则

### 9.1 只在顶层调用 Hooks

❌ 不要在循环、条件或嵌套函数中调用 Hooks

\`\`\`jsx
// ❌ 错误
function BadExample({ condition }) {
  if (condition) {
    const [state, setState] = useState(0); // 错误！
  }

  // ✅ 正确
  const [state, setState] = useState(0);

  if (condition) {
    // 使用 state
  }
}
\`\`\`

### 9.2 只在 React 函数中调用 Hooks

✅ 可以在以下地方调用 Hooks：
- React 函数组件
- 自定义 Hooks

❌ 不要在普通 JavaScript 函数中调用

## 10. 最佳实践

### 10.1 合理拆分 Effect

将不相关的逻辑分离到不同的 useEffect 中，提高代码可读性和可维护性。

### 10.2 使用 ESLint 插件

安装 \`eslint-plugin-react-hooks\` 自动检查 Hooks 使用规则。

### 10.3 避免过度优化

不是所有地方都需要 useMemo 和 useCallback，只在确实存在性能问题时使用。

### 10.4 自定义 Hooks 命名

自定义 Hooks 必须以 "use" 开头，这样 ESLint 才能正确检查。

## 总结

React Hooks 让函数组件变得强大而灵活，掌握这些核心 Hooks 和最佳实践，能够帮助你编写更简洁、更易维护的 React 应用。记住：

- 🎯 **useState** - 管理组件状态
- 🔄 **useEffect** - 处理副作用
- 🌐 **useContext** - 共享全局数据
- 🎛️ **useReducer** - 复杂状态逻辑
- 📌 **useRef** - 引用 DOM 或可变值
- 💾 **useMemo** - 缓存计算结果
- 🔗 **useCallback** - 缓存函数引用
- 🔧 **自定义 Hooks** - 复用逻辑

继续实践，你会发现 Hooks 的更多妙用！
`,
    en: `
## Introduction

React Hooks, introduced in React 16.8, is a revolutionary feature that fundamentally changed how we write React components. With Hooks, we can use state, lifecycle, and other React features in function components without writing class components. This article will deeply explore the core concepts, usage methods, and best practices of React Hooks.

## 1. useState - State Management

useState is the most basic and commonly used Hook that gives function components their own state.

### 1.1 Basic Usage

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}
\`\`\`

### 1.2 Functional Updates

When new state depends on old state, use functional updates to ensure getting the latest state:

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);

  const handleMultipleUpdates = () => {
    // ❌ Wrong: This only increments by 1
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);

    // ✅ Correct: Using functional updates, increments by 3
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleMultipleUpdates}>Increment by 3</button>
    </div>
  );
}
\`\`\`

### 1.3 Complex State Management

For object or array state, remember immutable updates:

\`\`\`jsx
function UserProfile() {
  const [user, setUser] = useState({
    name: 'Alice',
    age: 25,
    address: {
      city: 'Beijing',
      street: 'Main St'
    }
  });

  const updateName = (newName) => {
    // ✅ Create new object
    setUser(prev => ({
      ...prev,
      name: newName
    }));
  };

  const updateCity = (newCity) => {
    // ✅ Deep update nested object
    setUser(prev => ({
      ...prev,
      address: {
        ...prev.address,
        city: newCity
      }
    }));
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>City: {user.address.city}</p>
      <button onClick={() => updateName('Bob')}>Update Name</button>
      <button onClick={() => updateCity('Shanghai')}>Update City</button>
    </div>
  );
}
\`\`\`

### 1.4 Lazy Initialization

For complex initial state computation, use function form to avoid execution on every render:

\`\`\`jsx
function ExpensiveComponent() {
  // ❌ Executes on every render
  const [data, setData] = useState(expensiveComputation());

  // ✅ Only executes once on initial render
  const [data, setData] = useState(() => expensiveComputation());

  return <div>{data}</div>;
}

function expensiveComputation() {
  console.log('Computing...');
  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    result += i;
  }
  return result;
}
\`\`\`

## 2. useEffect - Side Effect Handling

useEffect handles side effects like data fetching, subscriptions, DOM manipulation, etc.

### 2.1 Basic Usage

\`\`\`jsx
function DataFetcher({ userId }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(\`https://api.example.com/users/\${userId}\`)
      .then(response => {
        if (!response.ok) throw new Error('Request failed');
        return response.json();
      })
      .then(data => {
        setData(data);
        setError(null);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [userId]); // Re-run when userId changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return <div>{data && JSON.stringify(data)}</div>;
}
\`\`\`

### 2.2 Cleanup Side Effects

Return a cleanup function to avoid memory leaks:

\`\`\`jsx
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup function: executes before component unmount or dependency change
    return () => {
      clearInterval(interval);
      console.log('Timer cleaned up');
    };
  }, []); // Empty array means only run on mount and unmount

  return <div>Running for {seconds} seconds</div>;
}
\`\`\`

## 3. useContext - Context Sharing

useContext allows sharing data across the component tree without prop drilling.

### 3.1 Creating and Using Context

\`\`\`jsx
import { createContext, useContext, useState } from 'react';

// Create Context
const ThemeContext = createContext();

// Provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom Hook for easier usage
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

// Usage example
function ThemedButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff'
      }}
    >
      Current theme: {theme}
    </button>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemedButton />
    </ThemeProvider>
  );
}
\`\`\`

## 4. useReducer - Complex State Logic

When state logic is complex, useReducer is a better choice than useState.

### 4.1 Basic Usage

\`\`\`jsx
const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step };
    case 'decrement':
      return { ...state, count: state.count - state.step };
    case 'setStep':
      return { ...state, step: action.payload };
    case 'reset':
      return initialState;
    default:
      throw new Error(\`Unknown action type: \${action.type}\`);
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <p>Step: {state.step}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <input
        type="number"
        value={state.step}
        onChange={(e) => dispatch({
          type: 'setStep',
          payload: Number(e.target.value)
        })}
      />
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}
\`\`\`

## 5. useRef - Referencing Mutable Values

useRef can store mutable values that don't trigger re-renders, or access DOM elements.

### 5.1 Accessing DOM Elements

\`\`\`jsx
function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
    inputRef.current.select();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}
\`\`\`

### 5.2 Storing Mutable Values

\`\`\`jsx
function Timer() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    if (intervalRef.current) return; // Prevent duplicate starts

    intervalRef.current = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    return () => stop(); // Cleanup on component unmount
  }, []);

  return (
    <div>
      <p>Timer: {count}s</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}
\`\`\`

## 6. useMemo - Caching Computed Results

useMemo caches expensive computation results, only recalculating when dependencies change.

\`\`\`jsx
function ExpensiveList({ items, filter }) {
  // Only re-filter when items or filter changes
  const filteredItems = useMemo(() => {
    console.log('Filtering data...');
    return items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  // Only recalculate when filteredItems changes
  const total = useMemo(() => {
    console.log('Calculating total...');
    return filteredItems.reduce((sum, item) => sum + item.price, 0);
  }, [filteredItems]);

  return (
    <div>
      <p>Total: ¥{total}</p>
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name} - ¥{item.price}</li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

## 7. useCallback - Caching Functions

useCallback caches functions to avoid unnecessary re-renders of child components.

\`\`\`jsx
const ChildComponent = React.memo(({ onItemClick }) => {
  console.log('Child component rendering');
  return <button onClick={() => onItemClick('data')}>Click</button>;
});

function ParentComponent() {
  const [count, setCount] = useState(0);

  // ✅ Function is cached, child component won't re-render
  const handleItemClick = useCallback((item) => {
    console.log('Clicked:', item);
  }, []); // Empty dependency array means function never changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent onItemClick={handleItemClick} />
    </div>
  );
}
\`\`\`

## 8. Custom Hooks

Custom Hooks allow us to reuse stateful logic.

### 8.1 useLocalStorage - Persistent State

\`\`\`jsx
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function
        ? value(storedValue)
        : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

// Usage example
function App() {
  const [name, setName] = useLocalStorage('name', 'Anonymous');

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name"
    />
  );
}
\`\`\`

### 8.2 useFetch - Data Fetching

\`\`\`jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Request failed');
        const result = await response.json();

        if (!isCancelled) {
          setData(result);
          setError(null);
        }
      } catch (err) {
        if (!isCancelled) {
          setError(err.message);
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isCancelled = true;
    };
  }, [url]);

  return { data, loading, error };
}
\`\`\`

### 8.3 useDebounce - Debouncing

\`\`\`jsx
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Usage example
function SearchInput() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log('Searching:', debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}
\`\`\`

### 8.4 useMediaQuery - Responsive Query

\`\`\`jsx
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}

// Usage example
function ResponsiveComponent() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
  const isDesktop = useMediaQuery('(min-width: 1025px)');

  return (
    <div>
      {isMobile && <MobileView />}
      {isTablet && <TabletView />}
      {isDesktop && <DesktopView />}
    </div>
  );
}
\`\`\`

## 9. Hooks Usage Rules

### 9.1 Only Call Hooks at the Top Level

❌ Don't call Hooks inside loops, conditions, or nested functions

\`\`\`jsx
// ❌ Wrong
function BadExample({ condition }) {
  if (condition) {
    const [state, setState] = useState(0); // Wrong!
  }

  // ✅ Correct
  const [state, setState] = useState(0);

  if (condition) {
    // Use state
  }
}
\`\`\`

### 9.2 Only Call Hooks from React Functions

✅ You can call Hooks from:
- React function components
- Custom Hooks

❌ Don't call from regular JavaScript functions

## 10. Best Practices

### 10.1 Split Effects Appropriately

Separate unrelated logic into different useEffect calls for better code readability and maintainability.

### 10.2 Use ESLint Plugin

Install \`eslint-plugin-react-hooks\` to automatically check Hooks usage rules.

### 10.3 Avoid Over-optimization

Not everywhere needs useMemo and useCallback. Only use them when there's a real performance issue.

### 10.4 Custom Hook Naming

Custom Hooks must start with "use" so ESLint can correctly check them.

## Summary

React Hooks make function components powerful and flexible. Mastering these core Hooks and best practices will help you write cleaner, more maintainable React applications. Remember:

- 🎯 **useState** - Manage component state
- 🔄 **useEffect** - Handle side effects
- 🌐 **useContext** - Share global data
- 🎛️ **useReducer** - Complex state logic
- 📌 **useRef** - Reference DOM or mutable values
- 💾 **useMemo** - Cache computation results
- 🔗 **useCallback** - Cache function references
- 🔧 **Custom Hooks** - Reuse logic

Keep practicing and you'll discover more clever uses of Hooks!
`,
    ja: `
## はじめに

React Hooksは、React 16.8で導入された革命的な機能で、Reactコンポーネントの書き方を根本的に変えました。Hooksを使用すると、クラスコンポーネントを書かずに、関数コンポーネントで状態、ライフサイクル、その他のReact機能を使用できます。

## 1. useState - 状態管理

useStateは最も基本的で一般的に使用されるHookで、関数コンポーネントに独自の状態を持たせます。

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>現在のカウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        増加
      </button>
      <button onClick={() => setCount(count - 1)}>
        減少
      </button>
      <button onClick={() => setCount(0)}>
        リセット
      </button>
    </div>
  );
}
\`\`\`

### 関数的更新

新しい状態が古い状態に依存する場合は、関数的更新を使用して最新の状態を取得します：

\`\`\`jsx
setCount(prev => prev + 1);
\`\`\`

## 2. useEffect - 副作用処理

useEffectは、データ取得、サブスクリプション、DOM操作などの副作用を処理します。

\`\`\`jsx
function DataFetcher({ userId }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(\`https://api.example.com/users/\${userId}\`)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <div>読み込み中...</div>;
  return <div>{data && JSON.stringify(data)}</div>;
}
\`\`\`

### クリーンアップ

メモリリークを避けるためにクリーンアップ関数を返します：

\`\`\`jsx
useEffect(() => {
  const interval = setInterval(() => {
    setSeconds(prev => prev + 1);
  }, 1000);

  return () => {
    clearInterval(interval);
  };
}, []);
\`\`\`

## 3. useContext - コンテキスト共有

useContextを使用すると、propsを階層的に渡すことなく、コンポーネントツリー全体でデータを共有できます。

\`\`\`jsx
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  return useContext(ThemeContext);
}
\`\`\`

## 4. useReducer - 複雑な状態ロジック

状態ロジックが複雑な場合、useReducerはuseStateよりも優れた選択です。

\`\`\`jsx
const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step };
    case 'decrement':
      return { ...state, count: state.count - state.step };
    case 'reset':
      return initialState;
    default:
      throw new Error(\`不明なアクションタイプ: \${action.type}\`);
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>カウント: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>リセット</button>
    </div>
  );
}
\`\`\`

## 5. useRef - ミュータブル値の参照

useRefは、再レンダリングをトリガーしないミュータブル値を保存したり、DOM要素にアクセスしたりできます。

\`\`\`jsx
function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>フォーカス</button>
    </div>
  );
}
\`\`\`

## 6. useMemo - 計算結果のキャッシュ

useMemoは、高価な計算結果をキャッシュし、依存関係が変更された場合にのみ再計算します。

\`\`\`jsx
const filteredItems = useMemo(() => {
  return items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
}, [items, filter]);
\`\`\`

## 7. useCallback - 関数のキャッシュ

useCallbackは関数をキャッシュして、子コンポーネントの不必要な再レンダリングを回避します。

\`\`\`jsx
const handleItemClick = useCallback((item) => {
  console.log('クリックしました:', item);
}, []);
\`\`\`

## 8. カスタムHooks

カスタムHooksを使用すると、状態ロジックを再利用できます。

### useLocalStorage

\`\`\`jsx
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
\`\`\`

## まとめ

React Hooksは、関数コンポーネントを強力で柔軟にします。これらのコアHooksとベストプラクティスをマスターすることで、よりクリーンで保守しやすいReactアプリケーションを書くことができます：

- 🎯 **useState** - コンポーネントの状態管理
- 🔄 **useEffect** - 副作用の処理
- 🌐 **useContext** - グローバルデータの共有
- 🎛️ **useReducer** - 複雑な状態ロジック
- 📌 **useRef** - DOMまたはミュータブル値の参照
- 💾 **useMemo** - 計算結果のキャッシュ
- 🔗 **useCallback** - 関数参照のキャッシュ
- 🔧 **カスタムHooks** - ロジックの再利用

練習を続けることで、Hooksのより多くの巧妙な使い方を発見できます！
`,
  },
};
