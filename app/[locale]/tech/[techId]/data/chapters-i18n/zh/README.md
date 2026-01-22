# Go语言学习教程 - TSX组件版

本目录包含Go语言学习教程的所有章节，已转换为React TSX组件格式。

## 📁 目录结构

```
chapters/
├── 01-introduction/          # 第1章：Go语言入门（27个小节）
├── 02-basic_syntax/          # 第2章：基本语法（35个小节）
├── 03-data_types/            # 第3章：复合数据类型（30个小节）
├── 04-functions/             # 第4章：函数（20个小节）
├── 05-struct_methods/        # 第5章：结构体与方法（21个小节）
├── 06-interfaces/            # 第6章：接口（25个小节）
├── 07-concurrency/           # 第7章：并发编程（28个小节）
├── 08-package_management/    # 第8章：包管理和模块（35个小节）
├── 09-error_handling/        # 第9章：错误处理（26个小节）
├── 10-testing/               # 第10章：测试（23个小节）
├── 11-file_io/               # 第11章：文件IO和系统编程（20个小节）
├── 12-web_development/       # 第12章：Web开发基础（20个小节）
├── 13-database/              # 第13章：数据库编程（17个小节）
├── 14-advanced_topics/       # 第14章：高级主题（23个小节）
├── 15-project_practice/      # 第15章：项目实战（14个小节）
├── index.ts                  # 总索引文件
└── README.md                 # 本文件
```

## 📊 统计信息

- **章节数量**：15章
- **小节数量**：364个tsx组件
- **代码示例**：500+个
- **总大小**：约8MB

## 🎯 组件格式

每个tsx文件都是一个独立的React组件，包含：

### 基本结构

```tsx
import React from 'react';

interface Props {
  className?: string;
}

export default function SectionName({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">小节编号 小节标题</h3>

      {/* 文字说明 */}
      <p>说明内容...</p>

      {/* 代码块 */}
      <pre className="code-block">
        <code className="language-go">{`
          // 代码内容
        `}</code>
      </pre>

      {/* 列表 */}
      <ul>
        <li>列表项1</li>
        <li>列表项2</li>
      </ul>
    </div>
  );
}

// 元数据
export const metadata = {
  id: '3-2-2',
  title: '切片操作',
  section: '3.2.2'
};
```

## 💻 使用方法

### 1. 导入单个组件

```tsx
import SliceOperations from './chapters/03-data_types/3.2.2-切片操作';

function MyComponent() {
  return (
    <div>
      <SliceOperations />
    </div>
  );
}
```

### 2. 导入整个章节

```tsx
import * as Chapter03 from './chapters/03-data_types';

function MyComponent() {
  return (
    <div>
      <Chapter03.Section3_2_2 />
    </div>
  );
}
```

### 3. 使用章节元数据

```tsx
import { chapters, getChapter, getTotalSections } from './chapters';

console.log('总章节数:', chapters.length);
console.log('总小节数:', getTotalSections());
console.log('第3章信息:', getChapter('03'));
```

## 🎨 样式定制

组件使用以下CSS类名，你可以自定义样式：

```css
/* 章节容器 */
.section-content {
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
}

/* 小节标题 */
.section-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

/* 代码块 */
.code-block {
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 16px;
  overflow-x: auto;
}

.code-block code {
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.5;
}

/* 语法高亮（配合prism.js或highlight.js使用） */
.language-go {
  /* 根据你的语法高亮库定制 */
}
```

## 🔧 集成到项目

### React项目

```tsx
// App.tsx
import React, { useState } from 'react';
import { chapters } from './chapters';
import SliceOperations from './chapters/03-data_types/3.2.2-切片操作';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Go语言学习教程</h1>
      </header>
      <main>
        <SliceOperations />
      </main>
    </div>
  );
}

export default App;
```

### Next.js项目

```tsx
// pages/learn/[chapter]/[section].tsx
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

export default function SectionPage() {
  const router = useRouter();
  const { chapter, section } = router.query;

  // 动态导入组件
  const Component = dynamic(() =>
    import(`../../../chapters/${chapter}/${section}.tsx`)
  );

  return <Component />;
}
```

### 配合代码高亮

```bash
# 安装语法高亮库
npm install prismjs
npm install --save-dev @types/prismjs
```

```tsx
import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-go';

function App() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return <SliceOperations />;
}
```

## 📦 TypeScript配置

确保你的`tsconfig.json`包含以下配置：

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "module": "ESNext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

## 🔍 查找组件

### 按章节浏览

```tsx
import { chapters } from './chapters';

chapters.forEach(chapter => {
  console.log(`第${chapter.id}章：${chapter.title}`);
  console.log(`路径：${chapter.path}`);
  console.log(`小节数：${chapter.sections}`);
});
```

### 按小节编号查找

每个组件的文件名遵循格式：`<小节编号>-<小节名称>.tsx`

例如：
- `3.2.2-切片操作.tsx` - 第3章第2节第2小节
- `1.3.1-hello-world.tsx` - 第1章第3节第1小节

## 📝 扩展和自定义

### 添加交互功能

```tsx
import React, { useState } from 'react';
import SliceOperations from './chapters/03-data_types/3.2.2-切片操作';

function InteractiveLearning() {
  const [showNotes, setShowNotes] = useState(false);

  return (
    <div>
      <SliceOperations />

      <button onClick={() => setShowNotes(!showNotes)}>
        {showNotes ? '隐藏' : '显示'}笔记
      </button>

      {showNotes && (
        <div className="notes">
          <h4>我的笔记</h4>
          <textarea placeholder="在这里记录你的学习笔记..." />
        </div>
      )}
    </div>
  );
}
```

### 添加进度追踪

```tsx
import { useState, useEffect } from 'react';
import { getTotalSections } from './chapters';

function LearningProgress() {
  const [completed, setCompleted] = useState<string[]>([]);
  const total = getTotalSections();
  const progress = (completed.length / total) * 100;

  return (
    <div>
      <h3>学习进度</h3>
      <progress value={completed.length} max={total} />
      <p>{progress.toFixed(1)}% 完成</p>
    </div>
  );
}
```

## 🎓 学习建议

1. **按顺序学习**：从第1章开始，循序渐进
2. **动手实践**：每个代码示例都要自己运行一遍
3. **完成练习**：每章末尾都有练习题和答案
4. **做好笔记**：在组件旁边添加自己的笔记组件
5. **多次复习**：重要章节可以反复阅读

## 🛠️ 开发工具推荐

- **编辑器**：VS Code
- **React开发**：React Developer Tools
- **语法高亮**：Prism.js 或 Highlight.js
- **Markdown渲染**：如果需要渲染原始markdown
- **代码执行**：Go Playground集成

## 🔗 相关资源

- [Go官方网站](https://go.dev/)
- [Go官方文档](https://go.dev/doc/)
- [Go标准库](https://pkg.go.dev/std)
- [React文档](https://react.dev/)
- [TypeScript文档](https://www.typescriptlang.org/)

## 📄 许可证

本教程仅供学习使用。

---

**开始你的Go语言学习之旅吧！🚀**
