export const typescriptAdvanced = {
  slug: "typescript-advanced",
  title: "TypeScript 高级特性详解",
  date: "2024-02-10",
  readTime: "25 分钟",
  tags: ["TypeScript", "类型系统", "高级特性"],
  content: {
    zh: `
## 引言

TypeScript 作为 JavaScript 的超集，提供了强大的类型系统和高级特性。本文将深入探讨 TypeScript 的高级特性，包括泛型、条件类型、映射类型、类型推断等核心概念，帮助你构建更安全、更可维护的代码。

## 1. 泛型（Generics）

泛型是 TypeScript 类型系统中最强大的特性之一，它允许我们创建可重用的组件，这些组件可以支持多种类型而不失去类型安全性。

### 1.1 基础泛型

\`\`\`typescript
// 基础泛型函数
function identity<T>(arg: T): T {
  return arg;
}

// 使用泛型
const result = identity<string>("Hello TypeScript");
const numberResult = identity(42); // 类型推断

// 泛型数组
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const firstNum = getFirstElement([1, 2, 3]); // number | undefined
const firstName = getFirstElement(['Alice', 'Bob']); // string | undefined
\`\`\`

### 1.2 泛型接口和类型别名

\`\`\`typescript
// 泛型接口
interface Response<T> {
  data: T;
  status: number;
  message: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

// 使用泛型接口
const userResponse: Response<User> = {
  data: { id: 1, name: 'John', email: 'john@example.com' },
  status: 200,
  message: 'Success'
};

// 泛型类型别名
type ApiResponse<T> = {
  success: boolean;
  data: T;
  error?: string;
};

type UserListResponse = ApiResponse<User[]>;
\`\`\`

### 1.3 泛型约束

\`\`\`typescript
// 使用 extends 约束泛型
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

logLength('Hello'); // ✅ string 有 length
logLength([1, 2, 3]); // ✅ array 有 length
logLength({ length: 10 }); // ✅ 对象有 length
// logLength(42); // ❌ number 没有 length

// 使用 keyof 约束
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: 'Alice', age: 30 };
const name = getProperty(person, 'name'); // string
const age = getProperty(person, 'age'); // number
// const invalid = getProperty(person, 'invalid'); // ❌ 编译错误
\`\`\`

### 1.4 泛型类

\`\`\`typescript
class DataStore<T> {
  private data: T[] = [];

  add(item: T): void {
    this.data.push(item);
  }

  get(index: number): T | undefined {
    return this.data[index];
  }

  getAll(): T[] {
    return [...this.data];
  }

  remove(index: number): T | undefined {
    return this.data.splice(index, 1)[0];
  }
}

const numberStore = new DataStore<number>();
numberStore.add(1);
numberStore.add(2);
console.log(numberStore.getAll()); // [1, 2]

const userStore = new DataStore<User>();
userStore.add({ id: 1, name: 'Alice', email: 'alice@example.com' });
\`\`\`

## 2. 条件类型（Conditional Types）

条件类型允许我们根据类型关系来选择类型，类似于 JavaScript 中的三元运算符。

### 2.1 基础条件类型

\`\`\`typescript
// 基础语法：T extends U ? X : Y
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false

// 内置条件类型
type NonNullable<T> = T extends null | undefined ? never : T;

type T0 = NonNullable<string | number | null>; // string | number
type T1 = NonNullable<string[] | null | undefined>; // string[]
\`\`\`

### 2.2 分布式条件类型

\`\`\`typescript
// 当条件类型作用于联合类型时，会分布到每个成员
type ToArray<T> = T extends any ? T[] : never;

type StrOrNumArray = ToArray<string | number>;
// string[] | number[] (而不是 (string | number)[])

// 实用示例：提取联合类型中的某种类型
type ExtractString<T> = T extends string ? T : never;

type Mixed = string | number | boolean;
type OnlyStrings = ExtractString<Mixed>; // string

// 排除某种类型
type ExcludeString<T> = T extends string ? never : T;
type WithoutStrings = ExcludeString<Mixed>; // number | boolean
\`\`\`

### 2.3 infer 关键字

\`\`\`typescript
// infer 用于在条件类型中推断类型变量

// 提取函数返回类型
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function getUser() {
  return { id: 1, name: 'Alice' };
}

type UserType = MyReturnType<typeof getUser>;
// { id: number; name: string; }

// 提取 Promise 的值类型
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type A1 = UnwrapPromise<Promise<string>>; // string
type A2 = UnwrapPromise<number>; // number

// 提取数组元素类型
type ArrayElement<T> = T extends (infer U)[] ? U : never;

type B1 = ArrayElement<string[]>; // string
type B2 = ArrayElement<number[]>; // number

// 提取函数参数类型
type Parameters<T> = T extends (...args: infer P) => any ? P : never;

function add(a: number, b: string): void {}
type AddParams = Parameters<typeof add>; // [number, string]

// 提取构造函数参数类型
type ConstructorParameters<T> = T extends new (...args: infer P) => any ? P : never;

class Person {
  constructor(name: string, age: number) {}
}

type PersonParams = ConstructorParameters<typeof Person>; // [string, number]
\`\`\`

## 3. 映射类型（Mapped Types）

映射类型允许我们基于旧类型创建新类型，通过遍历键来转换属性。

### 3.1 基础映射类型

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// 将所有属性变为可选
type PartialUser = Partial<User>;
// { id?: number; name?: string; email?: string; age?: number; }

// 将所有属性变为只读
type ReadonlyUser = Readonly<User>;
// { readonly id: number; readonly name: string; ... }

// 选择某些属性
type PickUser = Pick<User, 'name' | 'email'>;
// { name: string; email: string; }

// 排除某些属性
type OmitUser = Omit<User, 'id' | 'age'>;
// { name: string; email: string; }
\`\`\`

### 3.2 自定义映射类型

\`\`\`typescript
// 创建一个将所有属性变为可空的类型
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

type NullableUser = Nullable<User>;
// { id: number | null; name: string | null; ... }

// 创建一个将所有属性包装在 Promise 中的类型
type Promisify<T> = {
  [P in keyof T]: Promise<T[P]>;
};

type AsyncUser = Promisify<User>;
// { id: Promise<number>; name: Promise<string>; ... }

// 创建 Getter 类型
type Getters<T> = {
  [P in keyof T as \`get\${Capitalize<string & P>}\`]: () => T[P];
};

type UserGetters = Getters<User>;
// {
//   getId: () => number;
//   getName: () => string;
//   getEmail: () => string;
//   getAge: () => number;
// }
\`\`\`

### 3.3 条件映射类型

\`\`\`typescript
// 只保留某种类型的属性
type PickByType<T, U> = {
  [P in keyof T as T[P] extends U ? P : never]: T[P];
};

interface Mixed {
  id: number;
  name: string;
  age: number;
  email: string;
  active: boolean;
}

type StringProps = PickByType<Mixed, string>;
// { name: string; email: string; }

type NumberProps = PickByType<Mixed, number>;
// { id: number; age: number; }

// 将某种类型的属性变为可选
type PartialByType<T, U> = {
  [P in keyof T]: T[P] extends U ? T[P] | undefined : T[P];
};

type PartialStrings = PartialByType<Mixed, string>;
// { id: number; name: string | undefined; age: number; email: string | undefined; active: boolean; }
\`\`\`

## 4. 模板字面量类型（Template Literal Types）

TypeScript 4.1+ 引入的模板字面量类型，允许我们通过字符串模板创建新的字符串字面量类型。

### 4.1 基础模板字面量

\`\`\`typescript
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type ApiEndpoint = \`/api/\${string}\`;

type ApiUrl = \`\${HttpMethod} \${ApiEndpoint}\`;

// 使用示例
const url: ApiUrl = 'GET /api/users'; // ✅
const url2: ApiUrl = 'POST /api/products'; // ✅
// const invalidUrl: ApiUrl = 'PATCH /api/users'; // ❌

// 组合多个字面量类型
type Color = 'red' | 'blue' | 'green';
type Size = 'small' | 'medium' | 'large';

type ColoredSize = \`\${Color}-\${Size}\`;
// 'red-small' | 'red-medium' | 'red-large' | 'blue-small' | ...
\`\`\`

### 4.2 字符串操作类型

\`\`\`typescript
// TypeScript 内置的字符串操作类型
type EventName = 'click' | 'focus' | 'blur';

// 首字母大写
type CapitalizedEvent = Capitalize<EventName>;
// 'Click' | 'Focus' | 'Blur'

// 首字母小写
type LowercaseEvent = Uncapitalize<CapitalizedEvent>;
// 'click' | 'focus' | 'blur'

// 全部大写
type UppercaseEvent = Uppercase<EventName>;
// 'CLICK' | 'FOCUS' | 'BLUR'

// 全部小写
type LowercaseEvent2 = Lowercase<UppercaseEvent>;
// 'click' | 'focus' | 'blur'

// 实用示例：创建事件处理器类型
type EventHandler = \`on\${Capitalize<EventName>}\`;
// 'onClick' | 'onFocus' | 'onBlur'

interface EventHandlers {
  onClick: () => void;
  onFocus: () => void;
  onBlur: () => void;
}
\`\`\`

### 4.3 高级模板应用

\`\`\`typescript
// 创建路径类型
type Path = 'user' | 'product' | 'order';
type Action = 'list' | 'create' | 'update' | 'delete';

type ApiRoute = \`/api/\${Path}/\${Action}\`;
// '/api/user/list' | '/api/user/create' | ...

// 创建 CSS 属性类型
type CSSProperty =
  | 'margin'
  | 'padding'
  | 'border';

type CSSDirection = 'top' | 'right' | 'bottom' | 'left';

type CSSPropertyWithDirection = \`\${CSSProperty}\${Capitalize<CSSDirection>}\`;
// 'marginTop' | 'marginRight' | 'paddingTop' | 'borderBottom' | ...

// 实际使用
interface Style {
  marginTop?: string;
  marginRight?: string;
  paddingLeft?: string;
  borderBottom?: string;
}
\`\`\`

## 5. 类型守卫和类型收窄

类型守卫帮助 TypeScript 在特定的代码块中缩小类型范围。

### 5.1 内置类型守卫

\`\`\`typescript
// typeof 类型守卫
function padLeft(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return ' '.repeat(padding) + value;
  }
  return padding + value;
}

// instanceof 类型守卫
class Dog {
  bark() { console.log('Woof!'); }
}

class Cat {
  meow() { console.log('Meow!'); }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark(); // TypeScript 知道这是 Dog
  } else {
    animal.meow(); // TypeScript 知道这是 Cat
  }
}

// in 操作符
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ('swim' in animal) {
    animal.swim(); // Fish
  } else {
    animal.fly(); // Bird
  }
}
\`\`\`

### 5.2 自定义类型守卫

\`\`\`typescript
// 使用 is 关键字创建类型谓词
interface User {
  type: 'user';
  name: string;
  email: string;
}

interface Admin {
  type: 'admin';
  name: string;
  permissions: string[];
}

type Person = User | Admin;

// 自定义类型守卫函数
function isAdmin(person: Person): person is Admin {
  return person.type === 'admin';
}

function handlePerson(person: Person) {
  if (isAdmin(person)) {
    console.log(person.permissions); // TypeScript 知道这是 Admin
  } else {
    console.log(person.email); // TypeScript 知道这是 User
  }
}

// 数组过滤中的类型守卫
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

const mixed = [1, 'hello', 2, 'world', 3];
const strings = mixed.filter(isString); // string[]
\`\`\`

### 5.3 可辨识联合类型

\`\`\`typescript
// 使用字面量类型作为判别属性
interface Square {
  kind: 'square';
  size: number;
}

interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}

interface Circle {
  kind: 'circle';
  radius: number;
}

type Shape = Square | Rectangle | Circle;

function area(shape: Shape): number {
  switch (shape.kind) {
    case 'square':
      return shape.size * shape.size;
    case 'rectangle':
      return shape.width * shape.height;
    case 'circle':
      return Math.PI * shape.radius ** 2;
  }
}

// 完整性检查
function assertNever(value: never): never {
  throw new Error(\`Unhandled value: \${value}\`);
}

function areaWithCheck(shape: Shape): number {
  switch (shape.kind) {
    case 'square':
      return shape.size * shape.size;
    case 'rectangle':
      return shape.width * shape.height;
    case 'circle':
      return Math.PI * shape.radius ** 2;
    default:
      return assertNever(shape); // 如果添加了新类型但忘记处理，编译会报错
  }
}
\`\`\`

## 6. 实用工具类型（Utility Types）

TypeScript 提供了许多内置的实用工具类型来简化常见的类型转换。

### 6.1 常用工具类型

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  address?: string;
}

// Partial<T> - 所有属性可选
type PartialUser = Partial<User>;

// Required<T> - 所有属性必选
type RequiredUser = Required<User>; // address 变为必选

// Readonly<T> - 所有属性只读
type ReadonlyUser = Readonly<User>;

// Record<K, T> - 创建键值对类型
type UserRoles = Record<string, User>;
type HttpStatusCode = Record<number, string>;

const statusCodes: HttpStatusCode = {
  200: 'OK',
  404: 'Not Found',
  500: 'Internal Server Error'
};

// Pick<T, K> - 选择部分属性
type UserPreview = Pick<User, 'id' | 'name'>;

// Omit<T, K> - 排除部分属性
type UserWithoutId = Omit<User, 'id'>;

// Exclude<T, U> - 从联合类型中排除
type T0 = Exclude<'a' | 'b' | 'c', 'a'>; // 'b' | 'c'
type T1 = Exclude<string | number | boolean, string>; // number | boolean

// Extract<T, U> - 从联合类型中提取
type T2 = Extract<'a' | 'b' | 'c', 'a' | 'f'>; // 'a'
type T3 = Extract<string | number | boolean, string | number>; // string | number

// NonNullable<T> - 排除 null 和 undefined
type T4 = NonNullable<string | number | null | undefined>; // string | number

// ReturnType<T> - 获取函数返回类型
function getUser() {
  return { id: 1, name: 'Alice' };
}
type GetUserReturn = ReturnType<typeof getUser>;

// Parameters<T> - 获取函数参数类型
function createUser(name: string, age: number) {
  return { name, age };
}
type CreateUserParams = Parameters<typeof createUser>; // [string, number]
\`\`\`

### 6.2 高级组合应用

\`\`\`typescript
// 创建深度只读类型
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

interface Config {
  server: {
    host: string;
    port: number;
  };
  database: {
    url: string;
  };
}

type ReadonlyConfig = DeepReadonly<Config>;
// 所有嵌套属性都是只读的

// 创建深度可选类型
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

type PartialConfig = DeepPartial<Config>;
// 所有嵌套属性都是可选的

// 函数重载类型提取
interface Overloaded {
  (foo: string): string;
  (foo: number): number;
}

type OverloadedReturnType<T> = T extends {
  (...args: any[]): infer R;
} ? R : never;

type Result = OverloadedReturnType<Overloaded>; // string | number
\`\`\`

## 7. 高级类型技巧

### 7.1 类型品牌化（Branded Types）

\`\`\`typescript
// 使用品牌化类型增强类型安全
type Brand<K, T> = K & { __brand: T };

type UserId = Brand<number, 'UserId'>;
type ProductId = Brand<number, 'ProductId'>;

function getUserById(id: UserId): User {
  // 实现
  return {} as User;
}

function getProductById(id: ProductId) {
  // 实现
}

const userId = 1 as UserId;
const productId = 2 as ProductId;

getUserById(userId); // ✅
// getUserById(productId); // ❌ 类型不匹配
// getUserById(1); // ❌ 类型不匹配
\`\`\`

### 7.2 递归类型

\`\`\`typescript
// JSON 类型定义
type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue };

const jsonData: JSONValue = {
  name: 'Alice',
  age: 30,
  hobbies: ['reading', 'coding'],
  address: {
    city: 'New York',
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    }
  }
};

// 树结构类型
interface TreeNode<T> {
  value: T;
  children?: TreeNode<T>[];
}

const tree: TreeNode<number> = {
  value: 1,
  children: [
    { value: 2, children: [{ value: 4 }, { value: 5 }] },
    { value: 3 }
  ]
};
\`\`\`

### 7.3 元组类型操作

\`\`\`typescript
// 元组类型操作
type First<T extends any[]> = T extends [infer F, ...any[]] ? F : never;
type Last<T extends any[]> = T extends [...any[], infer L] ? L : never;
type Tail<T extends any[]> = T extends [any, ...infer R] ? R : never;

type T1 = First<[1, 2, 3]>; // 1
type T2 = Last<[1, 2, 3]>; // 3
type T3 = Tail<[1, 2, 3]>; // [2, 3]

// 元组转联合类型
type TupleToUnion<T extends any[]> = T[number];
type Union = TupleToUnion<[string, number, boolean]>; // string | number | boolean

// 反转元组
type Reverse<T extends any[]> = T extends [infer First, ...infer Rest]
  ? [...Reverse<Rest>, First]
  : [];

type Reversed = Reverse<[1, 2, 3, 4]>; // [4, 3, 2, 1]
\`\`\`

## 8. 实战案例

### 8.1 类型安全的状态管理

\`\`\`typescript
// 创建类型安全的状态管理系统
type State = {
  user: User | null;
  posts: Post[];
  loading: boolean;
};

type Action =
  | { type: 'SET_USER'; payload: User }
  | { type: 'SET_POSTS'; payload: Post[] }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'CLEAR_USER' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_POSTS':
      return { ...state, posts: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'CLEAR_USER':
      return { ...state, user: null };
    default:
      return assertNever(action);
  }
}
\`\`\`

### 8.2 类型安全的 API 客户端

\`\`\`typescript
// 创建类型安全的 API 客户端
type ApiEndpoints = {
  '/users': {
    GET: { response: User[] };
    POST: { body: Omit<User, 'id'>; response: User };
  };
  '/users/:id': {
    GET: { response: User };
    PUT: { body: Partial<User>; response: User };
    DELETE: { response: void };
  };
};

async function apiCall<
  Path extends keyof ApiEndpoints,
  Method extends keyof ApiEndpoints[Path]
>(
  path: Path,
  method: Method,
  ...args: ApiEndpoints[Path][Method] extends { body: infer B }
    ? [body: B]
    : []
): Promise<ApiEndpoints[Path][Method] extends { response: infer R } ? R : never> {
  // 实现 API 调用
  return {} as any;
}

// 使用示例 - 完全类型安全
const users = await apiCall('/users', 'GET'); // User[]
const newUser = await apiCall('/users', 'POST', {
  name: 'Alice',
  email: 'alice@example.com',
  age: 30
}); // User
\`\`\`

### 8.3 类型安全的表单验证

\`\`\`typescript
// 创建类型安全的表单验证
type Validator<T> = (value: T) => string | undefined;

type FormValidators<T> = {
  [K in keyof T]?: Validator<T[K]>[];
};

type FormErrors<T> = {
  [K in keyof T]?: string;
};

interface UserForm {
  email: string;
  password: string;
  age: number;
}

const validators: FormValidators<UserForm> = {
  email: [
    (value) => value.includes('@') ? undefined : '请输入有效的邮箱',
    (value) => value.length > 5 ? undefined : '邮箱太短'
  ],
  password: [
    (value) => value.length >= 8 ? undefined : '密码至少8位',
    (value) => /[A-Z]/.test(value) ? undefined : '密码需包含大写字母'
  ],
  age: [
    (value) => value >= 18 ? undefined : '必须年满18岁'
  ]
};

function validateForm<T>(
  form: T,
  validators: FormValidators<T>
): FormErrors<T> {
  const errors: FormErrors<T> = {};

  for (const key in validators) {
    const fieldValidators = validators[key];
    if (fieldValidators) {
      for (const validator of fieldValidators) {
        const error = validator(form[key]);
        if (error) {
          errors[key] = error;
          break;
        }
      }
    }
  }

  return errors;
}
\`\`\`

## 9. 最佳实践

### 9.1 类型设计原则

1. **优先使用类型推断**：让 TypeScript 自动推断类型，只在必要时显式标注
2. **使用联合类型而非枚举**：联合类型更轻量且类型安全
3. **避免 any**：使用 unknown 替代，强制类型检查
4. **使用严格模式**：启用 strict 编译选项
5. **优先组合而非继承**：使用交叉类型组合多个类型

### 9.2 性能优化

\`\`\`typescript
// ❌ 避免过度复杂的类型计算
type Bad<T> = T extends any ? (T extends any ? T : never) : never;

// ✅ 保持类型简单直接
type Good<T> = T;

// ❌ 避免深度递归
type DeepRecursive<T, N extends number = 10> = N extends 0
  ? T
  : DeepRecursive<T, /* 递减 N */>;

// ✅ 限制递归深度
type SafeRecursive<T, Depth extends number = 3> = Depth extends 0
  ? T
  : /* 有限递归 */;
\`\`\`

## 10. 总结

TypeScript 的高级类型系统为我们提供了强大的类型安全保障和代码提示。掌握这些高级特性可以：

- 🛡️ **提高代码质量**：编译时捕获错误
- 📝 **改善开发体验**：更好的 IDE 提示和自动补全
- 🔧 **增强可维护性**：类型即文档，代码更易理解
- 🚀 **提升重构信心**：类型系统保护重构安全性

记住：**类型系统是工具而非障碍**，合理使用可以让代码更加健壮和优雅。

## 参考资源

- [TypeScript 官方文档](https://www.typescriptlang.org/docs/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [Type Challenges](https://github.com/type-challenges/type-challenges)
`,
    en: `
## Introduction

TypeScript, as a superset of JavaScript, provides a powerful type system and advanced features. This article will deeply explore TypeScript's advanced features, including generics, conditional types, mapped types, type inference, and other core concepts to help you build safer and more maintainable code.

## 1. Generics

Generics are one of the most powerful features in TypeScript's type system, allowing us to create reusable components that can support multiple types without losing type safety.

### 1.1 Basic Generics

\`\`\`typescript
// Basic generic function
function identity<T>(arg: T): T {
  return arg;
}

// Using generics
const result = identity<string>("Hello TypeScript");
const numberResult = identity(42); // Type inference

// Generic array
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const firstNum = getFirstElement([1, 2, 3]); // number | undefined
const firstName = getFirstElement(['Alice', 'Bob']); // string | undefined
\`\`\`

### 1.2 Generic Interfaces and Type Aliases

\`\`\`typescript
// Generic interface
interface Response<T> {
  data: T;
  status: number;
  message: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

// Using generic interface
const userResponse: Response<User> = {
  data: { id: 1, name: 'John', email: 'john@example.com' },
  status: 200,
  message: 'Success'
};

// Generic type alias
type ApiResponse<T> = {
  success: boolean;
  data: T;
  error?: string;
};

type UserListResponse = ApiResponse<User[]>;
\`\`\`

### 1.3 Generic Constraints

\`\`\`typescript
// Using extends to constrain generics
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

logLength('Hello'); // ✅ string has length
logLength([1, 2, 3]); // ✅ array has length
logLength({ length: 10 }); // ✅ object has length
// logLength(42); // ❌ number doesn't have length

// Using keyof constraint
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: 'Alice', age: 30 };
const name = getProperty(person, 'name'); // string
const age = getProperty(person, 'age'); // number
\`\`\`

## 2. Conditional Types

Conditional types allow us to choose types based on conditions, similar to ternary operators in JavaScript.

### 2.1 Basic Conditional Types

\`\`\`typescript
// Basic syntax: T extends U ? X : Y
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false

// Practical example: extracting return type
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function foo(): number {
  return 42;
}

type FooReturn = ReturnType<typeof foo>; // number
\`\`\`

### 2.2 Distributive Conditional Types

\`\`\`typescript
// Conditional types distribute over union types
type ToArray<T> = T extends any ? T[] : never;

type StringOrNumber = string | number;
type ArrayType = ToArray<StringOrNumber>; // string[] | number[]

// NonNullable utility type implementation
type MyNonNullable<T> = T extends null | undefined ? never : T;

type MaybeString = string | null | undefined;
type DefinitelyString = MyNonNullable<MaybeString>; // string
\`\`\`

### 2.3 Using infer Keyword

\`\`\`typescript
// Extract element type from array
type ElementType<T> = T extends (infer U)[] ? U : never;

type Numbers = ElementType<number[]>; // number
type Strings = ElementType<string[]>; // string

// Extract function parameter types
type Parameters<T> = T extends (...args: infer P) => any ? P : never;

function greet(name: string, age: number): void {
  console.log(\`Hello \${name}, you are \${age}\`);
}

type GreetParams = Parameters<typeof greet>; // [string, number]

// Extract Promise value type
type Awaited<T> = T extends Promise<infer U> ? U : T;

type AsyncNumber = Awaited<Promise<number>>; // number
type SyncNumber = Awaited<number>; // number
\`\`\`

## 3. Mapped Types

Mapped types allow us to create new types by transforming existing type properties.

### 3.1 Basic Mapped Types

\`\`\`typescript
// Make all properties readonly
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface User {
  name: string;
  age: number;
}

type ReadonlyUser = Readonly<User>;
// { readonly name: string; readonly age: number; }

// Make all properties optional
type Partial<T> = {
  [P in keyof T]?: T[P];
};

type PartialUser = Partial<User>;
// { name?: string; age?: number; }

// Make all properties required
type Required<T> = {
  [P in keyof T]-?: T[P];
};
\`\`\`

### 3.2 Conditional Mapped Types

\`\`\`typescript
// Extract only string properties
type StringProperties<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

interface Person {
  name: string;
  age: number;
  email: string;
}

type StringKeys = StringProperties<Person>; // "name" | "email"

// Create a type with only string properties
type StringPropertiesOnly<T> = {
  [K in StringProperties<T>]: T[K];
};

type PersonStrings = StringPropertiesOnly<Person>;
// { name: string; email: string; }
\`\`\`

## 4. Template Literal Types

Template literal types allow us to create string literal types based on string template patterns.

\`\`\`typescript
// Basic template literal type
type Greeting = \`Hello \${string}\`;

const greeting1: Greeting = "Hello World"; // ✅
const greeting2: Greeting = "Hello TypeScript"; // ✅
// const greeting3: Greeting = "Hi there"; // ❌

// Creating event handler types
type EventName = "click" | "scroll" | "mousemove";
type EventHandler = \`on\${Capitalize<EventName>}\`;
// "onClick" | "onScroll" | "onMousemove"

// CSS property types
type CSSValue = number | \`\${number}px\` | \`\${number}%\`;

const width1: CSSValue = 100; // ✅
const width2: CSSValue = "100px"; // ✅
const width3: CSSValue = "50%"; // ✅
\`\`\`

## 5. Utility Types

TypeScript provides many built-in utility types for common type transformations.

### 5.1 Common Utility Types

\`\`\`typescript
// Pick - Select specific properties
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

type UserBasicInfo = Pick<User, 'id' | 'name'>;
// { id: number; name: string; }

// Omit - Exclude specific properties
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type UserWithoutEmail = Omit<User, 'email'>;
// { id: number; name: string; age: number; }

// Record - Create object type with specific keys and values
type Record<K extends string | number | symbol, T> = {
  [P in K]: T;
};

type Roles = 'admin' | 'user' | 'guest';
type RolePermissions = Record<Roles, string[]>;
// { admin: string[]; user: string[]; guest: string[]; }
\`\`\`

## 6. Type Guards and Narrowing

Type guards help TypeScript narrow down types in conditional blocks.

### 6.1 Built-in Type Guards

\`\`\`typescript
// typeof type guard
function processValue(value: string | number) {
  if (typeof value === 'string') {
    return value.toUpperCase(); // string methods
  } else {
    return value.toFixed(2); // number methods
  }
}

// instanceof type guard
class Dog {
  bark() {
    console.log('Woof!');
  }
}

class Cat {
  meow() {
    console.log('Meow!');
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

// in operator type guard
interface Fish {
  swim: () => void;
}

interface Bird {
  fly: () => void;
}

function move(animal: Fish | Bird) {
  if ('swim' in animal) {
    animal.swim();
  } else {
    animal.fly();
  }
}
\`\`\`

### 6.2 Custom Type Guards

\`\`\`typescript
// User-defined type guard
interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  permissions: string[];
}

function isAdmin(user: User | Admin): user is Admin {
  return 'permissions' in user;
}

function processUser(user: User | Admin) {
  if (isAdmin(user)) {
    // TypeScript knows user is Admin here
    console.log(user.permissions);
  } else {
    // TypeScript knows user is User here
    console.log(user.name);
  }
}
\`\`\`

## 7. Advanced Tricks

### 7.1 Branded Types

\`\`\`typescript
// Create branded types for primitives
type Brand<K, T> = K & { __brand: T };

type UserId = Brand<number, 'UserId'>;
type ProductId = Brand<number, 'ProductId'>;

function getUserById(id: UserId) {
  // ...
}

function getProductById(id: ProductId) {
  // ...
}

const userId = 123 as UserId;
const productId = 456 as ProductId;

getUserById(userId); // ✅
// getUserById(productId); // ❌ Type error
\`\`\`

### 7.2 Recursive Types

\`\`\`typescript
// JSON type definition
type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue };

const data: JSONValue = {
  name: "John",
  age: 30,
  hobbies: ["reading", "coding"],
  address: {
    city: "New York",
    country: "USA"
  }
};

// Deep readonly
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object
    ? DeepReadonly<T[P]>
    : T[P];
};
\`\`\`

## 8. Best Practices

### Type System Best Practices

1. **Prefer Inference**: Let TypeScript infer types when possible
2. **Use Strict Mode**: Enable strict compiler options
3. **Avoid \`any\`**: Use \`unknown\` instead of \`any\` when type is truly unknown
4. **Be Specific**: Use union types and literal types for precision
5. **Document Complex Types**: Add comments for complex type definitions

### Code Organization

1. **Centralize Types**: Keep type definitions in dedicated files
2. **Use Type Aliases**: Give meaningful names to complex types
3. **Leverage Utility Types**: Use built-in utility types when possible
4. **Keep It Simple**: Don't over-engineer type definitions

## Summary

TypeScript's advanced features provide powerful tools for building type-safe applications:

- 🔧 **Generics** - Create reusable, type-safe components
- 🔀 **Conditional Types** - Choose types based on conditions
- 🗺️ **Mapped Types** - Transform existing types systematically
- 📝 **Template Literals** - Create string literal types with patterns
- 🛠️ **Utility Types** - Use built-in helpers for common transformations
- 🎯 **Type Guards** - Narrow types safely in runtime checks
- 🚀 **Advanced Tricks** - Leverage branded types and recursive types

Remember: **The type system is a tool, not an obstacle**. Use it wisely to make your code more robust and elegant.

## References

- [TypeScript Official Docs](https://www.typescriptlang.org/docs/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [Type Challenges](https://github.com/type-challenges/type-challenges)
`,
    ja: `
## はじめに

TypeScriptはJavaScriptのスーパーセットとして、強力な型システムと高度な機能を提供します。この記事では、ジェネリクス、条件型、マップ型、型推論などのコアコンセプトを含む、TypeScriptの高度な機能について深く探求します。

## 1. ジェネリクス

ジェネリクスは、TypeScriptの型システムで最も強力な機能の1つで、型安全性を失うことなく複数の型をサポートする再利用可能なコンポーネントを作成できます。

### 1.1 基本的なジェネリクス

\`\`\`typescript
// 基本的なジェネリック関数
function identity<T>(arg: T): T {
  return arg;
}

// ジェネリクスの使用
const result = identity<string>("Hello TypeScript");
const numberResult = identity(42); // 型推論

// ジェネリック配列
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const firstNum = getFirstElement([1, 2, 3]); // number | undefined
const firstName = getFirstElement(['Alice', 'Bob']); // string | undefined
\`\`\`

### 1.2 ジェネリックインターフェイスと型エイリアス

\`\`\`typescript
// ジェネリックインターフェイス
interface Response<T> {
  data: T;
  status: number;
  message: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

// ジェネリックインターフェイスの使用
const userResponse: Response<User> = {
  data: { id: 1, name: 'John', email: 'john@example.com' },
  status: 200,
  message: 'Success'
};
\`\`\`

### 1.3 ジェネリック制約

\`\`\`typescript
// extendsを使用してジェネリクスを制約
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

logLength('Hello'); // ✅ stringにはlengthがある
logLength([1, 2, 3]); // ✅ arrayにはlengthがある

// keyof制約の使用
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: 'Alice', age: 30 };
const name = getProperty(person, 'name'); // string
const age = getProperty(person, 'age'); // number
\`\`\`

## 2. 条件型

条件型を使用すると、JavaScriptの三項演算子と同様に、条件に基づいて型を選択できます。

\`\`\`typescript
// 基本構文: T extends U ? X : Y
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false

// 実用的な例：戻り値の型を抽出
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function foo(): number {
  return 42;
}

type FooReturn = ReturnType<typeof foo>; // number
\`\`\`

## 3. マップ型

マップ型を使用すると、既存の型のプロパティを変換して新しい型を作成できます。

### 3.1 基本的なマップ型

\`\`\`typescript
// すべてのプロパティをreadonlyにする
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface User {
  name: string;
  age: number;
}

type ReadonlyUser = Readonly<User>;
// { readonly name: string; readonly age: number; }

// すべてのプロパティをオプションにする
type Partial<T> = {
  [P in keyof T]?: T[P];
};

type PartialUser = Partial<User>;
// { name?: string; age?: number; }
\`\`\`

## 4. テンプレートリテラル型

テンプレートリテラル型を使用すると、文字列テンプレートパターンに基づいて文字列リテラル型を作成できます。

\`\`\`typescript
// 基本的なテンプレートリテラル型
type Greeting = \`Hello \${string}\`;

const greeting1: Greeting = "Hello World"; // ✅
const greeting2: Greeting = "Hello TypeScript"; // ✅

// イベントハンドラー型の作成
type EventName = "click" | "scroll" | "mousemove";
type EventHandler = \`on\${Capitalize<EventName>}\`;
// "onClick" | "onScroll" | "onMousemove"
\`\`\`

## 5. ユーティリティ型

TypeScriptは、一般的な型変換のための多くの組み込みユーティリティ型を提供します。

\`\`\`typescript
// Pick - 特定のプロパティを選択
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

type UserBasicInfo = Pick<User, 'id' | 'name'>;
// { id: number; name: string; }

// Omit - 特定のプロパティを除外
type UserWithoutEmail = Omit<User, 'email'>;
// { id: number; name: string; age: number; }

// Record - 特定のキーと値を持つオブジェクト型を作成
type Roles = 'admin' | 'user' | 'guest';
type RolePermissions = Record<Roles, string[]>;
// { admin: string[]; user: string[]; guest: string[]; }
\`\`\`

## 6. 型ガードとナローイング

型ガードは、条件ブロック内でTypeScriptが型を絞り込むのに役立ちます。

\`\`\`typescript
// typeof型ガード
function processValue(value: string | number) {
  if (typeof value === 'string') {
    return value.toUpperCase(); // stringメソッド
  } else {
    return value.toFixed(2); // numberメソッド
  }
}

// instanceof型ガード
class Dog {
  bark() {
    console.log('ワンワン!');
  }
}

class Cat {
  meow() {
    console.log('ニャー!');
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}
\`\`\`

## 7. 高度なトリック

### 7.1 ブランド型

\`\`\`typescript
// プリミティブのブランド型を作成
type Brand<K, T> = K & { __brand: T };

type UserId = Brand<number, 'UserId'>;
type ProductId = Brand<number, 'ProductId'>;

function getUserById(id: UserId) {
  // ...
}

const userId = 123 as UserId;

getUserById(userId); // ✅
\`\`\`

### 7.2 再帰型

\`\`\`typescript
// JSON型定義
type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue };

const data: JSONValue = {
  name: "John",
  age: 30,
  hobbies: ["reading", "coding"]
};
\`\`\`

## まとめ

TypeScriptの高度な機能は、型安全なアプリケーションを構築するための強力なツールを提供します：

- 🔧 **ジェネリクス** - 再利用可能で型安全なコンポーネントを作成
- 🔀 **条件型** - 条件に基づいて型を選択
- 🗺️ **マップ型** - 既存の型を体系的に変換
- 📝 **テンプレートリテラル** - パターンを使用して文字列リテラル型を作成
- 🛠️ **ユーティリティ型** - 一般的な変換に組み込みヘルパーを使用
- 🎯 **型ガード** - ランタイムチェックで型を安全に絞り込む

**型システムは障害ではなくツールです**。賢く使用して、コードをより堅牢でエレガントにしましょう。

## 参考資料

- [TypeScript公式ドキュメント](https://www.typescriptlang.org/docs/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [Type Challenges](https://github.com/type-challenges/type-challenges)
`,
  },
};
