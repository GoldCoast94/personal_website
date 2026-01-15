import { TechDetail } from '../../../types';

export const cssDataJa: TechDetail = {
  name: "CSS",
  description: "Webスタイルをデザインするためのカスケーディングスタイルシート",
  icon: "/images/css-logo.svg",
  color: "from-pink-500 to-purple-500",
  officialLink: "https://developer.mozilla.org/ja/docs/Web/CSS",
  content: [
    {
      title: "CSS基礎",
      items: [
        {
          id: "selectors",
          name: "セレクター",
          link: "https://developer.mozilla.org/ja/docs/Web/CSS/CSS_selectors",
          description: "CSSセレクターは、スタイルを追加する必要があるHTML要素を選択するために使用されます。",
          content: "セレクターには、要素セレクター、クラスセレクター、IDセレクター、属性セレクターなどが含まれます。"
        },
        {
          id: "flexbox",
          name: "Flexbox",
          link: "https://developer.mozilla.org/ja/docs/Web/CSS/CSS_flexible_box_layout",
          description: "Flexboxは、コンテナ内でスペースを分配し要素を配置するための1次元レイアウトモデルです。",
          content: `Flexbox（フレキシブルボックスレイアウト）は、CSS3で導入された1次元レイアウトモデルで、柔軟なレスポンシブレイアウトを構築するために設計されています。要素がコンテナスペースに自動的に適応し、配置、分配、順序付けを容易に実現できます。

**コンテナプロパティ（Flex Container）**：

1. **display: flex | inline-flex**：Flexboxレイアウトを有効化
2. **flex-direction**：主軸の方向を定義
   - \`row\`（デフォルト）：水平に左から右
   - \`row-reverse\`：水平に右から左
   - \`column\`：垂直に上から下
   - \`column-reverse\`：垂直に下から上
3. **justify-content**：主軸上の配置を定義
   - \`flex-start\`：開始位置に配置
   - \`flex-end\`：終了位置に配置
   - \`center\`：中央配置
   - \`space-between\`：両端配置、アイテム間の間隔が等しい
   - \`space-around\`：各アイテムの両側の間隔が等しい
   - \`space-evenly\`：すべての間隔が等しい
4. **align-items**：交差軸上の配置を定義
   - \`stretch\`（デフォルト）：引き伸ばして埋める
   - \`flex-start\`：開始位置に配置
   - \`flex-end\`：終了位置に配置
   - \`center\`：中央配置
   - \`baseline\`：ベースライン配置
5. **flex-wrap**：折り返しを定義
   - \`nowrap\`（デフォルト）：折り返さない
   - \`wrap\`：折り返す、最初の行が上
   - \`wrap-reverse\`：折り返す、最初の行が下
6. **gap**：アイテム間の間隔を設定

**アイテムプロパティ（Flex Items）**：

1. **flex-grow**：拡大比率を定義、デフォルトは0（拡大しない）
2. **flex-shrink**：縮小比率を定義、デフォルトは1（スペース不足時に縮小）
3. **flex-basis**：アイテムの初期サイズを定義、デフォルトはauto
4. **flex**：\`flex-grow\`、\`flex-shrink\`、\`flex-basis\`の短縮形
5. **align-self**：個別アイテムが他と異なる配置を持つことを許可
6. **order**：アイテムの表示順序を定義、数値が小さいほど前

**一般的なレイアウトパターン**：

1. **水平垂直中央揃え**：あらゆるコンテンツを完璧に中央配置
2. **ナビゲーションバー**：均等に分散されたナビゲーションアイテム
3. **カードグリッド**：適応的なカードレイアウト
4. **聖杯レイアウト**：クラシックな3カラムレイアウト
5. **等高カラム**：自動的に等しい高さの複数カラムレイアウト`,
          codeExample: `/* ============ コンテナプロパティの例 ============ */

/* 1. 基本的なFlexコンテナ */
.flex-container {
  display: flex;
  /* Flexboxレイアウトを有効化 */
}

/* 2. Flex方向制御 */
.flex-row {
  display: flex;
  flex-direction: row; /* デフォルト：水平配置 */
}

.flex-column {
  display: flex;
  flex-direction: column; /* 垂直配置 */
}

/* 3. 主軸配置（justify-content） */
.justify-center {
  display: flex;
  justify-content: center; /* 水平中央 */
}

.justify-between {
  display: flex;
  justify-content: space-between; /* 両端配置 */
}

/* 4. 交差軸配置（align-items） */
.align-center {
  display: flex;
  align-items: center; /* 垂直中央 */
}

/* 5. 折り返し制御 */
.flex-wrap {
  display: flex;
  flex-wrap: wrap; /* 折り返しを許可 */
  gap: 16px; /* アイテム間の間隔 */
}

/* ============ アイテムプロパティの例 ============ */

/* 1. Flex拡大 */
.flex-item-grow {
  flex-grow: 1; /* 残りのスペースを占める */
}

/* 2. Flex短縮形（推奨） */
.flex-item {
  flex: 1; /* flex: 1 1 0% と同等 */
}

/* ============ 実践的なレイアウト例 ============ */

/* 例1：完璧な中央配置 */
.center-box {
  display: flex;
  justify-content: center; /* 水平中央 */
  align-items: center; /* 垂直中央 */
  height: 100vh;
}

/* 例2：ナビゲーションバー */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* 例3：レスポンシブカードグリッド */
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
}

.card {
  flex: 1 1 300px; /* 最小幅300px、自動拡大 */
  min-width: 300px;
  max-width: 400px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}`
        },
        {
          id: "grid",
          name: "Grid",
          link: "https://developer.mozilla.org/ja/docs/Web/CSS/CSS_grid_layout",
          description: "Gridは行と列を同時に処理できる2次元レイアウトシステムです。",
          content: `CSS Grid（グリッドレイアウト）は、CSS3で導入された2次元レイアウトシステムで、行と列の両方の次元で同時にレイアウト制御が可能です。ダッシュボード、雑誌スタイルのレイアウト、レスポンシブグリッドなど、複雑なページレイアウトの作成に最適です。

**コンテナプロパティ（Grid Container）**：

1. **display: grid | inline-grid**：Gridレイアウトを有効化
2. **grid-template-columns**：列のサイズを定義
   - 固定値：\`grid-template-columns: 200px 1fr 300px\`
   - \`repeat()\`：\`repeat(3, 1fr)\` で3つの等幅列を作成
   - \`minmax()\`：\`minmax(100px, 1fr)\` で最小最大値を設定
   - \`auto-fit\` / \`auto-fill\`：自動的に列を埋める
3. **grid-template-rows**：行のサイズを定義
4. **grid-template-areas**：名前付きエリアでレイアウトを定義
5. **gap** / **grid-gap**：グリッド間隔を設定
   - \`gap: 20px\`：行列の間隔が両方20px
   - \`gap: 20px 30px\`：行間隔20px、列間隔30px
6. **grid-auto-flow**：自動配置アルゴリズムを制御
   - \`row\`（デフォルト）：行で埋める
   - \`column\`：列で埋める
   - \`dense\`：密に詰める、隙間を埋めようとする

**アイテムプロパティ（Grid Items）**：

1. **grid-column**：アイテムの列位置を定義
   - \`grid-column: 1 / 3\`：列1から3まで
   - \`grid-column: span 2\`：2列にまたがる
2. **grid-row**：アイテムの行位置を定義
   - \`grid-row: 1 / 3\`：行1から3まで
   - \`grid-row: span 2\`：2行にまたがる
3. **grid-area**：
   - 4つの値を指定：\`grid-row-start / grid-column-start / grid-row-end / grid-column-end\`
   - または名前付きエリアを使用：\`grid-area: header\`

**一般的なレイアウトパターン**：

1. **レスポンシブグリッド**：異なる画面サイズに適応するグリッドレイアウト
2. **ダッシュボードレイアウト**：不規則なパネルレイアウト
3. **雑誌スタイルレイアウト**：複雑な複数列コンテンツレイアウト
4. **フォトギャラリー**：適応的な画像グリッド
5. **カードレイアウト**：等幅適応的なカードグリッド`,
          codeExample: `/* ============ コンテナプロパティの例 ============ */

/* 1. 基本的なGridコンテナ */
.grid-container {
  display: grid;
  /* Gridレイアウトを有効化 */
}

/* 2. 列の定義（grid-template-columns） */
.grid-3-columns {
  display: grid;
  grid-template-columns: 200px 200px 200px; /* 3つの固定幅列 */
  gap: 20px;
}

.grid-fr-units {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* 分数単位：1:2:1の比率 */
  gap: 20px;
}

.grid-repeat {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4つの等幅列 */
  gap: 20px;
}

/* 3. レスポンシブ自動埋め */
.grid-auto-fit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  /* 自動適応：最小250px、最大1fr */
}

/* 4. 名前付きグリッドエリア */
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

/* ============ アイテムプロパティの例 ============ */

/* 1. 列位置制御 */
.grid-item-column-span {
  grid-column: 1 / 3; /* 列1から3まで */
}

.grid-item-column-span-2 {
  grid-column: span 2; /* 2列にまたがる */
}

/* 2. 名前付きエリアを使用 */
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

/* ============ 実践的なレイアウト例 ============ */

/* 例1：基本的なレスポンシブグリッド */
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  padding: 24px;
}

/* 例2：ダッシュボードレイアウト */
.dashboard {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto 1fr 1fr;
  gap: 20px;
  padding: 20px;
  height: 100vh;
}

.dashboard-header {
  grid-column: 1 / -1; /* すべての列にまたがる */
  padding: 20px;
  background: #fff;
  border-radius: 8px;
}

/* 例3：フォトギャラリー */
.photo-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  gap: 16px;
  padding: 16px;
}

.photo-gallery-item.large {
  grid-column: span 2;
  grid-row: span 2;
}`
        },
      ],
    },
    {
      title: "CSS上級",
      items: [
        {
          id: "animations",
          name: "アニメーション",
          link: "https://developer.mozilla.org/ja/docs/Web/CSS/CSS_animations",
          description: "CSSアニメーションは、要素を1つのスタイルから別のスタイルに段階的に変更できます。",
          content: `CSSアニメーション（Animations）は、複雑な複数ステップのアニメーション効果を作成できます。トランジション（transition）とは異なり、アニメーションはトリガーなしで自動的に再生でき、複数のキーフレームを定義できます。

**@keyframes構文**：

アニメーションのキーフレームを定義し、異なる時点でのスタイルを指定します：

@keyframes アニメーション名 {
  0% { /* 開始状態 */ }
  50% { /* 中間状態 */ }
  100% { /* 終了状態 */ }
}

/* またはfrom/toを使用 */
@keyframes アニメーション名 {
  from { /* 開始状態 */ }
  to { /* 終了状態 */ }
}

**animationプロパティ**：

1. **animation-name**：@keyframesで定義されたアニメーション名を指定
2. **animation-duration**：アニメーション持続時間（例：2s、500ms）
3. **animation-timing-function**：速度曲線
   - \`linear\`：等速
   - \`ease\`（デフォルト）：遅-速-遅
   - \`ease-in\`：遅い開始
   - \`ease-out\`：遅い終了
   - \`ease-in-out\`：遅い開始と終了
   - \`cubic-bezier(n,n,n,n)\`：カスタムベジェ曲線
4. **animation-delay**：アニメーション遅延時間
5. **animation-iteration-count**：再生回数
   - 数値：指定回数
   - \`infinite\`：無限ループ
6. **animation-direction**：再生方向
   - \`normal\`（デフォルト）：順方向
   - \`reverse\`：逆方向
   - \`alternate\`：交互再生（順-逆-順）
   - \`alternate-reverse\`：逆方向交互
7. **animation-fill-mode**：アニメーション終了後の状態
   - \`none\`（デフォルト）：変更なし
   - \`forwards\`：最後のフレームを保持
   - \`backwards\`：最初のフレームを適用（遅延中）
   - \`both\`：forwardsとbackwardsの両方を適用
8. **animation-play-state**：再生状態を制御
   - \`running\`（デフォルト）：再生中
   - \`paused\`：一時停止

**animation短縮形**：

animation: name duration timing-function delay iteration-count direction fill-mode;

**一般的なアニメーションパターン**：

1. **フェードイン/アウト**：透明度の変化
2. **バウンス効果**：要素のバウンスアニメーション
3. **回転**：360度回転
4. **スケール**：拡大縮小
5. **スライド**：位置移動
6. **パルス**：周期的なスケーリング
7. **シェイク**：左右の揺れ
8. **ローディングアニメーション**：さまざまなローディング効果`,
          codeExample: `/* ============ @keyframes定義 ============ */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

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

/* アニメーションの適用 */
.fade-in {
  animation: fadeIn 1s ease-in;
}

.slide-in {
  animation: slideIn 0.5s ease-out;
}

/* ローディングスピナーの例 */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.loader {
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}`
        },
        {
          id: "transitions",
          name: "トランジション",
          link: "https://developer.mozilla.org/ja/docs/Web/CSS/CSS_transitions",
          description: "トランジションは、プロパティ値が変更されたときにスムーズなアニメーション効果を作成できます。",
          content: `CSSトランジション（Transitions）は、CSSプロパティ値が変更されたときにスムーズなアニメーション効果を作成します。アニメーション（animations）とは異なり、トランジションは起動するためにトリガー（:hover、:focus、またはJavaScriptのクラス変更など）が必要です。

**transitionプロパティ**：

1. **transition-property**：トランジションするCSSプロパティを指定
   - 特定のプロパティ：\`opacity\`、\`transform\`、\`background-color\`など
   - \`all\`：すべてのアニメーション可能なプロパティ（非推奨、パフォーマンス低下）
   - \`none\`：トランジションなし
2. **transition-duration**：トランジション持続時間
   - 時間単位：\`s\`（秒）または\`ms\`（ミリ秒）
   - 例：\`0.3s\`、\`300ms\`
3. **transition-timing-function**：速度曲線（イージング関数）
   - \`linear\`：等速
   - \`ease\`（デフォルト）：遅-速-遅
   - \`ease-in\`：遅い開始
   - \`ease-out\`：遅い終了
   - \`ease-in-out\`：遅い開始と終了
   - \`cubic-bezier(n,n,n,n)\`：カスタムベジェ曲線
   - \`steps(n)\`：ステップ関数
4. **transition-delay**：トランジション遅延時間
   - トランジション開始前の遅延
   - 例：\`0.1s\`、\`100ms\`

**transition短縮形**：

transition: property duration timing-function delay;

/* 例 */
transition: opacity 0.3s ease-in-out 0.1s;

/* 複数のプロパティ */
transition: opacity 0.3s, transform 0.5s;

**アニメーション可能なプロパティ**：

- **色**：\`color\`、\`background-color\`、\`border-color\`
- **サイズ**：\`width\`、\`height\`、\`padding\`、\`margin\`
- **位置**：\`top\`、\`left\`、\`right\`、\`bottom\`
- **変形**：\`transform\`（推奨、良好なパフォーマンス）
- **透明度**：\`opacity\`（推奨、良好なパフォーマンス）
- **影**：\`box-shadow\`、\`text-shadow\`

**パフォーマンスのヒント**：

1. \`transform\`と\`opacity\`を優先（GPUアクセラレーション）
2. \`width\`、\`height\`、\`margin\`のトランジションを避ける（リフローを引き起こす）
3. \`will-change\`を使用してブラウザに最適化をヒント
4. \`all\`プロパティのトランジションを避ける

**一般的なトランジションパターン**：

1. **ホバー効果**：マウスホバー時の視覚的フィードバック
2. **ボタンの状態**：クリック、無効状態
3. **展開/折りたたみ**：アコーディオン、ドロップダウン
4. **表示/非表示**：モーダル、ツールチップ
5. **色の変化**：テーマ切り替え、状態インジケーター`,
          codeExample: `/* 基本的なトランジション */
.fade {
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}

.fade:hover {
  opacity: 0.7;
}

/* カードホバー効果 */
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

/* ボタン効果 */
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

/* アンダーライン付きナビゲーションリンク */
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

/* モーダルフェードイン */
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

/* トグルスイッチ */
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
}`
        },
      ],
    },
    {
      title: "実践例",
      items: [
        {
          id: "css-examples",
          name: "CSS 実践例",
          link: "https://developer.mozilla.org/ja/docs/Web/CSS",
          description: "実際の例を通じてCSSレイアウト、アニメーション、レスポンシブデザインを学びます。",
          content: "これらの例は、レスポンシブレイアウト、アニメーション効果、モダンデザインなどのコアシナリオを含む、実際の開発におけるCSSの応用を示しています。各例には完全なコード実装と詳細な説明が含まれており、CSSの本質を素早く習得するのに役立ちます。"
        },
      ],
    },
  ],
};
