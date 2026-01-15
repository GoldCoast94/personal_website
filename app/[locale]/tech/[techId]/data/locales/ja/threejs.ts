import { TechDetail } from '../../../types';

export const threejsDataJa: TechDetail = {
  name: "Three.js",
  description: "3Dグラフィックスを作成および表示するためのJavaScript 3Dライブラリ",
  icon: "/images/threejs-logo.png",
  color: "from-green-500 to-emerald-500",
  officialLink: "https://threejs.org/",
  content: [
    {
      title: "Three.js基礎",
      items: [
        {
          id: "scene-camera",
          name: "シーンとカメラ",
          link: "https://threejs.org/docs/#api/en/scenes/Scene",
          description: "シーンとカメラはThree.jsの基礎であり、シーンはすべての3Dオブジェクトを含み、カメラは視点を定義します。",
          content: `SceneとCameraはThree.jsのコア概念であり、3D世界の基本フレームワークを形成します。

**シーン（Scene）**:
シーンはすべての3Dオブジェクト、ライト、カメラなどの要素を保存および整理するために使用されるコンテナです。すべてのThree.jsアプリケーションには少なくとも1つのシーンが必要です。

**カメラタイプ**:

1. **透視投影カメラ（PerspectiveCamera）**：人間の目の遠近効果をシミュレートし、遠くのオブジェクトが小さく見える
   - \`fov\`：視野角（Field of View）、通常45〜75度に設定
   - \`aspect\`：アスペクト比、通常ウィンドウのアスペクト比を使用
   - \`near\`：近クリッピング面、この距離より近いオブジェクトはレンダリングされない
   - \`far\`：遠クリッピング面、この距離より遠いオブジェクトはレンダリングされない

2. **正投影カメラ（OrthographicCamera）**：遠近効果がなく、オブジェクトのサイズは距離によって変化しない
   - 2Dゲーム、CADアプリケーション、建築ビジュアライゼーションなどのシーンに適している

**カメラの配置**:
- \`camera.position.set(x, y, z)\` を使用してカメラの位置を設定
- \`camera.lookAt(x, y, z)\` を使用してカメラの向きを設定
- Three.jsは右手座標系を使用：X軸が右、Y軸が上、Z軸が外

**シーン階層構造**:
シーン内のオブジェクトは親子関係を形成でき、子オブジェクトの変換は親オブジェクトに対して相対的です。`,
          codeExample: `import * as THREE from 'three';

// シーンを作成
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000); // 背景色を設定

// 透視投影カメラを作成
const camera = new THREE.PerspectiveCamera(
  75,                                    // fov: 視野角
  window.innerWidth / window.innerHeight, // aspect: アスペクト比
  0.1,                                   // near: 近クリッピング面
  1000                                   // far: 遠クリッピング面
);

// カメラの位置を設定
camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0); // カメラを原点に向ける

// 正投影カメラを作成（比較用）
const orthographicCamera = new THREE.OrthographicCamera(
  -10, 10,  // left, right
  10, -10,  // top, bottom
  0.1, 1000 // near, far
);

// シーン階層構造の例
const group = new THREE.Group();
const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(0.5, 0.5, 0.5),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);

cube2.position.set(2, 0, 0);
group.add(cube1);
group.add(cube2);
scene.add(group);

// グループ全体を回転すると、両方の立方体が一緒に回転する
group.rotation.y = Math.PI / 4;

// ウィンドウのリサイズに対応
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});`,
        },
        {
          id: "geometries",
          name: "ジオメトリ",
          link: "https://threejs.org/docs/#api/en/geometries/BoxGeometry",
          description: "ジオメトリは3Dオブジェクトの形状と構造を定義します。",
          content: `ジオメトリ（Geometry）は、3Dオブジェクトの形状、頂点、面、UV座標を定義します。Three.jsは豊富な組み込みジオメトリを提供し、カスタムジオメトリもサポートしています。

**組み込みジオメトリ**:

1. **BoxGeometry**：立方体/直方体
   - パラメータ：幅、高さ、奥行き、セグメント数

2. **SphereGeometry**：球体
   - パラメータ：半径、水平セグメント数、垂直セグメント数

3. **PlaneGeometry**：平面
   - パラメータ：幅、高さ、セグメント数

4. **CylinderGeometry**：円柱
   - パラメータ：上部半径、下部半径、高さ、セグメント数

5. **TorusGeometry**：トーラス
   - パラメータ：半径、チューブ半径、セグメント数

6. **ConeGeometry**：円錐
   - パラメータ：半径、高さ、セグメント数

**カスタムジオメトリ**:
BufferGeometryを使用してカスタム形状を作成し、頂点、面、法線、UV座標を定義して複雑なジオメトリを構築できます。

**ジオメトリ属性**:
- \`vertices\`：頂点位置
- \`faces\`：面（頂点インデックスで構成）
- \`normals\`：法線ベクトル（ライティング計算用）
- \`uvs\`：テクスチャ座標（マッピング用）

**パフォーマンス最適化**:
- パフォーマンス向上のためにGeometryの代わりにBufferGeometryを使用
- メモリ使用量を削減するためにジオメトリインスタンスを共有
- 視覚的品質とパフォーマンスのバランスを取るためにセグメント数を適切に設定`,
          codeExample: `import * as THREE from 'three';

// さまざまな組み込みジオメトリを作成
// 1. ボックス
const boxGeometry = new THREE.BoxGeometry(
  2, 2, 2,  // 幅、高さ、奥行き
  4, 4, 4   // セグメント数（オプション）
);

// 2. 球体
const sphereGeometry = new THREE.SphereGeometry(
  1,    // 半径
  32,   // 水平セグメント数
  16    // 垂直セグメント数
);

// 3. 平面
const planeGeometry = new THREE.PlaneGeometry(
  10, 10,  // 幅、高さ
  10, 10   // セグメント数
);

// 4. 円柱
const cylinderGeometry = new THREE.CylinderGeometry(
  1,    // 上部半径
  1,    // 下部半径
  3,    // 高さ
  32    // セグメント数
);

// 5. トーラス
const torusGeometry = new THREE.TorusGeometry(
  2,    // 半径
  0.5,  // チューブ半径
  16,   // 径方向セグメント数
  100   // チューブセグメント数
);

// カスタムジオメトリ - 三角形を作成
const customGeometry = new THREE.BufferGeometry();

// 3つの頂点位置を定義
const vertices = new Float32Array([
  -1.0, -1.0,  0.0,  // 頂点1
   1.0, -1.0,  0.0,  // 頂点2
   0.0,  1.0,  0.0   // 頂点3
]);

// 頂点データをジオメトリに追加
customGeometry.setAttribute(
  'position',
  new THREE.BufferAttribute(vertices, 3)
);

// 法線を計算（ライティング用）
customGeometry.computeVertexNormals();

// カスタムジオメトリ - 立方体を作成
const cubeVertices = new Float32Array([
  // 前面
  -1, -1,  1,   1, -1,  1,   1,  1,  1,
  -1, -1,  1,   1,  1,  1,  -1,  1,  1,
  // 背面
  -1, -1, -1,  -1,  1, -1,   1,  1, -1,
  -1, -1, -1,   1,  1, -1,   1, -1, -1,
  // 他の4つの面...
]);

const cubeGeometry = new THREE.BufferGeometry();
cubeGeometry.setAttribute(
  'position',
  new THREE.BufferAttribute(cubeVertices, 3)
);

// ジオメトリに色属性を追加
const colors = new Float32Array([
  1, 0, 0,  // 赤
  0, 1, 0,  // 緑
  0, 0, 1,  // 青
]);

customGeometry.setAttribute(
  'color',
  new THREE.BufferAttribute(colors, 3)
);

// マテリアルとメッシュを作成
const material = new THREE.MeshBasicMaterial({
  vertexColors: true  // 頂点カラーを使用
});

const mesh = new THREE.Mesh(customGeometry, material);

// ジオメトリの変換
mesh.position.set(0, 0, 0);
mesh.rotation.set(0, Math.PI / 4, 0);
mesh.scale.set(2, 2, 2);`,
        },
        {
          id: "materials",
          name: "マテリアル",
          link: "https://threejs.org/docs/#api/en/materials/Material",
          description: "マテリアルはオブジェクト表面の外観とライティング反応を定義します。",
          content: `マテリアル（Material）は、オブジェクトがライティングにどのように反応するか、および表面の視覚効果を決定します。異なるマテリアルタイプは異なるレンダリングニーズに適しています。

**一般的なマテリアルタイプ**:

1. **MeshBasicMaterial**：基本マテリアル
   - ライティングの影響を受けない
   - 最高のパフォーマンス
   - デバッグとシンプルなシーンに適している

2. **MeshLambertMaterial**：ランバートマテリアル
   - 拡散反射、スペキュラーなし
   - 良好なパフォーマンス
   - 光沢のない表面に適している

3. **MeshPhongMaterial**：フォンマテリアル
   - スペキュラー反射をサポート
   - 中程度のパフォーマンス
   - 光沢のある表面に適している

4. **MeshStandardMaterial**：標準マテリアル
   - 物理ベースレンダリング（PBR）
   - 最もリアルな効果
   - ラフネスとメタルネスをサポート

5. **MeshPhysicalMaterial**：物理マテリアル
   - 拡張PBRマテリアル
   - クリアコート、光沢などの高度な効果をサポート

**重要なプロパティ**:

- \`color\`：基本色
- \`map\`：カラーテクスチャ
- \`normalMap\`：法線マップ（表面の詳細を追加）
- \`roughness\`：ラフネス（0=滑らか、1=粗い）
- \`metalness\`：メタルネス（0=非金属、1=金属）
- \`transparent\`：透明かどうか
- \`opacity\`：不透明度
- \`side\`：レンダリング面（正面/背面/両面）

**テクスチャマッピング**:
テクスチャは、カラーマップ、法線マップ、ラフネスマップなど、マテリアルに豊富な詳細を追加できます。`,
          codeExample: `import * as THREE from 'three';

// 1. 基本マテリアル（ライティングの影響を受けない）
const basicMaterial = new THREE.MeshBasicMaterial({
  color: 0xff0000,        // 赤
  wireframe: false,       // ワイヤーフレーム表示
  transparent: false,     // 透明
  opacity: 1.0,          // 不透明度
  side: THREE.FrontSide  // 正面をレンダリング
});

// 2. ランバートマテリアル（拡散反射）
const lambertMaterial = new THREE.MeshLambertMaterial({
  color: 0x00ff00,
  emissive: 0x000000,    // 発光色
  emissiveIntensity: 0   // 発光強度
});

// 3. フォンマテリアル（スペキュラー）
const phongMaterial = new THREE.MeshPhongMaterial({
  color: 0x0000ff,
  specular: 0xffffff,    // スペキュラー色
  shininess: 30          // 光沢度
});

// 4. 標準マテリアル（PBR）
const standardMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  roughness: 0.5,        // ラフネス
  metalness: 0.5,        // メタルネス
  envMapIntensity: 1.0   // 環境マップ強度
});

// 5. 物理マテリアル（高度なPBR）
const physicalMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
  roughness: 0.1,
  metalness: 0.9,
  clearcoat: 1.0,        // クリアコート
  clearcoatRoughness: 0.1,
  reflectivity: 0.5
});

// テクスチャ読み込み
const textureLoader = new THREE.TextureLoader();

// テクスチャ付きマテリアルを作成
const texturedMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load('/textures/color.jpg'),           // カラーマップ
  normalMap: textureLoader.load('/textures/normal.jpg'),    // 法線マップ
  roughnessMap: textureLoader.load('/textures/rough.jpg'),  // ラフネスマップ
  metalnessMap: textureLoader.load('/textures/metal.jpg'),  // メタルネスマップ
  aoMap: textureLoader.load('/textures/ao.jpg')            // アンビエントオクルージョンマップ
});

// 両面マテリアル
const doubleSidedMaterial = new THREE.MeshStandardMaterial({
  color: 0xff6347,
  side: THREE.DoubleSide,  // 両面レンダリング
  roughness: 0.7
});

// 透明マテリアル
const transparentMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
  transparent: true,
  opacity: 0.5,
  transmission: 0.9,      // 透過性
  thickness: 0.5          // 厚さ
});

// メッシュオブジェクトを作成
const geometry = new THREE.SphereGeometry(1, 32, 32);
const mesh1 = new THREE.Mesh(geometry, standardMaterial);
const mesh2 = new THREE.Mesh(geometry, physicalMaterial);

// マテリアルアニメーション（時間とともにプロパティを変更）
function animateMaterial(time) {
  standardMaterial.roughness = Math.sin(time) * 0.5 + 0.5;
  standardMaterial.metalness = Math.cos(time) * 0.5 + 0.5;
}`,
        },
        {
          id: "lights",
          name: "ライト",
          link: "https://threejs.org/docs/#api/en/lights/Light",
          description: "ライトはシーン内のオブジェクトを照らし、リアルなライティングとシャドウ効果を作成します。",
          content: `ライト（Light）は3Dシーンに不可欠な要素であり、オブジェクトがどのように照らされるか、シャドウがどのようにレンダリングされるかを決定します。異なるライトタイプは異なるシーンニーズに適しています。

**ライトタイプ**:

1. **AmbientLight（環境光）**:
   - シーン内のすべてのオブジェクトを均一に照らす
   - 方向性なし
   - シャドウを投影しない
   - 全体的な明るさを上げるために使用

2. **DirectionalLight（平行光源）**:
   - 太陽光をシミュレート
   - 光線は平行に伝播
   - シャドウを投影可能
   - 大規模な照明に適している

3. **PointLight（点光源）**:
   - 点からすべての方向に光線を放射
   - 電球効果をシミュレート
   - シャドウを投影可能
   - 減衰効果あり

4. **SpotLight（スポットライト）**:
   - 円錐形の光束
   - 懐中電灯やステージライトをシミュレート
   - シャドウを投影可能
   - 角度と減衰を制御可能

5. **HemisphereLight（半球光）**:
   - 空と地面の反射光をシミュレート
   - 空の色と地面の色あり
   - シャドウを投影しない

**ライトプロパティ**:

- \`color\`：ライトの色
- \`intensity\`：ライトの強度
- \`distance\`：ライトの影響距離
- \`decay\`：減衰率
- \`castShadow\`：シャドウを投影するかどうか

**シャドウ設定**:
シャドウを有効にするには、レンダラー、ライト、オブジェクトのシャドウプロパティを設定する必要があります。`,
          codeExample: `import * as THREE from 'three';

// 1. 環境光 - 基本照明を提供
const ambientLight = new THREE.AmbientLight(
  0xffffff,  // 白
  0.5        // 強度
);
scene.add(ambientLight);

// 2. 平行光源 - 太陽光をシミュレート
const directionalLight = new THREE.DirectionalLight(
  0xffffff,  // 白
  1.0        // 強度
);
directionalLight.position.set(5, 10, 5);
directionalLight.castShadow = true;  // シャドウを有効化

// シャドウプロパティを設定
directionalLight.shadow.camera.left = -10;
directionalLight.shadow.camera.right = 10;
directionalLight.shadow.camera.top = 10;
directionalLight.shadow.camera.bottom = -10;
directionalLight.shadow.camera.near = 0.1;
directionalLight.shadow.camera.far = 50;
directionalLight.shadow.mapSize.width = 2048;   // シャドウマップ解像度
directionalLight.shadow.mapSize.height = 2048;

scene.add(directionalLight);

// 3. 点光源 - 電球をシミュレート
const pointLight = new THREE.PointLight(
  0xff0000,  // 赤
  1.0,       // 強度
  100,       // 距離
  2          // 減衰
);
pointLight.position.set(0, 3, 0);
pointLight.castShadow = true;

// 点光源のヘルパーを追加
const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.5);
scene.add(pointLightHelper);

scene.add(pointLight);

// 4. スポットライト - 懐中電灯をシミュレート
const spotLight = new THREE.SpotLight(
  0xffffff,         // 白
  1.0,              // 強度
  100,              // 距離
  Math.PI / 6,      // 角度
  0.5,              // 半影
  2                 // 減衰
);
spotLight.position.set(0, 10, 0);
spotLight.target.position.set(0, 0, 0);  // ライトターゲット
spotLight.castShadow = true;

// スポットライトのシャドウを設定
spotLight.shadow.camera.near = 0.1;
spotLight.shadow.camera.far = 50;
spotLight.shadow.camera.fov = 30;
spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;

scene.add(spotLight);
scene.add(spotLight.target);

// 5. 半球光 - 空と地面をシミュレート
const hemisphereLight = new THREE.HemisphereLight(
  0x87ceeb,  // 空の色（スカイブルー）
  0x8b4513,  // 地面の色（ブラウン）
  0.6        // 強度
);
scene.add(hemisphereLight);

// レンダラーのシャドウ設定
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;  // ソフトシャドウ

// オブジェクトのシャドウ設定
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
cube.castShadow = true;     // オブジェクトがシャドウを投影
cube.receiveShadow = true;  // オブジェクトがシャドウを受ける
scene.add(cube);

// 地面がシャドウを受ける
const planeGeometry = new THREE.PlaneGeometry(20, 20);
const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
plane.receiveShadow = true;
scene.add(plane);

// 動的ライティング
function animateLights(time) {
  pointLight.position.x = Math.sin(time) * 5;
  pointLight.position.z = Math.cos(time) * 5;
  pointLight.intensity = Math.sin(time * 2) * 0.5 + 1.0;
}`,
        },
        {
          id: "animation",
          name: "アニメーション",
          link: "https://threejs.org/docs/#api/en/animation/AnimationMixer",
          description: "アニメーションは3Dシーンに命を吹き込み、生き生きとした視覚効果を作成します。",
          content: `Three.jsのアニメーションは、主にrequestAnimationFrameを使用して連続的なフレーム更新を実現します。アニメーションは、オブジェクトの位置、回転、スケール、およびマテリアルプロパティを変更できます。

**アニメーションループ**:
requestAnimationFrameを使用してアニメーションループを作成します。ブラウザが次のフレームをレンダリングする準備ができたときにコールバックを呼び出し、通常は毎秒60回です。

**変換アニメーション**:

1. **位置アニメーション**：オブジェクトの \`position\` プロパティを変更
2. **回転アニメーション**：オブジェクトの \`rotation\` プロパティを変更
3. **スケールアニメーション**：オブジェクトの \`scale\` プロパティを変更

**時間管理**:
THREE.Clockを使用して時間を追跡し、異なるフレームレートでアニメーションが一貫した速度を維持することを確保します。

**キーフレームアニメーション**:
Three.jsのAnimationMixerシステムは、モデルアニメーションに適した複雑なキーフレームアニメーションをサポートしています。

**パフォーマンス最適化**:
- アニメーションが必要なオブジェクトのみを更新
- setIntervalではなくrequestAnimationFrameを使用
- アニメーションループで新しいオブジェクトを作成しない
- オブジェクトプールを使用してオブジェクトを再利用`,
          codeExample: `import * as THREE from 'three';

// シーン、カメラ、レンダラーを作成
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// アニメーションするオブジェクトを作成
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// ライトを追加
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(5, 5, 5);
scene.add(light);
scene.add(new THREE.AmbientLight(0x404040));

// 時間管理用のクロックを作成
const clock = new THREE.Clock();

// 基本的なアニメーションループ
function animate() {
  requestAnimationFrame(animate);

  // 経過時間を取得
  const elapsedTime = clock.getElapsedTime();

  // 回転アニメーション
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // シーンをレンダリング
  renderer.render(scene, camera);
}

// アニメーションを開始
animate();

// より複雑なアニメーションの例
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 32, 32),
  new THREE.MeshStandardMaterial({ color: 0xff0000 })
);
scene.add(sphere);

function complexAnimate() {
  requestAnimationFrame(complexAnimate);

  const time = clock.getElapsedTime();

  // 正弦波運動
  sphere.position.x = Math.sin(time) * 3;
  sphere.position.y = Math.cos(time) * 2;

  // パルススケール
  const scale = Math.sin(time * 2) * 0.5 + 1.5;
  sphere.scale.set(scale, scale, scale);

  // カラーアニメーション
  const hue = (time * 0.1) % 1;
  sphere.material.color.setHSL(hue, 1, 0.5);

  // カメラの周回
  camera.position.x = Math.sin(time * 0.5) * 5;
  camera.position.z = Math.cos(time * 0.5) * 5;
  camera.lookAt(0, 0, 0);

  renderer.render(scene, camera);
}

// Tweenライブラリの例（@tweenjs/tween.jsが必要）
import TWEEN from '@tweenjs/tween.js';

const targetCube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0x0000ff })
);
scene.add(targetCube);

// トゥイーンアニメーションを作成
new TWEEN.Tween(targetCube.position)
  .to({ x: 3, y: 2, z: 0 }, 2000)  // 2秒でターゲット位置に移動
  .easing(TWEEN.Easing.Quadratic.InOut)
  .repeat(Infinity)
  .yoyo(true)
  .start();

function animateWithTween() {
  requestAnimationFrame(animateWithTween);

  TWEEN.update();  // トゥイーンアニメーションを更新

  renderer.render(scene, camera);
}

// AnimationMixerの例（モデルアニメーション用）
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const loader = new GLTFLoader();
let mixer;

loader.load('/models/animated-model.glb', (gltf) => {
  const model = gltf.scene;
  scene.add(model);

  // アニメーションミキサーを作成
  mixer = new THREE.AnimationMixer(model);

  // すべてのアニメーションを再生
  gltf.animations.forEach((clip) => {
    mixer.clipAction(clip).play();
  });
});

function animateWithMixer() {
  requestAnimationFrame(animateWithMixer);

  const delta = clock.getDelta();

  // アニメーションミキサーを更新
  if (mixer) {
    mixer.update(delta);
  }

  renderer.render(scene, camera);
}

// パフォーマンス最適化されたアニメーションループ
let lastTime = 0;
const targetFPS = 60;
const frameInterval = 1000 / targetFPS;

function optimizedAnimate(currentTime) {
  requestAnimationFrame(optimizedAnimate);

  const deltaTime = currentTime - lastTime;

  if (deltaTime >= frameInterval) {
    lastTime = currentTime - (deltaTime % frameInterval);

    // ターゲットフレームレートに達したときのみ更新
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }
}`,
        },
      ],
    },
    {
      title: "実践例",
      items: [
        {
          id: "threejs-examples",
          name: "Three.js 実践例",
          link: "https://threejs.org/examples/",
          description: "実際の例を通じてThree.jsの3Dレンダリング、パーティクルシステム、インタラクティブ効果を学びます。",
          content: "これらの例は、3Dモデルレンダリング、パーティクル効果、高度なシェーダーなどのコアシナリオを含む、実際の開発におけるThree.jsの応用を示しています。各例には完全なコード実装と詳細な説明が含まれており、Three.jsの本質を素早く習得するのに役立ちます。"
        },
      ],
    },
  ],
};
