/**
 * Go 文档配置文件
 * 基于 chapters-i18n 目录的多语言文档结构
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
  // 支持 zh, en, ja，默认为 zh
  const supportedLocales = ['zh', 'en', 'ja'];
  const normalizedLocale = supportedLocales.includes(locale) ? locale : 'zh';
  return `chapters-i18n/${normalizedLocale}`;
}

/**
 * 章节配置
 * 每个章节包含多个小节
 */
export const goDocsChapters: Chapter[] = [
  {
    id: '01',
    title: 'Go语言入门',
    path: '01-introduction',
    sections: [
      { id: '1-1-1', title: 'Go语言的历史', section: '1.1.1', component: '1.1.1-go-history' },
      { id: '1-1-2', title: 'Go语言的特性', section: '1.1.2', component: '1.1.2-go-features' },
      { id: '1-1-3', title: 'Go语言的应用场景', section: '1.1.3', component: '1.1.3-go-use-cases' },
      { id: '1-2-1', title: '下载与安装', section: '1.2.1', component: '1.2.1-download-install' },
      { id: '1-2-2', title: '环境配置', section: '1.2.2', component: '1.2.2-environment-setup' },
      { id: '1-2-3', title: 'IDE选择', section: '1.2.3', component: '1.2.3-ide-selection' },
      { id: '1-3-1', title: 'Hello World', section: '1.3.1', component: '1.3.1-hello-world' },
      { id: '1-3-2', title: '运行程序', section: '1.3.2', component: '1.3.2-run-program' },
      { id: '1-3-3', title: '程序结构', section: '1.3.3', component: '1.3.3-program-structure' },
      { id: '1-4-1', title: '常用命令', section: '1.4.1', component: '1.4.1-common-commands' },
      { id: '1-4-2', title: 'go run', section: '1.4.2', component: '1.4.2-go-run' },
      { id: '1-4-3', title: 'go build', section: '1.4.3', component: '1.4.3-go-build' },
      { id: '1-4-4', title: 'go mod', section: '1.4.4', component: '1.4.4-go-mod' },
      { id: '1-4-5', title: 'go fmt', section: '1.4.5', component: '1.4.5-go-fmt' },
      { id: '1-5-1', title: '命名规范', section: '1.5.1', component: '1.5.1-naming-conventions' },
      { id: '1-5-2', title: '注释规范', section: '1.5.2', component: '1.5.2-comment-conventions' },
      { id: '1-5-3', title: '代码组织', section: '1.5.3', component: '1.5.3-code-organization' },
    ],
  },
  {
    id: '02',
    title: '基本语法',
    path: '02-basic_syntax',
    sections: [
      { id: '2-1-1', title: '变量声明', section: '2.1.1', component: '2.1.1-variable-declaration' },
      { id: '2-1-2', title: '变量作用域', section: '2.1.2', component: '2.1.2-variable-scope' },
      { id: '2-1-3', title: '零值', section: '2.1.3', component: '2.1.3-zero-values' },
      { id: '2-1-4', title: '匿名变量', section: '2.1.4', component: '2.1.4-anonymous-variables' },
      { id: '2-2-1', title: '常量声明', section: '2.2.1', component: '2.2.1-constant-declaration' },
      { id: '2-2-2', title: 'iota枚举', section: '2.2.2', component: '2.2.2-iota-enumeration' },
      { id: '2-3-1', title: '整数类型', section: '2.3.1', component: '2.3.1-integer-types' },
      { id: '2-3-2', title: '浮点类型', section: '2.3.2', component: '2.3.2-float-types' },
      { id: '2-3-3', title: '布尔类型', section: '2.3.3', component: '2.3.3-boolean-type' },
      { id: '2-3-4', title: '字符串类型', section: '2.3.4', component: '2.3.4-string-type' },
      { id: '2-3-5', title: '类型转换', section: '2.3.5', component: '2.3.5-type-conversion' },
      { id: '2-4-1', title: '算术运算符', section: '2.4.1', component: '2.4.1-arithmetic-operators' },
      { id: '2-4-2', title: '关系运算符', section: '2.4.2', component: '2.4.2-relational-operators' },
      { id: '2-4-3', title: '逻辑运算符', section: '2.4.3', component: '2.4.3-logical-operators' },
      { id: '2-4-4', title: '位运算符', section: '2.4.4', component: '2.4.4-bitwise-operators' },
      { id: '2-4-5', title: '赋值运算符', section: '2.4.5', component: '2.4.5-assignment-operators' },
      { id: '2-4-6', title: '运算符优先级', section: '2.4.6', component: '2.4.6-operator-precedence' },
      { id: '2-5-1', title: 'if语句', section: '2.5.1', component: '2.5.1-if-statement' },
      { id: '2-5-2', title: 'for循环', section: '2.5.2', component: '2.5.2-for-loop' },
      { id: '2-5-3', title: 'switch语句', section: '2.5.3', component: '2.5.3-switch-statement' },
      { id: '2-5-4', title: 'goto和标签', section: '2.5.4', component: '2.5.4-goto-and-labels' },
    ],
  },
  {
    id: '03',
    title: '复合数据类型',
    path: '03-data_types',
    sections: [
      { id: '3-1-1', title: '数组定义', section: '3.1.1', component: '3.1.1-array-definition' },
      { id: '3-1-2', title: '数组操作', section: '3.1.2', component: '3.1.2-array-operations' },
      { id: '3-1-3', title: '多维数组', section: '3.1.3', component: '3.1.3-multidimensional-arrays' },
      { id: '3-1-4', title: '数组作为参数', section: '3.1.4', component: '3.1.4-array-as-parameters' },
      { id: '3-2-1', title: '切片定义', section: '3.2.1', component: '3.2.1-slice-definition' },
      { id: '3-2-2', title: '切片操作', section: '3.2.2', component: '3.2.2-slice-operations' },
      { id: '3-2-3', title: '切片原理', section: '3.2.3', component: '3.2.3-slice-internals' },
      { id: '3-2-4', title: '切片作为参数', section: '3.2.4', component: '3.2.4-slice-as-parameters' },
      { id: '3-3-1', title: 'map定义', section: '3.3.1', component: '3.3.1-map-definition' },
      { id: '3-3-2', title: 'map操作', section: '3.3.2', component: '3.3.2-map-operations' },
      { id: '3-3-3', title: 'map键类型', section: '3.3.3', component: '3.3.3-map-key-types' },
      { id: '3-3-4', title: 'map作为参数', section: '3.3.4', component: '3.3.4-map-as-parameters' },
      { id: '3-4-1', title: 'strings包', section: '3.4.1', component: '3.4.1-strings-package' },
      { id: '3-4-2', title: 'strconv包', section: '3.4.2', component: '3.4.2-strconv-package' },
      { id: '3-4-3', title: '字符串拼接', section: '3.4.3', component: '3.4.3-string-concatenation' },
      { id: '3-4-4', title: 'rune和字符', section: '3.4.4', component: '3.4.4-rune-and-characters' },
    ],
  },
  {
    id: '04',
    title: '函数',
    path: '04-functions',
    sections: [
      { id: '4-1-1', title: '函数定义', section: '4.1.1', component: '4.1.1-function-definition' },
      { id: '4-1-2', title: '命名返回值', section: '4.1.2', component: '4.1.2-named-returns' },
      { id: '4-1-3', title: '可变参数', section: '4.1.3', component: '4.1.3-variadic-parameters' },
      { id: '4-2-1', title: '函数作为值', section: '4.2.1', component: '4.2.1-functions-as-values' },
      { id: '4-2-2', title: '闭包', section: '4.2.2', component: '4.2.2-closures' },
      { id: '4-2-4', title: 'defer延迟调用', section: '4.2.4', component: '4.2.4-defer' },
      { id: '4-3-1', title: '自定义函数类型', section: '4.3.1', component: '4.3.1-custom-function-types' },
      { id: '4-3-2', title: '函数选项模式', section: '4.3.2', component: '4.3.2-functional-options' },
      { id: '4-4-1', title: '错误返回', section: '4.4.1', component: '4.4.1-returning-errors' },
    ],
  },
  {
    id: '05',
    title: '结构体与方法',
    path: '05-struct_methods',
    sections: [],
  },
  {
    id: '06',
    title: '接口',
    path: '06-interfaces',
    sections: [],
  },
  {
    id: '07',
    title: '并发编程',
    path: '07-concurrency',
    sections: [],
  },
  {
    id: '08',
    title: '包管理和模块',
    path: '08-package_management',
    sections: [],
  },
  {
    id: '09',
    title: '错误处理',
    path: '09-error_handling',
    sections: [],
  },
  {
    id: '10',
    title: '测试',
    path: '10-testing',
    sections: [],
  },
  {
    id: '11',
    title: '文件IO和系统编程',
    path: '11-file_io',
    sections: [],
  },
  {
    id: '12',
    title: 'Web开发基础',
    path: '12-web_development',
    sections: [],
  },
  {
    id: '13',
    title: '数据库编程',
    path: '13-database',
    sections: [],
  },
  {
    id: '14',
    title: '高级主题',
    path: '14-advanced_topics',
    sections: [],
  },
  {
    id: '15',
    title: '项目实战',
    path: '15-project_practice',
    sections: [],
  },
];

