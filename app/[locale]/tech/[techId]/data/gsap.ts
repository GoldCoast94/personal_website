import { TechDetail } from '../types';

export const gsapData: TechDetail = {
  name: "GSAP",
  description: "专业的 JavaScript 动画库",
  icon: "/images/gsap-logo.png",
  color: "from-indigo-500 to-violet-500",
  officialLink: "https://greensock.com/gsap/",
  content: [
    {
      title: "GSAP 核心概念",
      items: [
        {
          id: "tweens",
          name: "Tweens 补间动画",
          link: "https://greensock.com/docs/v3/GSAP/gsap.to()",
          description: "Tweens 是 GSAP 的核心动画方法，用于在指定时间内改变对象的属性。",
          content: `Tweens（补间动画）是 GSAP 最基础也是最常用的功能。它可以让元素的属性从一个值平滑过渡到另一个值，创建出流畅的动画效果。

**三种核心方法**：

1. **gsap.to()**：从当前状态动画到目标状态
   - 最常用的方法
   - 指定目标状态，GSAP 自动计算起始状态

2. **gsap.from()**：从指定状态动画到当前状态
   - 用于元素的入场动画
   - 指定起始状态，动画到元素当前状态

3. **gsap.fromTo()**：完全控制起始和结束状态
   - 同时指定起始和结束状态
   - 提供最大的控制灵活性

**常用属性**：
- **位移**：x, y（基于 transform）
- **旋转**：rotation, rotationX, rotationY
- **缩放**：scale, scaleX, scaleY
- **透明度**：opacity
- **时间**：duration（持续时间，秒）
- **延迟**：delay（延迟时间，秒）
- **重复**：repeat（重复次数，-1 为无限）, repeatDelay
- **往返**：yoyo（是否往返动画）

**Tween 控制方法**：
- **play()**：播放动画
- **pause()**：暂停动画
- **reverse()**：反转播放
- **restart()**：重新开始
- **kill()**：终止动画`,
          codeExample: `// 1. gsap.to() - 最常用的方法
gsap.to(".box", {
  x: 200,              // 向右移动 200px
  y: 100,              // 向下移动 100px
  rotation: 360,       // 旋转 360 度
  duration: 2,         // 持续 2 秒
  ease: "power2.out"   // 缓动函数
});

// 2. gsap.from() - 从指定状态到当前状态
gsap.from(".hero", {
  opacity: 0,          // 从透明开始
  y: -100,             // 从上方 100px 开始
  duration: 1.5,
  ease: "bounce.out"
});

// 3. gsap.fromTo() - 完全控制
gsap.fromTo(".card",
  { // 起始状态
    scale: 0,
    rotation: -180
  },
  { // 结束状态
    scale: 1,
    rotation: 0,
    duration: 1,
    ease: "back.out(1.7)"
  }
);

// 4. 多属性动画
gsap.to(".element", {
  x: 300,
  y: 200,
  scale: 1.5,
  rotation: 45,
  opacity: 0.8,
  backgroundColor: "#ff0000",
  duration: 2,
  ease: "power3.inOut"
});

// 5. 延迟和重复
gsap.to(".pulse", {
  scale: 1.2,
  opacity: 0.5,
  duration: 0.8,
  delay: 0.5,          // 延迟 0.5 秒
  repeat: -1,          // 无限重复
  yoyo: true,          // 往返动画
  ease: "power1.inOut"
});

// 6. Stagger - 交错动画
gsap.to(".item", {
  x: 100,
  opacity: 1,
  duration: 1,
  stagger: 0.2,        // 每个元素延迟 0.2 秒
  ease: "power2.out"
});

// 更复杂的 stagger 配置
gsap.to(".grid-item", {
  scale: 1,
  opacity: 1,
  duration: 0.5,
  stagger: {
    each: 0.1,         // 每个间隔 0.1 秒
    from: "center",    // 从中心开始
    grid: [5, 5],      // 5x5 网格
    ease: "power2.in"
  }
});

// 7. Tween 控制
const tween = gsap.to(".box", {
  x: 200,
  duration: 2,
  paused: true         // 创建但不播放
});

// 控制动画
tween.play();          // 播放
tween.pause();         // 暂停
tween.reverse();       // 反转
tween.restart();       // 重新开始
tween.kill();          // 终止

// 8. 回调函数
gsap.to(".element", {
  x: 300,
  duration: 2,
  onStart: () => console.log("开始"),
  onUpdate: () => console.log("更新中"),
  onComplete: () => console.log("完成"),
  onReverseComplete: () => console.log("反转完成")
});`,
        },
        {
          id: "timelines",
          name: "Timeline 时间轴",
          link: "https://greensock.com/docs/v3/GSAP/Timeline",
          description: "Timeline 用于创建复杂的动画序列，可以精确控制多个动画的执行时机和顺序。",
          content: `Timeline（时间轴）是 GSAP 中用于组织和控制多个动画的强大工具。它允许你创建复杂的动画序列，精确控制每个动画的开始时间和执行顺序。

**Timeline 的优势**：

1. **序列控制**：轻松创建按顺序执行的动画
2. **时间管理**：统一控制整个动画序列的播放、暂停、速度等
3. **位置参数**：精确控制动画的插入位置和时机
4. **可复用性**：可以像控制单个 tween 一样控制整个时间轴

**创建 Timeline**：
\`\`\`javascript
const tl = gsap.timeline();
\`\`\`

**Timeline 配置选项**：
- **paused**: 创建时暂停
- **repeat**: 重复次数（-1 为无限）
- **yoyo**: 往返播放
- **delay**: 整体延迟
- **onComplete**: 完成时回调

**位置参数（Position Parameter）**：
位置参数决定了动画在时间轴上的插入位置，这是 Timeline 最强大的特性之一。

- **默认**：添加到时间轴末尾
- **数字**："+=1" 或 "-=1"（相对于上一个动画的结束时间）
- **标签**："myLabel" 或 "myLabel+=0.5"
- **"<"**：与上一个动画同时开始
- **">"**：上一个动画结束后开始（默认）
- **"<50%"**：上一个动画进行到 50% 时开始

**Timeline 控制方法**：
- **play()**, **pause()**, **resume()**, **reverse()**
- **restart()**, **seek()**, **progress()**
- **timeScale()**: 调整播放速度`,
          codeExample: `// 1. 基础 Timeline - 顺序动画
const tl = gsap.timeline();

tl.to(".box1", { x: 200, duration: 1 })
  .to(".box2", { y: 200, duration: 1 })
  .to(".box3", { rotation: 360, duration: 1 });

// 2. Timeline 配置
const tl2 = gsap.timeline({
  repeat: 2,              // 重复 2 次
  yoyo: true,            // 往返动画
  delay: 0.5,            // 延迟 0.5 秒
  onComplete: () => console.log("完成！")
});

// 3. 位置参数 - 同时开始
const tl3 = gsap.timeline();
tl3.to(".circle", { x: 200, duration: 2 })
   .to(".square", { y: 200, duration: 2 }, "<")  // 与上一个同时开始
   .to(".triangle", { rotation: 360, duration: 2 }, "<");

// 4. 位置参数 - 提前开始
const tl4 = gsap.timeline();
tl4.to(".item1", { x: 100, duration: 1 })
   .to(".item2", { x: 100, duration: 1 }, "-=0.5")  // 提前 0.5 秒开始
   .to(".item3", { x: 100, duration: 1 }, "-=0.5");

// 5. 位置参数 - 百分比
const tl5 = gsap.timeline();
tl5.to(".hero", { scale: 1.5, duration: 2 })
   .to(".text", { opacity: 1, duration: 1 }, "<50%")  // 在 50% 时开始
   .to(".button", { y: 0, duration: 1 }, "<75%");     // 在 75% 时开始

// 6. 标签 - 命名时间点
const tl6 = gsap.timeline();
tl6.add("start")                                    // 添加标签
   .to(".logo", { scale: 1.2, duration: 1 })
   .add("middle")                                   // 中间标签
   .to(".nav", { x: 0, duration: 1 })
   .to(".content", { opacity: 1, duration: 1 }, "middle")  // 从标签开始
   .add("end");

// 7. 复杂的页面加载动画
const pageLoad = gsap.timeline({ paused: true });

pageLoad
  .from(".header", { y: -100, opacity: 0, duration: 0.8 })
  .from(".nav-item", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1
  }, "-=0.4")
  .from(".hero-title", {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)"
  }, "-=0.3")
  .from(".hero-text", { y: 30, opacity: 0, duration: 0.6 })
  .from(".cta-button", {
    scale: 0,
    rotation: 180,
    duration: 0.8,
    ease: "elastic.out(1, 0.5)"
  }, "-=0.2");

// 触发动画
pageLoad.play();

// 8. Timeline 控制
const controlTl = gsap.timeline();
controlTl.to(".box", { x: 300, duration: 3 });

// 控制方法
controlTl.pause();              // 暂停
controlTl.play();               // 播放
controlTl.reverse();            // 反转
controlTl.restart();            // 重启
controlTl.seek(1.5);           // 跳到 1.5 秒
controlTl.progress(0.5);       // 跳到 50% 进度
controlTl.timeScale(2);        // 2 倍速播放

// 9. 嵌套 Timeline
const masterTl = gsap.timeline();
const section1 = gsap.timeline();
const section2 = gsap.timeline();

section1
  .to(".s1-item1", { x: 100, duration: 1 })
  .to(".s1-item2", { y: 100, duration: 1 });

section2
  .to(".s2-item1", { rotation: 360, duration: 1 })
  .to(".s2-item2", { scale: 1.5, duration: 1 });

masterTl
  .add(section1)
  .add(section2, "-=0.5");  // section2 提前 0.5 秒开始

// 10. 可重用的动画函数
function createFadeIn(element, delay = 0) {
  return gsap.from(element, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: delay
  });
}

const tl10 = gsap.timeline();
tl10.add(createFadeIn(".section1"))
    .add(createFadeIn(".section2"), "-=0.4")
    .add(createFadeIn(".section3"), "-=0.4");`,
        },
        {
          id: "scrolltrigger",
          name: "ScrollTrigger 滚动触发器",
          link: "https://greensock.com/docs/v3/Plugins/ScrollTrigger",
          description: "ScrollTrigger 是 GSAP 最强大的插件之一，用于创建基于滚动位置的动画效果。",
          content: `ScrollTrigger 是 GSAP 的核心插件，它能够根据页面滚动位置触发和控制动画。这个插件让创建滚动驱动的动画变得异常简单和强大。

**核心概念**：

1. **触发器（Trigger）**：
   - 定义触发动画的元素
   - 当元素进入视口时触发动画

2. **触发点（Trigger Points）**：
   - **start**: 动画开始的位置
   - **end**: 动画结束的位置
   - 格式："触发器位置 视口位置"
   - 例如："top center" 表示元素顶部到达视口中心时触发

3. **Scrub（跟随滚动）**：
   - 动画进度与滚动位置同步
   - 可以是 true 或数字（平滑过渡时间）

4. **Pin（固定元素）**：
   - 在动画期间固定元素
   - 常用于视差效果和内容展示

5. **Markers（标记）**：
   - 开发时显示触发点
   - 帮助调试和理解触发时机

**常用配置选项**：
- **trigger**: 触发器元素
- **start/end**: 触发点位置
- **scrub**: 是否跟随滚动
- **pin**: 是否固定元素
- **snap**: 是否吸附到指定位置
- **toggleActions**: 进入/离开时的行为
- **anticipatePin**: 优化固定性能

**触发动作（toggleActions）**：
格式："onEnter onLeave onEnterBack onLeaveBack"
动作：play, pause, resume, reset, restart, complete, reverse, none`,
          codeExample: `// 首先注册插件
gsap.registerPlugin(ScrollTrigger);

// 1. 基础 ScrollTrigger
gsap.to(".fade-in", {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".fade-in",
    start: "top 80%",      // 元素顶部到达视口 80% 位置时触发
    end: "top 20%",        // 元素顶部到达视口 20% 位置时结束
    markers: true          // 显示标记（开发时使用）
  }
});

// 2. Scrub - 跟随滚动
gsap.to(".parallax", {
  y: 200,
  scrollTrigger: {
    trigger: ".parallax",
    start: "top bottom",
    end: "bottom top",
    scrub: true            // 动画与滚动同步
  }
});

// 3. Scrub with smoothing - 平滑跟随
gsap.to(".smooth-parallax", {
  y: 300,
  scrollTrigger: {
    trigger: ".smooth-parallax",
    start: "top bottom",
    end: "bottom top",
    scrub: 1               // 1 秒的平滑过渡
  }
});

// 4. Pin - 固定元素
gsap.to(".pinned-section", {
  scrollTrigger: {
    trigger: ".pinned-section",
    start: "top top",
    end: "+=500",          // 固定 500px 的滚动距离
    pin: true,             // 固定元素
    scrub: 1
  }
});

// 5. Toggle Actions - 控制动画行为
gsap.from(".reveal", {
  opacity: 0,
  x: -100,
  duration: 1,
  scrollTrigger: {
    trigger: ".reveal",
    start: "top 80%",
    end: "top 20%",
    toggleActions: "play none none reverse"
    // onEnter play, onLeave none, onEnterBack none, onLeaveBack reverse
  }
});

// 6. Batch - 批量处理多个元素
ScrollTrigger.batch(".batch-item", {
  onEnter: batch => gsap.to(batch, {
    opacity: 1,
    y: 0,
    stagger: 0.15,
    duration: 1
  }),
  start: "top 90%",
  once: true               // 只触发一次
});

// 7. Timeline with ScrollTrigger
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".animation-section",
    start: "top top",
    end: "+=3000",         // 3000px 的滚动距离
    scrub: 1,
    pin: true
  }
});

tl.to(".box1", { x: 400, rotation: 360 })
  .to(".box2", { y: 300, scale: 2 })
  .to(".box3", { opacity: 0, x: -400 });

// 8. 水平滚动
gsap.to(".horizontal-sections", {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".horizontal-sections").offsetWidth
  }
});

// 9. 视差效果
gsap.to(".background", {
  y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
  ease: "none",
  scrollTrigger: {
    start: 0,
    end: "max",
    invalidateOnRefresh: true,
    scrub: 0
  }
});

// 10. 进度条
gsap.to(".progress-bar", {
  scaleX: 1,
  ease: "none",
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 0.3
  }
});

// 11. Snap - 吸附效果
gsap.to(".snap-section", {
  scrollTrigger: {
    trigger: ".snap-container",
    start: "top top",
    end: "bottom bottom",
    snap: {
      snapTo: 1 / 3,       // 吸附到 33.33% 的倍数
      duration: 0.5,
      ease: "power2.inOut"
    }
  }
});

// 12. 文字逐行显示
gsap.from(".line", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".text-container",
    start: "top 70%",
    toggleActions: "play none none reverse"
  }
});

// 13. 图片序列动画
const canvas = document.querySelector("#image-sequence");
const context = canvas.getContext("2d");
const frameCount = 148;
const images = [];
const imageSeq = { frame: 0 };

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = \`./frames/frame\${i.toString().padStart(4, '0')}.jpg\`;
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    trigger: ".image-sequence-section",
    start: "top top",
    end: "+=3000",
    scrub: 0.5,
    pin: true
  },
  onUpdate: render
});

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[imageSeq.frame], 0, 0);
}

// 14. 刷新 ScrollTrigger（响应式设计）
ScrollTrigger.refresh();

// 15. 清除所有 ScrollTrigger
ScrollTrigger.getAll().forEach(trigger => trigger.kill());`,
        },
        {
          id: "easing",
          name: "Easing 缓动函数",
          link: "https://greensock.com/docs/v3/Eases",
          description: "缓动函数控制动画的运动曲线，让动画看起来更自然和有趣。",
          content: `Easing（缓动函数）定义了动画随时间变化的速率。合适的缓动函数能让动画看起来更自然、更有吸引力。GSAP 提供了丰富的内置缓动函数。

**为什么需要 Easing？**
- 线性动画（无缓动）看起来机械和不自然
- 真实世界中的运动都有加速和减速
- 不同的缓动给人不同的感觉和情感

**GSAP 内置缓动类型**：

1. **Power Eases**（最常用）：
   - power1, power2, power3, power4
   - 每个都有 .in, .out, .inOut 变体
   - 数字越大，曲线越陡峭

2. **Back**：
   - 超出目标值后再回来
   - 适合弹性、有趣的效果
   - back.in, back.out, back.inOut

3. **Elastic**：
   - 弹簧般的弹性效果
   - 适合俏皮、活泼的动画
   - elastic.in, elastic.out, elastic.inOut

4. **Bounce**：
   - 弹跳效果
   - 适合下落或碰撞动画
   - bounce.in, bounce.out, bounce.inOut

5. **Circ**：
   - 圆形曲线
   - 平滑的加速/减速
   - circ.in, circ.out, circ.inOut

6. **Expo**：
   - 指数曲线
   - 非常快的加速/减速
   - expo.in, expo.out, expo.inOut

7. **Sine**：
   - 正弦曲线
   - 最平滑的缓动
   - sine.in, sine.out, sine.inOut

**缓动变体**：
- **.in**: 开始慢，结束快
- **.out**: 开始快，结束慢（最常用）
- **.inOut**: 开始和结束都慢，中间快

**自定义缓动**：
- 使用 CustomEase 插件创建完全自定义的缓动曲线
- 可以从 SVG 路径导入缓动曲线`,
          codeExample: `// 1. Power Eases - 最常用的缓动
gsap.to(".box1", { x: 300, duration: 2, ease: "power1.out" });
gsap.to(".box2", { x: 300, duration: 2, ease: "power2.out" });
gsap.to(".box3", { x: 300, duration: 2, ease: "power3.out" });
gsap.to(".box4", { x: 300, duration: 2, ease: "power4.out" });

// 2. Back - 超出后回弹
gsap.to(".back-demo", {
  x: 300,
  duration: 1.5,
  ease: "back.out(1.7)"    // 参数控制超出的程度
});

// 入场动画常用
gsap.from(".card", {
  scale: 0,
  rotation: -180,
  duration: 1,
  ease: "back.out(1.7)"
});

// 3. Elastic - 弹性效果
gsap.to(".elastic-demo", {
  y: 200,
  duration: 2,
  ease: "elastic.out(1, 0.3)"  // (amplitude, period)
});

// 按钮弹跳效果
gsap.from(".button", {
  scale: 0,
  duration: 1.5,
  ease: "elastic.out(1, 0.5)"
});

// 4. Bounce - 弹跳效果
gsap.to(".ball", {
  y: 300,
  duration: 2,
  ease: "bounce.out"
});

// 下落动画
gsap.from(".drop-item", {
  y: -500,
  duration: 1.5,
  ease: "bounce.out",
  stagger: 0.1
});

// 5. 缓动对比
const eases = [
  "none",              // 线性
  "power1.out",
  "power2.out",
  "power3.out",
  "power4.out",
  "back.out(1.7)",
  "elastic.out(1, 0.3)",
  "bounce.out",
  "circ.out",
  "expo.out",
  "sine.out"
];

eases.forEach((ease, i) => {
  gsap.to(\`.box-\${i}\`, {
    x: 500,
    duration: 2,
    ease: ease,
    delay: i * 0.2
  });
});

// 6. In, Out, InOut 对比
// .in - 开始慢，结束快
gsap.to(".in-box", {
  x: 300,
  duration: 2,
  ease: "power2.in"
});

// .out - 开始快，结束慢（最自然）
gsap.to(".out-box", {
  x: 300,
  duration: 2,
  ease: "power2.out"
});

// .inOut - 开始和结束都慢
gsap.to(".inout-box", {
  x: 300,
  duration: 2,
  ease: "power2.inOut"
});

// 7. 自定义参数
// Back with custom overshoot
gsap.to(".custom-back", {
  rotation: 360,
  duration: 2,
  ease: "back.inOut(3)"    // 更大的超出值
});

// Elastic with custom parameters
gsap.to(".custom-elastic", {
  y: 200,
  duration: 2,
  ease: "elastic.out(2, 0.5)"  // 更大的振幅
});

// 8. 实际应用 - 页面元素入场
// 标题
gsap.from(".hero-title", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

// 卡片
gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 0.8,
  stagger: 0.1,
  ease: "back.out(1.4)"
});

// 按钮
gsap.from(".cta-button", {
  scale: 0,
  duration: 1.2,
  ease: "elastic.out(1, 0.5)",
  delay: 0.5
});

// 9. 菜单动画
const menuTl = gsap.timeline({ paused: true });
menuTl.to(".menu-overlay", {
  opacity: 1,
  duration: 0.3,
  ease: "none"
})
.from(".menu-item", {
  x: -100,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
  ease: "power2.out"
}, "-=0.1");

// 10. 悬停效果
const button = document.querySelector(".hover-button");

button.addEventListener("mouseenter", () => {
  gsap.to(button, {
    scale: 1.1,
    duration: 0.3,
    ease: "back.out(1.7)"
  });
});

button.addEventListener("mouseleave", () => {
  gsap.to(button, {
    scale: 1,
    duration: 0.3,
    ease: "power2.out"
  });
});

// 11. 加载动画
gsap.from(".loader-bar", {
  scaleX: 0,
  duration: 2,
  ease: "power3.inOut",
  transformOrigin: "left center"
});

// 12. CustomEase 示例（需要 CustomEase 插件）
// 注册插件
gsap.registerPlugin(CustomEase);

// 从 SVG 路径创建自定义缓动
CustomEase.create("customBounce", "M0,0 C0.14,0 0.242,0.438 0.272,0.561 0.313,0.728 0.354,0.963 0.362,1 0.37,0.985 0.414,0.873 0.455,0.811 0.51,0.726 0.573,0.753 0.586,0.762 0.662,0.812 0.719,0.981 0.726,1.001 0.733,0.98 0.76,0.887 0.811,0.811 0.864,0.733 0.936,0.792 0.946,0.8 1.002,0.847 1.01,0.992 1.013,1 ");

gsap.to(".custom-ease-box", {
  x: 500,
  duration: 2,
  ease: "customBounce"
});

// 13. 不同场景推荐的缓动
// 入场动画
gsap.from(".entrance", {
  opacity: 0,
  y: 50,
  ease: "power2.out"
});

// 退场动画
gsap.to(".exit", {
  opacity: 0,
  y: -50,
  ease: "power2.in"
});

// 弹性按钮
gsap.to(".elastic-button", {
  scale: 1.2,
  ease: "elastic.out(1, 0.3)"
});

// 平滑滚动
gsap.to(window, {
  scrollTo: ".section",
  ease: "power3.inOut"
});`,
        },
        {
          id: "plugins",
          name: "Plugins 插件系统",
          link: "https://greensock.com/docs/v3/Plugins",
          description: "GSAP 插件扩展了核心功能，提供了滚动、拖拽、路径动画等高级特性。",
          content: `GSAP 的插件系统大大扩展了其核心功能，让你能够轻松实现复杂的动画效果。插件需要单独注册后才能使用。

**核心插件**（免费）：

1. **ScrollTrigger**：
   - 基于滚动的动画触发
   - 最受欢迎的插件之一
   - 支持 pin、scrub、snap 等功能

2. **Draggable**：
   - 使元素可拖拽
   - 支持拖拽边界、惯性、碰撞检测
   - 可与其他动画结合

3. **EaselPlugin**：
   - 为 EaselJS/CreateJS 对象添加动画
   - 用于 Canvas 动画

4. **PixiPlugin**：
   - 为 Pixi.js 对象添加动画
   - WebGL 高性能动画

5. **MotionPathPlugin**：
   - 沿 SVG 路径运动
   - 支持自动旋转
   - 路径对齐和偏移

6. **TextPlugin**：
   - 文字内容的动画效果
   - 逐字显示文字

**高级插件**（需要 Club GreenSock 会员）：

1. **ScrollSmoother**：
   - 平滑滚动效果
   - 提升用户体验

2. **SplitText**：
   - 将文本分割为字符、单词或行
   - 用于文字动画效果

3. **MorphSVG**：
   - SVG 形状变换
   - 平滑的形状过渡

4. **DrawSVG**：
   - SVG 路径描边动画
   - 绘制效果

**注册和使用插件**：
使用插件前必须先注册：
\`\`\`javascript
gsap.registerPlugin(ScrollTrigger, Draggable);
\`\`\``,
          codeExample: `// 1. ScrollTrigger 插件（已在前面详细介绍）
gsap.registerPlugin(ScrollTrigger);

gsap.to(".scroll-element", {
  x: 400,
  scrollTrigger: {
    trigger: ".scroll-element",
    start: "top 80%",
    end: "top 20%",
    scrub: true
  }
});

// 2. Draggable 插件
gsap.registerPlugin(Draggable);

// 基础拖拽
Draggable.create(".draggable", {
  type: "x,y",           // 可拖拽方向
  bounds: ".container",  // 拖拽边界
  inertia: true,        // 惯性效果
  onDrag: function() {
    console.log("拖拽中", this.x, this.y);
  },
  onDragEnd: function() {
    console.log("拖拽结束");
  }
});

// 只允许水平拖拽
Draggable.create(".horizontal-drag", {
  type: "x",
  bounds: { minX: 0, maxX: 500 }
});

// 只允许垂直拖拽
Draggable.create(".vertical-drag", {
  type: "y",
  bounds: { minY: 0, maxY: 300 }
});

// 旋转拖拽
Draggable.create(".rotation-drag", {
  type: "rotation",
  inertia: true
});

// 3. MotionPath 插件
gsap.registerPlugin(MotionPathPlugin);

// 沿 SVG 路径运动
gsap.to(".path-follower", {
  duration: 5,
  repeat: -1,
  ease: "none",
  motionPath: {
    path: "#motion-path",      // SVG 路径选择器
    align: "#motion-path",     // 对齐到路径
    autoRotate: true,          // 自动旋转面向运动方向
    alignOrigin: [0.5, 0.5]    // 对齐原点
  }
});

// 使用数组定义路径
gsap.to(".custom-path", {
  duration: 3,
  motionPath: {
    path: [
      { x: 0, y: 0 },
      { x: 100, y: 50 },
      { x: 200, y: 0 },
      { x: 300, y: 100 }
    ],
    curviness: 1.5,           // 曲线程度
    autoRotate: 90            // 旋转偏移
  }
});

// 4. Text 插件
gsap.registerPlugin(TextPlugin);

// 文字逐字显示
gsap.to(".text-content", {
  duration: 3,
  text: {
    value: "这段文字将逐字显示出来！",
    delimiter: ""            // 空字符串表示逐字
  },
  ease: "none"
});

// 逐词显示
gsap.to(".text-words", {
  duration: 3,
  text: {
    value: "每个 单词 都会 依次 显示",
    delimiter: " "           // 空格作为分隔符
  },
  ease: "none"
});

// 5. EaselPlugin - Canvas 动画
gsap.registerPlugin(EaselPlugin);

const stage = new createjs.Stage("canvas");
const circle = new createjs.Shape();
circle.graphics.beginFill("red").drawCircle(0, 0, 50);
stage.addChild(circle);

gsap.to(circle, {
  duration: 2,
  x: 400,
  y: 300,
  rotation: 360,
  ease: "power2.inOut"
});

// 6. PixiPlugin - Pixi.js 动画
gsap.registerPlugin(PixiPlugin);

const sprite = new PIXI.Sprite.from("image.png");

gsap.to(sprite, {
  duration: 2,
  pixi: {
    x: 400,
    y: 300,
    rotation: 360,
    alpha: 0.5,
    tint: 0xff0000
  }
});

// 7. 综合示例 - 拖拽 + MotionPath
gsap.registerPlugin(Draggable, MotionPathPlugin);

const draggableElement = document.querySelector(".drag-to-path");

// 拖拽结束后沿路径返回
Draggable.create(draggableElement, {
  type: "x,y",
  onDragEnd: function() {
    gsap.to(draggableElement, {
      duration: 2,
      motionPath: {
        path: "#return-path",
        align: "#return-path",
        autoRotate: true
      },
      ease: "power2.inOut"
    });
  }
});

// 8. ScrollTrigger + MotionPath
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

gsap.to(".scroll-path-element", {
  motionPath: {
    path: "#scroll-path",
    align: "#scroll-path",
    autoRotate: true
  },
  scrollTrigger: {
    trigger: ".path-section",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    pin: true
  }
});

// 9. 多个插件组合 - 交互式卡片
gsap.registerPlugin(Draggable, ScrollTrigger);

const cards = gsap.utils.toArray(".interactive-card");

// ScrollTrigger 入场
cards.forEach(card => {
  gsap.from(card, {
    y: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      end: "top 50%",
      scrub: 1
    }
  });

  // 拖拽功能
  Draggable.create(card, {
    type: "x,y",
    bounds: ".cards-container",
    inertia: true,
    onPress: function() {
      gsap.to(card, {
        scale: 1.1,
        duration: 0.2,
        ease: "back.out(1.7)"
      });
    },
    onRelease: function() {
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  });
});

// 10. 文字动画序列
gsap.registerPlugin(TextPlugin);

const textTl = gsap.timeline();

textTl
  .to(".title", {
    duration: 2,
    text: "欢迎来到 GSAP 世界！",
    ease: "none"
  })
  .to(".subtitle", {
    duration: 2,
    text: "强大的动画库，无限的可能性。",
    ease: "none"
  }, "+=0.5")
  .from(".description", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out"
  }, "-=0.5");

// 11. 实战：带拖拽的进度条
gsap.registerPlugin(Draggable);

const progressBar = document.querySelector(".progress-bar");
const progressFill = document.querySelector(".progress-fill");

Draggable.create(progressBar, {
  type: "x",
  bounds: ".progress-container",
  onDrag: function() {
    const progress = this.x / this.maxX;
    gsap.to(progressFill, {
      scaleX: progress,
      duration: 0.1
    });
  }
});

// 12. 实战：图片序列 + 拖拽控制
gsap.registerPlugin(Draggable);

const imageSequence = { frame: 0 };
const totalFrames = 100;

Draggable.create(".sequence-control", {
  type: "x",
  bounds: { minX: 0, maxX: 500 },
  onDrag: function() {
    const progress = this.x / this.maxX;
    imageSequence.frame = Math.floor(progress * (totalFrames - 1));
    renderFrame(imageSequence.frame);
  }
});

function renderFrame(frameNumber) {
  // 渲染对应帧的图片
  console.log("Rendering frame:", frameNumber);
}`,
        },
      ],
    },
    {
      title: "实战案例",
      items: [
        {
          id: "gsap-examples",
          name: "GSAP 实战案例",
          link: "https://greensock.com/showcase/",
          description: "通过实际案例深入学习 GSAP 动画、时间轴和 ScrollTrigger 的应用技巧。",
          content: "这些案例展示了 GSAP 在实际开发中的应用，包括滚动动画、时间轴序列、交互效果等核心场景。每个案例都包含完整的代码实现和详细说明，帮助你快速掌握 GSAP 的精髓。"
        },
      ],
    },
  ],
};
