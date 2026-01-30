/**
 * JavaScript 文档配置文件
 * 基于 javascript-chapters-i18n 目录的多语言文档结构
 */

export interface Section {
  id: string;
  title: string;
  section: string;
  component: string; // 组件导入路径
}

export interface Chapter {
  id: string;
  title: string;
  path: string;
  sections: Section[];
}

/**
 * 根据语言获取章节路径前缀
 */
export function getChapterPathPrefix(locale: string): string {
  // 支持 zh, en, ja,默认为 zh
  const supportedLocales = ['zh', 'en', 'ja'];
  const normalizedLocale = supportedLocales.includes(locale) ? locale : 'zh';
  return `javascript-chapters-i18n/${normalizedLocale}`;
}

/**
 * 章节配置
 * 每个章节包含多个小节
 */
export const javascriptDocsChapters: Chapter[] = [
  {
    id: '01',
    title: 'JavaScript入门',
    path: '01-introduction',
    sections: [
      { id: '1-1-1', title: 'JavaScript的历史', section: '1.1.1', component: '1.1.1-javascript-history' },
      { id: '1-1-2', title: 'JavaScript的特性', section: '1.1.2', component: '1.1.2-javascript-features' },
      { id: '1-1-3', title: 'JavaScript的应用场景', section: '1.1.3', component: '1.1.3-javascript-use-cases' },
      { id: '1-2-1', title: '开发环境搭建', section: '1.2.1', component: '1.2.1-development-environment' },
      { id: '1-3-1', title: 'Hello World', section: '1.3.1', component: '1.3.1-hello-world' },
      { id: '1-3-2', title: '在HTML中使用JavaScript', section: '1.3.2', component: '1.3.2-javascript-in-html' },
      { id: '1-3-3', title: '控制台基础', section: '1.3.3', component: '1.3.3-console-basics' },
      { id: '1-4-1', title: '注释', section: '1.4.1', component: '1.4.1-comments' },
      { id: '1-4-2', title: '严格模式', section: '1.4.2', component: '1.4.2-strict-mode' },
      { id: '1-4-3', title: '语句和分号', section: '1.4.3', component: '1.4.3-statement-semicolon' },
      { id: '1-5-1', title: '浏览器支持', section: '1.5.1', component: '1.5.1-browser-support' },
      { id: '1-5-2', title: 'JavaScript版本', section: '1.5.2', component: '1.5.2-javascript-versions' },
      { id: '1-6-1', title: '调试基础', section: '1.6.1', component: '1.6.1-debugging-basics' },
      { id: '1-6-2', title: '开发者工具介绍', section: '1.6.2', component: '1.6.2-devtools-intro' },
      { id: '1-7-1', title: '最佳实践', section: '1.7.1', component: '1.7.1-best-practices' },
    ],
  },
  {
    id: '02',
    title: '基本语法',
    path: '02-basic-syntax',
    sections: [
      { id: '2-1-1', title: '变量声明', section: '2.1.1', component: '2.1.1-variable-declaration' },
      { id: '2-1-2', title: '变量命名规则', section: '2.1.2', component: '2.1.2-variable-naming' },
      { id: '2-1-3', title: '变量作用域', section: '2.1.3', component: '2.1.3-variable-scope' },
      { id: '2-1-4', title: '变量提升', section: '2.1.4', component: '2.1.4-hoisting' },
      { id: '2-1-5', title: '暂时性死区', section: '2.1.5', component: '2.1.5-temporal-dead-zone' },
      { id: '2-2-1', title: '基本数据类型', section: '2.2.1', component: '2.2.1-primitive-types' },
      { id: '2-2-2', title: '数字类型', section: '2.2.2', component: '2.2.2-number' },
      { id: '2-2-3', title: '字符串类型', section: '2.2.3', component: '2.2.3-string' },
      { id: '2-2-4', title: '布尔类型', section: '2.2.4', component: '2.2.4-boolean' },
      { id: '2-2-5', title: 'null和undefined', section: '2.2.5', component: '2.2.5-null-undefined' },
      { id: '2-2-6', title: 'Symbol类型', section: '2.2.6', component: '2.2.6-symbol' },
      { id: '2-2-7', title: 'BigInt类型', section: '2.2.7', component: '2.2.7-bigint' },
      { id: '2-2-8', title: '类型检查', section: '2.2.8', component: '2.2.8-type-checking' },
      { id: '2-3-1', title: '显式类型转换', section: '2.3.1', component: '2.3.1-explicit-conversion' },
      { id: '2-3-2', title: '隐式类型转换', section: '2.3.2', component: '2.3.2-implicit-conversion' },
      { id: '2-3-3', title: '真值和假值', section: '2.3.3', component: '2.3.3-truthy-falsy' },
      { id: '2-4-1', title: '算术运算符', section: '2.4.1', component: '2.4.1-arithmetic-operators' },
      { id: '2-4-2', title: '比较运算符', section: '2.4.2', component: '2.4.2-comparison-operators' },
      { id: '2-4-3', title: '逻辑运算符', section: '2.4.3', component: '2.4.3-logical-operators' },
      { id: '2-4-6', title: '三元运算符', section: '2.4.6', component: '2.4.6-ternary-operator' },
      { id: '2-4-7', title: '运算符优先级', section: '2.4.7', component: '2.4.7-operator-precedence' },
    ],
  },
  {
    id: '03',
    title: '流程控制',
    path: '03-control-flow',
    sections: [
      { id: '3-1-1', title: 'if语句', section: '3.1.1', component: '3.1.1-if-statement' },
      { id: '3-1-2', title: 'if-else语句', section: '3.1.2', component: '3.1.2-if-else' },
      { id: '3-1-3', title: 'else-if语句', section: '3.1.3', component: '3.1.3-else-if' },
      { id: '3-1-4', title: 'switch语句', section: '3.1.4', component: '3.1.4-switch-statement' },
      { id: '3-1-5', title: 'switch最佳实践', section: '3.1.5', component: '3.1.5-switch-best-practices' },
      { id: '3-1-6', title: '条件语句模式', section: '3.1.6', component: '3.1.6-conditional-patterns' },
      { id: '3-2-1', title: 'for循环', section: '3.2.1', component: '3.2.1-for-loop' },
      { id: '3-2-2', title: 'while循环', section: '3.2.2', component: '3.2.2-while-loop' },
      { id: '3-2-3', title: 'do-while循环', section: '3.2.3', component: '3.2.3-do-while-loop' },
      { id: '3-2-4', title: 'for-in循环', section: '3.2.4', component: '3.2.4-for-in-loop' },
      { id: '3-2-5', title: 'for-of循环', section: '3.2.5', component: '3.2.5-for-of-loop' },
      { id: '3-2-6', title: '循环控制', section: '3.2.6', component: '3.2.6-loop-control' },
      { id: '3-2-7', title: '嵌套循环', section: '3.2.7', component: '3.2.7-nested-loops' },
      { id: '3-2-8', title: '循环性能', section: '3.2.8', component: '3.2.8-loop-performance' },
      { id: '3-3-1', title: 'break和continue', section: '3.3.1', component: '3.3.1-break-continue' },
      { id: '3-3-2', title: '标签语句', section: '3.3.2', component: '3.3.2-label-statement' },
    ],
  },
  {
    id: '04',
    title: '函数',
    path: '04-functions',
    sections: [
      { id: '4-1-1', title: '函数声明', section: '4.1.1', component: '4.1.1-function-declaration' },
      { id: '4-1-2', title: '函数表达式', section: '4.1.2', component: '4.1.2-function-expression' },
      { id: '4-1-3', title: '箭头函数', section: '4.1.3', component: '4.1.3-arrow-functions' },
      { id: '4-1-4', title: '函数参数', section: '4.1.4', component: '4.1.4-function-parameters' },
      { id: '4-1-5', title: '返回值', section: '4.1.5', component: '4.1.5-return-statement' },
      { id: '4-1-6', title: '函数提升', section: '4.1.6', component: '4.1.6-function-hoisting' },
      { id: '4-2-1', title: '默认参数', section: '4.2.1', component: '4.2.1-default-parameters' },
      { id: '4-2-2', title: '剩余参数', section: '4.2.2', component: '4.2.2-rest-parameters' },
      { id: '4-2-3', title: '展开运算符', section: '4.2.3', component: '4.2.3-spread-operator' },
      { id: '4-2-4', title: '解构参数', section: '4.2.4', component: '4.2.4-destructuring-parameters' },
      { id: '4-2-5', title: '回调函数', section: '4.2.5', component: '4.2.5-callback-functions' },
      { id: '4-2-6', title: '高阶函数', section: '4.2.6', component: '4.2.6-higher-order-functions' },
      { id: '4-2-7', title: '纯函数', section: '4.2.7', component: '4.2.7-pure-functions' },
      { id: '4-2-8', title: '函数组合', section: '4.2.8', component: '4.2.8-function-composition' },
      { id: '4-3-1', title: '作用域基础', section: '4.3.1', component: '4.3.1-scope-basics' },
      { id: '4-3-2', title: '词法作用域', section: '4.3.2', component: '4.3.2-lexical-scope' },
      { id: '4-3-3', title: '闭包', section: '4.3.3', component: '4.3.3-closures' },
      { id: '4-3-4', title: '闭包应用', section: '4.3.4', component: '4.3.4-closure-applications' },
      { id: '4-4-1', title: 'this关键字', section: '4.4.1', component: '4.4.1-this-basics' },
      { id: '4-4-2', title: 'bind、call、apply', section: '4.4.2', component: '4.4.2-bind-call-apply' },
    ],
  },
  {
    id: '05',
    title: '对象与数组',
    path: '05-objects_arrays',
    sections: [
      { id: '5-1-1', title: '对象基础', section: '5.1.1', component: '5.1.1-object-creation' },
      { id: '5-1-2', title: '对象属性', section: '5.1.2', component: '5.1.2-object-properties' },
      { id: '5-1-3', title: '对象方法', section: '5.1.3', component: '5.1.3-object-methods' },
      { id: '5-1-4', title: '计算属性', section: '5.1.4', component: '5.1.4-computed-properties' },
      { id: '5-1-5', title: '属性描述符', section: '5.1.5', component: '5.1.5-property-descriptors' },
      { id: '5-1-6', title: '对象遍历', section: '5.1.6', component: '5.1.6-object-iteration' },
      { id: '5-1-7', title: '对象克隆', section: '5.1.7', component: '5.1.7-object-cloning' },
      { id: '5-1-8', title: 'Object静态方法', section: '5.1.8', component: '5.1.8-object-methods-static' },
      { id: '5-2-1', title: '数组基础', section: '5.2.1', component: '5.2.1-array-creation' },
      { id: '5-2-2', title: '数组访问', section: '5.2.2', component: '5.2.2-array-access' },
      { id: '5-2-3', title: '数组map方法', section: '5.2.3', component: '5.2.3-array-map' },
      { id: '5-2-4', title: '数组filter方法', section: '5.2.4', component: '5.2.4-array-filter' },
      { id: '5-2-5', title: '数组reduce方法', section: '5.2.5', component: '5.2.5-array-reduce' },
      { id: '5-3-1', title: '解构赋值', section: '5.3.1', component: '5.3.1-destructuring' },
      { id: '5-3-2', title: '展开运算符', section: '5.3.2', component: '5.3.2-spread-operator' },
      { id: '5-3-3', title: '可选链', section: '5.3.3', component: '5.3.3-optional-chaining' },
      { id: '5-4-1', title: 'JSON操作', section: '5.4.1', component: '5.4.1-json-basics' },
    ],
  },
  {
    id: '06',
    title: '面向对象编程',
    path: '06-oop',
    sections: [
      { id: '6-1-1', title: '类基础', section: '6.1.1', component: '6.1.1-class-basics' },
      { id: '6-1-2', title: '构造函数', section: '6.1.2', component: '6.1.2-constructor' },
      { id: '6-1-3', title: '类方法', section: '6.1.3', component: '6.1.3-class-methods' },
      { id: '6-1-4', title: 'getter和setter', section: '6.1.4', component: '6.1.4-getters-setters' },
      { id: '6-2-1', title: '继承', section: '6.2.1', component: '6.2.1-inheritance' },
      { id: '6-2-2', title: 'super关键字', section: '6.2.2', component: '6.2.2-super-keyword' },
      { id: '6-3-1', title: '原型', section: '6.3.1', component: '6.3.1-prototypes' },
      { id: '6-3-2', title: '原型链', section: '6.3.2', component: '6.3.2-prototype-chain' },
      { id: '6-4-1', title: '静态方法', section: '6.4.1', component: '6.4.1-static-methods' },
      { id: '6-4-2', title: '私有字段', section: '6.4.2', component: '6.4.2-private-fields' },
      { id: '6-5-1', title: 'OOP原则', section: '6.5.1', component: '6.5.1-oop-principles' },
    ],
  },
  {
    id: '07',
    title: 'ES6+特性',
    path: '07-es6_plus',
    sections: [
      { id: '7-1-1', title: 'let和const', section: '7.1.1', component: '7.1.1-let-const' },
      { id: '7-1-2', title: '模板字面量', section: '7.1.2', component: '7.1.2-template-literals' },
      { id: '7-1-3', title: '箭头函数', section: '7.1.3', component: '7.1.3-arrow-functions' },
      { id: '7-2-1', title: '高级解构', section: '7.2.1', component: '7.2.1-destructuring-advanced' },
      { id: '7-2-2', title: '展开与剩余运算符', section: '7.2.2', component: '7.2.2-spread-rest-advanced' },
      { id: '7-3-1', title: 'Promise基础', section: '7.3.1', component: '7.3.1-promise-basics' },
      { id: '7-3-2', title: 'async/await', section: '7.3.2', component: '7.3.2-async-await' },
      { id: '7-4-1', title: '模块导入导出', section: '7.4.1', component: '7.4.1-modules-import-export' },
      { id: '7-5-1', title: 'Set和Map', section: '7.5.1', component: '7.5.1-set-map' },
      { id: '7-5-2', title: 'WeakSet和WeakMap', section: '7.5.2', component: '7.5.2-weakset-weakmap' },
      { id: '7-6-1', title: 'Proxy和Reflect', section: '7.6.1', component: '7.6.1-proxy-reflect' },
      { id: '7-7-1', title: '生成器', section: '7.7.1', component: '7.7.1-generators' },
      { id: '7-8-1', title: 'Symbol', section: '7.8.1', component: '7.8.1-symbols' },
    ],
  },
  {
    id: '08',
    title: 'DOM操作',
    path: '08-dom',
    sections: [
      { id: '8-1-1', title: 'DOM基础', section: '8.1.1', component: '8.1.1-dom-basics' },
      { id: '8-1-2', title: '选择元素', section: '8.1.2', component: '8.1.2-selecting-elements' },
      { id: '8-2-1', title: '事件基础', section: '8.2.1', component: '8.2.1-event-basics' },
      { id: '8-2-2', title: '事件监听器', section: '8.2.2', component: '8.2.2-event-listeners' },
      { id: '8-3-1', title: 'DOM操作', section: '8.3.1', component: '8.3.1-dom-manipulation' },
      { id: '8-3-2', title: '创建元素', section: '8.3.2', component: '8.3.2-creating-elements' },
      { id: '8-4-1', title: '样式操作', section: '8.4.1', component: '8.4.1-styling-elements' },
      { id: '8-5-1', title: '表单验证', section: '8.5.1', component: '8.5.1-forms-validation' },
    ],
  },
  {
    id: '09',
    title: '异步编程',
    path: '09-async',
    sections: [
      { id: '9-1-1', title: '回调函数基础', section: '9.1.1', component: '9.1.1-callback-basics' },
      { id: '9-1-2', title: '回调地狱', section: '9.1.2', component: '9.1.2-callback-hell' },
      { id: '9-2-1', title: 'Promise介绍', section: '9.2.1', component: '9.2.1-promise-intro' },
      { id: '9-2-2', title: 'Promise链', section: '9.2.2', component: '9.2.2-promise-chaining' },
      { id: '9-3-1', title: 'async/await基础', section: '9.3.1', component: '9.3.1-async-await-basics' },
      { id: '9-3-2', title: '异步错误处理', section: '9.3.2', component: '9.3.2-error-handling-async' },
      { id: '9-4-1', title: 'Fetch API', section: '9.4.1', component: '9.4.1-fetch-api' },
      { id: '9-5-1', title: '事件循环', section: '9.5.1', component: '9.5.1-event-loop' },
    ],
  },
  {
    id: '10',
    title: '模块化',
    path: '10-modules',
    sections: [
      { id: '10-1-1', title: '模块基础', section: '10.1.1', component: '10.1.1-module-basics' },
      { id: '10-1-2', title: '导出和导入', section: '10.1.2', component: '10.1.2-export-import' },
      { id: '10-2-1', title: '默认导出', section: '10.2.1', component: '10.2.1-default-exports' },
      { id: '10-2-2', title: '命名导出', section: '10.2.2', component: '10.2.2-named-exports' },
      { id: '10-3-1', title: '动态导入', section: '10.3.1', component: '10.3.1-dynamic-imports' },
      { id: '10-4-1', title: '模块模式', section: '10.4.1', component: '10.4.1-module-patterns' },
    ],
  },
  {
    id: '11',
    title: '错误处理',
    path: '11-error_handling',
    sections: [
      { id: '11-1-1', title: 'try-catch', section: '11.1.1', component: '11.1.1-try-catch' },
      { id: '11-1-2', title: '错误类型', section: '11.1.2', component: '11.1.2-error-types' },
      { id: '11-2-1', title: '自定义错误', section: '11.2.1', component: '11.2.1-custom-errors' },
      { id: '11-3-1', title: '调试技巧', section: '11.3.1', component: '11.3.1-debugging-techniques' },
      { id: '11-4-1', title: '错误处理模式', section: '11.4.1', component: '11.4.1-error-handling-patterns' },
    ],
  },
  {
    id: '12',
    title: 'Web APIs',
    path: '12-web_apis',
    sections: [
      { id: '12-1-1', title: 'Fetch API', section: '12.1.1', component: '12.1.1-fetch-api' },
      { id: '12-1-2', title: 'LocalStorage', section: '12.1.2', component: '12.1.2-local-storage' },
      { id: '12-1-3', title: 'SessionStorage', section: '12.1.3', component: '12.1.3-session-storage' },
      { id: '12-2-1', title: 'Geolocation API', section: '12.2.1', component: '12.2.1-geolocation-api' },
      { id: '12-3-1', title: 'Web Workers', section: '12.3.1', component: '12.3.1-web-workers' },
      { id: '12-4-1', title: 'WebSocket', section: '12.4.1', component: '12.4.1-websocket' },
      { id: '12-5-1', title: 'Notification API', section: '12.5.1', component: '12.5.1-notification-api' },
    ],
  },
  {
    id: '13',
    title: '现代工具',
    path: '13-modern_tooling',
    sections: [
      { id: '13-1-1', title: 'npm基础', section: '13.1.1', component: '13.1.1-npm-basics' },
      { id: '13-1-2', title: 'package.json', section: '13.1.2', component: '13.1.2-package-json' },
      { id: '13-2-1', title: 'Webpack介绍', section: '13.2.1', component: '13.2.1-webpack-intro' },
      { id: '13-3-1', title: 'Babel转译', section: '13.3.1', component: '13.3.1-babel-transpiling' },
      { id: '13-4-1', title: 'ESLint和Prettier', section: '13.4.1', component: '13.4.1-eslint-prettier' },
      { id: '13-5-1', title: 'TypeScript基础', section: '13.5.1', component: '13.5.1-typescript-basics' },
    ],
  },
  {
    id: '14',
    title: '高级主题',
    path: '14-advanced_topics',
    sections: [
      { id: '14-1-1', title: '设计模式', section: '14.1.1', component: '14.1.1-design-patterns' },
      { id: '14-1-2', title: '单例和工厂模式', section: '14.1.2', component: '14.1.2-singleton-factory' },
      { id: '14-2-1', title: '函数式编程', section: '14.2.1', component: '14.2.1-functional-programming' },
      { id: '14-3-1', title: '性能优化', section: '14.3.1', component: '14.3.1-performance-optimization' },
      { id: '14-4-1', title: '内存管理', section: '14.4.1', component: '14.4.1-memory-management' },
      { id: '14-5-1', title: '安全最佳实践', section: '14.5.1', component: '14.5.1-security-best-practices' },
    ],
  },
  {
    id: '15',
    title: '项目实战',
    path: '15-project_practice',
    sections: [
      { id: '15-1-1', title: 'Todo应用', section: '15.1.1', component: '15.1.1-todo-app' },
      { id: '15-1-2', title: '天气应用', section: '15.1.2', component: '15.1.2-weather-app' },
      { id: '15-2-1', title: '计算器', section: '15.2.1', component: '15.2.1-calculator' },
      { id: '15-3-1', title: '问答应用', section: '15.3.1', component: '15.3.1-quiz-app' },
      { id: '15-4-1', title: '博客系统', section: '15.4.1', component: '15.4.1-blog-system' },
    ],
  },
];

