import { TechDetail } from '../types';

export const threejsData: TechDetail = {
  name: "Three.js",
  description: "JavaScript 3D 库，用于创建和显示三维图形",
  icon: "/images/threejs-logo.png",
  color: "from-green-500 to-emerald-500",
  officialLink: "https://threejs.org/",
  content: [
    {
      title: "Three.js 基础",
      items: [
        {
          id: "scene-camera",
          name: "场景与相机",
          link: "https://threejs.org/docs/#api/en/scenes/Scene",
          description: "场景和相机是 Three.js 的基础，场景承载所有 3D 对象，相机定义观察视角。",
          content: `Scene 和 Camera 是 Three.js 的核心概念，它们共同构成了 3D 世界的基础框架。

**场景（Scene）**：
场景是一个容器，用于存放和组织所有的 3D 对象、光源、相机等元素。每个 Three.js 应用至少需要一个场景。

**相机类型**：

1. **透视相机（PerspectiveCamera）**：模拟人眼的透视效果，远处的物体看起来更小
   - \`fov\`：视野角度（Field of View），通常设置为 45-75 度
   - \`aspect\`：宽高比，通常使用窗口的宽高比
   - \`near\`：近裁剪面，小于此距离的物体不会被渲染
   - \`far\`：远裁剪面，大于此距离的物体不会被渲染

2. **正交相机（OrthographicCamera）**：没有透视效果，物体大小不随距离变化
   - 适用于 2D 游戏、CAD 应用、建筑可视化等场景

**相机定位**：
- 使用 \`camera.position.set(x, y, z)\` 设置相机位置
- 使用 \`camera.lookAt(x, y, z)\` 设置相机朝向
- Three.js 使用右手坐标系：X 轴向右，Y 轴向上，Z 轴向外

**场景层次结构**：
场景中的对象可以形成父子关系，子对象的变换会相对于父对象。`,
          codeExample: `import * as THREE from 'three';

// 创建场景
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000); // 设置背景色

// 创建透视相机
const camera = new THREE.PerspectiveCamera(
  75,                                    // fov: 视野角度
  window.innerWidth / window.innerHeight, // aspect: 宽高比
  0.1,                                   // near: 近裁剪面
  1000                                   // far: 远裁剪面
);

// 设置相机位置
camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0); // 相机朝向原点

// 创建正交相机（用于对比）
const orthographicCamera = new THREE.OrthographicCamera(
  -10, 10,  // left, right
  10, -10,  // top, bottom
  0.1, 1000 // near, far
);

// 场景层次结构示例
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

// 旋转整个组，两个立方体会一起旋转
group.rotation.y = Math.PI / 4;

// 响应窗口大小变化
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});`,
        },
        {
          id: "geometries",
          name: "几何体",
          link: "https://threejs.org/docs/#api/en/geometries/BoxGeometry",
          description: "几何体定义了 3D 对象的形状和结构。",
          content: `几何体（Geometry）定义了 3D 对象的形状、顶点、面和 UV 坐标。Three.js 提供了丰富的内置几何体，也支持自定义几何体。

**内置几何体**：

1. **BoxGeometry**：立方体/长方体
   - 参数：宽度、高度、深度、分段数

2. **SphereGeometry**：球体
   - 参数：半径、水平分段数、垂直分段数

3. **PlaneGeometry**：平面
   - 参数：宽度、高度、分段数

4. **CylinderGeometry**：圆柱体
   - 参数：顶部半径、底部半径、高度、分段数

5. **TorusGeometry**：圆环
   - 参数：半径、管道半径、分段数

6. **ConeGeometry**：圆锥体
   - 参数：半径、高度、分段数

**自定义几何体**：
使用 BufferGeometry 可以创建自定义形状，通过定义顶点、面、法线和 UV 坐标来构建复杂的几何体。

**几何体属性**：
- \`vertices\`：顶点位置
- \`faces\`：面（由顶点索引组成）
- \`normals\`：法线向量（用于光照计算）
- \`uvs\`：纹理坐标（用于贴图）

**性能优化**：
- 使用 BufferGeometry 替代 Geometry 以提升性能
- 共享几何体实例，减少内存占用
- 合理设置分段数，平衡视觉效果和性能`,
          codeExample: `import * as THREE from 'three';

// 创建各种内置几何体
// 1. 立方体
const boxGeometry = new THREE.BoxGeometry(
  2, 2, 2,  // 宽、高、深
  4, 4, 4   // 分段数（可选）
);

// 2. 球体
const sphereGeometry = new THREE.SphereGeometry(
  1,    // 半径
  32,   // 水平分段数
  16    // 垂直分段数
);

// 3. 平面
const planeGeometry = new THREE.PlaneGeometry(
  10, 10,  // 宽、高
  10, 10   // 分段数
);

// 4. 圆柱体
const cylinderGeometry = new THREE.CylinderGeometry(
  1,    // 顶部半径
  1,    // 底部半径
  3,    // 高度
  32    // 分段数
);

// 5. 圆环
const torusGeometry = new THREE.TorusGeometry(
  2,    // 半径
  0.5,  // 管道半径
  16,   // 径向分段数
  100   // 管道分段数
);

// 自定义几何体 - 创建一个三角形
const customGeometry = new THREE.BufferGeometry();

// 定义三个顶点的位置
const vertices = new Float32Array([
  -1.0, -1.0,  0.0,  // 顶点1
   1.0, -1.0,  0.0,  // 顶点2
   0.0,  1.0,  0.0   // 顶点3
]);

// 将顶点数据添加到几何体
customGeometry.setAttribute(
  'position',
  new THREE.BufferAttribute(vertices, 3)
);

// 计算法线（用于光照）
customGeometry.computeVertexNormals();

// 自定义几何体 - 创建一个立方体
const cubeVertices = new Float32Array([
  // 前面
  -1, -1,  1,   1, -1,  1,   1,  1,  1,
  -1, -1,  1,   1,  1,  1,  -1,  1,  1,
  // 后面
  -1, -1, -1,  -1,  1, -1,   1,  1, -1,
  -1, -1, -1,   1,  1, -1,   1, -1, -1,
  // 其他四个面...
]);

const cubeGeometry = new THREE.BufferGeometry();
cubeGeometry.setAttribute(
  'position',
  new THREE.BufferAttribute(cubeVertices, 3)
);

// 为几何体添加颜色属性
const colors = new Float32Array([
  1, 0, 0,  // 红色
  0, 1, 0,  // 绿色
  0, 0, 1,  // 蓝色
]);

customGeometry.setAttribute(
  'color',
  new THREE.BufferAttribute(colors, 3)
);

// 创建材质和网格
const material = new THREE.MeshBasicMaterial({
  vertexColors: true  // 使用顶点颜色
});

const mesh = new THREE.Mesh(customGeometry, material);

// 几何体变换
mesh.position.set(0, 0, 0);
mesh.rotation.set(0, Math.PI / 4, 0);
mesh.scale.set(2, 2, 2);`,
        },
        {
          id: "materials",
          name: "材质",
          link: "https://threejs.org/docs/#api/en/materials/Material",
          description: "材质定义了物体表面的外观和光照响应方式。",
          content: `材质（Material）决定了物体如何响应光照以及表面的视觉效果。不同的材质类型适用于不同的渲染需求。

**常用材质类型**：

1. **MeshBasicMaterial**：基础材质
   - 不受光照影响
   - 性能最好
   - 适用于调试和简单场景

2. **MeshLambertMaterial**：兰伯特材质
   - 漫反射，无高光
   - 性能较好
   - 适用于无光泽表面

3. **MeshPhongMaterial**：冯氏材质
   - 支持高光反射
   - 性能中等
   - 适用于有光泽的表面

4. **MeshStandardMaterial**：标准材质
   - 基于物理的渲染（PBR）
   - 最真实的效果
   - 支持粗糙度和金属度

5. **MeshPhysicalMaterial**：物理材质
   - 扩展的 PBR 材质
   - 支持透明涂层、光泽等高级效果

**重要属性**：

- \`color\`：基础颜色
- \`map\`：颜色贴图
- \`normalMap\`：法线贴图（增加表面细节）
- \`roughness\`：粗糙度（0=光滑，1=粗糙）
- \`metalness\`：金属度（0=非金属，1=金属）
- \`transparent\`：是否透明
- \`opacity\`：不透明度
- \`side\`：渲染面（正面/背面/双面）

**纹理映射**：
纹理可以为材质添加丰富的细节，包括颜色贴图、法线贴图、粗糙度贴图等。`,
          codeExample: `import * as THREE from 'three';

// 1. 基础材质（不受光照影响）
const basicMaterial = new THREE.MeshBasicMaterial({
  color: 0xff0000,        // 红色
  wireframe: false,       // 是否显示线框
  transparent: false,     // 是否透明
  opacity: 1.0,          // 不透明度
  side: THREE.FrontSide  // 渲染正面
});

// 2. 兰伯特材质（漫反射）
const lambertMaterial = new THREE.MeshLambertMaterial({
  color: 0x00ff00,
  emissive: 0x000000,    // 自发光颜色
  emissiveIntensity: 0   // 自发光强度
});

// 3. 冯氏材质（高光）
const phongMaterial = new THREE.MeshPhongMaterial({
  color: 0x0000ff,
  specular: 0xffffff,    // 高光颜色
  shininess: 30          // 光泽度
});

// 4. 标准材质（PBR）
const standardMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  roughness: 0.5,        // 粗糙度
  metalness: 0.5,        // 金属度
  envMapIntensity: 1.0   // 环境贴图强度
});

// 5. 物理材质（高级 PBR）
const physicalMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
  roughness: 0.1,
  metalness: 0.9,
  clearcoat: 1.0,        // 透明涂层
  clearcoatRoughness: 0.1,
  reflectivity: 0.5
});

// 纹理加载
const textureLoader = new THREE.TextureLoader();

// 创建带纹理的材质
const texturedMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load('/textures/color.jpg'),           // 颜色贴图
  normalMap: textureLoader.load('/textures/normal.jpg'),    // 法线贴图
  roughnessMap: textureLoader.load('/textures/rough.jpg'),  // 粗糙度贴图
  metalnessMap: textureLoader.load('/textures/metal.jpg'),  // 金属度贴图
  aoMap: textureLoader.load('/textures/ao.jpg')            // 环境光遮蔽贴图
});

// 材质的不同侧面渲染
const doubleSidedMaterial = new THREE.MeshStandardMaterial({
  color: 0xff6347,
  side: THREE.DoubleSide,  // 双面渲染
  roughness: 0.7
});

// 透明材质
const transparentMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
  transparent: true,
  opacity: 0.5,
  transmission: 0.9,      // 透光性
  thickness: 0.5          // 厚度
});

// 创建网格对象
const geometry = new THREE.SphereGeometry(1, 32, 32);
const mesh1 = new THREE.Mesh(geometry, standardMaterial);
const mesh2 = new THREE.Mesh(geometry, physicalMaterial);

// 材质动画（随时间改变属性）
function animateMaterial(time) {
  standardMaterial.roughness = Math.sin(time) * 0.5 + 0.5;
  standardMaterial.metalness = Math.cos(time) * 0.5 + 0.5;
}`,
        },
        {
          id: "lights",
          name: "光源",
          link: "https://threejs.org/docs/#api/en/lights/Light",
          description: "光源照亮场景中的物体，创造真实的光影效果。",
          content: `光源（Light）是 3D 场景中不可或缺的元素，它们决定了物体如何被照亮以及阴影的呈现。不同的光源类型适用于不同的场景需求。

**光源类型**：

1. **AmbientLight（环境光）**：
   - 均匀照亮场景中的所有物体
   - 没有方向性
   - 不产生阴影
   - 用于提升整体亮度

2. **DirectionalLight（平行光）**：
   - 模拟太阳光
   - 光线平行传播
   - 可以产生阴影
   - 适合大范围照明

3. **PointLight（点光源）**：
   - 从一个点向四周发射光线
   - 模拟灯泡效果
   - 可以产生阴影
   - 有衰减效果

4. **SpotLight（聚光灯）**：
   - 锥形光束
   - 模拟手电筒或舞台灯光
   - 可以产生阴影
   - 可控制角度和衰减

5. **HemisphereLight（半球光）**：
   - 模拟天空和地面的反射光
   - 有天空颜色和地面颜色
   - 不产生阴影

**光源属性**：

- \`color\`：光源颜色
- \`intensity\`：光照强度
- \`distance\`：光源影响距离
- \`decay\`：衰减程度
- \`castShadow\`：是否投射阴影

**阴影配置**：
要启用阴影，需要配置渲染器、光源和物体的阴影属性。`,
          codeExample: `import * as THREE from 'three';

// 1. 环境光 - 提供基础照明
const ambientLight = new THREE.AmbientLight(
  0xffffff,  // 白色
  0.5        // 强度
);
scene.add(ambientLight);

// 2. 平行光 - 模拟太阳光
const directionalLight = new THREE.DirectionalLight(
  0xffffff,  // 白色
  1.0        // 强度
);
directionalLight.position.set(5, 10, 5);
directionalLight.castShadow = true;  // 启用阴影

// 配置阴影属性
directionalLight.shadow.camera.left = -10;
directionalLight.shadow.camera.right = 10;
directionalLight.shadow.camera.top = 10;
directionalLight.shadow.camera.bottom = -10;
directionalLight.shadow.camera.near = 0.1;
directionalLight.shadow.camera.far = 50;
directionalLight.shadow.mapSize.width = 2048;   // 阴影贴图分辨率
directionalLight.shadow.mapSize.height = 2048;

scene.add(directionalLight);

// 3. 点光源 - 模拟灯泡
const pointLight = new THREE.PointLight(
  0xff0000,  // 红色
  1.0,       // 强度
  100,       // 影响距离
  2          // 衰减程度
);
pointLight.position.set(0, 3, 0);
pointLight.castShadow = true;

// 为点光源添加可视化辅助对象
const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.5);
scene.add(pointLightHelper);

scene.add(pointLight);

// 4. 聚光灯 - 模拟手电筒
const spotLight = new THREE.SpotLight(
  0xffffff,         // 白色
  1.0,              // 强度
  100,              // 影响距离
  Math.PI / 6,      // 光束角度
  0.5,              // 半影衰减
  2                 // 衰减程度
);
spotLight.position.set(0, 10, 0);
spotLight.target.position.set(0, 0, 0);  // 光源目标
spotLight.castShadow = true;

// 配置聚光灯阴影
spotLight.shadow.camera.near = 0.1;
spotLight.shadow.camera.far = 50;
spotLight.shadow.camera.fov = 30;
spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;

scene.add(spotLight);
scene.add(spotLight.target);

// 5. 半球光 - 模拟天空和地面
const hemisphereLight = new THREE.HemisphereLight(
  0x87ceeb,  // 天空颜色（天蓝色）
  0x8b4513,  // 地面颜色（棕色）
  0.6        // 强度
);
scene.add(hemisphereLight);

// 渲染器阴影设置
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;  // 柔和阴影

// 物体阴影设置
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
cube.castShadow = true;     // 物体投射阴影
cube.receiveShadow = true;  // 物体接收阴影
scene.add(cube);

// 地面接收阴影
const planeGeometry = new THREE.PlaneGeometry(20, 20);
const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
plane.receiveShadow = true;
scene.add(plane);

// 动态光照
function animateLights(time) {
  pointLight.position.x = Math.sin(time) * 5;
  pointLight.position.z = Math.cos(time) * 5;
  pointLight.intensity = Math.sin(time * 2) * 0.5 + 1.0;
}`,
        },
        {
          id: "animation",
          name: "动画",
          link: "https://threejs.org/docs/#api/en/animation/AnimationMixer",
          description: "动画让 3D 场景动起来，创造生动的视觉效果。",
          content: `Three.js 中的动画主要通过 requestAnimationFrame 实现连续的帧更新。动画可以改变物体的位置、旋转、缩放以及材质属性。

**动画循环**：
使用 requestAnimationFrame 创建动画循环，它会在浏览器准备好渲染下一帧时调用回调函数，通常是每秒 60 次。

**变换动画**：

1. **位置动画**：改变物体的 \`position\` 属性
2. **旋转动画**：改变物体的 \`rotation\` 属性
3. **缩放动画**：改变物体的 \`scale\` 属性

**时间管理**：
使用 THREE.Clock 来跟踪时间，确保动画在不同帧率下保持一致的速度。

**关键帧动画**：
Three.js 的 AnimationMixer 系统支持复杂的关键帧动画，适用于模型动画。

**性能优化**：
- 只更新需要动画的对象
- 使用 requestAnimationFrame 而不是 setInterval
- 避免在动画循环中创建新对象
- 使用对象池复用对象`,
          codeExample: `import * as THREE from 'three';

// 创建场景、相机、渲染器
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

// 创建要动画的物体
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 添加光源
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(5, 5, 5);
scene.add(light);
scene.add(new THREE.AmbientLight(0x404040));

// 创建时钟用于时间管理
const clock = new THREE.Clock();

// 基本动画循环
function animate() {
  requestAnimationFrame(animate);

  // 获取经过的时间
  const elapsedTime = clock.getElapsedTime();

  // 旋转动画
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // 渲染场景
  renderer.render(scene, camera);
}

// 启动动画
animate();

// 更复杂的动画示例
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 32, 32),
  new THREE.MeshStandardMaterial({ color: 0xff0000 })
);
scene.add(sphere);

function complexAnimate() {
  requestAnimationFrame(complexAnimate);

  const time = clock.getElapsedTime();

  // 正弦波运动
  sphere.position.x = Math.sin(time) * 3;
  sphere.position.y = Math.cos(time) * 2;

  // 脉冲缩放
  const scale = Math.sin(time * 2) * 0.5 + 1.5;
  sphere.scale.set(scale, scale, scale);

  // 颜色动画
  const hue = (time * 0.1) % 1;
  sphere.material.color.setHSL(hue, 1, 0.5);

  // 相机环绕
  camera.position.x = Math.sin(time * 0.5) * 5;
  camera.position.z = Math.cos(time * 0.5) * 5;
  camera.lookAt(0, 0, 0);

  renderer.render(scene, camera);
}

// 使用 Tween 库的示例（需要安装 @tweenjs/tween.js）
import TWEEN from '@tweenjs/tween.js';

const targetCube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0x0000ff })
);
scene.add(targetCube);

// 创建补间动画
new TWEEN.Tween(targetCube.position)
  .to({ x: 3, y: 2, z: 0 }, 2000)  // 2秒内移动到目标位置
  .easing(TWEEN.Easing.Quadratic.InOut)
  .repeat(Infinity)
  .yoyo(true)
  .start();

function animateWithTween() {
  requestAnimationFrame(animateWithTween);

  TWEEN.update();  // 更新补间动画

  renderer.render(scene, camera);
}

// AnimationMixer 示例（用于模型动画）
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const loader = new GLTFLoader();
let mixer;

loader.load('/models/animated-model.glb', (gltf) => {
  const model = gltf.scene;
  scene.add(model);

  // 创建动画混合器
  mixer = new THREE.AnimationMixer(model);

  // 播放所有动画
  gltf.animations.forEach((clip) => {
    mixer.clipAction(clip).play();
  });
});

function animateWithMixer() {
  requestAnimationFrame(animateWithMixer);

  const delta = clock.getDelta();

  // 更新动画混合器
  if (mixer) {
    mixer.update(delta);
  }

  renderer.render(scene, camera);
}

// 性能优化的动画循环
let lastTime = 0;
const targetFPS = 60;
const frameInterval = 1000 / targetFPS;

function optimizedAnimate(currentTime) {
  requestAnimationFrame(optimizedAnimate);

  const deltaTime = currentTime - lastTime;

  if (deltaTime >= frameInterval) {
    lastTime = currentTime - (deltaTime % frameInterval);

    // 只在达到目标帧率时更新
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }
}`,
        },
      ],
    },
    {
      title: "实战案例",
      items: [
        {
          id: "threejs-examples",
          name: "Three.js 实战案例",
          link: "https://threejs.org/examples/",
          description: "通过实际案例深入学习 Three.js 3D 渲染、粒子系统和交互效果的应用技巧。",
          content: "这些案例展示了 Three.js 在实际开发中的应用，包括 3D 模型渲染、粒子效果、高级着色器等核心场景。每个案例都包含完整的代码实现和详细说明，帮助你快速掌握 Three.js 的精髓。"
        },
      ],
    },
  ],
};
