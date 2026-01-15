import { TechDetail } from '../../../types';

export const reactDataEn: TechDetail = {
  name: "React",
  description: "A JavaScript library for building user interfaces",
  icon: "/images/react-logo.svg",
  color: "from-blue-500 to-cyan-500",
  officialLink: "https://react.dev/",
  content: [
    {
      title: "React Core Concepts",
      items: [
        {
          id: "components",
          name: "Component Development",
          link: "https://react.dev/learn/your-first-component",
          description: "The core idea of React is to break down UI into independent, reusable components.",
          content: `Components are the basic building blocks of React applications. Each component is an independent, reusable piece of code that accepts inputs (props) and returns React elements describing what should appear on the screen.

**Function Components**:
Function components are the simplest and most commonly used form of components. They are JavaScript functions that return JSX.

**Component Characteristics**:
1. **Independence**: Each component has its own logic and styles, not depending on other components
2. **Reusability**: The same component can be used multiple times in different places
3. **Composability**: Small components can be composed into larger components, forming a component tree
4. **Encapsulation**: Implementation details inside components are invisible to the outside

**Best Practices**:
- Keep components single-purpose, one component does one thing
- Use props to pass data, maintaining component flexibility
- Extract reusable logic into custom Hooks
- Split large components reasonably, avoid overly complex components`,
          codeExample: `// Simple function component
function Welcome({ name }) {
  return <h1>Welcome, {name}!</h1>;
}

// Using components
function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
    </div>
  );
}

// Component with multiple props
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

// Component composition
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
          name: "Virtual DOM",
          link: "https://react.dev/learn/preserving-and-resetting-state",
          description: "Virtual DOM is React's core performance optimization mechanism that minimizes expensive DOM operations.",
          content: `React maintains a lightweight virtual DOM tree in memory. When state changes, React creates a new virtual DOM tree and efficiently compares it with the previous one using a reconciliation algorithm (diff algorithm). This process identifies the minimum set of changes needed, which are then batched and applied to the real DOM.

**How Virtual DOM Works**:
1. **Initial Render**: React creates a virtual DOM tree representing the UI
2. **State Update**: When state changes, React creates a new virtual DOM tree
3. **Diffing**: React compares the new tree with the previous one
4. **Reconciliation**: React calculates the minimal set of changes needed
5. **Batch Update**: Changes are batched and applied to the real DOM efficiently

**Performance Benefits**:
- **Batched Updates**: Multiple state changes trigger a single render
- **Minimal DOM Operations**: Only changed elements are updated
- **Efficient Algorithm**: O(n) complexity instead of O(n³)
- **Automatic Optimization**: React handles performance internally

**Key Optimization - Keys**:
Using proper keys helps React identify which items have changed, been added, or removed, enabling efficient list updates.`,
          codeExample: `// How React's Virtual DOM works conceptually
import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: false }
  ]);

  // When toggleTodo is called, React:
  // 1. Creates a new Virtual DOM tree
  // 2. Compares it with the previous Virtual DOM (diffing)
  // 3. Only updates the changed <li> element in the real DOM
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <ul>
      {todos.map(todo => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
}`,
          cases: [
            {
              title: "Virtual DOM Reconciliation Process",
              description: "Understanding how React's reconciliation algorithm optimizes rendering",
              code: `// React's reconciliation algorithm uses keys to identify elements
function UserList({ users }) {
  return (
    <div>
      {users.map(user => (
        // ✅ Good: Using stable key helps React identify which items changed
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}

      {/* ❌ Bad: Using index as key can cause issues when list order changes
      {users.map((user, index) => (
        <div key={index}>
          <h3>{user.name}</h3>
        </div>
      ))} */}
    </div>
  );
}

// When a user is added/removed/reordered:
// - With proper keys: React knows exactly which elements changed
// - Without keys or with index keys: React may re-render unnecessarily`
            },
            {
              title: "Performance Comparison: Virtual DOM vs Direct DOM",
              description: "Comparing Virtual DOM efficiency against direct DOM manipulation",
              code: `// Direct DOM manipulation (inefficient for complex updates)
function updateDOMDirectly(data) {
  const container = document.getElementById('container');
  container.innerHTML = ''; // Clears entire DOM

  data.forEach(item => {
    const div = document.createElement('div');
    div.textContent = item.text;
    container.appendChild(div); // Each append triggers reflow
  });
}

// React with Virtual DOM (efficient)
function DataList({ data }) {
  // React batches updates and only modifies changed elements
  return (
    <div id="container">
      {data.map(item => (
        <div key={item.id}>{item.text}</div>
      ))}
    </div>
  );
}

// Performance benefits:
// 1. Batched updates: Multiple state changes trigger single render
// 2. Minimal DOM operations: Only changed elements are updated
// 3. Efficient diffing: O(n) complexity instead of O(n³)
// 4. Automatic optimization: React handles performance internally`
            }
          ]
        },
        {
          id: "jsx",
          name: "JSX Syntax",
          link: "https://react.dev/learn/writing-markup-with-jsx",
          description: "JSX is a syntax extension for JavaScript that allows writing HTML-like markup in JavaScript code.",
          content: `JSX (JavaScript XML) is React's core syntax feature that allows you to write HTML-like markup in JavaScript. While not required, JSX makes React code more intuitive and maintainable.

**The Nature of JSX**:
JSX is transformed by compilers (like Babel) into React.createElement() function calls. For example:
\`<div>Hello</div>\` becomes \`React.createElement('div', null, 'Hello')\`

**JSX Rules**:

1. **Must return a single root element**: Use \`<>\` Fragment or \`<div>\` to wrap multiple elements
2. **Tags must be closed**: Self-closing tags need \`/\`, like \`<img />\`, \`<input />\`
3. **Use camelCase naming**: HTML attributes use camelCase in JSX, like \`className\`, \`onClick\`
4. **Embed expressions in JSX**: Use \`{}\` to wrap JavaScript expressions

**JavaScript Expressions in JSX**:
- Any JavaScript expression can be used inside {}
- Can call functions, access variables, perform operations
- Cannot use statements (like if, for) in {}, but can use ternary operators

**Common JSX Patterns**:
- Conditional rendering: \`{condition && <Component />}\` or \`{condition ? <A /> : <B />}\`
- List rendering: \`{array.map(item => <Item key={item.id} />)}\`
- Inline styles: \`style={{ color: 'red', fontSize: '16px' }}\`
- Event handling: \`onClick={() => handleClick()}\``,
          codeExample: `// Basic JSX syntax
function Greeting() {
  const name = "React";
  const isLoggedIn = true;

  return (
    <div className="greeting">
      <h1>Hello, {name}!</h1>
      {isLoggedIn && <p>Welcome back!</p>}
    </div>
  );
}

// JSX before and after compilation
// JSX syntax
const element = <h1 className="title">Hello</h1>;

// Compiled JavaScript
const element = React.createElement(
  'h1',
  { className: 'title' },
  'Hello'
);

// Complex JSX example
function ProductCard({ product }) {
  const discountPrice = product.price * 0.8;

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div className="price">
        <span className="original">\${product.price}</span>
        <span className="discount">\${discountPrice}</span>
      </div>
      <button
        onClick={() => addToCart(product.id)}
        style={{
          backgroundColor: product.inStock ? 'green' : 'gray',
          cursor: product.inStock ? 'pointer' : 'not-allowed'
        }}
      >
        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
      </button>
    </div>
  );
}

// Multiple ways of conditional rendering
function UserStatus({ user }) {
  // Method 1: Using && operator
  return (
    <div>
      {user && <p>Welcome, {user.name}</p>}
    </div>
  );

  // Method 2: Using ternary operator
  return (
    <div>
      {user ? <p>Welcome, {user.name}</p> : <p>Please login</p>}
    </div>
  );

  // Method 3: Using function
  const renderUserInfo = () => {
    if (!user) return <p>Please login</p>;
    if (user.isAdmin) return <p>Admin: {user.name}</p>;
    return <p>User: {user.name}</p>;
  };

  return <div>{renderUserInfo()}</div>;
}

// List rendering
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
          name: "State Management",
          link: "https://react.dev/learn/state-a-components-memory",
          description: "State is a component's memory for storing data that changes over time.",
          content: `State is one of React's core concepts. It represents data in a component that can change over time. When state updates, React automatically re-renders the component to reflect the latest data.

**State Characteristics**:

1. **Reactive**: When state changes, the component automatically re-renders
2. **Independent**: Each component instance has its own independent state
3. **Immutable**: State should not be modified directly; always use setState functions
4. **Asynchronous Updates**: React may batch multiple state updates for performance optimization

**State vs Props**:

- **State**: Data managed internally by the component, can be changed
- **Props**: Data passed from parent component, read-only and immutable

**When to Use State**:

- Data changes over time (user input, network responses, etc.)
- Data affects the component's render output
- Data is not computed from props

**State Update Rules**:

1. **Use setter functions**: Always use setState to update state
2. **Immutable updates**: For objects and arrays, create new copies instead of modifying originals
3. **Batch updates**: React batches multiple state updates
4. **Functional updates**: Use function form when new state depends on old state`,
          codeExample: `import { useState } from 'react';

// Basic state usage
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// Multiple states
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
        placeholder="Name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="Age"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// Object state updates (immutable way)
function Profile() {
  const [user, setUser] = useState({
    name: 'Alice',
    age: 25,
    address: { city: 'New York', country: 'USA' }
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
      <p>Name: {user.name}</p>
      <p>City: {user.address.city}</p>
      <button onClick={() => updateName('Bob')}>Change Name</button>
      <button onClick={() => updateCity('San Francisco')}>Change City</button>
    </div>
  );
}

// Array state updates
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
      <button onClick={addTodo}>Add</button>
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
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Functional updates (depending on previous state)
function Counter() {
  const [count, setCount] = useState(0);

  const incrementBy = (amount) => {
    // Use functional update to ensure we get the latest state
    setCount(prevCount => prevCount + amount);
  };

  const handleMultipleClicks = () => {
    // These updates will be correctly accumulated
    incrementBy(1);
    incrementBy(1);
    incrementBy(1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleMultipleClicks}>+3</button>
    </div>
  );
}`,
        },
        {
          id: "lifecycle",
          name: "Lifecycle",
          link: "https://react.dev/learn/lifecycle-of-reactive-effects",
          description: "Component lifecycle describes the entire process from creation to destruction.",
          content: `Component lifecycle refers to the complete process from a component's creation, update, to destruction. In function components, we use the useEffect Hook to handle side effects and lifecycle-related logic.

**Three Lifecycle Phases**:

1. **Mounting**: Component is created and inserted into the DOM
2. **Updating**: Component's props or state changes
3. **Unmounting**: Component is removed from the DOM

**How useEffect Works**:

\`useEffect(setup, dependencies)\`

- **setup function**: Contains side effect logic, optionally returns a cleanup function
- **dependencies array**: Controls when the effect runs

**Three Types of Dependency Arrays**:

1. **No dependency array**: Runs after every render
2. **Empty dependency array []**: Runs only once on mount
3. **With dependencies [dep1, dep2]**: Runs when dependencies change

**Cleanup Functions**:

Functions returned from effects run at the following times:
- Before component unmount
- Before effect re-runs (cleaning up previous side effects)

**Common Side Effects**:

- Data fetching
- Subscriptions/listeners
- Manual DOM manipulation
- Timers
- Logging`,
          codeExample: `import { useState, useEffect } from 'react';

// Basic usage - run once on mount
function WelcomeMessage() {
  useEffect(() => {
    console.log('Component mounted');

    return () => {
      console.log('Component will unmount');
    };
  }, []); // Empty dependency array

  return <h1>Welcome!</h1>;
}

// Watch specific dependencies
function SearchResults({ query }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Runs when query changes
    setLoading(true);

    fetch(\`/api/search?q=\${query}\`)
      .then(res => res.json())
      .then(data => {
        setResults(data);
        setLoading(false);
      });
  }, [query]); // Re-runs when query changes

  if (loading) return <p>Loading...</p>;
  return <ul>{results.map(r => <li key={r.id}>{r.title}</li>)}</ul>;
}

// Timer and cleanup
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // Cleanup function: clear timer on unmount
    return () => {
      clearInterval(interval);
      console.log('Timer cleared');
    };
  }, []); // Only create timer on mount

  return <div>Running for {seconds} seconds</div>;
}

// Event listeners and cleanup
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

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup function: remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Only set up listener once

  return (
    <div>
      Window size: {size.width} x {size.height}
    </div>
  );
}

// Multiple effects for separation of concerns
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  // Effect 1: Fetch user info
  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(setUser);
  }, [userId]);

  // Effect 2: Fetch user posts
  useEffect(() => {
    fetch(\`/api/users/\${userId}/posts\`)
      .then(res => res.json())
      .then(setPosts);
  }, [userId]);

  // Effect 3: Update page title
  useEffect(() => {
    if (user) {
      document.title = \`\${user.name}'s Profile\`;
    }

    return () => {
      document.title = 'My App';
    };
  }, [user]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>{user.name}</h1>
      <h2>Posts ({posts.length})</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

// Conditional effect execution
function Chat({ roomId, isOpen }) {
  useEffect(() => {
    if (!isOpen) return; // Don't run if not open

    const connection = createConnection(roomId);
    connection.connect();

    return () => {
      connection.disconnect();
    };
  }, [roomId, isOpen]);

  return <div>{isOpen ? 'Chat connected' : 'Chat closed'}</div>;
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
          description: "useState is the most basic Hook for adding state to function components.",
          content: "useState returns a state value and a function to update that state. Calling the update function triggers component re-render.",
          codeExample: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}`,
        },
        {
          id: "useeffect",
          name: "useEffect",
          link: "https://react.dev/reference/react/useEffect",
          description: "useEffect handles side effects like data fetching, subscriptions, and DOM manipulation.",
          content: "useEffect runs after every render and can be controlled with a dependency array. The returned cleanup function runs before component unmount or dependency changes.",
          codeExample: `import { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div>Timer: {count}s</div>;
}`,
        },
        {
          id: "usecontext",
          name: "useContext",
          link: "https://react.dev/reference/react/useContext",
          description: "useContext shares data in the component tree, avoiding prop drilling.",
          content: "By creating a Context object and using Provider to provide values, any child component can access these values using useContext. This is especially useful for global data like themes, user info, and language settings.",
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
      Current theme: {theme}
    </button>
  );
}`,
          cases: [
            {
              title: "Global Authentication State",
              description: "Implementing global user authentication state management with useContext",
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
          description: "useReducer is an alternative to useState for complex state logic.",
          content: "useReducer receives a reducer function and initial state, returning current state and dispatch function. This pattern is similar to Redux, making state updates more predictable and testable.",
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
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
    </div>
  );
}`,
          cases: [
            {
              title: "Form State Management",
              description: "Managing complex form state and validation with useReducer",
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
          description: "useCallback returns a memoized callback function for performance optimization.",
          content: "useCallback caches function instances, only creating new functions when dependencies change. This is especially useful for callbacks passed to child components, preventing unnecessary re-renders.",
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
          description: "useMemo returns a memoized value for optimizing expensive computations.",
          content: "useMemo caches computation results, only recalculating when dependencies change. This is especially useful for complex data transformations or filtering operations.",
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
      title: "Practical Examples",
      items: [
        {
          id: "react-examples",
          name: "React Hooks Practical Examples",
          link: "https://react.dev/reference/react",
          description: "Learn React Hooks usage and best practices through practical examples.",
          content: "These examples demonstrate the application of React Hooks in real-world development, including state management, side effect handling, performance optimization, and other core scenarios. Each example contains complete code implementation and detailed explanations to help you quickly master the essence of React Hooks."
        },
      ],
    },
    {
      title: "React Ecosystem",
      items: [
        {
          id: "react-router",
          name: "React Router",
          link: "https://reactrouter.com/",
          description: "React Router is the standard routing solution for React applications.",
          content: "React Router provides declarative routing configuration with support for nested routes, dynamic routes, and route parameters."
        },
        {
          id: "redux",
          name: "Redux",
          link: "https://redux.js.org/",
          description: "Redux is a predictable state container for large-scale application state management.",
          content: "Redux manages application state using a single state tree and pure reducer functions."
        },
        {
          id: "nextjs",
          name: "Next.js",
          link: "https://nextjs.org/",
          description: "Next.js is a full-stack framework based on React with SSR and SSG support.",
          content: "Next.js provides out-of-the-box server-side rendering, static site generation, and API routes."
        },
      ],
    },
  ],
};
