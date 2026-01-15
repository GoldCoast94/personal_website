import { TechDetail } from '../../../types';

export const javascriptDataEn: TechDetail = {
  name: "JavaScript",
  description: "Lightweight interpreted programming language",
  icon: "/images/javascript-logo.svg",
  color: "from-yellow-500 to-orange-500",
  officialLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  content: [
    {
      title: "JavaScript Core Concepts",
      items: [
        {
          id: "es6-features",
          name: "ES6+ Features",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
          description: "ES6+ introduced many modern syntax features that make JavaScript code more concise and readable.",
          content: `ES6 (ECMAScript 2015) and subsequent versions brought revolutionary improvements to JavaScript. These features greatly enhance code readability and development efficiency.

**Arrow Functions**:
Arrow functions provide a more concise function syntax and don't bind their own this value. They're particularly useful for callbacks and short function expressions.

**Arrow Function Characteristics**:
1. **Concise Syntax**: Omits the function keyword
2. **Implicit Return**: Single-line expressions automatically return results
3. **Lexical this**: Inherits this from the outer scope
4. **Cannot be Constructor**: Cannot be called with new

**Destructuring Assignment**:
Destructuring allows extracting values from arrays or objects and assigning them to variables. This makes code more concise and readable.

**Spread Operator and Rest Parameters**:
The spread operator (...) can expand arrays or objects, while rest parameters can collect multiple arguments into an array.

**Template Literals**:
Strings defined with backticks support multi-line strings and expression interpolation, more intuitive than string concatenation.`,
          codeExample: `// Different Arrow Function Syntaxes
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function - full form
const add = (a, b) => {
  return a + b;
};

// Arrow function - implicit return
const add = (a, b) => a + b;

// Single parameter can omit parentheses
const square = x => x * x;

// No parameters need empty parentheses
const sayHello = () => console.log('Hello!');

// Returning object literals needs parentheses
const createUser = (name, age) => ({ name, age });

// Object Destructuring
const user = {
  name: 'John',
  age: 25,
  email: 'john@example.com',
  address: {
    city: 'New York',
    country: 'USA'
  }
};

// Basic destructuring
const { name, age } = user;
console.log(name, age); // 'John' 25

// Renaming variables
const { name: userName, age: userAge } = user;

// Nested destructuring
const { address: { city } } = user;
console.log(city); // 'New York'

// Default values
const { phone = 'Not provided' } = user;

// Array Destructuring
const colors = ['red', 'green', 'blue', 'yellow'];

// Basic destructuring
const [first, second] = colors;
console.log(first, second); // 'red' 'green'

// Skip elements
const [, , third] = colors;
console.log(third); // 'blue'

// Rest elements
const [primary, ...otherColors] = colors;
console.log(otherColors); // ['green', 'blue', 'yellow']

// Spread Operator Examples
// Array spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Array copy
const original = [1, 2, 3];
const copy = [...original];

// Object spread
const baseConfig = { host: 'localhost', port: 3000 };
const config = { ...baseConfig, port: 8080 }; // Override port

// Merge objects
const person = { name: 'Jane' };
const employee = { id: 123, department: 'Development' };
const fullInfo = { ...person, ...employee };

// Rest Parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

// Template Literals
const name = 'React';
const version = 18;

// Traditional way
const message1 = 'Welcome to ' + name + ' version ' + version;

// Template literal
const message2 = \`Welcome to \${name} version \${version}\`;

// Multi-line strings
const html = \`
  <div class="user">
    <h1>\${user.name}</h1>
    <p>\${user.email}</p>
  </div>
\`;

// Expression calculation
const price = 100;
const tax = 0.1;
const total = \`Total: \${(price * (1 + tax)).toFixed(2)}\`;

// Tagged templates (advanced usage)
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i] ? \`<strong>\${values[i]}</strong>\` : '';
    return result + str + value;
  }, '');
}

const highlighted = highlight\`User \${name} age \${age}\`;`,
        },
        {
          id: "async-programming",
          name: "Async Programming",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises",
          description: "Asynchronous programming is essential for handling time-consuming operations without blocking the main thread.",
          content: `JavaScript is single-threaded, and asynchronous programming allows us to continue executing other code while waiting for time-consuming operations (like network requests, file reads).

**Evolution of Async Programming**:

1. **Callbacks**: The earliest async solution, but prone to callback hell
2. **Promise**: Introduced in ES6, provides a more elegant async handling approach
3. **Async/Await**: Introduced in ES2017, makes async code look like sync code

**Promise States**:

- **Pending**: Initial state
- **Fulfilled**: Operation completed successfully
- **Rejected**: Operation failed

**Promise Characteristics**:

1. **Chaining**: Link multiple async operations through then method
2. **Error Handling**: Use catch to handle errors uniformly
3. **Immutable State**: Once changed, it won't change again

**Async/Await Advantages**:

1. **Clearer Code**: Looks like sync code, easier to understand
2. **Simpler Error Handling**: Can use try/catch
3. **Better Debugging**: Breakpoints and call stacks are more intuitive

**Parallel Execution**:

Use Promise.all to execute multiple async operations in parallel, significantly improving efficiency.`,
          codeExample: `// Callbacks (old way, prone to callback hell)
function fetchUserData(userId, callback) {
  setTimeout(() => {
    callback(null, { id: userId, name: 'John' });
  }, 1000);
}

fetchUserData(1, (error, user) => {
  if (error) {
    console.error(error);
  } else {
    console.log(user);
  }
});

// Callback hell example
fetchUser(1, (user) => {
  fetchPosts(user.id, (posts) => {
    fetchComments(posts[0].id, (comments) => {
      console.log(comments);
    });
  });
});

// Promise Basics
// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve('Operation successful!');
  } else {
    reject('Operation failed!');
  }
});

// Using Promise
myPromise
  .then(result => {
    console.log(result); // 'Operation successful!'
  })
  .catch(error => {
    console.error(error);
  });

// Promise Chaining
function fetchUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: 'Jane' });
    }, 1000);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: 'First Post' },
        { id: 2, title: 'Second Post' }
      ]);
    }, 1000);
  });
}

// Chaining avoids callback hell
fetchUser(1)
  .then(user => {
    console.log('User:', user);
    return fetchPosts(user.id);
  })
  .then(posts => {
    console.log('Posts:', posts);
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });

// Async/Await Syntax
// Basic usage
async function getUserData() {
  try {
    const user = await fetchUser(1);
    console.log('User:', user);

    const posts = await fetchPosts(user.id);
    console.log('Posts:', posts);

    return { user, posts };
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

// Calling async function
getUserData().then(data => {
  console.log('All data:', data);
});

// Error Handling
async function fetchDataWithErrorHandling() {
  try {
    const response = await fetch('https://api.example.com/data');

    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error; // Re-throw for caller to handle
  }
}

// Parallel Execution of Multiple Async Operations
async function fetchAllData() {
  try {
    // Start multiple requests simultaneously
    const [users, posts, comments] = await Promise.all([
      fetch('/api/users').then(r => r.json()),
      fetch('/api/posts').then(r => r.json()),
      fetch('/api/comments').then(r => r.json())
    ]);

    return { users, posts, comments };
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
}

// Promise.race (returns fastest to complete)
async function fetchWithTimeout(url, timeout = 5000) {
  const fetchPromise = fetch(url);
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Request timeout')), timeout);
  });

  try {
    const response = await Promise.race([fetchPromise, timeoutPromise]);
    return response;
  } catch (error) {
    console.error('Request failed:', error);
  }
}

// Sequential Execution of Multiple Async Operations
async function processInSequence(items) {
  const results = [];

  for (const item of items) {
    const result = await processItem(item);
    results.push(result);
  }

  return results;
}

// Real-world Example: Complete Data Fetching Flow
async function loadUserDashboard(userId) {
  try {
    // 1. Show loading state
    console.log('Loading...');

    // 2. Fetch user info
    const user = await fetch(\`/api/users/\${userId}\`).then(r => r.json());

    // 3. Fetch user-related data in parallel
    const [posts, followers, stats] = await Promise.all([
      fetch(\`/api/users/\${userId}/posts\`).then(r => r.json()),
      fetch(\`/api/users/\${userId}/followers\`).then(r => r.json()),
      fetch(\`/api/users/\${userId}/stats\`).then(r => r.json())
    ]);

    // 4. Combine data
    const dashboard = {
      user,
      posts,
      followers,
      stats
    };

    console.log('Loading complete!', dashboard);
    return dashboard;
  } catch (error) {
    console.error('Failed to load dashboard:', error);
    throw error;
  }
}`,
        },
        {
          id: "array-methods",
          name: "Array Methods",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
          description: "JavaScript provides rich array methods for data processing and transformation.",
          content: `Modern JavaScript provides powerful array methods that make data processing concise and elegant. These methods don't modify the original array (except for specific methods), but return new results.

**Common Array Methods**:

1. **map()**: Transform each element of an array, return new array
   - Use: Data transformation, formatting, property extraction

2. **filter()**: Filter elements that meet conditions, return new array
   - Use: Filter data, conditional queries

3. **reduce()**: Reduce array to single value
   - Use: Sum, count, data aggregation, object conversion

4. **forEach()**: Iterate over array, no return value
   - Use: Execute side-effect operations (like printing, updating DOM)

5. **find()**: Find first element that meets condition
   - Use: Find specific element

6. **some()**: Check if at least one element meets condition
   - Use: Existence check

7. **every()**: Check if all elements meet condition
   - Use: Completeness validation

**Method Selection Guide**:

- Need to transform data? Use **map**
- Need to filter data? Use **filter**
- Need to aggregate data? Use **reduce**
- Just need to iterate? Use **forEach**
- Find element? Use **find** or **findIndex**
- Check condition? Use **some** or **every**

**Chaining**:

These methods can be chained to build powerful data processing pipelines.`,
          codeExample: `// map - Transform Array
const numbers = [1, 2, 3, 4, 5];

// Double each number
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Extract object properties
const users = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Jane', age: 30 },
  { id: 3, name: 'Bob', age: 28 }
];

const names = users.map(user => user.name);
console.log(names); // ['John', 'Jane', 'Bob']

// Format data
const formatted = users.map(user => ({
  ...user,
  label: \`\${user.name} (\${user.age} years old)\`
}));

// filter - Filter Array
// Filter even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// Filter users older than 26
const adults = users.filter(user => user.age > 26);

// Filter strings containing specific characters
const fruits = ['apple', 'banana', 'orange', 'grape'];
const filtered = fruits.filter(fruit => fruit.includes('an'));
console.log(filtered); // ['banana', 'orange']

// Combine filter and map
const youngUserNames = users
  .filter(user => user.age < 30)
  .map(user => user.name);

// reduce - Reduce Array
// Sum
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15

// Find maximum
const max = numbers.reduce((max, num) => num > max ? num : max, numbers[0]);
console.log(max); // 5

// Count occurrences
const fruits2 = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits2.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count); // { apple: 3, banana: 2, orange: 1 }

// Array to object
const usersById = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});

// Flatten array
const nested = [[1, 2], [3, 4], [5, 6]];
const flattened = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log(flattened); // [1, 2, 3, 4, 5, 6]

// forEach - Iterate Array
// Print each element
numbers.forEach(num => {
  console.log(\`Number: \${num}\`);
});

// Update objects (side-effect operation)
const products = [
  { id: 1, price: 100 },
  { id: 2, price: 200 }
];

products.forEach(product => {
  product.priceWithTax = product.price * 1.1;
});

// find - Find Element
// Find first even number
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 2

// Find specific user
const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: 'Jane', age: 30 }

// findIndex - Find Index
const index = users.findIndex(u => u.name === 'Bob');
console.log(index); // 2

// some - Check Existence
// Check if there are even numbers
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true

// Check if there are adult users
const hasAdult = users.some(user => user.age >= 18);
console.log(hasAdult); // true

// every - Check All
// Check if all are positive
const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true

// Check if all are adults
const allAdults = users.every(user => user.age >= 18);
console.log(allAdults); // true

// Other Useful Methods
// includes - Check if contains
const hasThree = numbers.includes(3);
console.log(hasThree); // true

// sort - Sort
const sorted = [...numbers].sort((a, b) => b - a); // Descending
console.log(sorted); // [5, 4, 3, 2, 1]

const sortedUsers = [...users].sort((a, b) => a.age - b.age); // Sort by age ascending

// slice - Slice (doesn't modify original)
const sliced = numbers.slice(1, 3);
console.log(sliced); // [2, 3]

// concat - Merge arrays
const combined = numbers.concat([6, 7, 8]);

// Real-world Example: Complex Data Processing Pipeline
const orders = [
  { id: 1, product: 'Phone', price: 3000, quantity: 2, status: 'completed' },
  { id: 2, product: 'Computer', price: 5000, quantity: 1, status: 'completed' },
  { id: 3, product: 'Headphones', price: 200, quantity: 3, status: 'pending' },
  { id: 4, product: 'Keyboard', price: 300, quantity: 2, status: 'completed' }
];

// Calculate total revenue from completed orders
const totalRevenue = orders
  .filter(order => order.status === 'completed')
  .map(order => order.price * order.quantity)
  .reduce((sum, amount) => sum + amount, 0);

console.log(\`Total Revenue: $\${totalRevenue}\`); // Total Revenue: $11600

// Get highest value completed order
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
          name: "Object-Oriented",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model",
          description: "JavaScript's object-oriented programming is based on prototypes and classes.",
          content: `JavaScript supports object-oriented programming, providing class syntax and prototype mechanisms. The class syntax introduced in ES6 makes object-oriented programming more intuitive.

**Core OOP Concepts**:

1. **Encapsulation**:
   - Encapsulate data and methods in objects
   - Hide implementation details
   - Use private fields (#) to protect data

2. **Inheritance**:
   - Subclasses inherit properties and methods from parent classes
   - Use extends keyword
   - Access parent class through super

3. **Polymorphism**:
   - Subclasses can override parent methods
   - Same interface, different implementations

**Class Syntax**:

- **constructor**: Constructor, called when creating instance
- **Methods**: Instance methods of the class
- **Static Methods**: Use static keyword, called through class name
- **Getter/Setter**: Use get/set keywords
- **Private Fields**: Use # prefix

**Prototype Chain**:

JavaScript uses prototype chain for inheritance. Each object has a prototype object from which it inherits properties and methods.

**Best Practices**:

1. Keep classes focused on single responsibility
2. Prefer composition over inheritance
3. Use private fields to protect internal state
4. Use static methods appropriately`,
          codeExample: `// Basic Class Definition
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Instance method
  introduce() {
    return \`Hello, I'm \${this.name}, \${this.age} years old\`;
  }

  // Getter
  get info() {
    return \`\${this.name} (\${this.age} years old)\`;
  }

  // Setter
  set birthYear(year) {
    this.age = new Date().getFullYear() - year;
  }

  // Static method
  static compare(person1, person2) {
    return person1.age - person2.age;
  }
}

// Create instance
const person = new Person('John', 25);
console.log(person.introduce()); // 'Hello, I'm John, 25 years old'
console.log(person.info); // 'John (25 years old)'

person.birthYear = 1998;
console.log(person.age); // Calculated based on current year

// Call static method
const person2 = new Person('Jane', 30);
console.log(Person.compare(person, person2)); // -5

// Class Inheritance
class Student extends Person {
  constructor(name, age, school) {
    super(name, age); // Call parent constructor
    this.school = school;
    this.grades = [];
  }

  // Override parent method
  introduce() {
    return \`\${super.introduce()}, I study at \${this.school}\`;
  }

  // New method
  addGrade(subject, score) {
    this.grades.push({ subject, score });
  }

  getAverage() {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((acc, g) => acc + g.score, 0);
    return sum / this.grades.length;
  }
}

const student = new Student('Bob', 20, 'MIT');
console.log(student.introduce());
// 'Hello, I'm Bob, 20 years old, I study at MIT'

student.addGrade('Math', 95);
student.addGrade('English', 88);
console.log(student.getAverage()); // 91.5

// Private Fields (ES2022)
class BankAccount {
  #balance = 0; // Private field

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

const account = new BankAccount('John');
account.deposit(1000);
console.log(account.balance); // 1000
// console.log(account.#balance); // Error: Private field cannot be accessed

// Prototype Chain Example
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(\`\${this.name} makes a sound\`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(\`\${this.name} barks\`);
  }

  fetch() {
    console.log(\`\${this.name} fetches the ball\`);
  }
}

const dog = new Dog('Rex', 'Golden Retriever');
dog.speak(); // 'Rex barks'
dog.fetch(); // 'Rex fetches the ball'

// Check prototype chain
console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true
console.log(dog instanceof Object); // true

// Real-world Example: Task Management System
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

// Use task manager
const manager = new TaskManager();
const task1 = manager.addTask('Learn JavaScript', 'Complete ES6 chapter');
const task2 = manager.addTask('Write code', 'Complete project feature');

manager.completeTask(task1.id);

console.log(\`Completed: \${manager.completedCount}\`);
console.log(\`Pending: \${manager.pendingCount}\`);`,
        },
        {
          id: "modules",
          name: "Module System",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
          description: "ES6 module system makes code organization and reuse simpler.",
          content: `ES6 introduced a native module system using import and export keywords. Modularization helps us organize code better, achieve separation of concerns, and code reuse.

**Module Advantages**:

1. **Code Organization**: Split code into logical units
2. **Scope Isolation**: Each module has its own scope
3. **Dependency Management**: Clear dependency relationships
4. **Code Reuse**: Easy to reuse code across projects

**Export Methods**:

1. **Named Export**:
   - Can export multiple values
   - Must use same name when importing (or rename with as)
   - \`export { value }\` or \`export const value = ...\`

2. **Default Export**:
   - Only one default export per module
   - Can use any name when importing
   - \`export default value\`

**Import Methods**:

1. **Named Import**: \`import { name } from './module'\`
2. **Default Import**: \`import name from './module'\`
3. **Import All**: \`import * as name from './module'\`
4. **Mixed Import**: \`import defaultName, { namedExport } from './module'\`

**Best Practices**:

1. One main function per file
2. Prefer named exports (easier to refactor)
3. Avoid circular dependencies
4. Use clear naming`,
          codeExample: `// ========== math.js ==========
// Named export - Method 1 (export on declaration)
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// Named export - Method 2 (unified export)
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

export { multiply, divide };

// Rename export
const square = (x) => x * x;
export { square as pow2 };

// ========== calculator.js ==========
// Default export - Method 1 (export class)
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
// Mixed export (named + default)
export const formatDate = (date) => {
  return date.toLocaleDateString('en-US');
};

export const formatCurrency = (amount) => {
  return \`$\${amount.toFixed(2)}\`;
};

// Default export
export default {
  formatDate,
  formatCurrency,
  version: '1.0.0'
};

// ========== main.js ==========
// Import named exports
import { add, subtract, multiply } from './math.js';

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
console.log(multiply(5, 3)); // 15

// Rename imports
import { add as sum, multiply as times } from './math.js';

console.log(sum(2, 3)); // 5
console.log(times(2, 3)); // 6

// Import default export
import Calculator from './calculator.js';

const calc = new Calculator();
calc.add(10).multiply(2);
console.log(calc.getResult()); // 20

// Import all
import * as MathUtils from './math.js';

console.log(MathUtils.PI); // 3.14159
console.log(MathUtils.add(1, 2)); // 3

// Mixed import
import utils, { formatDate, formatCurrency } from './utils.js';

console.log(formatDate(new Date()));
console.log(formatCurrency(1234.5));
console.log(utils.version); // '1.0.0'

// Import for side effects only
import './setup.js'; // Execute initialization code in setup.js

// Dynamic import (lazy loading)
async function loadModule() {
  const module = await import('./heavy-module.js');
  module.doSomething();
}

// Conditional import
if (condition) {
  import('./module-a.js').then(module => {
    module.init();
  });
} else {
  import('./module-b.js').then(module => {
    module.init();
  });
}

// ========== Real-world Example ==========

// ========== api.js ==========
// API utility module
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
// User service module
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
// Application main file
import * as userService from './userService.js';

async function init() {
  try {
    const user = await userService.getUser(1);
    console.log('User info:', user);

    const posts = await userService.getUserPosts(1);
    console.log('User posts:', posts);
  } catch (error) {
    console.error('Initialization failed:', error);
  }
}

init();

// ========== constants.js ==========
// Constants module
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
  CACHE_DURATION: 600000 // 10 minutes
};

// ========== types.js ==========
// Type definition module (used with JSDoc)
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
