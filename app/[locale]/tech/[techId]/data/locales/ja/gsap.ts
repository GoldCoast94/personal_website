import { TechDetail } from '../../../types';

export const gsapDataJa: TechDetail = {
  name: "GSAP",
  description: "プロフェッショナルなJavaScriptアニメーションライブラリ",
  icon: "/images/gsap-logo.png",
  color: "from-indigo-500 to-violet-500",
  officialLink: "https://greensock.com/gsap/",
  content: [
    {
      title: "GSAPコアコンセプト",
      items: [
        {
          id: "tweens",
          name: "Tweens トゥイーン",
          link: "https://greensock.com/docs/v3/GSAP/gsap.to()",
          description: "TweenはGSAPのコアアニメーションメソッドで、指定された時間内にオブジェクトのプロパティを変更します。",
          content: `Tweens（トゥイーン）はGSAPで最も基本的かつ最もよく使用される機能です。要素のプロパティをある値から別の値へスムーズに遷移させ、流れるようなアニメーション効果を作成できます。

**3つのコアメソッド**：

1. **gsap.to()**：現在の状態からターゲット状態へアニメーション
   - 最もよく使用されるメソッド
   - ターゲット状態を指定し、GSAPが開始状態を自動計算

2. **gsap.from()**：指定された状態から現在の状態へアニメーション
   - 要素のエントランスアニメーションに使用
   - 開始状態を指定し、要素の現在の状態へアニメーション

3. **gsap.fromTo()**：開始と終了の状態を完全にコントロール
   - 開始と終了の両方の状態を指定
   - 最大の制御柔軟性を提供

**一般的なプロパティ**：
- **位置**：x, y（transformベース）
- **回転**：rotation, rotationX, rotationY
- **スケール**：scale, scaleX, scaleY
- **不透明度**：opacity
- **期間**：duration（秒単位の持続時間）
- **遅延**：delay（秒単位の遅延時間）
- **繰り返し**：repeat（繰り返し回数、-1で無限）, repeatDelay
- **往復**：yoyo（アニメーションを往復させるか）

**Tween制御メソッド**：
- **play()**：アニメーションを再生
- **pause()**：アニメーションを一時停止
- **reverse()**：逆再生
- **restart()**：再開
- **kill()**：アニメーションを終了`,
          codeExample: `// 1. gsap.to() - 最もよく使用されるメソッド
gsap.to(".box", {
  x: 200,              // 右に200px移動
  y: 100,              // 下に100px移動
  rotation: 360,       // 360度回転
  duration: 2,         // 2秒間の持続
  ease: "power2.out"   // イージング関数
});

// 2. gsap.from() - 指定された状態から現在の状態へ
gsap.from(".hero", {
  opacity: 0,          // 透明から始まる
  y: -100,             // 上方100pxから始まる
  duration: 1.5,
  ease: "bounce.out"
});

// 3. gsap.fromTo() - 完全な制御
gsap.fromTo(".card",
  { // 開始状態
    scale: 0,
    rotation: -180
  },
  { // 終了状態
    scale: 1,
    rotation: 0,
    duration: 1,
    ease: "back.out(1.7)"
  }
);

// 4. 複数プロパティアニメーション
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

// 5. 遅延と繰り返し
gsap.to(".pulse", {
  scale: 1.2,
  opacity: 0.5,
  duration: 0.8,
  delay: 0.5,          // 0.5秒遅延
  repeat: -1,          // 無限繰り返し
  yoyo: true,          // 往復アニメーション
  ease: "power1.inOut"
});

// 6. Stagger - 段階的アニメーション
gsap.to(".item", {
  x: 100,
  opacity: 1,
  duration: 1,
  stagger: 0.2,        // 各要素が0.2秒遅延
  ease: "power2.out"
});

// より複雑なstagger設定
gsap.to(".grid-item", {
  scale: 1,
  opacity: 1,
  duration: 0.5,
  stagger: {
    each: 0.1,         // 各間隔0.1秒
    from: "center",    // 中心から開始
    grid: [5, 5],      // 5x5グリッド
    ease: "power2.in"
  }
});

// 7. Tween制御
const tween = gsap.to(".box", {
  x: 200,
  duration: 2,
  paused: true         // 作成するが再生しない
});

// アニメーション制御
tween.play();          // 再生
tween.pause();         // 一時停止
tween.reverse();       // 逆再生
tween.restart();       // 再開
tween.kill();          // 終了

// 8. コールバック関数
gsap.to(".element", {
  x: 300,
  duration: 2,
  onStart: () => console.log("開始"),
  onUpdate: () => console.log("更新中"),
  onComplete: () => console.log("完了"),
  onReverseComplete: () => console.log("逆再生完了")
});`,
        },
        {
          id: "timelines",
          name: "Timeline タイムライン",
          link: "https://greensock.com/docs/v3/GSAP/Timeline",
          description: "Timelineは複雑なアニメーションシーケンスを作成し、タイミングと順序を正確に制御するために使用されます。",
          content: `Timeline（タイムライン）は、複数のアニメーションを整理および制御するためのGSAPの強力なツールです。複雑なアニメーションシーケンスを作成し、各アニメーションがいつ開始および実行されるかを正確に制御できます。

**Timelineの利点**：

1. **シーケンス制御**：順番に実行されるアニメーションを簡単に作成
2. **時間管理**：アニメーションシーケンス全体の再生、一時停止、速度を統一制御
3. **位置パラメータ**：アニメーションの挿入位置とタイミングを正確に制御
4. **再利用性**：単一のトゥイーンのようにタイムライン全体を制御

**Timelineの作成**：
\`\`\`javascript
const tl = gsap.timeline();
\`\`\`

**Timeline設定オプション**：
- **paused**: 作成時に一時停止
- **repeat**: 繰り返し回数（-1で無限）
- **yoyo**: 逆再生
- **delay**: 全体の遅延
- **onComplete**: 完了時のコールバック

**位置パラメータ（Position Parameter）**：
位置パラメータは、タイムライン上のアニメーションの挿入位置を決定します。これはTimelineの最も強力な機能の1つです。

- **デフォルト**：タイムラインの最後に追加
- **数値**："+=1" または "-=1"（前のアニメーションの終了時間に対する相対値）
- **ラベル**："myLabel" または "myLabel+=0.5"
- **"<"**：前のアニメーションと同時に開始
- **">"**：前のアニメーション終了後に開始（デフォルト）
- **"<50%"**：前のアニメーションが50%完了時に開始

**Timeline制御メソッド**：
- **play()**, **pause()**, **resume()**, **reverse()**
- **restart()**, **seek()**, **progress()**
- **timeScale()**: 再生速度を調整`,
          codeExample: `// 1. 基本Timeline - 順次アニメーション
const tl = gsap.timeline();

tl.to(".box1", { x: 200, duration: 1 })
  .to(".box2", { y: 200, duration: 1 })
  .to(".box3", { rotation: 360, duration: 1 });

// 2. Timeline設定
const tl2 = gsap.timeline({
  repeat: 2,              // 2回繰り返し
  yoyo: true,            // 往復アニメーション
  delay: 0.5,            // 0.5秒遅延
  onComplete: () => console.log("完了！")
});

// 3. 位置パラメータ - 同時開始
const tl3 = gsap.timeline();
tl3.to(".circle", { x: 200, duration: 2 })
   .to(".square", { y: 200, duration: 2 }, "<")  // 前と同時に開始
   .to(".triangle", { rotation: 360, duration: 2 }, "<");

// 4. 位置パラメータ - 早期開始
const tl4 = gsap.timeline();
tl4.to(".item1", { x: 100, duration: 1 })
   .to(".item2", { x: 100, duration: 1 }, "-=0.5")  // 0.5秒早く開始
   .to(".item3", { x: 100, duration: 1 }, "-=0.5");

// 5. 位置パラメータ - パーセンテージ
const tl5 = gsap.timeline();
tl5.to(".hero", { scale: 1.5, duration: 2 })
   .to(".text", { opacity: 1, duration: 1 }, "<50%")  // 50%時に開始
   .to(".button", { y: 0, duration: 1 }, "<75%");     // 75%時に開始

// 6. ラベル - 名前付き時点
const tl6 = gsap.timeline();
tl6.add("start")                                    // ラベル追加
   .to(".logo", { scale: 1.2, duration: 1 })
   .add("middle")                                   // 中間ラベル
   .to(".nav", { x: 0, duration: 1 })
   .to(".content", { opacity: 1, duration: 1 }, "middle")  // ラベルから開始
   .add("end");

// 7. 複雑なページロードアニメーション
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

// アニメーションをトリガー
pageLoad.play();

// 8. Timeline制御
const controlTl = gsap.timeline();
controlTl.to(".box", { x: 300, duration: 3 });

// 制御メソッド
controlTl.pause();              // 一時停止
controlTl.play();               // 再生
controlTl.reverse();            // 逆再生
controlTl.restart();            // 再開
controlTl.seek(1.5);           // 1.5秒にジャンプ
controlTl.progress(0.5);       // 50%進行にジャンプ
controlTl.timeScale(2);        // 2倍速再生

// 9. ネストされたTimeline
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
  .add(section2, "-=0.5");  // section2は0.5秒早く開始

// 10. 再利用可能なアニメーション関数
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
          name: "ScrollTrigger スクロールトリガー",
          link: "https://greensock.com/docs/v3/Plugins/ScrollTrigger",
          description: "ScrollTriggerはGSAPの最も強力なプラグインの1つで、スクロールベースのアニメーション効果を作成します。",
          content: `ScrollTriggerはGSAPのコアプラグインで、ページのスクロール位置に基づいてアニメーションをトリガーおよび制御します。このプラグインにより、スクロール駆動型アニメーションの作成が非常にシンプルかつ強力になります。

**コアコンセプト**：

1. **トリガー（Trigger）**：
   - アニメーションをトリガーする要素を定義
   - 要素がビューポートに入るときにアニメーションをトリガー

2. **トリガーポイント（Trigger Points）**：
   - **start**: アニメーションが始まる位置
   - **end**: アニメーションが終わる位置
   - フォーマット："トリガー位置 ビューポート位置"
   - 例："top center"は要素の上部がビューポートの中心に達したときにトリガー

3. **Scrub（スクロールに追従）**：
   - アニメーションの進行がスクロール位置と同期
   - trueまたは数値（スムーズ遷移時間）

4. **Pin（要素の固定）**：
   - アニメーション中に要素を固定
   - パララックス効果やコンテンツ表示によく使用

5. **Markers（マーカー）**：
   - 開発時にトリガーポイントを表示
   - デバッグとトリガータイミングの理解に役立つ

**一般的な設定オプション**：
- **trigger**: トリガー要素
- **start/end**: トリガーポイント位置
- **scrub**: スクロールに追従するか
- **pin**: 要素を固定するか
- **snap**: 指定位置にスナップするか
- **toggleActions**: 入退時の動作
- **anticipatePin**: 固定のパフォーマンス最適化

**トリガーアクション（toggleActions）**：
フォーマット："onEnter onLeave onEnterBack onLeaveBack"
アクション：play, pause, resume, reset, restart, complete, reverse, none`,
          codeExample: `// まずプラグインを登録
gsap.registerPlugin(ScrollTrigger);

// 1. 基本ScrollTrigger
gsap.to(".fade-in", {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".fade-in",
    start: "top 80%",      // 要素の上部がビューポートの80%に達したときにトリガー
    end: "top 20%",        // 要素の上部がビューポートの20%に達したときに終了
    markers: true          // マーカーを表示（開発用）
  }
});

// 2. Scrub - スクロールに追従
gsap.to(".parallax", {
  y: 200,
  scrollTrigger: {
    trigger: ".parallax",
    start: "top bottom",
    end: "bottom top",
    scrub: true            // アニメーションがスクロールと同期
  }
});

// 3. Scrub with smoothing - スムーズに追従
gsap.to(".smooth-parallax", {
  y: 300,
  scrollTrigger: {
    trigger: ".smooth-parallax",
    start: "top bottom",
    end: "bottom top",
    scrub: 1               // 1秒のスムーズ遷移
  }
});

// 4. Pin - 要素を固定
gsap.to(".pinned-section", {
  scrollTrigger: {
    trigger: ".pinned-section",
    start: "top top",
    end: "+=500",          // 500pxのスクロール距離で固定
    pin: true,             // 要素を固定
    scrub: 1
  }
});

// 5. Toggle Actions - アニメーション動作を制御
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

// 6. Batch - 複数要素をバッチ処理
ScrollTrigger.batch(".batch-item", {
  onEnter: batch => gsap.to(batch, {
    opacity: 1,
    y: 0,
    stagger: 0.15,
    duration: 1
  }),
  start: "top 90%",
  once: true               // 一度だけトリガー
});

// 7. Timeline with ScrollTrigger
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".animation-section",
    start: "top top",
    end: "+=3000",         // 3000pxのスクロール距離
    scrub: 1,
    pin: true
  }
});

tl.to(".box1", { x: 400, rotation: 360 })
  .to(".box2", { y: 300, scale: 2 })
  .to(".box3", { opacity: 0, x: -400 });

// 8. 横スクロール
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

// 9. パララックス効果
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

// 10. プログレスバー
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

// 11. Snap - スナップ効果
gsap.to(".snap-section", {
  scrollTrigger: {
    trigger: ".snap-container",
    start: "top top",
    end: "bottom bottom",
    snap: {
      snapTo: 1 / 3,       // 33.33%の倍数にスナップ
      duration: 0.5,
      ease: "power2.inOut"
    }
  }
});

// 12. テキスト行ごとに表示
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

// 13. 画像シーケンスアニメーション
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

// 14. ScrollTriggerをリフレッシュ（レスポンシブデザイン）
ScrollTrigger.refresh();

// 15. すべてのScrollTriggerをクリア
ScrollTrigger.getAll().forEach(trigger => trigger.kill());`,
        },
        {
          id: "easing",
          name: "Easing イージング関数",
          link: "https://greensock.com/docs/v3/Eases",
          description: "イージング関数はアニメーションの動きの曲線を制御し、アニメーションをより自然で面白くします。",
          content: `Easing（イージング関数）は、アニメーションが時間とともにどのように変化するかを定義します。適切なイージング関数により、アニメーションがより自然で魅力的に見えます。GSAPは豊富な組み込みイージング関数を提供しています。

**なぜEasingが必要なのか？**
- 線形アニメーション（イージングなし）は機械的で不自然に見える
- 現実世界の動きには必ず加速と減速がある
- 異なるイージングは異なる感覚と感情を与える

**GSAPの組み込みイージングタイプ**：

1. **Power Eases**（最も一般的）：
   - power1, power2, power3, power4
   - それぞれに .in, .out, .inOut バリアントがある
   - 数字が大きいほど曲線が急になる

2. **Back**：
   - ターゲット値を超えてから戻る
   - 弾力的で楽しい効果に適している
   - back.in, back.out, back.inOut

3. **Elastic**：
   - バネのような弾性効果
   - 遊び心のある活発なアニメーションに適している
   - elastic.in, elastic.out, elastic.inOut

4. **Bounce**：
   - バウンス効果
   - 落下や衝突のアニメーションに適している
   - bounce.in, bounce.out, bounce.inOut

5. **Circ**：
   - 円形曲線
   - スムーズな加速/減速
   - circ.in, circ.out, circ.inOut

6. **Expo**：
   - 指数曲線
   - 非常に速い加速/減速
   - expo.in, expo.out, expo.inOut

7. **Sine**：
   - 正弦曲線
   - 最もスムーズなイージング
   - sine.in, sine.out, sine.inOut

**イージングバリアント**：
- **.in**: 開始時は遅く、終了時は速い
- **.out**: 開始時は速く、終了時は遅い（最も一般的）
- **.inOut**: 開始と終了は遅く、中間は速い

**カスタムイージング**：
- CustomEaseプラグインを使用して完全にカスタムなイージング曲線を作成
- SVGパスからイージング曲線をインポート`,
          codeExample: `// 1. Power Eases - 最もよく使用される
gsap.to(".box1", { x: 300, duration: 2, ease: "power1.out" });
gsap.to(".box2", { x: 300, duration: 2, ease: "power2.out" });
gsap.to(".box3", { x: 300, duration: 2, ease: "power3.out" });
gsap.to(".box4", { x: 300, duration: 2, ease: "power4.out" });

// 2. Back - オーバーシュートして戻る
gsap.to(".back-demo", {
  x: 300,
  duration: 1.5,
  ease: "back.out(1.7)"    // パラメータはオーバーシュート量を制御
});

// エントランスアニメーションによく使用
gsap.from(".card", {
  scale: 0,
  rotation: -180,
  duration: 1,
  ease: "back.out(1.7)"
});

// 3. Elastic - 弾性効果
gsap.to(".elastic-demo", {
  y: 200,
  duration: 2,
  ease: "elastic.out(1, 0.3)"  // (amplitude, period)
});

// ボタンバウンス効果
gsap.from(".button", {
  scale: 0,
  duration: 1.5,
  ease: "elastic.out(1, 0.5)"
});

// 4. Bounce - バウンス効果
gsap.to(".ball", {
  y: 300,
  duration: 2,
  ease: "bounce.out"
});

// ドロップアニメーション
gsap.from(".drop-item", {
  y: -500,
  duration: 1.5,
  ease: "bounce.out",
  stagger: 0.1
});

// 5. イージング比較
const eases = [
  "none",              // 線形
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

// 6. In, Out, InOut 比較
// .in - 開始時は遅く、終了時は速い
gsap.to(".in-box", {
  x: 300,
  duration: 2,
  ease: "power2.in"
});

// .out - 開始時は速く、終了時は遅い（最も自然）
gsap.to(".out-box", {
  x: 300,
  duration: 2,
  ease: "power2.out"
});

// .inOut - 開始と終了は遅い
gsap.to(".inout-box", {
  x: 300,
  duration: 2,
  ease: "power2.inOut"
});

// 7. カスタムパラメータ
// カスタムオーバーシュート付きBack
gsap.to(".custom-back", {
  rotation: 360,
  duration: 2,
  ease: "back.inOut(3)"    // より大きなオーバーシュート値
});

// カスタムパラメータ付きElastic
gsap.to(".custom-elastic", {
  y: 200,
  duration: 2,
  ease: "elastic.out(2, 0.5)"  // より大きな振幅
});

// 8. 実際の応用 - ページ要素のエントランス
// タイトル
gsap.from(".hero-title", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

// カード
gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 0.8,
  stagger: 0.1,
  ease: "back.out(1.4)"
});

// ボタン
gsap.from(".cta-button", {
  scale: 0,
  duration: 1.2,
  ease: "elastic.out(1, 0.5)",
  delay: 0.5
});

// 9. メニューアニメーション
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

// 10. ホバー効果
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

// 11. ローディングアニメーション
gsap.from(".loader-bar", {
  scaleX: 0,
  duration: 2,
  ease: "power3.inOut",
  transformOrigin: "left center"
});

// 12. CustomEaseの例（CustomEaseプラグインが必要）
// プラグインを登録
gsap.registerPlugin(CustomEase);

// SVGパスからカスタムイージングを作成
CustomEase.create("customBounce", "M0,0 C0.14,0 0.242,0.438 0.272,0.561 0.313,0.728 0.354,0.963 0.362,1 0.37,0.985 0.414,0.873 0.455,0.811 0.51,0.726 0.573,0.753 0.586,0.762 0.662,0.812 0.719,0.981 0.726,1.001 0.733,0.98 0.76,0.887 0.811,0.811 0.864,0.733 0.936,0.792 0.946,0.8 1.002,0.847 1.01,0.992 1.013,1 ");

gsap.to(".custom-ease-box", {
  x: 500,
  duration: 2,
  ease: "customBounce"
});

// 13. 異なるシナリオに推奨されるイージング
// エントランスアニメーション
gsap.from(".entrance", {
  opacity: 0,
  y: 50,
  ease: "power2.out"
});

// 退出アニメーション
gsap.to(".exit", {
  opacity: 0,
  y: -50,
  ease: "power2.in"
});

// 弾性ボタン
gsap.to(".elastic-button", {
  scale: 1.2,
  ease: "elastic.out(1, 0.3)"
});

// スムーズスクロール
gsap.to(window, {
  scrollTo: ".section",
  ease: "power3.inOut"
});`,
        },
        {
          id: "plugins",
          name: "Plugins プラグインシステム",
          link: "https://greensock.com/docs/v3/Plugins",
          description: "GSAPプラグインはコア機能を拡張し、スクロール、ドラッグ、パスアニメーションなどの高度な機能を提供します。",
          content: `GSAPのプラグインシステムは、そのコア機能を大幅に拡張し、複雑なアニメーション効果を簡単に実装できるようにします。プラグインは使用前に個別に登録する必要があります。

**コアプラグイン**（無料）：

1. **ScrollTrigger**：
   - スクロールベースのアニメーショントリガー
   - 最も人気のあるプラグインの1つ
   - pin、scrub、snap機能をサポート

2. **Draggable**：
   - 要素をドラッグ可能にする
   - ドラッグ境界、慣性、衝突検出をサポート
   - 他のアニメーションと組み合わせ可能

3. **EaselPlugin**：
   - EaselJS/CreateJSオブジェクトにアニメーションを追加
   - Canvasアニメーションに使用

4. **PixiPlugin**：
   - Pixi.jsオブジェクトにアニメーションを追加
   - WebGL高性能アニメーション

5. **MotionPathPlugin**：
   - SVGパスに沿った動き
   - 自動回転をサポート
   - パスアライメントとオフセット

6. **TextPlugin**：
   - テキストコンテンツのアニメーション効果
   - 文字ごとのテキスト表示

**プレミアムプラグイン**（Club GreenSockメンバーシップが必要）：

1. **ScrollSmoother**：
   - スムーズスクロール効果
   - ユーザー体験を向上

2. **SplitText**：
   - テキストを文字、単語、または行に分割
   - テキストアニメーション効果に使用

3. **MorphSVG**：
   - SVG形状のモーフィング
   - スムーズな形状遷移

4. **DrawSVG**：
   - SVGパスのストロークアニメーション
   - 描画効果

**プラグインの登録と使用**：
使用前にプラグインを登録する必要があります：
\`\`\`javascript
gsap.registerPlugin(ScrollTrigger, Draggable);
\`\`\``,
          codeExample: `// 1. ScrollTriggerプラグイン（前述で詳細説明）
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

// 2. Draggableプラグイン
gsap.registerPlugin(Draggable);

// 基本ドラッグ
Draggable.create(".draggable", {
  type: "x,y",           // ドラッグ可能な方向
  bounds: ".container",  // ドラッグ境界
  inertia: true,        // 慣性効果
  onDrag: function() {
    console.log("ドラッグ中", this.x, this.y);
  },
  onDragEnd: function() {
    console.log("ドラッグ終了");
  }
});

// 水平ドラッグのみ
Draggable.create(".horizontal-drag", {
  type: "x",
  bounds: { minX: 0, maxX: 500 }
});

// 垂直ドラッグのみ
Draggable.create(".vertical-drag", {
  type: "y",
  bounds: { minY: 0, maxY: 300 }
});

// 回転ドラッグ
Draggable.create(".rotation-drag", {
  type: "rotation",
  inertia: true
});

// 3. MotionPathプラグイン
gsap.registerPlugin(MotionPathPlugin);

// SVGパスに沿った動き
gsap.to(".path-follower", {
  duration: 5,
  repeat: -1,
  ease: "none",
  motionPath: {
    path: "#motion-path",      // SVGパスセレクター
    align: "#motion-path",     // パスに整列
    autoRotate: true,          // 動きの方向に自動回転
    alignOrigin: [0.5, 0.5]    // 整列原点
  }
});

// 配列でパスを定義
gsap.to(".custom-path", {
  duration: 3,
  motionPath: {
    path: [
      { x: 0, y: 0 },
      { x: 100, y: 50 },
      { x: 200, y: 0 },
      { x: 300, y: 100 }
    ],
    curviness: 1.5,           // 曲線の度合い
    autoRotate: 90            // 回転オフセット
  }
});

// 4. Textプラグイン
gsap.registerPlugin(TextPlugin);

// 文字ごとの表示
gsap.to(".text-content", {
  duration: 3,
  text: {
    value: "このテキストは文字ごとに表示されます！",
    delimiter: ""            // 空文字列で文字ごと
  },
  ease: "none"
});

// 単語ごとの表示
gsap.to(".text-words", {
  duration: 3,
  text: {
    value: "各 単語が 順番に 表示されます",
    delimiter: " "           // スペースを区切り文字として
  },
  ease: "none"
});

// 5. EaselPlugin - Canvasアニメーション
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

// 6. PixiPlugin - Pixi.jsアニメーション
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

// 7. 複合例 - ドラッグ + MotionPath
gsap.registerPlugin(Draggable, MotionPathPlugin);

const draggableElement = document.querySelector(".drag-to-path");

// ドラッグ終了後にパスに沿って戻る
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

// 9. 複数プラグイン組み合わせ - インタラクティブカード
gsap.registerPlugin(Draggable, ScrollTrigger);

const cards = gsap.utils.toArray(".interactive-card");

// ScrollTriggerエントランス
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

  // ドラッグ機能
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

// 10. テキストアニメーションシーケンス
gsap.registerPlugin(TextPlugin);

const textTl = gsap.timeline();

textTl
  .to(".title", {
    duration: 2,
    text: "GSAPの世界へようこそ！",
    ease: "none"
  })
  .to(".subtitle", {
    duration: 2,
    text: "強力なアニメーションライブラリ、無限の可能性。",
    ease: "none"
  }, "+=0.5")
  .from(".description", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out"
  }, "-=0.5");

// 11. 実例：ドラッグ可能なプログレスバー
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

// 12. 実例：画像シーケンス + ドラッグコントロール
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
  // 対応するフレームの画像をレンダリング
  console.log("Rendering frame:", frameNumber);
}`,
        },
      ],
    },
    {
      title: "実践例",
      items: [
        {
          id: "gsap-examples",
          name: "GSAP 実践例",
          link: "https://greensock.com/showcase/",
          description: "実際の例を通じてGSAPアニメーション、タイムライン、ScrollTriggerを学びます。",
          content: "これらの例は、スクロールアニメーション、タイムラインシーケンス、インタラクティブ効果などのコアシナリオを含む、実際の開発におけるGSAPの応用を示しています。各例には完全なコード実装と詳細な説明が含まれており、GSAPの本質を素早く習得するのに役立ちます。"
        },
      ],
    },
  ],
};
