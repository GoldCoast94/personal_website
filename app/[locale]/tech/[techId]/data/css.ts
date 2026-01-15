import { TechDetail } from '../types';

export const cssData: TechDetail = {
  name: "CSS",
  description: "层叠样式表，用于设计网页样式",
  icon: "/images/css-logo.svg",
  color: "from-pink-500 to-purple-500",
  officialLink: "https://developer.mozilla.org/zh-CN/docs/Web/CSS",
  content: [
    {
      title: "CSS 基础",
      items: [
        {
          id: "selectors",
          name: "选择器",
          link: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_selectors",
          description: "CSS 选择器用于选择需要添加样式的 HTML 元素。",
          content: `CSS 选择器是 CSS 规则的核心部分，用于精确定位需要样式化的 HTML 元素。掌握选择器是学习 CSS 的基础。

**基本选择器**：

1. **元素选择器**：选择所有指定类型的元素，如 \`p\`、\`div\`、\`h1\`
2. **类选择器**：通过 class 属性选择元素，以 \`.\` 开头，如 \`.btn\`
3. **ID 选择器**：通过 id 属性选择元素，以 \`#\` 开头，如 \`#header\`
4. **通配选择器**：选择所有元素，使用 \`*\`

**组合选择器**：

1. **后代选择器**：选择某元素内的所有后代元素，使用空格，如 \`div p\`
2. **子选择器**：只选择直接子元素，使用 \`>\`，如 \`ul > li\`
3. **相邻兄弟选择器**：选择紧邻的下一个兄弟元素，使用 \`+\`，如 \`h1 + p\`
4. **通用兄弟选择器**：选择所有后续兄弟元素，使用 \`~\`，如 \`h1 ~ p\`

**属性选择器**：

- \`[attr]\`：有该属性的元素
- \`[attr="value"]\`：属性值完全匹配
- \`[attr^="value"]\`：属性值以指定值开头
- \`[attr$="value"]\`：属性值以指定值结尾
- \`[attr*="value"]\`：属性值包含指定值

**伪类选择器**：

- \`:hover\`：鼠标悬停状态
- \`:focus\`：元素获得焦点
- \`:active\`：元素被激活
- \`:nth-child(n)\`：选择第 n 个子元素
- \`:first-child\`、\`:last-child\`：第一个/最后一个子元素

**伪元素选择器**：

- \`::before\`：在元素内容前插入内容
- \`::after\`：在元素内容后插入内容
- \`::first-line\`：选择第一行
- \`::first-letter\`：选择第一个字母`,
          codeExample: `/* 基本选择器 */
/* 元素选择器 */
p {
  color: #333;
  line-height: 1.6;
}

/* 类选择器 */
.btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
}

/* ID 选择器 */
#header {
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
}

/* 通配选择器 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 组合选择器 */
/* 后代选择器 - 选择 nav 内的所有 a */
nav a {
  text-decoration: none;
  color: #333;
}

/* 子选择器 - 只选择直接子元素 */
ul > li {
  list-style: none;
  padding: 5px 0;
}

/* 相邻兄弟选择器 */
h2 + p {
  font-weight: bold;
  color: #666;
}

/* 通用兄弟选择器 */
h2 ~ p {
  margin-left: 20px;
}

/* 属性选择器 */
/* 选择有 title 属性的元素 */
[title] {
  cursor: help;
  border-bottom: 1px dotted;
}

/* 选择 type="text" 的 input */
input[type="text"] {
  border: 1px solid #ccc;
  padding: 8px;
}

/* 选择 href 以 https 开头的链接 */
a[href^="https"] {
  color: green;
}

/* 选择 href 以 .pdf 结尾的链接 */
a[href$=".pdf"]::after {
  content: " (PDF)";
  font-size: 0.8em;
}

/* 伪类选择器 */
/* 鼠标悬停效果 */
button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

/* 输入框获得焦点 */
input:focus {
  outline: 2px solid #007bff;
  border-color: #007bff;
}

/* 选择奇数行 */
tr:nth-child(odd) {
  background-color: #f9f9f9;
}

/* 选择第一个子元素 */
li:first-child {
  font-weight: bold;
}

/* 伪元素选择器 */
/* 在元素前添加内容 */
.quote::before {
  content: '"';
  font-size: 2em;
  color: #999;
}

.quote::after {
  content: '"';
  font-size: 2em;
  color: #999;
}

/* 首字母大写并加粗 */
p::first-letter {
  font-size: 2em;
  font-weight: bold;
  float: left;
  margin-right: 5px;
}

/* 第一行加粗 */
p::first-line {
  font-weight: bold;
  color: #333;
}

/* 复杂组合示例 */
/* 选择 .container 内所有卡片的标题 */
.container .card h3 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

/* 选择没有 disabled 属性的按钮 */
button:not([disabled]):hover {
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}`
        },
        {
          id: "flexbox",
          name: "Flexbox",
          link: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_flexible_box_layout",
          description: "Flexbox 是一维布局模型，用于在容器中分配空间和对齐元素。",
          content: `Flexbox（弹性盒子布局）是 CSS3 引入的一维布局模型，专为构建灵活的响应式布局而设计。它使元素能够自动适应容器空间，轻松实现对齐、分布和排序。

**容器属性（Flex Container）**：

1. **display: flex | inline-flex**：启用 Flexbox 布局
2. **flex-direction**：定义主轴方向
   - \`row\`（默认）：水平从左到右
   - \`row-reverse\`：水平从右到左
   - \`column\`：垂直从上到下
   - \`column-reverse\`：垂直从下到上
3. **justify-content**：定义主轴上的对齐方式
   - \`flex-start\`：起点对齐
   - \`flex-end\`：终点对齐
   - \`center\`：居中对齐
   - \`space-between\`：两端对齐，项目之间的间隔相等
   - \`space-around\`：每个项目两侧的间隔相等
   - \`space-evenly\`：所有间隔相等
4. **align-items**：定义交叉轴上的对齐方式
   - \`stretch\`（默认）：拉伸填充
   - \`flex-start\`：起点对齐
   - \`flex-end\`：终点对齐
   - \`center\`：居中对齐
   - \`baseline\`：基线对齐
5. **flex-wrap**：定义是否换行
   - \`nowrap\`（默认）：不换行
   - \`wrap\`：换行，第一行在上方
   - \`wrap-reverse\`：换行，第一行在下方
6. **gap**：设置项目之间的间距

**项目属性（Flex Items）**：

1. **flex-grow**：定义放大比例，默认为 0（不放大）
2. **flex-shrink**：定义缩小比例，默认为 1（空间不足时缩小）
3. **flex-basis**：定义项目的初始大小，默认为 auto
4. **flex**：\`flex-grow\`、\`flex-shrink\` 和 \`flex-basis\` 的简写
5. **align-self**：允许单个项目有与其他项目不同的对齐方式
6. **order**：定义项目的排列顺序，数值越小越靠前

**常见布局场景**：

1. **水平垂直居中**：完美居中任何内容
2. **导航栏**：均匀分布的导航项
3. **卡片网格**：自适应的卡片布局
4. **圣杯布局**：经典的三栏布局
5. **等高列**：自动等高的多列布局`,
          codeExample: `/* ============ 容器属性示例 ============ */

/* 1. 基础 Flex 容器 */
.flex-container {
  display: flex;
  /* 启用 Flexbox 布局 */
}

/* 2. Flex 方向控制 */
.flex-row {
  display: flex;
  flex-direction: row; /* 默认：水平排列 */
}

.flex-column {
  display: flex;
  flex-direction: column; /* 垂直排列 */
}

/* 3. 主轴对齐（justify-content） */
.justify-center {
  display: flex;
  justify-content: center; /* 水平居中 */
}

.justify-between {
  display: flex;
  justify-content: space-between; /* 两端对齐 */
}

.justify-around {
  display: flex;
  justify-content: space-around; /* 周围间距相等 */
}

/* 4. 交叉轴对齐（align-items） */
.align-center {
  display: flex;
  align-items: center; /* 垂直居中 */
}

.align-stretch {
  display: flex;
  align-items: stretch; /* 拉伸填充（默认） */
  height: 200px;
}

/* 5. 换行控制 */
.flex-wrap {
  display: flex;
  flex-wrap: wrap; /* 允许换行 */
  gap: 16px; /* 项目之间的间距 */
}

/* ============ 项目属性示例 ============ */

/* 1. Flex 增长 */
.flex-item-grow {
  flex-grow: 1; /* 占据剩余空间 */
}

.flex-item-grow-2 {
  flex-grow: 2; /* 占据 2 倍的剩余空间 */
}

/* 2. Flex 缩小 */
.flex-item-no-shrink {
  flex-shrink: 0; /* 不缩小 */
}

/* 3. Flex 基础大小 */
.flex-item-basis {
  flex-basis: 200px; /* 初始大小为 200px */
}

/* 4. Flex 简写（推荐） */
.flex-item {
  flex: 1; /* 等同于 flex: 1 1 0% */
}

.flex-item-fixed {
  flex: 0 0 200px; /* 固定 200px，不增长不缩小 */
}

/* 5. 单独对齐 */
.flex-item-self-end {
  align-self: flex-end; /* 单独对齐到底部 */
}

/* 6. 排序 */
.flex-item-first {
  order: -1; /* 排在最前面 */
}

/* ============ 实战布局案例 ============ */

/* 案例 1：完美居中 */
.center-box {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 100vh;
}

/* 案例 2：导航栏 */
.navbar {
  display: flex;
  justify-content: space-between; /* 两端对齐 */
  align-items: center;
  padding: 16px 24px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-menu {
  display: flex;
  gap: 24px; /* 菜单项间距 */
  list-style: none;
}

.navbar-menu li {
  padding: 8px 16px;
}

/* 案例 3：响应式卡片网格 */
.card-grid {
  display: flex;
  flex-wrap: wrap; /* 允许换行 */
  gap: 20px;
  padding: 20px;
}

.card {
  flex: 1 1 300px; /* 最小宽度 300px，自动增长 */
  min-width: 300px;
  max-width: 400px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* 案例 4：圣杯布局（头部-内容-底部） */
.holy-grail {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.holy-grail-header,
.holy-grail-footer {
  flex: 0 0 auto; /* 固定高度 */
  padding: 20px;
  background: #f5f5f5;
}

.holy-grail-body {
  display: flex;
  flex: 1; /* 占据剩余空间 */
}

.holy-grail-content {
  flex: 1; /* 主内容区自适应 */
  padding: 20px;
}

.holy-grail-nav,
.holy-grail-aside {
  flex: 0 0 200px; /* 侧边栏固定宽度 */
  padding: 20px;
  background: #fafafa;
}

/* 案例 5：等高列 */
.equal-height-columns {
  display: flex;
  gap: 20px;
}

.column {
  flex: 1; /* 等宽 */
  padding: 20px;
  background: white;
  border: 1px solid #ddd;
  /* 所有列自动等高，无需设置 height */
}

/* 案例 6：工具栏布局 */
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #e0e0e0;
}

.toolbar-left,
.toolbar-right {
  display: flex;
  gap: 8px;
  align-items: center;
}

.toolbar-center {
  flex: 1; /* 中间区域占据剩余空间 */
  text-align: center;
}

/* 案例 7：表单布局 */
.form-row {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
}

.form-field {
  flex: 1; /* 表单字段等宽 */
  display: flex;
  flex-direction: column;
}

.form-field label {
  margin-bottom: 8px;
  font-weight: 500;
}

.form-field input {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* 案例 8：标签列表 */
.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  flex: 0 0 auto; /* 标签不增长 */
  padding: 4px 12px;
  background: #e3f2fd;
  color: #1976d2;
  border-radius: 16px;
  font-size: 14px;
}`
        },
        {
          id: "grid",
          name: "Grid",
          link: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_grid_layout",
          description: "Grid 是二维布局系统，可以同时处理行和列。",
          content: `CSS Grid（网格布局）是 CSS3 引入的二维布局系统，能够同时在行和列两个维度上进行布局控制。它非常适合创建复杂的页面布局，如仪表盘、杂志式布局、响应式网格等。

**容器属性（Grid Container）**：

1. **display: grid | inline-grid**：启用 Grid 布局
2. **grid-template-columns**：定义列的尺寸
   - 固定值：\`grid-template-columns: 200px 1fr 300px\`
   - \`repeat()\`：\`repeat(3, 1fr)\` 创建 3 个等宽列
   - \`minmax()\`：\`minmax(100px, 1fr)\` 设置最小最大值
   - \`auto-fit\` / \`auto-fill\`：自动填充列
3. **grid-template-rows**：定义行的尺寸
4. **grid-template-areas**：通过命名区域定义布局
5. **gap** / **grid-gap**：设置网格间距
   - \`gap: 20px\`：行列间距都是 20px
   - \`gap: 20px 30px\`：行间距 20px，列间距 30px
6. **grid-auto-flow**：控制自动放置算法
   - \`row\`（默认）：按行填充
   - \`column\`：按列填充
   - \`dense\`：紧密填充，尝试填补空隙
7. **grid-auto-columns / grid-auto-rows**：定义隐式网格轨道的大小

**项目属性（Grid Items）**：

1. **grid-column**：定义项目的列位置
   - \`grid-column: 1 / 3\`：从第 1 列到第 3 列
   - \`grid-column: span 2\`：跨越 2 列
2. **grid-row**：定义项目的行位置
   - \`grid-row: 1 / 3\`：从第 1 行到第 3 行
   - \`grid-row: span 2\`：跨越 2 行
3. **grid-area**：
   - 可以指定四个值：\`grid-row-start / grid-column-start / grid-row-end / grid-column-end\`
   - 也可以使用命名区域：\`grid-area: header\`
4. **justify-self**：单元格内容的水平对齐
5. **align-self**：单元格内容的垂直对齐
6. **place-self**：\`align-self\` 和 \`justify-self\` 的简写

**常见布局场景**：

1. **响应式网格**：自适应不同屏幕尺寸的网格布局
2. **仪表盘布局**：不规则的面板布局
3. **杂志式布局**：复杂的多列内容布局
4. **图片画廊**：自适应的图片网格
5. **卡片布局**：等宽自适应的卡片网格`,
          codeExample: `/* ============ 容器属性示例 ============ */

/* 1. 基础 Grid 容器 */
.grid-container {
  display: grid;
  /* 启用 Grid 布局 */
}

/* 2. 定义列（grid-template-columns） */
.grid-3-columns {
  display: grid;
  grid-template-columns: 200px 200px 200px; /* 3 个固定宽度列 */
  gap: 20px;
}

.grid-fr-units {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* 分数单位：1:2:1 比例 */
  gap: 20px;
}

.grid-repeat {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 个等宽列 */
  gap: 20px;
}

.grid-mixed {
  display: grid;
  grid-template-columns: 200px 1fr 300px; /* 混合单位 */
  gap: 20px;
}

/* 3. 定义行（grid-template-rows） */
.grid-rows {
  display: grid;
  grid-template-rows: 100px 200px 100px;
  gap: 20px;
}

/* 4. 响应式自动填充 */
.grid-auto-fit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  /* 自动适应：至少 250px，最多 1fr */
}

.grid-auto-fill {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  /* 自动填充：创建尽可能多的列 */
}

/* 5. 命名网格区域 */
.grid-areas {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
  min-height: 100vh;
}

/* 6. 网格间距 */
.grid-gap {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px; /* 行列间距都是 20px */
}

.grid-gap-separate {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 30px; /* 行间距 */
  column-gap: 20px; /* 列间距 */
}

/* 7. 自动放置控制 */
.grid-auto-flow-column {
  display: grid;
  grid-auto-flow: column; /* 按列填充 */
  grid-template-rows: repeat(3, 100px);
  gap: 20px;
}

.grid-auto-flow-dense {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: dense; /* 紧密填充 */
  gap: 20px;
}

/* ============ 项目属性示例 ============ */

/* 1. 列位置控制 */
.grid-item-column-span {
  grid-column: 1 / 3; /* 从第 1 列到第 3 列 */
}

.grid-item-column-span-2 {
  grid-column: span 2; /* 跨越 2 列 */
}

.grid-item-column-full {
  grid-column: 1 / -1; /* 跨越所有列 */
}

/* 2. 行位置控制 */
.grid-item-row-span {
  grid-row: 1 / 3; /* 从第 1 行到第 3 行 */
}

.grid-item-row-span-2 {
  grid-row: span 2; /* 跨越 2 行 */
}

/* 3. 同时控制行和列 */
.grid-item-area {
  grid-area: 1 / 1 / 3 / 3;
  /* 行开始 / 列开始 / 行结束 / 列结束 */
}

/* 4. 使用命名区域 */
.grid-header {
  grid-area: header;
}

.grid-sidebar {
  grid-area: sidebar;
}

.grid-main {
  grid-area: main;
}

.grid-footer {
  grid-area: footer;
}

/* 5. 单元格对齐 */
.grid-item-center {
  justify-self: center; /* 水平居中 */
  align-self: center; /* 垂直居中 */
}

.grid-item-end {
  justify-self: end; /* 靠右 */
  align-self: end; /* 靠下 */
}

/* ============ 实战布局案例 ============ */

/* 案例 1：基础响应式网格 */
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  padding: 24px;
}

.responsive-grid-item {
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* 案例 2：仪表盘布局 */
.dashboard {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto 1fr 1fr;
  gap: 20px;
  padding: 20px;
  height: 100vh;
}

.dashboard-header {
  grid-column: 1 / -1; /* 跨越所有列 */
  padding: 20px;
  background: #fff;
  border-radius: 8px;
}

.dashboard-sidebar {
  grid-column: 1 / 2; /* 第一列 */
  grid-row: 2 / 4; /* 跨越 2-3 行 */
  padding: 20px;
  background: #fff;
  border-radius: 8px;
}

.dashboard-main {
  grid-column: 2 / -1; /* 第 2 列到最后 */
  grid-row: 2 / 3;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
}

.dashboard-stats {
  grid-column: 2 / -1;
  grid-row: 3 / 4;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* 案例 3：杂志式布局 */
.magazine-layout {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 200px;
  gap: 16px;
  padding: 16px;
}

.magazine-featured {
  grid-column: span 4; /* 跨越 4 列 */
  grid-row: span 2; /* 跨越 2 行 */
}

.magazine-article {
  grid-column: span 2;
  grid-row: span 1;
}

.magazine-highlight {
  grid-column: span 3;
  grid-row: span 2;
}

/* 案例 4：图片画廊 */
.photo-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  gap: 16px;
  padding: 16px;
}

.photo-gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.photo-gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 特定图片占据更大空间 */
.photo-gallery-item.large {
  grid-column: span 2;
  grid-row: span 2;
}

.photo-gallery-item.wide {
  grid-column: span 2;
}

.photo-gallery-item.tall {
  grid-row: span 2;
}

/* 案例 5：圣杯布局（使用 Grid Areas） */
.holy-grail-grid {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav content aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  gap: 20px;
}

.holy-grail-header {
  grid-area: header;
  padding: 20px;
  background: #f5f5f5;
}

.holy-grail-nav {
  grid-area: nav;
  padding: 20px;
  background: #fafafa;
}

.holy-grail-content {
  grid-area: content;
  padding: 20px;
}

.holy-grail-aside {
  grid-area: aside;
  padding: 20px;
  background: #fafafa;
}

.holy-grail-footer {
  grid-area: footer;
  padding: 20px;
  background: #f5f5f5;
}

/* 案例 6：卡片网格（不同大小） */
.card-grid-varied {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  gap: 20px;
  padding: 20px;
}

.card-grid-item {
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* 让某些卡片占据更多空间 */
.card-grid-item.featured {
  grid-column: span 2;
  grid-row: span 2;
}

/* 案例 7：响应式布局（使用媒体查询） */
.responsive-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 20px;
}

@media (min-width: 768px) {
  .responsive-layout {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .responsive-layout {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1440px) {
  .responsive-layout {
    grid-template-columns: repeat(4, 1fr);
  }
}`
        },
      ],
    },
    {
      title: "CSS 进阶",
      items: [
        {
          id: "animations",
          name: "动画",
          link: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_animations",
          description: "CSS 动画允许元素从一个样式逐渐变化为另一个样式。",
          content: `CSS 动画（Animations）允许你创建复杂的、多步骤的动画效果。与过渡（transition）不同，动画可以自动播放，不需要触发器，并且可以定义多个关键帧。

**@keyframes 语法**：

定义动画的关键帧，指定动画在不同时间点的样式：

@keyframes 动画名称 {
  0% { /* 起始状态 */ }
  50% { /* 中间状态 */ }
  100% { /* 结束状态 */ }
}

/* 或者使用 from/to */
@keyframes 动画名称 {
  from { /* 起始状态 */ }
  to { /* 结束状态 */ }
}

**animation 属性**：

1. **animation-name**：指定 @keyframes 定义的动画名称
2. **animation-duration**：动画持续时间（如 2s, 500ms）
3. **animation-timing-function**：速度曲线
   - \`linear\`：匀速
   - \`ease\`（默认）：慢-快-慢
   - \`ease-in\`：慢速开始
   - \`ease-out\`：慢速结束
   - \`ease-in-out\`：慢速开始和结束
   - \`cubic-bezier(n,n,n,n)\`：自定义贝塞尔曲线
4. **animation-delay**：动画延迟时间
5. **animation-iteration-count**：播放次数
   - 数字：指定次数
   - \`infinite\`：无限循环
6. **animation-direction**：播放方向
   - \`normal\`（默认）：正向播放
   - \`reverse\`：反向播放
   - \`alternate\`：交替播放（正-反-正）
   - \`alternate-reverse\`：反向交替（反-正-反）
7. **animation-fill-mode**：动画结束后的状态
   - \`none\`（默认）：不改变
   - \`forwards\`：保持最后一帧
   - \`backwards\`：应用第一帧（在 delay 期间）
   - \`both\`：同时应用 forwards 和 backwards
8. **animation-play-state**：控制播放状态
   - \`running\`（默认）：播放
   - \`paused\`：暂停

**animation 简写**：

animation: name duration timing-function delay iteration-count direction fill-mode;

**常见动画模式**：

1. **淡入淡出**：透明度变化
2. **弹跳效果**：元素弹跳动画
3. **旋转**：360度旋转
4. **缩放**：放大缩小
5. **滑动**：位置移动
6. **脉冲**：周期性缩放
7. **摇晃**：左右摇摆
8. **加载动画**：各种 loading 效果`,
          codeExample: `/* ============ @keyframes 定义 ============ */

/* 1. 淡入动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* 2. 滑入动画 */
@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* 3. 弹跳动画 */
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

/* 4. 旋转动画 */
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* 5. 缩放脉冲 */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

/* 6. 摇晃动画 */
@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-10px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(10px);
  }
}

/* 7. 加载旋转 */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* 8. 渐变背景 */
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* 9. 波纹效果 */
@keyframes ripple {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
}

/* 10. 闪烁效果 */
@keyframes blink {
  0%, 50%, 100% {
    opacity: 1;
  }
  25%, 75% {
    opacity: 0;
  }
}

/* ============ 应用动画 ============ */

/* 1. 基础应用 */
.fade-in {
  animation-name: fadeIn;
  animation-duration: 1s;
  animation-timing-function: ease-in;
}

/* 2. 简写语法（推荐） */
.slide-in {
  animation: slideIn 0.5s ease-out;
}

/* 3. 无限循环 */
.rotate-infinite {
  animation: rotate 2s linear infinite;
}

/* 4. 延迟播放 */
.delayed-animation {
  animation: fadeIn 1s ease-in 0.5s;
  /* 延迟 0.5 秒后开始 */
}

/* 5. 交替方向 */
.pulse-alternate {
  animation: pulse 1s ease-in-out infinite alternate;
}

/* 6. 保持最后状态 */
.slide-in-stay {
  animation: slideIn 0.5s ease-out forwards;
  /* 动画结束后保持最后一帧 */
}

/* 7. 多个动画 */
.multiple-animations {
  animation:
    fadeIn 1s ease-in,
    slideIn 1s ease-out,
    bounce 1s ease-in-out 1s;
  /* 可以同时应用多个动画 */
}

/* ============ 实战动画案例 ============ */

/* 案例 1：加载旋转器 */
.loader {
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* 案例 2：脉冲按钮 */
.pulse-button {
  padding: 12px 24px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  animation: pulse 2s ease-in-out infinite;
}

.pulse-button:hover {
  animation-play-state: paused;
}

/* 案例 3：进度条 */
@keyframes progress {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

.progress-bar {
  height: 20px;
  background: #3498db;
  border-radius: 10px;
  animation: progress 3s ease-out forwards;
}

/* 案例 4：卡片翻转 */
@keyframes flipIn {
  from {
    transform: perspective(400px) rotateY(-90deg);
    opacity: 0;
  }
  to {
    transform: perspective(400px) rotateY(0deg);
    opacity: 1;
  }
}

.flip-card {
  animation: flipIn 0.6s ease-out;
}

/* 案例 5：打字效果 */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}

.typing-text {
  overflow: hidden;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  animation:
    typing 3.5s steps(40, end),
    blink-caret 0.75s step-end infinite;
}

/* 案例 6：浮动效果 */
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

.floating-element {
  animation: float 3s ease-in-out infinite;
}

/* 案例 7：波浪加载 */
@keyframes wave {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.wave-loader {
  width: 100px;
  height: 100px;
  overflow: hidden;
  position: relative;
}

.wave-loader::before {
  content: '';
  position: absolute;
  width: 200%;
  height: 100%;
  background: linear-gradient(90deg,
    transparent,
    rgba(52, 152, 219, 0.5),
    transparent);
  animation: wave 2s linear infinite;
}

/* 案例 8：心跳效果 */
@keyframes heartbeat {
  0% {
    transform: scale(1);
  }
  14% {
    transform: scale(1.3);
  }
  28% {
    transform: scale(1);
  }
  42% {
    transform: scale(1.3);
  }
  70% {
    transform: scale(1);
  }
}

.heartbeat-icon {
  animation: heartbeat 1.5s ease-in-out infinite;
}

/* 案例 9：闪光效果 */
@keyframes shine {
  0% {
    background-position: -100%;
  }
  100% {
    background-position: 200%;
  }
}

.shine-effect {
  background: linear-gradient(
    90deg,
    #f0f0f0 0%,
    #ffffff 50%,
    #f0f0f0 100%
  );
  background-size: 200% 100%;
  animation: shine 2s ease-in-out infinite;
}

/* 案例 10：抖动警告 */
@keyframes wiggle {
  0%, 7% {
    transform: rotateZ(0);
  }
  15% {
    transform: rotateZ(-15deg);
  }
  20% {
    transform: rotateZ(10deg);
  }
  25% {
    transform: rotateZ(-10deg);
  }
  30% {
    transform: rotateZ(6deg);
  }
  35% {
    transform: rotateZ(-4deg);
  }
  40%, 100% {
    transform: rotateZ(0);
  }
}

.wiggle-warning {
  animation: wiggle 2s ease-in-out infinite;
}

/* 案例 11：骨架屏加载 */
@keyframes skeleton-loading {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
}

.skeleton {
  background-color: #e0e0e0;
  background-image: linear-gradient(
    90deg,
    #e0e0e0 0px,
    #f0f0f0 40px,
    #e0e0e0 80px
  );
  background-size: 200px 100%;
  animation: skeleton-loading 1.5s ease-in-out infinite;
}

/* 案例 12：渐变文字 */
@keyframes gradient-text {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.gradient-text {
  background: linear-gradient(
    45deg,
    #ff0000,
    #00ff00,
    #0000ff,
    #ff0000
  );
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-text 3s ease infinite;
}`
        },
        {
          id: "transitions",
          name: "过渡",
          link: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_transitions",
          description: "过渡可以在属性值变化时创建平滑的动画效果。",
          content: `CSS 过渡（Transitions）用于在 CSS 属性值发生变化时创建平滑的动画效果。与动画（animations）不同，过渡需要触发器（如 :hover、:focus、JavaScript 修改类名等）来启动。

**transition 属性**：

1. **transition-property**：指定要过渡的 CSS 属性
   - 具体属性名：\`opacity\`, \`transform\`, \`background-color\` 等
   - \`all\`：所有可过渡的属性（不推荐，性能较差）
   - \`none\`：没有过渡效果
2. **transition-duration**：过渡持续时间
   - 时间单位：\`s\`（秒）或 \`ms\`（毫秒）
   - 示例：\`0.3s\`, \`300ms\`
3. **transition-timing-function**：速度曲线（缓动函数）
   - \`linear\`：匀速
   - \`ease\`（默认）：慢-快-慢
   - \`ease-in\`：慢速开始
   - \`ease-out\`：慢速结束
   - \`ease-in-out\`：慢速开始和结束
   - \`cubic-bezier(n,n,n,n)\`：自定义贝塞尔曲线
   - \`steps(n)\`：阶跃函数
4. **transition-delay**：过渡延迟时间
   - 延迟多久后开始过渡
   - 示例：\`0.1s\`, \`100ms\`

**transition 简写**：

transition: property duration timing-function delay;

/* 示例 */
transition: opacity 0.3s ease-in-out 0.1s;

/* 多个属性 */
transition: opacity 0.3s, transform 0.5s;

**可过渡的属性**：

- **颜色**：\`color\`, \`background-color\`, \`border-color\`
- **尺寸**：\`width\`, \`height\`, \`padding\`, \`margin\`
- **位置**：\`top\`, \`left\`, \`right\`, \`bottom\`
- **变换**：\`transform\`（推荐，性能好）
- **透明度**：\`opacity\`（推荐，性能好）
- **阴影**：\`box-shadow\`, \`text-shadow\`
- 更多属性详见 MDN 文档

**性能优化建议**：

1. 优先使用 \`transform\` 和 \`opacity\`（GPU 加速）
2. 避免对 \`width\`、\`height\`、\`margin\` 等会触发重排的属性进行过渡
3. 使用 \`will-change\` 提示浏览器优化
4. 避免对 \`all\` 属性使用过渡

**常见过渡模式**：

1. **悬停效果**：鼠标悬停时的视觉反馈
2. **按钮状态**：按钮点击、禁用状态
3. **展开收起**：手风琴、下拉菜单
4. **显示隐藏**：模态框、提示框
5. **颜色变化**：主题切换、状态指示`,
          codeExample: `/* ============ 基础过渡 ============ */

/* 1. 单属性过渡 */
.fade {
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}

.fade:hover {
  opacity: 0.7;
}

/* 2. 多属性过渡 */
.button {
  background-color: #3498db;
  color: white;
  transform: scale(1);
  transition:
    background-color 0.3s ease,
    transform 0.2s ease,
    box-shadow 0.3s ease;
}

.button:hover {
  background-color: #2980b9;
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* 3. 使用 all（不推荐） */
.transition-all {
  transition: all 0.3s ease;
}

/* 4. 带延迟的过渡 */
.delayed {
  opacity: 0;
  transition: opacity 0.5s ease-in-out 0.2s;
  /* 延迟 0.2 秒后开始过渡 */
}

.delayed.visible {
  opacity: 1;
}

/* ============ 不同的缓动函数 ============ */

/* 1. 线性过渡 */
.linear {
  transition: transform 0.5s linear;
}

.linear:hover {
  transform: translateX(100px);
}

/* 2. 缓入 */
.ease-in {
  transition: transform 0.5s ease-in;
}

.ease-in:hover {
  transform: translateX(100px);
}

/* 3. 缓出 */
.ease-out {
  transition: transform 0.5s ease-out;
}

.ease-out:hover {
  transform: translateX(100px);
}

/* 4. 自定义贝塞尔曲线 */
.custom-curve {
  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  /* 弹性效果 */
}

.custom-curve:hover {
  transform: scale(1.2);
}

/* ============ 实战过渡案例 ============ */

/* 案例 1：卡片悬停效果 */
.card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform: translateY(0);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* 案例 2：按钮效果 */
.btn {
  display: inline-block;
  padding: 12px 24px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.1s ease;
}

.btn:hover {
  background-color: #2980b9;
}

.btn:active {
  transform: scale(0.95);
}

.btn:disabled {
  background-color: #95a5a6;
  cursor: not-allowed;
  transition: background-color 0.3s ease;
}

/* 案例 3：导航链接 */
.nav-link {
  position: relative;
  color: #333;
  text-decoration: none;
  padding: 8px 16px;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #3498db;
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: #3498db;
}

.nav-link:hover::after {
  width: 100%;
}

/* 案例 4：图片缩放 */
.image-container {
  overflow: hidden;
  border-radius: 8px;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.image-container:hover img {
  transform: scale(1.1);
}

/* 案例 5：展开/收起面板 */
.accordion-header {
  padding: 16px;
  background: #f5f5f5;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.accordion-header:hover {
  background-color: #e0e0e0;
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.accordion.open .accordion-content {
  max-height: 500px;
}

/* 案例 6：输入框焦点 */
.input-field {
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 4px;
  outline: none;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.input-field:focus {
  border-color: #3498db;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
}

/* 案例 7：进度条 */
.progress-container {
  width: 100%;
  height: 8px;
  background: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: #3498db;
  width: 0;
  transition: width 0.5s ease;
}

/* JavaScript: progressBar.style.width = '75%'; */

/* 案例 8：切换开关 */
.toggle {
  position: relative;
  width: 50px;
  height: 24px;
  background: #ccc;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.toggle::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.toggle.active {
  background-color: #3498db;
}

.toggle.active::after {
  transform: translateX(26px);
}

/* 案例 9：侧边栏滑动 */
.sidebar {
  position: fixed;
  top: 0;
  left: -300px;
  width: 300px;
  height: 100vh;
  background: white;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
  transition: left 0.3s ease;
}

.sidebar.open {
  left: 0;
}

/* 案例 10：模态框淡入 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
}

.modal-overlay.visible {
  opacity: 1;
  visibility: visible;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.9);
  background: white;
  padding: 32px;
  border-radius: 8px;
  opacity: 0;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.modal.visible {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

/* 案例 11：标签切换 */
.tab {
  padding: 12px 24px;
  background: transparent;
  color: #666;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition:
    color 0.3s ease,
    border-color 0.3s ease;
}

.tab:hover {
  color: #333;
}

.tab.active {
  color: #3498db;
  border-bottom-color: #3498db;
}

/* 案例 12：提示框 */
.tooltip-trigger {
  position: relative;
  display: inline-block;
}

.tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-8px);
  padding: 8px 12px;
  background: #333;
  color: white;
  border-radius: 4px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.tooltip-trigger:hover .tooltip {
  opacity: 1;
  transform: translateX(-50%) translateY(-16px);
}

/* 案例 13：加载旋转（配合 transition） */
.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  transition: transform 0.8s linear;
}

/* JavaScript 触发旋转 */
.loading-spinner.spin {
  transform: rotate(360deg);
}

/* 案例 14：颜色主题切换 */
.theme-container {
  background-color: white;
  color: #333;
  transition:
    background-color 0.5s ease,
    color 0.5s ease;
}

.theme-container.dark {
  background-color: #1a1a1a;
  color: #f0f0f0;
}

/* 案例 15：评分星星 */
.star {
  color: #ddd;
  font-size: 24px;
  cursor: pointer;
  transition: color 0.2s ease;
}

.star:hover,
.star.filled {
  color: #f39c12;
}

/* 性能优化示例 */
.optimized {
  /* 使用 transform 和 opacity（GPU 加速） */
  opacity: 1;
  transform: translateX(0);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  /* 可选：提示浏览器优化 */
  will-change: opacity, transform;
}

.optimized:hover {
  opacity: 0.8;
  transform: translateX(10px);
}`
        },
      ],
    },
    {
      title: "实战案例",
      items: [
        {
          id: "css-examples",
          name: "CSS 实战案例",
          link: "https://developer.mozilla.org/zh-CN/docs/Web/CSS",
          description: "通过实际案例深入学习 CSS 布局、动画和响应式设计的应用技巧。",
          content: "这些案例展示了 CSS 在实际开发中的应用，包括响应式布局、动画效果、现代化设计等核心场景。每个案例都包含完整的代码实现和详细说明，帮助你快速掌握 CSS 的精髓。"
        },
      ],
    },
  ],
};