/**
 * 获取章节信息
 */
export function getChapterById(id: string): Chapter | undefined {
  return goDocsChapters.find(chapter => chapter.id === id);
}

/**
 * 获取小节信息
 */
export function getSectionById(sectionId: string): { chapter: Chapter; section: Section } | undefined {
  for (const chapter of goDocsChapters) {
    const section = chapter.sections.find(s => s.id === sectionId);
    if (section) {
      return { chapter, section };
    }
  }
  return undefined;
}

/**
 * 获取所有章节
 */
export function getAllChapters(): Chapter[] {
  return goDocsChapters;
}

/**
 * 获取所有小节的扁平列表
 */
export function getAllSections(): Array<{ chapter: Chapter; section: Section }> {
  const allSections: Array<{ chapter: Chapter; section: Section }> = [];

  for (const chapter of goDocsChapters) {
    for (const section of chapter.sections) {
      allSections.push({ chapter, section });
    }
  }

  return allSections;
}

/**
 * 获取上一节
 */
export function getPreviousSection(currentSectionId: string): { chapter: Chapter; section: Section } | undefined {
  const allSections = getAllSections();
  const currentIndex = allSections.findIndex(item => item.section.id === currentSectionId);

  if (currentIndex > 0) {
    return allSections[currentIndex - 1];
  }

  return undefined;
}

/**
 * 获取下一节
 */
export function getNextSection(currentSectionId: string): { chapter: Chapter; section: Section } | undefined {
  const allSections = getAllSections();
  const currentIndex = allSections.findIndex(item => item.section.id === currentSectionId);

  if (currentIndex >= 0 && currentIndex < allSections.length - 1) {
    return allSections[currentIndex + 1];
  }

  return undefined;
}
