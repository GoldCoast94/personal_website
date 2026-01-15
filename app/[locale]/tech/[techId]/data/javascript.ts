import { TechDetail } from '../types';

export const javascriptData: TechDetail = {
  name: "JavaScript",
  description: "轻量级的解释型编程语言",
  icon: "/images/javascript-logo.svg",
  color: "from-yellow-500 to-orange-500",
  officialLink: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript",
  content: [
    {
      title: "JavaScript 核心概念",
      items: [
        {
          id: "es6-features",
          name: "ES6+ 特性",
          link: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide",
          description: "ES6+ 引入了许多现代化的语法特性，使 JavaScript 代码更简洁、更易读。",
          content: `ES6（ECMAScript 2015）及后续版本为 JavaScript 带来了革命性的改进。这些特性极大地提升了代码的可读性和开发效率。

**箭头函数（Arrow Functions）**：
箭头函数提供了更简洁的函数语法，并且不绑定自己的 this 值。它特别适合用于回调函数和简短的函数表达式。

**箭头函数的特点**：
1. **简洁的语法**：省略 function 关键字
2. **隐式返回**：单行表达式自动返回结果
3. **词法 this**：继承外层作用域的 this
4. **不能用作构造函数**：不能使用 new 调用

**解构赋值（Destructuring）**：
解构赋值允许从数组或对象中提取值，并赋给变量。这使得代码更简洁、更易读。

**展开运算符（Spread Operator）和剩余参数（Rest Parameters）**：
展开运算符 (...) 可以展开数组或对象，剩余参数可以收集多个参数为数组。

**模板字符串（Template Literals）**：
使用反引号定义字符串，支持多行字符串和表达式插值，比字符串拼接更直观。`,
          codeExample: `// 箭头函数的不同语法
// 传统函数
function add(a, b) {
  return a + b;
}

// 箭头函数 - 完整形式
const add = (a, b) => {
  return a + b;
};

// 箭头函数 - 隐式返回
const add = (a, b) => a + b;

// 单个参数可以省略括号
const square = x => x * x;

// 无参数需要空括号
const sayHello = () => console.log('Hello!');

// 返回对象字面量需要用括号包裹
const createUser = (name, age) => ({ name, age });

// 对象解构
const user = {
  name: '张三',
  age: 25,
  email: 'zhang@example.com',
  address: {
    city: '北京',
    country: '中国'
  }
};

// 基本解构
const { name, age } = user;
console.log(name, age); // '张三' 25

// 重命名变量
const { name: userName, age: userAge } = user;

// 嵌套解构
const { address: { city } } = user;
console.log(city); // '北京'

// 默认值
const { phone = '未提供' } = user;

// 数组解构
const colors = ['红色', '绿色', '蓝色', '黄色'];

// 基本解构
const [first, second] = colors;
console.log(first, second); // '红色' '绿色'

// 跳过某些元素
const [, , third] = colors;
console.log(third); // '蓝色'

// 剩余元素
const [primary, ...otherColors] = colors;
console.log(otherColors); // ['绿色', '蓝色', '黄色']

// 展开运算符示例
// 数组展开
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// 数组复制
const original = [1, 2, 3];
const copy = [...original];

// 对象展开
const baseConfig = { host: 'localhost', port: 3000 };
const config = { ...baseConfig, port: 8080 }; // 覆盖 port

// 合并对象
const person = { name: '李四' };
const employee = { id: 123, department: '开发部' };
const fullInfo = { ...person, ...employee };

// 剩余参数
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

// 模板字符串
const name = 'React';
const version = 18;

// 传统方式
const message1 = '欢迎使用 ' + name + ' 版本 ' + version;

// 模板字符串
const message2 = \`欢迎使用 \${name} 版本 \${version}\`;

// 多行字符串
const html = \`
  <div class="user">
    <h1>\${user.name}</h1>
    <p>\${user.email}</p>
  </div>
\`;

// 表达式计算
const price = 100;
const tax = 0.1;
const total = \`总价: \${(price * (1 + tax)).toFixed(2)} 元\`;

// 标签模板（高级用法）
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i] ? \`<strong>\${values[i]}</strong>\` : '';
    return result + str + value;
  }, '');
}

const highlighted = highlight\`用户 \${name} 年龄 \${age} 岁\`;`,
        },
        {
          id: "async-programming",
          name: "异步编程",
          link: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises",
          description: "异步编程是处理耗时操作的关键技术，避免阻塞主线程。",
          content: `JavaScript 是单线程语言，异步编程使得我们可以在等待耗时操作（如网络请求、文件读取）时继续执行其他代码。

**异步编程的演进**：

1. **回调函数（Callbacks）**：最早的异步解决方案，但容易导致回调地狱
2. **Promise**：ES6 引入，提供了更优雅的异步处理方式
3. **Async/Await**：ES2017 引入，让异步代码看起来像同步代码

**Promise 的状态**：

- **Pending（进行中）**：初始状态
- **Fulfilled（已成功）**：操作成功完成
- **Rejected（已失败）**：操作失败

**Promise 的特点**：

1. **链式调用**：通过 then 方法链接多个异步操作
2. **错误处理**：使用 catch 统一处理错误
3. **状态不可逆**：一旦改变就不会再变

**Async/Await 的优势**：

1. **代码更清晰**：看起来像同步代码，更易理解
2. **错误处理更简单**：可以使用 try/catch
3. **调试更方便**：断点和调用栈更直观

**并行执行**：

使用 Promise.all 可以并行执行多个异步操作，大幅提升效率。`,
          codeExample: `// 回调函数（旧方式，容易导致回调地狱）
function fetchUserData(userId, callback) {
  setTimeout(() => {
    callback(null, { id: userId, name: '张三' });
  }, 1000);
}

fetchUserData(1, (error, user) => {
  if (error) {
    console.error(error);
  } else {
    console.log(user);
  }
});

// 回调地狱示例
fetchUser(1, (user) => {
  fetchPosts(user.id, (posts) => {
    fetchComments(posts[0].id, (comments) => {
      console.log(comments);
    });
  });
});

// Promise 基础
// 创建 Promise
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve('操作成功！');
  } else {
    reject('操作失败！');
  }
});

// 使用 Promise
myPromise
  .then(result => {
    console.log(result); // '操作成功！'
  })
  .catch(error => {
    console.error(error);
  });

// Promise 链式调用
function fetchUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: '李四' });
    }, 1000);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: '第一篇文章' },
        { id: 2, title: '第二篇文章' }
      ]);
    }, 1000);
  });
}

// 链式调用避免回调地狱
fetchUser(1)
  .then(user => {
    console.log('用户:', user);
    return fetchPosts(user.id);
  })
  .then(posts => {
    console.log('文章:', posts);
  })
  .catch(error => {
    console.error('发生错误:', error);
  });

// Async/Await 语法
// 基本用法
async function getUserData() {
  try {
    const user = await fetchUser(1);
    console.log('用户:', user);

    const posts = await fetchPosts(user.id);
    console.log('文章:', posts);

    return { user, posts };
  } catch (error) {
    console.error('发生错误:', error);
  }
}

// 调用 async 函数
getUserData().then(data => {
  console.log('所有数据:', data);
});

// 错误处理
async function fetchDataWithErrorHandling() {
  try {
    const response = await fetch('https://api.example.com/data');

    if (!response.ok) {
      throw new Error(\`HTTP 错误! 状态: \${response.status}\`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('获取数据失败:', error);
    throw error; // 重新抛出错误供调用者处理
  }
}

// 并行执行多个异步操作
async function fetchAllData() {
  try {
    // 同时发起多个请求
    const [users, posts, comments] = await Promise.all([
      fetch('/api/users').then(r => r.json()),
      fetch('/api/posts').then(r => r.json()),
      fetch('/api/comments').then(r => r.json())
    ]);

    return { users, posts, comments };
  } catch (error) {
    console.error('获取数据失败:', error);
  }
}

// Promise.race（返回最快完成的）
async function fetchWithTimeout(url, timeout = 5000) {
  const fetchPromise = fetch(url);
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('请求超时')), timeout);
  });

  try {
    const response = await Promise.race([fetchPromise, timeoutPromise]);
    return response;
  } catch (error) {
    console.error('请求失败:', error);
  }
}

// 顺序执行多个异步操作
async function processInSequence(items) {
  const results = [];

  for (const item of items) {
    const result = await processItem(item);
    results.push(result);
  }

  return results;
}

// 实际应用示例：完整的数据获取流程
async function loadUserDashboard(userId) {
  try {
    // 1. 显示加载状态
    console.log('加载中...');

    // 2. 获取用户信息
    const user = await fetch(\`/api/users/\${userId}\`).then(r => r.json());

    // 3. 并行获取用户相关数据
    const [posts, followers, stats] = await Promise.all([
      fetch(\`/api/users/\${userId}/posts\`).then(r => r.json()),
      fetch(\`/api/users/\${userId}/followers\`).then(r => r.json()),
      fetch(\`/api/users/\${userId}/stats\`).then(r => r.json())
    ]);

    // 4. 组合数据
    const dashboard = {
      user,
      posts,
      followers,
      stats
    };

    console.log('加载完成!', dashboard);
    return dashboard;
  } catch (error) {
    console.error('加载仪表板失败:', error);
    throw error;
  }
}`,
        },
        {
          id: "array-methods",
          name: "数组方法",
          link: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array",
          description: "JavaScript 提供了丰富的数组方法，用于数据处理和转换。",
          content: `现代 JavaScript 提供了强大的数组方法，使得数据处理变得简洁而优雅。这些方法不会修改原数组（除了某些特定方法），而是返回新的结果。

**常用数组方法**：

1. **map()**：转换数组的每个元素，返回新数组
   - 用途：数据转换、格式化、提取属性

2. **filter()**：筛选符合条件的元素，返回新数组
   - 用途：过滤数据、条件查询

3. **reduce()**：将数组归纳为单个值
   - 用途：求和、计数、数据聚合、对象转换

4. **forEach()**：遍历数组，无返回值
   - 用途：执行副作用操作（如打印、更新 DOM）

5. **find()**：查找第一个符合条件的元素
   - 用途：查找特定元素

6. **some()**：检查是否至少有一个元素符合条件
   - 用途：存在性判断

7. **every()**：检查是否所有元素都符合条件
   - 用途：完整性验证

**方法选择指南**：

- 需要转换数据？使用 **map**
- 需要筛选数据？使用 **filter**
- 需要聚合数据？使用 **reduce**
- 只需遍历？使用 **forEach**
- 查找元素？使用 **find** 或 **findIndex**
- 判断条件？使用 **some** 或 **every**

**链式调用**：

这些方法可以链式调用，构建强大的数据处理管道。`,
          codeExample: `// map - 转换数组
const numbers = [1, 2, 3, 4, 5];

// 将每个数字乘以 2
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// 提取对象属性
const users = [
  { id: 1, name: '张三', age: 25 },
  { id: 2, name: '李四', age: 30 },
  { id: 3, name: '王五', age: 28 }
];

const names = users.map(user => user.name);
console.log(names); // ['张三', '李四', '王五']

// 格式化数据
const formatted = users.map(user => ({
  ...user,
  label: \`\${user.name} (\${user.age}岁)\`
}));

// filter - 筛选数组
// 筛选偶数
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// 筛选年龄大于 26 的用户
const adults = users.filter(user => user.age > 26);

// 筛选包含特定字符的字符串
const fruits = ['苹果', '香蕉', '橙子', '葡萄'];
const filtered = fruits.filter(fruit => fruit.includes('果'));
console.log(filtered); // ['苹果', '葡萄']

// 组合 filter 和 map
const youngUserNames = users
  .filter(user => user.age < 30)
  .map(user => user.name);

// reduce - 归纳数组
// 求和
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15

// 求最大值
const max = numbers.reduce((max, num) => num > max ? num : max, numbers[0]);
console.log(max); // 5

// 计数
const fruits2 = ['苹果', '香蕉', '苹果', '橙子', '香蕉', '苹果'];
const count = fruits2.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count); // { 苹果: 3, 香蕉: 2, 橙子: 1 }

// 数组转对象
const usersById = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});

// 扁平化数组
const nested = [[1, 2], [3, 4], [5, 6]];
const flattened = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log(flattened); // [1, 2, 3, 4, 5, 6]

// forEach - 遍历数组
// 打印每个元素
numbers.forEach(num => {
  console.log(\`数字: \${num}\`);
});

// 更新对象（副作用操作）
const products = [
  { id: 1, price: 100 },
  { id: 2, price: 200 }
];

products.forEach(product => {
  product.priceWithTax = product.price * 1.1;
});

// find - 查找元素
// 查找第一个偶数
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 2

// 查找特定用户
const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: '李四', age: 30 }

// findIndex - 查找索引
const index = users.findIndex(u => u.name === '王五');
console.log(index); // 2

// some - 检查是否存在
// 是否有偶数
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true

// 是否有成年用户
const hasAdult = users.some(user => user.age >= 18);
console.log(hasAdult); // true

// every - 检查是否全部满足
// 是否全是正数
const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true

// 是否全是成年人
const allAdults = users.every(user => user.age >= 18);
console.log(allAdults); // true

// 其他有用的方法
// includes - 检查是否包含
const hasThree = numbers.includes(3);
console.log(hasThree); // true

// sort - 排序
const sorted = [...numbers].sort((a, b) => b - a); // 降序
console.log(sorted); // [5, 4, 3, 2, 1]

const sortedUsers = [...users].sort((a, b) => a.age - b.age); // 按年龄升序

// slice - 切片（不修改原数组）
const sliced = numbers.slice(1, 3);
console.log(sliced); // [2, 3]

// concat - 合并数组
const combined = numbers.concat([6, 7, 8]);

// 实际应用示例：复杂的数据处理流水线
const orders = [
  { id: 1, product: '手机', price: 3000, quantity: 2, status: 'completed' },
  { id: 2, product: '电脑', price: 5000, quantity: 1, status: 'completed' },
  { id: 3, product: '耳机', price: 200, quantity: 3, status: 'pending' },
  { id: 4, product: '键盘', price: 300, quantity: 2, status: 'completed' }
];

// 计算已完成订单的总金额
const totalRevenue = orders
  .filter(order => order.status === 'completed')
  .map(order => order.price * order.quantity)
  .reduce((sum, amount) => sum + amount, 0);

console.log(\`总收入: \${totalRevenue} 元\`); // 总收入: 11600 元

// 获取价格最高的已完成订单
const highestOrder = orders
  .filter(order => order.status === 'completed')
  .reduce((highest, order) => {
    const orderTotal = order.price * order.quantity;
    const highestTotal = highest.price * highest.quantity;
    return orderTotal > highestTotal ? order : highest;
  });`,
        },
        {
          id: "object-oriented",
          name: "面向对象",
          link: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Details_of_the_Object_Model",
          description: "JavaScript 的面向对象编程基于原型和类的概念。",
          content: `JavaScript 支持面向对象编程，提供了类（Class）语法和原型（Prototype）机制。ES6 引入的 class 语法使得面向对象编程更加直观。

**面向对象的核心概念**：

1. **封装（Encapsulation）**：
   - 将数据和方法封装在对象中
   - 隐藏内部实现细节
   - 使用私有字段（#）保护数据

2. **继承（Inheritance）**：
   - 子类继承父类的属性和方法
   - 使用 extends 关键字
   - 通过 super 访问父类

3. **多态（Polymorphism）**：
   - 子类可以重写父类的方法
   - 同一接口不同实现

**Class 语法**：

- **constructor**：构造函数，创建实例时调用
- **方法**：类的实例方法
- **静态方法**：使用 static 关键字，通过类名调用
- **Getter/Setter**：使用 get/set 关键字
- **私有字段**：使用 # 前缀

**原型链**：

JavaScript 使用原型链实现继承。每个对象都有一个原型对象，继承其属性和方法。

**最佳实践**：

1. 保持类的单一职责
2. 优先使用组合而非继承
3. 使用私有字段保护内部状态
4. 合理使用静态方法`,
          codeExample: `// 基本的类定义
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // 实例方法
  introduce() {
    return \`你好，我是 \${this.name}，今年 \${this.age} 岁\`;
  }

  // Getter
  get info() {
    return \`\${this.name} (\${this.age}岁)\`;
  }

  // Setter
  set birthYear(year) {
    this.age = new Date().getFullYear() - year;
  }

  // 静态方法
  static compare(person1, person2) {
    return person1.age - person2.age;
  }
}

// 创建实例
const person = new Person('张三', 25);
console.log(person.introduce()); // '你好，我是 张三，今年 25 岁'
console.log(person.info); // '张三 (25岁)'

person.birthYear = 1998;
console.log(person.age); // 根据当前年份计算

// 调用静态方法
const person2 = new Person('李四', 30);
console.log(Person.compare(person, person2)); // -5

// 类的继承
class Student extends Person {
  constructor(name, age, school) {
    super(name, age); // 调用父类构造函数
    this.school = school;
    this.grades = [];
  }

  // 重写父类方法
  introduce() {
    return \`\${super.introduce()}，我在 \${this.school} 学习\`;
  }

  // 新增方法
  addGrade(subject, score) {
    this.grades.push({ subject, score });
  }

  getAverage() {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((acc, g) => acc + g.score, 0);
    return sum / this.grades.length;
  }
}

const student = new Student('王五', 20, '清华大学');
console.log(student.introduce());
// '你好，我是 王五，今年 20 岁，我在 清华大学 学习'

student.addGrade('数学', 95);
student.addGrade('英语', 88);
console.log(student.getAverage()); // 91.5

// 私有字段（ES2022）
class BankAccount {
  #balance = 0; // 私有字段

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return true;
    }
    return false;
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      return true;
    }
    return false;
  }

  get balance() {
    return this.#balance;
  }
}

const account = new BankAccount('张三');
account.deposit(1000);
console.log(account.balance); // 1000
// console.log(account.#balance); // 错误：私有字段无法访问

// 原型链示例
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(\`\${this.name} 发出声音\`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(\`\${this.name} 汪汪叫\`);
  }

  fetch() {
    console.log(\`\${this.name} 去捡球\`);
  }
}

const dog = new Dog('旺财', '金毛');
dog.speak(); // '旺财 汪汪叫'
dog.fetch(); // '旺财 去捡球'

// 检查原型链
console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true
console.log(dog instanceof Object); // true

// 实际应用示例：任务管理系统
class Task {
  static idCounter = 0;

  constructor(title, description) {
    this.id = ++Task.idCounter;
    this.title = title;
    this.description = description;
    this.status = 'pending';
    this.createdAt = new Date();
  }

  complete() {
    this.status = 'completed';
    this.completedAt = new Date();
  }

  cancel() {
    this.status = 'cancelled';
  }

  get isCompleted() {
    return this.status === 'completed';
  }

  get duration() {
    if (this.completedAt) {
      return this.completedAt - this.createdAt;
    }
    return null;
  }
}

class TaskManager {
  #tasks = [];

  addTask(title, description) {
    const task = new Task(title, description);
    this.#tasks.push(task);
    return task;
  }

  completeTask(taskId) {
    const task = this.#tasks.find(t => t.id === taskId);
    if (task) {
      task.complete();
      return true;
    }
    return false;
  }

  getTasks(status = null) {
    if (status) {
      return this.#tasks.filter(t => t.status === status);
    }
    return [...this.#tasks];
  }

  get completedCount() {
    return this.#tasks.filter(t => t.isCompleted).length;
  }

  get pendingCount() {
    return this.#tasks.filter(t => t.status === 'pending').length;
  }
}

// 使用任务管理器
const manager = new TaskManager();
const task1 = manager.addTask('学习 JavaScript', '完成 ES6 章节');
const task2 = manager.addTask('写代码', '完成项目功能');

manager.completeTask(task1.id);

console.log(\`已完成: \${manager.completedCount}\`);
console.log(\`待处理: \${manager.pendingCount}\`);`,
        },
        {
          id: "modules",
          name: "模块系统",
          link: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules",
          description: "ES6 模块系统使得代码组织和复用更加简单。",
          content: `ES6 引入了原生的模块系统，使用 import 和 export 关键字。模块化帮助我们更好地组织代码，实现关注点分离和代码复用。

**模块的优势**：

1. **代码组织**：将代码分割成逻辑单元
2. **作用域隔离**：每个模块有自己的作用域
3. **依赖管理**：明确的依赖关系
4. **代码复用**：轻松在不同项目中复用代码

**导出方式**：

1. **命名导出（Named Export）**：
   - 可以导出多个值
   - 导入时必须使用相同的名称（或使用 as 重命名）
   - \`export { value }\` 或 \`export const value = ...\`

2. **默认导出（Default Export）**：
   - 每个模块只能有一个默认导出
   - 导入时可以使用任意名称
   - \`export default value\`

**导入方式**：

1. **命名导入**：\`import { name } from './module'\`
2. **默认导入**：\`import name from './module'\`
3. **全部导入**：\`import * as name from './module'\`
4. **混合导入**：\`import defaultName, { namedExport } from './module'\`

**最佳实践**：

1. 一个文件一个主要功能
2. 优先使用命名导出（更容易重构）
3. 避免循环依赖
4. 使用清晰的命名`,
          codeExample: `// ========== math.js ==========
// 命名导出 - 方式1（声明时导出）
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// 命名导出 - 方式2（统一导出）
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

export { multiply, divide };

// 重命名导出
const square = (x) => x * x;
export { square as pow2 };

// ========== calculator.js ==========
// 默认导出 - 方式1（导出类）
export default class Calculator {
  constructor() {
    this.result = 0;
  }

  add(value) {
    this.result += value;
    return this;
  }

  multiply(value) {
    this.result *= value;
    return this;
  }

  getResult() {
    return this.result;
  }
}

// ========== utils.js ==========
// 混合导出（命名导出 + 默认导出）
export const formatDate = (date) => {
  return date.toLocaleDateString('zh-CN');
};

export const formatCurrency = (amount) => {
  return \`¥\${amount.toFixed(2)}\`;
};

// 默认导出
export default {
  formatDate,
  formatCurrency,
  version: '1.0.0'
};

// ========== main.js ==========
// 导入命名导出
import { add, subtract, multiply } from './math.js';

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
console.log(multiply(5, 3)); // 15

// 重命名导入
import { add as sum, multiply as times } from './math.js';

console.log(sum(2, 3)); // 5
console.log(times(2, 3)); // 6

// 导入默认导出
import Calculator from './calculator.js';

const calc = new Calculator();
calc.add(10).multiply(2);
console.log(calc.getResult()); // 20

// 导入全部
import * as MathUtils from './math.js';

console.log(MathUtils.PI); // 3.14159
console.log(MathUtils.add(1, 2)); // 3

// 混合导入
import utils, { formatDate, formatCurrency } from './utils.js';

console.log(formatDate(new Date()));
console.log(formatCurrency(1234.5));
console.log(utils.version); // '1.0.0'

// 只导入执行（不导入值）
import './setup.js'; // 执行 setup.js 中的初始化代码

// 动态导入（懒加载）
async function loadModule() {
  const module = await import('./heavy-module.js');
  module.doSomething();
}

// 条件导入
if (condition) {
  import('./module-a.js').then(module => {
    module.init();
  });
} else {
  import('./module-b.js').then(module => {
    module.init();
  });
}

// ========== 实际应用示例 ==========

// ========== api.js ==========
// API 工具模块
const BASE_URL = 'https://api.example.com';

export async function get(endpoint) {
  const response = await fetch(\`\${BASE_URL}\${endpoint}\`);
  return response.json();
}

export async function post(endpoint, data) {
  const response = await fetch(\`\${BASE_URL}\${endpoint}\`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return response.json();
}

export default { get, post };

// ========== userService.js ==========
// 用户服务模块
import { get, post } from './api.js';

export async function getUser(userId) {
  return get(\`/users/\${userId}\`);
}

export async function createUser(userData) {
  return post('/users', userData);
}

export async function getUserPosts(userId) {
  return get(\`/users/\${userId}/posts\`);
}

// ========== app.js ==========
// 应用主文件
import * as userService from './userService.js';

async function init() {
  try {
    const user = await userService.getUser(1);
    console.log('用户信息:', user);

    const posts = await userService.getUserPosts(1);
    console.log('用户文章:', posts);
  } catch (error) {
    console.error('初始化失败:', error);
  }
}

init();

// ========== constants.js ==========
// 常量模块
export const COLORS = {
  PRIMARY: '#007bff',
  SUCCESS: '#28a745',
  DANGER: '#dc3545',
  WARNING: '#ffc107'
};

export const API_ENDPOINTS = {
  USERS: '/api/users',
  POSTS: '/api/posts',
  COMMENTS: '/api/comments'
};

export const CONFIG = {
  API_TIMEOUT: 5000,
  MAX_RETRIES: 3,
  CACHE_DURATION: 600000 // 10 分钟
};

// ========== types.js ==========
// 类型定义模块（配合 JSDoc 使用）
/**
 * @typedef {Object} User
 * @property {number} id
 * @property {string} name
 * @property {string} email
 */

/**
 * @typedef {Object} Post
 * @property {number} id
 * @property {string} title
 * @property {string} content
 * @property {number} userId
 */

export {};`,
        },
      ],
    },
  ],
};
