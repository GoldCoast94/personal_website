import { TechDetail } from '../types';

export const reactData: TechDetail = {
  name: "React",
  description: "用于构建用户界面的 JavaScript 库",
  icon: "/images/react-logo.svg",
  color: "from-blue-500 to-cyan-500",
  officialLink: "https://react.dev/",
  content: [
    {
      title: "React 核心概念",
      items: [
        {
          id: "components",
          name: "组件化开发",
          link: "https://react.dev/learn/your-first-component",
          description: "React 的核心思想是将 UI 分解为独立、可复用的组件。",
          content: `组件是 React 应用的基本构建块。每个组件都是一个独立的、可复用的代码片段，它接收输入（props）并返回描述应该在屏幕上显示什么的 React 元素。

**函数组件**：
函数组件是最简单和最常用的组件形式。它们就是返回 JSX 的 JavaScript 函数。

**组件的特点**：
1. **独立性**：每个组件都有自己的逻辑和样式，不依赖其他组件
2. **可复用性**：同一个组件可以在不同的地方多次使用
3. **可组合性**：小组件可以组合成大组件，形成组件树
4. **封装性**：组件内部的实现细节对外部不可见

**最佳实践**：
- 保持组件功能单一，一个组件只做一件事
- 使用 props 传递数据，保持组件的灵活性
- 提取可复用的逻辑到自定义 Hook 中
- 合理拆分大组件，避免组件过于复杂`,
          codeExample: `// 简单的函数组件
function Welcome({ name }) {
  return <h1>欢迎, {name}!</h1>;
}

// 使用组件
function App() {
  return (
    <div>
      <Welcome name="张三" />
      <Welcome name="李四" />
    </div>
  );
}

// 带有多个 props 的组件
function UserCard({ avatar, name, role, email }) {
  return (
    <div className="user-card">
      <img src={avatar} alt={name} />
      <h2>{name}</h2>
      <p>{role}</p>
      <a href={\`mailto:\${email}\`}>{email}</a>
    </div>
  );
}

// 组件组合
function UserList({ users }) {
  return (
    <div className="user-list">
      {users.map(user => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
}`,
        },
        {
          id: "virtual-dom",
          name: "虚拟 DOM",
          link: "https://react.dev/learn/preserving-and-resetting-state",
          description: "虚拟 DOM 是 React 的核心性能优化机制。",
          content: `虚拟 DOM（Virtual DOM）是 React 的革命性创新之一，它是真实 DOM 的 JavaScript 对象表示。React 使用虚拟 DOM 来最小化对真实 DOM 的操作，从而提升性能。

**工作原理**：

1. **初始渲染**：React 创建虚拟 DOM 树，然后将其转换为真实 DOM
2. **状态更新**：当组件状态改变时，React 创建新的虚拟 DOM 树
3. **Diff 算法**：React 比较新旧虚拟 DOM 树，找出差异（diffing）
4. **批量更新**：React 将差异批量应用到真实 DOM（reconciliation）

**为什么虚拟 DOM 快？**

- **最小化 DOM 操作**：直接操作 DOM 很慢，虚拟 DOM 减少了实际的 DOM 操作次数
- **批量更新**：将多次更新合并为一次，减少浏览器重排和重绘
- **高效的 Diff 算法**：O(n) 的时间复杂度，快速找出差异

**Diff 算法的三个策略**：

1. **Tree Diff**：只比较同层级节点，不跨层级比较
2. **Component Diff**：相同类型的组件才进行比较
3. **Element Diff**：通过 key 属性识别元素，提高列表更新效率

**Key 的重要性**：
在列表渲染中使用唯一的 key 可以帮助 React 识别哪些元素被修改、添加或删除，避免不必要的重新渲染。`,
          codeExample: `// 不使用 key 的问题示例（❌ 不推荐）
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo.text}</li>
      ))}
    </ul>
  );
}

// 正确使用 key（✅ 推荐）
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

// 虚拟 DOM 的概念示例
const virtualDOM = {
  type: 'div',
  props: {
    className: 'container',
    children: [
      {
        type: 'h1',
        props: {
          children: '标题'
        }
      },
      {
        type: 'p',
        props: {
          children: '这是一段文本'
        }
      }
    ]
  }
};

// React 优化更新示例
function Counter() {
  const [count, setCount] = useState(0);

  // React 只会更新 count 变化的文本节点
  // 而不是整个组件的 DOM
  return (
    <div>
      <h1>计数器</h1>
      <p>当前值: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}`,
        },
        {
          id: "jsx",
          name: "JSX 语法",
          link: "https://react.dev/learn/writing-markup-with-jsx",
          description: "JSX 是 JavaScript 的语法扩展，允许在 JavaScript 代码中编写类似 HTML 的标记。",
          content: `JSX（JavaScript XML）是 React 的核心语法特性，它允许你在 JavaScript 中编写类似 HTML 的标记。JSX 不是必需的，但它使得 React 代码更加直观和易于维护。

**JSX 的本质**：
JSX 会被编译器（如 Babel）转换为 React.createElement() 函数调用。例如：
\`<div>Hello</div>\` 会被转换为 \`React.createElement('div', null, 'Hello')\`

**JSX 的规则**：

1. **必须返回单个根元素**：使用 \`<>\` Fragment 或 \`<div>\` 包裹多个元素
2. **标签必须闭合**：自闭合标签需要 \`/\`，如 \`<img />\`、\`<input />\`
3. **使用小驼峰命名**：HTML 属性在 JSX 中使用小驼峰，如 \`className\`、\`onClick\`
4. **JSX 中嵌入表达式**：使用 \`{}\` 包裹 JavaScript 表达式

**JSX 中的 JavaScript 表达式**：
- 可以在 {} 中使用任何 JavaScript 表达式
- 可以调用函数、访问变量、进行运算等
- {} 中不能使用语句（如 if、for），但可以使用三元运算符

**常见的 JSX 模式**：
- 条件渲染：\`{condition && <Component />}\` 或 \`{condition ? <A /> : <B />}\`
- 列表渲染：\`{array.map(item => <Item key={item.id} />)}\`
- 内联样式：\`style={{ color: 'red', fontSize: '16px' }}\`
- 事件处理：\`onClick={() => handleClick()}\``,
          codeExample: `// 基本 JSX 语法
function Greeting() {
  const name = "React";
  const isLoggedIn = true;

  return (
    <div className="greeting">
      <h1>Hello, {name}!</h1>
      {isLoggedIn && <p>欢迎回来！</p>}
    </div>
  );
}

// JSX 编译前后对比
// JSX 写法
const element = <h1 className="title">Hello</h1>;

// 编译后的 JavaScript
const element = React.createElement(
  'h1',
  { className: 'title' },
  'Hello'
);

// 复杂的 JSX 示例
function ProductCard({ product }) {
  const discountPrice = product.price * 0.8;

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div className="price">
        <span className="original">{product.price}元</span>
        <span className="discount">{discountPrice}元</span>
      </div>
      <button
        onClick={() => addToCart(product.id)}
        style={{
          backgroundColor: product.inStock ? 'green' : 'gray',
          cursor: product.inStock ? 'pointer' : 'not-allowed'
        }}
      >
        {product.inStock ? '加入购物车' : '已售罄'}
      </button>
    </div>
  );
}

// 条件渲染的多种方式
function UserStatus({ user }) {
  // 方式1：使用 && 运算符
  return (
    <div>
      {user && <p>欢迎, {user.name}</p>}
    </div>
  );

  // 方式2：使用三元运算符
  return (
    <div>
      {user ? <p>欢迎, {user.name}</p> : <p>请登录</p>}
    </div>
  );

  // 方式3：使用函数
  const renderUserInfo = () => {
    if (!user) return <p>请登录</p>;
    if (user.isAdmin) return <p>管理员: {user.name}</p>;
    return <p>用户: {user.name}</p>;
  };

  return <div>{renderUserInfo()}</div>;
}

// 列表渲染
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li
          key={todo.id}
          className={todo.completed ? 'completed' : ''}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
}`,
        },
        {
          id: "state",
          name: "状态管理",
          link: "https://react.dev/learn/state-a-components-memory",
          description: "状态（State）是组件的记忆，用于存储随时间变化的数据。",
          content: `状态（State）是 React 组件的核心概念之一。它代表了组件中可以随时间变化的数据。当状态更新时，React 会自动重新渲染组件以反映最新的数据。

**State 的特点**：

1. **响应式**：状态改变时，组件自动重新渲染
2. **独立性**：每个组件实例都有自己独立的状态
3. **不可变性**：不应直接修改状态，而是使用 setState 函数
4. **异步更新**：React 可能会批量处理多个状态更新以优化性能

**State vs Props**：

- **State**：组件内部管理的数据，可以改变
- **Props**：从父组件传递的数据，只读不可变

**何时使用 State**：

- 数据会随时间改变（用户输入、网络响应等）
- 数据会影响组件的渲染输出
- 数据不是从 props 计算得出的

**State 更新的规则**：

1. **使用 setter 函数**：总是使用 setState 更新状态
2. **不可变更新**：对于对象和数组，创建新的副本而不是修改原对象
3. **批量更新**：React 会批量处理多个状态更新
4. **函数式更新**：当新状态依赖旧状态时，使用函数形式`,
          codeExample: `import { useState } from 'react';

// 基本的状态使用
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>计数: {count}</p>
      <button onClick={() => setCount(count + 1)}>增加</button>
      <button onClick={() => setCount(count - 1)}>减少</button>
      <button onClick={() => setCount(0)}>重置</button>
    </div>
  );
}

// 多个状态
function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, age });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="姓名"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="邮箱"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="年龄"
      />
      <button type="submit">提交</button>
    </form>
  );
}

// 对象状态的更新（不可变方式）
function Profile() {
  const [user, setUser] = useState({
    name: '张三',
    age: 25,
    address: { city: '北京', country: '中国' }
  });

  const updateName = (newName) => {
    setUser({ ...user, name: newName });
  };

  const updateCity = (newCity) => {
    setUser({
      ...user,
      address: { ...user.address, city: newCity }
    });
  };

  return (
    <div>
      <p>姓名: {user.name}</p>
      <p>城市: {user.address.city}</p>
      <button onClick={() => updateName('李四')}>改名</button>
      <button onClick={() => updateCity('上海')}>换城市</button>
    </div>
  );
}

// 数组状态的更新
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>添加</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>删除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 函数式更新（依赖前一个状态）
function Counter() {
  const [count, setCount] = useState(0);

  const incrementBy = (amount) => {
    // 使用函数式更新确保获取最新的状态
    setCount(prevCount => prevCount + amount);
  };

  const handleMultipleClicks = () => {
    // 这些更新会被正确累积
    incrementBy(1);
    incrementBy(1);
    incrementBy(1);
  };

  return (
    <div>
      <p>计数: {count}</p>
      <button onClick={handleMultipleClicks}>+3</button>
    </div>
  );
}`,
        },
        {
          id: "lifecycle",
          name: "生命周期",
          link: "https://react.dev/learn/lifecycle-of-reactive-effects",
          description: "组件生命周期描述了组件从创建到销毁的整个过程。",
          content: `组件生命周期是指组件从创建、更新到销毁的完整过程。在函数组件中，我们使用 useEffect Hook 来处理副作用和生命周期相关的逻辑。

**生命周期的三个阶段**：

1. **挂载（Mounting）**：组件被创建并插入 DOM
2. **更新（Updating）**：组件的 props 或 state 发生变化
3. **卸载（Unmounting）**：组件从 DOM 中移除

**useEffect 的工作原理**：

\`useEffect(setup, dependencies)\`

- **setup 函数**：包含副作用逻辑，可选返回清理函数
- **dependencies 数组**：控制何时运行 effect

**依赖数组的三种情况**：

1. **无依赖数组**：每次渲染后都执行
2. **空依赖数组 []**：只在挂载时执行一次
3. **有依赖项 [dep1, dep2]**：依赖项变化时执行

**清理函数**：

从 effect 返回的函数会在以下时机执行：
- 组件卸载前
- effect 重新执行前（清理上一次的副作用）

**常见的副作用**：

- 数据获取
- 订阅/监听
- 手动操作 DOM
- 定时器
- 日志记录`,
          codeExample: `import { useState, useEffect } from 'react';

// 基本用法 - 在挂载时执行一次
function WelcomeMessage() {
  useEffect(() => {
    console.log('组件已挂载');

    return () => {
      console.log('组件即将卸载');
    };
  }, []); // 空依赖数组

  return <h1>欢迎！</h1>;
}

// 监听特定依赖的变化
function SearchResults({ query }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // 当 query 改变时执行
    setLoading(true);

    fetch(\`/api/search?q=\${query}\`)
      .then(res => res.json())
      .then(data => {
        setResults(data);
        setLoading(false);
      });
  }, [query]); // query 变化时重新执行

  if (loading) return <p>加载中...</p>;
  return <ul>{results.map(r => <li key={r.id}>{r.title}</li>)}</ul>;
}

// 定时器和清理
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // 清理函数：组件卸载时清除定时器
    return () => {
      clearInterval(interval);
      console.log('定时器已清除');
    };
  }, []); // 只在挂载时创建定时器

  return <div>已运行 {seconds} 秒</div>;
}

// 事件监听器和清理
function WindowSize() {
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

    // 添加事件监听器
    window.addEventListener('resize', handleResize);

    // 清理函数：移除事件监听器
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 只设置一次监听器

  return (
    <div>
      窗口大小: {size.width} x {size.height}
    </div>
  );
}

// 多个 Effect 分离关注点
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  // Effect 1: 获取用户信息
  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(setUser);
  }, [userId]);

  // Effect 2: 获取用户帖子
  useEffect(() => {
    fetch(\`/api/users/\${userId}/posts\`)
      .then(res => res.json())
      .then(setPosts);
  }, [userId]);

  // Effect 3: 更新页面标题
  useEffect(() => {
    if (user) {
      document.title = \`\${user.name}的个人资料\`;
    }

    return () => {
      document.title = '我的应用';
    };
  }, [user]);

  if (!user) return <p>加载中...</p>;

  return (
    <div>
      <h1>{user.name}</h1>
      <h2>帖子 ({posts.length})</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

// 条件性执行 Effect
function Chat({ roomId, isOpen }) {
  useEffect(() => {
    if (!isOpen) return; // 如果未打开，不执行

    const connection = createConnection(roomId);
    connection.connect();

    return () => {
      connection.disconnect();
    };
  }, [roomId, isOpen]);

  return <div>{isOpen ? '聊天已连接' : '聊天已关闭'}</div>;
}`,
        },
      ],
    },
    {
      title: "React Hooks",
      items: [
        {
          id: "usestate",
          name: "useState",
          link: "https://react.dev/reference/react/useState",
          description: "useState 是最基本的 Hook，用于在函数组件中添加状态。",
          content: "useState 返回一个状态值和一个更新该状态的函数。调用更新函数会触发组件重新渲染。",
          codeExample: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>计数: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}`,
        },
        {
          id: "useeffect",
          name: "useEffect",
          link: "https://react.dev/reference/react/useEffect",
          description: "useEffect 用于处理副作用，如数据获取、订阅和 DOM 操作。",
          content: "useEffect 在每次渲染后执行，可以通过依赖数组控制执行时机。返回的清理函数在组件卸载或依赖变化前执行。",
          codeExample: `import { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div>计时: {count}秒</div>;
}`,
        },
        {
          id: "usecontext",
          name: "useContext",
          link: "https://react.dev/reference/react/useContext",
          description: "useContext 用于在组件树中共享数据，避免逐层传递 props。",
          content: "通过创建 Context 对象并使用 Provider 提供值，任何子组件都可以使用 useContext 访问这些值。这对于主题、用户信息、语言设置等全局数据特别有用。",
          codeExample: `import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      当前主题: {theme}
    </button>
  );
}`,
          cases: [
            {
              title: "全局认证状态管理",
              description: "使用 useContext 实现全局的用户认证状态管理",
              code: `import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const { token, user } = await loginAPI(email, password);
    localStorage.setItem('token', token);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}`
            }
          ]
        },
        {
          id: "usereducer",
          name: "useReducer",
          link: "https://react.dev/reference/react/useReducer",
          description: "useReducer 是 useState 的替代方案，适用于复杂的状态逻辑。",
          content: "useReducer 接收一个 reducer 函数和初始状态，返回当前状态和 dispatch 函数。这种模式类似于 Redux，使得状态更新逻辑更加可预测和可测试。",
          codeExample: `import { useReducer } from 'react';

function reducer(state, action) {
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
      <p>计数: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
    </div>
  );
}`,
          cases: [
            {
              title: "表单状态管理",
              description: "使用 useReducer 管理复杂表单的状态和验证",
              code: `function formReducer(state, action) {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        values: { ...state.values, [action.field]: action.value }
      };
    case 'SUBMIT':
      return { ...state, isSubmitting: true };
    default:
      return state;
  }
}`
            }
          ]
        },
        {
          id: "usecallback",
          name: "useCallback",
          link: "https://react.dev/reference/react/useCallback",
          description: "useCallback 返回一个记忆化的回调函数，用于优化性能。",
          content: "useCallback 会缓存函数实例，只有在依赖项改变时才创建新的函数。这对于传递给子组件的回调函数特别有用，可以防止子组件不必要的重新渲染。",
          codeExample: `import { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Clicked!', count);
  }, [count]);

  return <Child onClick={handleClick} />;
}`,
        },
        {
          id: "usememo",
          name: "useMemo",
          link: "https://react.dev/reference/react/useMemo",
          description: "useMemo 返回一个记忆化的值，用于优化昂贵的计算。",
          content: "useMemo 会缓存计算结果，只有在依赖项改变时才重新计算。这对于复杂的数据转换或过滤操作特别有用。",
          codeExample: `import { useMemo } from 'react';

