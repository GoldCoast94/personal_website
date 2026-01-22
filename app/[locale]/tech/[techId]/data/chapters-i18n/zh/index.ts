/**
 * Go语言学习教程 - 章节索引
 *
 * 本文件导出所有章节的tsx组件
 * 每个章节都包含多个小节组件
 */

// 第1章：Go语言入门
export * from './01-introduction';

// 第2章：基本语法
export * from './02-basic_syntax';

// 第3章：复合数据类型
export * from './03-data_types';

// 第4章：函数
export * from './04-functions';

// 第5章：结构体与方法
export * from './05-struct_methods';

// 第6章：接口
export * from './06-interfaces';

// 第7章：并发编程
export * from './07-concurrency';

// 第8章：包管理和模块
export * from './08-package_management';

// 第9章：错误处理
export * from './09-error_handling';

// 第10章：测试
export * from './10-testing';

// 第11章：文件IO和系统编程
export * from './11-file_io';

// 第12章：Web开发基础
export * from './12-web_development';

// 第13章：数据库编程
export * from './13-database';

// 第14章：高级主题
export * from './14-advanced_topics';

// 第15章：项目实战
export * from './15-project_practice';

/**
 * 章节元数据
 */
export const chapters = [
  {
    id: '01',
    title: 'Go语言入门',
    path: '01-introduction',
    sections: 27,
  },
  {
    id: '02',
    title: '基本语法',
    path: '02-basic_syntax',
    sections: 35,
  },
  {
    id: '03',
    title: '复合数据类型',
    path: '03-data_types',
    sections: 30,
  },
  {
    id: '04',
    title: '函数',
    path: '04-functions',
    sections: 20,
  },
  {
    id: '05',
    title: '结构体与方法',
    path: '05-struct_methods',
    sections: 21,
  },
  {
    id: '06',
    title: '接口',
    path: '06-interfaces',
    sections: 25,
  },
  {
    id: '07',
    title: '并发编程',
    path: '07-concurrency',
    sections: 28,
  },
  {
    id: '08',
    title: '包管理和模块',
    path: '08-package_management',
    sections: 35,
  },
  {
    id: '09',
    title: '错误处理',
    path: '09-error_handling',
    sections: 26,
  },
  {
    id: '10',
    title: '测试',
    path: '10-testing',
    sections: 23,
  },
  {
    id: '11',
    title: '文件IO和系统编程',
    path: '11-file_io',
    sections: 20,
  },
  {
    id: '12',
    title: 'Web开发基础',
    path: '12-web_development',
    sections: 20,
  },
  {
    id: '13',
    title: '数据库编程',
    path: '13-database',
    sections: 17,
  },
  {
    id: '14',
    title: '高级主题',
    path: '14-advanced_topics',
    sections: 23,
  },
  {
    id: '15',
    title: '项目实战',
    path: '15-project_practice',
    sections: 14,
  },
];

/**
 * 获取章节信息
 */
export function getChapter(id: string) {
  return chapters.find((chapter) => chapter.id === id);
}

/**
 * 获取所有章节
 */
export function getAllChapters() {
  return chapters;
}

/**
 * 获取章节总数
 */
export function getTotalChapters() {
  return chapters.length;
}

/**
 * 获取小节总数
 */
export function getTotalSections() {
  return chapters.reduce((total, chapter) => total + chapter.sections, 0);
}
