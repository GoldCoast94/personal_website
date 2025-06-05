"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import CSSCaseStudies from "@/components/CSSCaseStudies";
import ReactExamples from "@/components/ReactExamples";
import { AirpodsAnimation, ScrollAnimation } from "@/components/Gsap";
import { Modal } from "@/components/Gsap/Modal";
import { CodeBlock } from "@/components/Gsap/CodeBlock";
import { TimelineAnimation } from "@/components/Gsap/TimelineAnimation";

interface Example {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

const examples: Example[] = [
  {
    id: "airpods",
    title: "Airpods 滚动动画",
    description:
      "使用 GSAP ScrollTrigger 实现的逐帧动画效果，展示 Airpods 的细节和功能。通过滚动触发动画，创造流畅的视觉体验。",
    icon: "🎧",
    tags: ["ScrollTrigger", "逐帧动画", "交互设计"],
  },
  {
    id: "timeline",
    title: "Timeline 动画序列",
    description:
      "使用 GSAP Timeline 创建复杂的动画序列，展示多个元素的协同动画效果。通过时间轴控制，实现精确的动画编排。",
    icon: "⏱️",
    tags: ["Timeline", "动画序列", "协同动画"],
  },
  {
    id: "scroll",
    title: "滚动触发动画",
    description:
      "使用 ScrollTrigger 创建滚动触发的动画效果，为页面添加动态的视觉元素。通过滚动位置触发不同的动画状态。",
    icon: "📜",
    tags: ["ScrollTrigger", "滚动动画", "视差效果"],
  },
];

const techDetails = {
  react: {
    name: "React",
    description: "用于构建用户界面的 JavaScript 库",
    icon: "⚛️",
    color: "from-blue-500 to-cyan-500",
    officialLink: "https://react.dev/",
    content: [
      {
        title: "React 核心概念",
        items: [
          {
            name: "组件化开发",
            link: "https://react.dev/learn/your-first-component",
          },
          {
            name: "虚拟 DOM",
            link: "https://react.dev/learn/preserving-and-resetting-state",
          },
          {
            name: "JSX 语法",
            link: "https://react.dev/learn/writing-markup-with-jsx",
          },
          {
            name: "状态管理",
            link: "https://react.dev/learn/state-a-components-memory",
          },
          {
            name: "生命周期",
            link: "https://react.dev/learn/lifecycle-of-reactive-effects",
          },
        ],
      },
      {
        title: "React Hooks",
        items: [
          {
            name: "useState",
            link: "https://react.dev/reference/react/useState",
          },
          {
            name: "useEffect",
            link: "https://react.dev/reference/react/useEffect",
          },
          {
            name: "useContext",
            link: "https://react.dev/reference/react/useContext",
          },
          {
            name: "useReducer",
            link: "https://react.dev/reference/react/useReducer",
          },
          {
            name: "useCallback",
            link: "https://react.dev/reference/react/useCallback",
          },
          {
            name: "useMemo",
            link: "https://react.dev/reference/react/useMemo",
          },
        ],
      },
      {
        title: "React 生态系统",
        items: [
          { name: "React Router", link: "https://reactrouter.com/" },
          { name: "Redux", link: "https://redux.js.org/" },
          { name: "Next.js", link: "https://nextjs.org/" },
          { name: "Material-UI", link: "https://mui.com/" },
          { name: "Tailwind CSS", link: "https://tailwindcss.com/" },
        ],
      },
    ],
  },
  css: {
    name: "CSS",
    description: "层叠样式表，用于设计网页样式",
    icon: "🎨",
    color: "from-pink-500 to-purple-500",
    officialLink: "https://developer.mozilla.org/zh-CN/docs/Web/CSS",
    content: [
      {
        title: "CSS 基础",
        items: [
          {
            name: "选择器",
            link: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_selectors",
          },
          {
            name: "盒模型",
            link: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_box_model",
          },
          {
            name: "布局",
            link: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/Layout_mode",
          },
          {
            name: "定位",
            link: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/position",
          },
          {
            name: "Flexbox",
            link: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_flexible_box_layout",
          },
          {
            name: "Grid",
            link: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_grid_layout",
          },
        ],
      },
      {
        title: "CSS 进阶",
        items: [
          {
            name: "动画",
            link: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_animations",
          },
          {
            name: "过渡",
            link: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_transitions",
          },
          {
            name: "变换",
            link: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform",
          },
          {
            name: "响应式设计",
            link: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/Media_Queries",
          },
          {
            name: "CSS 变量",
            link: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties",
          },
        ],
      },
      {
        title: "CSS 工具",
        items: [
          { name: "Tailwind CSS", link: "https://tailwindcss.com/" },
          { name: "Sass/SCSS", link: "https://sass-lang.com/" },
          { name: "PostCSS", link: "https://postcss.org/" },
          {
            name: "CSS Modules",
            link: "https://github.com/css-modules/css-modules",
          },
          { name: "Styled Components", link: "https://styled-components.com/" },
        ],
      },
    ],
  },
  javascript: {
    name: "JavaScript",
    description: "轻量级的解释型编程语言",
    icon: "📜",
    color: "from-yellow-500 to-orange-500",
    officialLink: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript",
    content: [
      {
        title: "JavaScript 基础",
        items: [
          {
            name: "数据类型",
            link: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures",
          },
          {
            name: "变量和常量",
            link: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types",
          },
          {
            name: "运算符",
            link: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators",
          },
          {
            name: "控制流",
            link: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling",
          },
          {
            name: "函数",
            link: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions",
          },
        ],
      },
      {
        title: "JavaScript 进阶",
        items: [
          {
            name: "闭包",
            link: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures",
          },
          {
            name: "原型链",
            link: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain",
          },
          {
            name: "异步编程",
            link: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises",
          },
          {
            name: "ES6+ 特性",
            link: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference",
          },
          {
            name: "模块化",
            link: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules",
          },
        ],
      },
      {
        title: "JavaScript 工具",
        items: [
          { name: "TypeScript", link: "https://www.typescriptlang.org/" },
          { name: "Webpack", link: "https://webpack.js.org/" },
          { name: "Babel", link: "https://babeljs.io/" },
          { name: "ESLint", link: "https://eslint.org/" },
          { name: "Jest", link: "https://jestjs.io/" },
        ],
      },
    ],
  },
  threejs: {
    name: "Three.js",
    description: "JavaScript 3D 库，用于创建和显示三维图形",
    icon: "🎮",
    color: "from-green-500 to-emerald-500",
    officialLink: "https://threejs.org/",
    content: [
      {
        title: "Three.js 基础",
        items: [
          {
            name: "场景",
            link: "https://threejs.org/docs/#api/en/scenes/Scene",
          },
          {
            name: "相机",
            link: "https://threejs.org/docs/#api/en/cameras/Camera",
          },
          {
            name: "渲染器",
            link: "https://threejs.org/docs/#api/en/renderers/WebGLRenderer",
          },
          {
            name: "几何体",
            link: "https://threejs.org/docs/#api/en/core/BufferGeometry",
          },
          {
            name: "材质",
            link: "https://threejs.org/docs/#api/en/materials/Material",
          },
          {
            name: "光源",
            link: "https://threejs.org/docs/#api/en/lights/Light",
          },
        ],
      },
      {
        title: "Three.js 进阶",
        items: [
          {
            name: "动画",
            link: "https://threejs.org/docs/#api/en/animation/AnimationMixer",
          },
          {
            name: "控制器",
            link: "https://threejs.org/docs/#api/en/controls/OrbitControls",
          },
          {
            name: "后期处理",
            link: "https://threejs.org/docs/#api/en/postprocessing/EffectComposer",
          },
          {
            name: "物理引擎",
            link: "https://threejs.org/docs/#examples/en/physics/AmmoPhysics",
          },
          {
            name: "性能优化",
            link: "https://threejs.org/docs/#manual/en/introduction/How-to-update-things",
          },
        ],
      },
      {
        title: "Three.js 应用",
        items: [
          {
            name: "3D 模型",
            link: "https://threejs.org/docs/#examples/en/loaders/GLTFLoader",
          },
          {
            name: "粒子系统",
            link: "https://threejs.org/docs/#api/en/objects/Points",
          },
          {
            name: "着色器",
            link: "https://threejs.org/docs/#api/en/materials/ShaderMaterial",
          },
          {
            name: "VR/AR",
            link: "https://threejs.org/docs/#examples/en/webxr/WebXRController",
          },
          { name: "游戏开发", link: "https://threejs.org/examples/#games_fps" },
        ],
      },
    ],
  },
  gsap: {
    name: "GSAP",
    description: "专业的 JavaScript 动画库",
    icon: "✨",
    color: "from-indigo-500 to-violet-500",
    officialLink: "https://greensock.com/gsap/",
    content: [
      {
        title: "GSAP 基础",
        items: [
          {
            name: "Tween",
            link: "https://greensock.com/docs/v3/GSAP/gsap.to()",
          },
          {
            name: "Timeline",
            link: "https://greensock.com/docs/v3/GSAP/Timeline",
          },
          { name: "Easing", link: "https://greensock.com/docs/v3/Eases" },
          {
            name: "属性动画",
            link: "https://greensock.com/docs/v3/GSAP/gsap.to()",
          },
          {
            name: "SVG 动画",
            link: "https://greensock.com/docs/v3/GSAP/gsap.to()",
          },
        ],
      },
      {
        title: "GSAP 进阶",
        items: [
          {
            name: "ScrollTrigger",
            link: "https://greensock.com/docs/v3/Plugins/ScrollTrigger",
          },
          {
            name: "MorphSVG",
            link: "https://greensock.com/docs/v3/Plugins/MorphSVGPlugin",
          },
          {
            name: "DrawSVG",
            link: "https://greensock.com/docs/v3/Plugins/DrawSVGPlugin",
          },
          {
            name: "MotionPath",
            link: "https://greensock.com/docs/v3/Plugins/MotionPathPlugin",
          },
          { name: "SplitText", link: "https://greensock.com/splittext/" },
        ],
      },
      {
        title: "GSAP 应用",
        items: [
          {
            name: "页面过渡",
            link: "https://greensock.com/docs/v3/GSAP/gsap.to()",
          },
          {
            name: "滚动动画",
            link: "https://greensock.com/docs/v3/Plugins/ScrollTrigger",
          },
          {
            name: "交互效果",
            link: "https://greensock.com/docs/v3/GSAP/gsap.to()",
          },
          {
            name: "性能优化",
            link: "https://greensock.com/docs/v3/GSAP/gsap.to()",
          },
          {
            name: "最佳实践",
            link: "https://greensock.com/docs/v3/GSAP/gsap.to()",
          },
        ],
      },
    ],
  },
};

export default function TechDetailPage() {
  const params = useParams();
  const techId = params.techId as string;
  const [selectedExample, setSelectedExample] = useState<string | null>(null);

  if (!techDetails[techId as keyof typeof techDetails]) {
    return (
      <div className="h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            404 - 页面未找到
          </h1>
          <Link
            href="/tech"
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            返回技术栈
          </Link>
        </div>
      </div>
    );
  }

  const tech = techDetails[techId as keyof typeof techDetails];

  return (
    <div className="h-[calc(100vh-4rem)] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          href="/tech"
          className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-200 mb-6 group"
        >
          <svg
            className="w-5 h-5 mr-2 transform -rotate-180 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          返回技术栈
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <div className="flex items-center space-x-4 mb-8">
            <span className="text-5xl">{tech.icon}</span>
            <div>
              <div className="flex items-center space-x-4">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                  {tech.name}
                </h1>
                <a
                  href={tech.officialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline flex items-center"
                >
                  官方文档
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {tech.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tech.content.map((section, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6"
              >
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2" />
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {techId === "css" && <CSSCaseStudies />}
        {techId === "react" && <ReactExamples />}
        {techId === "gsap" && (
          <>
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                案例展示
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {examples.map((example) => (
                  <div
                    key={example.id}
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-48 bg-gray-100 dark:bg-gray-700">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-4xl">{example.icon}</div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {example.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                        {example.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {example.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={() => setSelectedExample(example.id)}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                      >
                        查看演示
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <Modal
                isOpen={selectedExample === "airpods"}
                onClose={() => setSelectedExample(null)}
                title="Airpods 滚动动画"
              >
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      功能说明
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      这个示例展示了如何使用 GSAP 的 ScrollTrigger
                      插件创建基于滚动的逐帧动画。
                      通过监听页面滚动位置，控制动画的播放进度，实现流畅的动画效果。
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      在线演示
                    </h4>
                    <div className="relative h-[500px] bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden">
                      <AirpodsAnimation />
                    </div>
                  </div>
                </div>
              </Modal>

              <Modal
                isOpen={selectedExample === "timeline"}
                onClose={() => setSelectedExample(null)}
                title="Timeline 动画序列"
              >
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      功能说明
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      这个示例展示了如何使用 GSAP Timeline 创建复杂的动画序列。
                      Timeline
                      可以让我们轻松地编排多个动画，控制它们的执行顺序和时间。
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      在线演示
                    </h4>
                    <div className="relative h-[400px] bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden">
                      <TimelineAnimation />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      代码实现
                    </h4>
                    <CodeBlock
                      code={`const tl = gsap.timeline({
  repeat: -1,
  repeatDelay: 1
});

// 外层方块动画
tl.to(".box-outer", {
  duration: 1,
  x: 100,
  rotation: 360,
  ease: "power2.out"
})
// 中层方块动画
.to(".box-middle", {
  duration: 1,
  y: 100,
  scale: 1.5,
  ease: "bounce.out"
})
// 内层方块动画
.to(".box-inner", {
  duration: 1,
  x: -100,
  y: -100,
  rotation: -360,
  ease: "power2.inOut"
});`}
                    />
                  </div>
                </div>
              </Modal>

              <Modal
                isOpen={selectedExample === "scroll"}
                onClose={() => setSelectedExample(null)}
                title="滚动触发动画"
              >
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      功能说明
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      这个示例展示了如何使用 GSAP 的 ScrollTrigger
                      插件创建滚动触发的动画效果。
                      通过监听元素的可见性，在适当的时机触发动画。每个卡片都有不同的延迟，
                      创造出瀑布流的效果。
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      在线演示
                    </h4>
                    <div className="relative h-[600px] bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden">
                      <ScrollAnimation />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      代码实现
                    </h4>
                    <CodeBlock
                      code={`// 注册 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger);

// 获取所有卡片元素
const cards = gsap.utils.toArray(".scroll-card");

// 为每个卡片创建动画
cards.forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top bottom",
      end: "top center",
      scrub: 1,
      markers: false
    },
    y: 100,
    opacity: 0,
    duration: 1,
    delay: i * 0.2
  });
});`}
                    />
                  </div>
                </div>
              </Modal>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