/**
 * 获取章节信息
 */
export function getJavaScriptChapterById(id: string): Chapter | undefined {
  return javascriptDocsChapters.find(chapter => chapter.id === id);
}

// 性能优化：缓存计算结果
let cachedJSAllSections: Array<{ chapter: Chapter; section: Section }> | null = null;
let cachedJSSectionMap: Map<string, { chapter: Chapter; section: Section }> | null = null;
let cachedJSSectionIndexMap: Map<string, number> | null = null;

/**
 * 初始化缓存
 */
function initializeJSCache() {
  if (cachedJSAllSections && cachedJSSectionMap && cachedJSSectionIndexMap) {
    return;
  }

  cachedJSAllSections = [];
  cachedJSSectionMap = new Map();
  cachedJSSectionIndexMap = new Map();

  let index = 0;
  for (const chapter of javascriptDocsChapters) {
    for (const section of chapter.sections) {
      const item = { chapter, section };
      cachedJSAllSections.push(item);
      cachedJSSectionMap.set(section.id, item);
      cachedJSSectionIndexMap.set(section.id, index);
      index++;
    }
  }
}

/**
 * 获取小节信息（已优化）
 */
export function getJavaScriptSectionById(sectionId: string): { chapter: Chapter; section: Section } | undefined {
  initializeJSCache();
  return cachedJSSectionMap!.get(sectionId);
}

/**
 * 获取所有章节
 */
export function getAllJavaScriptChapters(): Chapter[] {
  return javascriptDocsChapters;
}

/**
 * 获取所有小节的扁平列表（已优化）
 */
export function getAllJavaScriptSections(): Array<{ chapter: Chapter; section: Section }> {
  initializeJSCache();
  return cachedJSAllSections!;
}

/**
 * 获取上一节（已优化）
 */
export function getJavaScriptPreviousSection(currentSectionId: string): { chapter: Chapter; section: Section } | undefined {
  initializeJSCache();
  const currentIndex = cachedJSSectionIndexMap!.get(currentSectionId);

  if (currentIndex !== undefined && currentIndex > 0) {
    return cachedJSAllSections![currentIndex - 1];
  }

  return undefined;
}

/**
 * 获取下一节（已优化）
 */
export function getJavaScriptNextSection(currentSectionId: string): { chapter: Chapter; section: Section } | undefined {
  initializeJSCache();
  const currentIndex = cachedJSSectionIndexMap!.get(currentSectionId);

  if (currentIndex !== undefined && currentIndex < cachedJSAllSections!.length - 1) {
    return cachedJSAllSections![currentIndex + 1];
  }

  return undefined;
}