function ProductList({ products, filter }) {
  const filteredProducts = useMemo(() => {
    return products.filter(p =>
      p.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [products, filter]);

  return <ul>{filteredProducts.map(p => <li key={p.id}>{p.name}</li>)}</ul>;
}`,
        },
      ],
    },
    {
      title: "实战案例",
      items: [
        {
          id: "react-examples",
          name: "React Hooks 实战案例",
          link: "https://react.dev/reference/react",
          description: "通过实际案例深入学习 React Hooks 的使用方法和最佳实践。",
          content: "这些案例展示了 React Hooks 在实际开发中的应用，包括状态管理、副作用处理、性能优化等核心场景。每个案例都包含完整的代码实现和详细说明，帮助你快速掌握 React Hooks 的精髓。"
        },
      ],
    },
    {
      title: "React 生态系统",
      items: [
        {
          id: "react-router",
          name: "React Router",
          link: "https://reactrouter.com/",
          description: "React Router 是 React 应用的标准路由解决方案。",
          content: "React Router 提供了声明式的路由配置，支持嵌套路由、动态路由和路由参数。"
        },
        {
          id: "redux",
          name: "Redux",
          link: "https://redux.js.org/",
          description: "Redux 是可预测的状态容器，适用于大型应用的状态管理。",
          content: "Redux 使用单一状态树和纯函数 reducers 来管理应用状态。"
        },
        {
          id: "nextjs",
          name: "Next.js",
          link: "https://nextjs.org/",
          description: "Next.js 是基于 React 的全栈框架，支持 SSR 和 SSG。",
          content: "Next.js 提供了开箱即用的服务端渲染、静态站点生成、API 路由等功能。"
        },
      ],
    },
  ],
};
