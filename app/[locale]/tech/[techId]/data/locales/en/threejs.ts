import { TechDetail } from '../../../types';

export const threejsDataEn: TechDetail = {
  name: "Three.js",
  description: "JavaScript 3D library for creating and displaying 3D graphics",
  icon: "/images/threejs-logo.png",
  color: "from-green-500 to-emerald-500",
  officialLink: "https://threejs.org/",
  content: [
    {
      title: "Three.js Basics",
      items: [
        {
          id: "scene-camera",
          name: "Scene & Camera",
          link: "https://threejs.org/docs/#api/en/scenes/Scene",
          description: "Scene and Camera are the foundation of Three.js, with Scene containing all 3D objects and Camera defining the viewing perspective.",
          content: `Scene and Camera are core concepts in Three.js that together form the basic framework of the 3D world.

**Scene**:
The Scene is a container used to store and organize all 3D objects, lights, cameras, and other elements. Every Three.js application requires at least one scene.

**Camera Types**:

1. **PerspectiveCamera**: Simulates human eye perspective, where distant objects appear smaller
   - \`fov\`: Field of View angle, typically set between 45-75 degrees
   - \`aspect\`: Aspect ratio, usually using window aspect ratio
   - \`near\`: Near clipping plane, objects closer than this won't render
   - \`far\`: Far clipping plane, objects farther than this won't render

2. **OrthographicCamera**: No perspective effect, object size doesn't change with distance
   - Suitable for 2D games, CAD applications, architectural visualization

**Camera Positioning**:
- Use \`camera.position.set(x, y, z)\` to set camera position
- Use \`camera.lookAt(x, y, z)\` to set camera direction
- Three.js uses right-hand coordinate system: X-axis right, Y-axis up, Z-axis out

**Scene Hierarchy**:
Objects in the scene can form parent-child relationships, where child object transformations are relative to the parent object.`,
          codeExample: `import * as THREE from 'three';

// Create scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000); // Set background color

// Create perspective camera
const camera = new THREE.PerspectiveCamera(
  75,                                    // fov: field of view
  window.innerWidth / window.innerHeight, // aspect: aspect ratio
  0.1,                                   // near: near clipping plane
  1000                                   // far: far clipping plane
);

// Set camera position
camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0); // Point camera at origin

// Create orthographic camera (for comparison)
const orthographicCamera = new THREE.OrthographicCamera(
  -10, 10,  // left, right
  10, -10,  // top, bottom
  0.1, 1000 // near, far
);

// Scene hierarchy example
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

// Rotate the entire group, both cubes will rotate together
group.rotation.y = Math.PI / 4;

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});`,
        },
        {
          id: "geometries",
          name: "Geometries",
          link: "https://threejs.org/docs/#api/en/geometries/BoxGeometry",
          description: "Geometries define the shape and structure of 3D objects.",
          content: `Geometry defines the shape, vertices, faces, and UV coordinates of 3D objects. Three.js provides rich built-in geometries and supports custom geometries.

**Built-in Geometries**:

1. **BoxGeometry**: Cube/Cuboid
   - Parameters: width, height, depth, segments

2. **SphereGeometry**: Sphere
   - Parameters: radius, horizontal segments, vertical segments

3. **PlaneGeometry**: Plane
   - Parameters: width, height, segments

4. **CylinderGeometry**: Cylinder
   - Parameters: top radius, bottom radius, height, segments

5. **TorusGeometry**: Torus
   - Parameters: radius, tube radius, segments

6. **ConeGeometry**: Cone
   - Parameters: radius, height, segments

**Custom Geometries**:
Use BufferGeometry to create custom shapes by defining vertices, faces, normals, and UV coordinates to build complex geometries.

**Geometry Attributes**:
- \`vertices\`: Vertex positions
- \`faces\`: Faces (composed of vertex indices)
- \`normals\`: Normal vectors (for lighting calculations)
- \`uvs\`: Texture coordinates (for mapping)

**Performance Optimization**:
- Use BufferGeometry instead of Geometry for better performance
- Share geometry instances to reduce memory usage
- Set segment count appropriately to balance visual quality and performance`,
          codeExample: `import * as THREE from 'three';

// Create various built-in geometries
// 1. Box
const boxGeometry = new THREE.BoxGeometry(
  2, 2, 2,  // width, height, depth
  4, 4, 4   // segments (optional)
);

// 2. Sphere
const sphereGeometry = new THREE.SphereGeometry(
  1,    // radius
  32,   // horizontal segments
  16    // vertical segments
);

// 3. Plane
const planeGeometry = new THREE.PlaneGeometry(
  10, 10,  // width, height
  10, 10   // segments
);

// 4. Cylinder
const cylinderGeometry = new THREE.CylinderGeometry(
  1,    // top radius
  1,    // bottom radius
  3,    // height
  32    // segments
);

// 5. Torus
const torusGeometry = new THREE.TorusGeometry(
  2,    // radius
  0.5,  // tube radius
  16,   // radial segments
  100   // tubular segments
);

// Custom geometry - create a triangle
const customGeometry = new THREE.BufferGeometry();

// Define three vertex positions
const vertices = new Float32Array([
  -1.0, -1.0,  0.0,  // vertex 1
   1.0, -1.0,  0.0,  // vertex 2
   0.0,  1.0,  0.0   // vertex 3
]);

// Add vertex data to geometry
customGeometry.setAttribute(
  'position',
  new THREE.BufferAttribute(vertices, 3)
);

// Compute normals (for lighting)
customGeometry.computeVertexNormals();

// Custom geometry - create a cube
const cubeVertices = new Float32Array([
  // Front face
  -1, -1,  1,   1, -1,  1,   1,  1,  1,
  -1, -1,  1,   1,  1,  1,  -1,  1,  1,
  // Back face
  -1, -1, -1,  -1,  1, -1,   1,  1, -1,
  -1, -1, -1,   1,  1, -1,   1, -1, -1,
  // Other four faces...
]);

const cubeGeometry = new THREE.BufferGeometry();
cubeGeometry.setAttribute(
  'position',
  new THREE.BufferAttribute(cubeVertices, 3)
);

// Add color attributes to geometry
const colors = new Float32Array([
  1, 0, 0,  // red
  0, 1, 0,  // green
  0, 0, 1,  // blue
]);

customGeometry.setAttribute(
  'color',
  new THREE.BufferAttribute(colors, 3)
);

// Create material and mesh
const material = new THREE.MeshBasicMaterial({
  vertexColors: true  // Use vertex colors
});

const mesh = new THREE.Mesh(customGeometry, material);

// Geometry transformations
mesh.position.set(0, 0, 0);
mesh.rotation.set(0, Math.PI / 4, 0);
mesh.scale.set(2, 2, 2);`,
        },
        {
          id: "materials",
          name: "Materials",
          link: "https://threejs.org/docs/#api/en/materials/Material",
          description: "Materials define the appearance and lighting response of object surfaces.",
          content: `Materials determine how objects respond to lighting and their visual surface effects. Different material types are suitable for different rendering needs.

**Common Material Types**:

1. **MeshBasicMaterial**: Basic material
   - Not affected by lighting
   - Best performance
   - Suitable for debugging and simple scenes

2. **MeshLambertMaterial**: Lambert material
   - Diffuse reflection, no specular
   - Good performance
   - Suitable for non-glossy surfaces

3. **MeshPhongMaterial**: Phong material
   - Supports specular reflection
   - Medium performance
   - Suitable for glossy surfaces

4. **MeshStandardMaterial**: Standard material
   - Physically Based Rendering (PBR)
   - Most realistic effects
   - Supports roughness and metalness

5. **MeshPhysicalMaterial**: Physical material
   - Extended PBR material
   - Supports clearcoat, sheen, and other advanced effects

**Important Properties**:

- \`color\`: Base color
- \`map\`: Color texture
- \`normalMap\`: Normal map (adds surface detail)
- \`roughness\`: Roughness (0=smooth, 1=rough)
- \`metalness\`: Metalness (0=non-metal, 1=metal)
- \`transparent\`: Whether transparent
- \`opacity\`: Opacity value
- \`side\`: Rendering side (front/back/double)

**Texture Mapping**:
Textures can add rich details to materials, including color maps, normal maps, roughness maps, etc.`,
          codeExample: `import * as THREE from 'three';

// 1. Basic material (not affected by lighting)
const basicMaterial = new THREE.MeshBasicMaterial({
  color: 0xff0000,        // red
  wireframe: false,       // show wireframe
  transparent: false,     // transparent
  opacity: 1.0,          // opacity
  side: THREE.FrontSide  // render front side
});

// 2. Lambert material (diffuse reflection)
const lambertMaterial = new THREE.MeshLambertMaterial({
  color: 0x00ff00,
  emissive: 0x000000,    // emissive color
  emissiveIntensity: 0   // emissive intensity
});

// 3. Phong material (specular)
const phongMaterial = new THREE.MeshPhongMaterial({
  color: 0x0000ff,
  specular: 0xffffff,    // specular color
  shininess: 30          // shininess
});

// 4. Standard material (PBR)
const standardMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  roughness: 0.5,        // roughness
  metalness: 0.5,        // metalness
  envMapIntensity: 1.0   // environment map intensity
});

// 5. Physical material (advanced PBR)
const physicalMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
  roughness: 0.1,
  metalness: 0.9,
  clearcoat: 1.0,        // clearcoat
  clearcoatRoughness: 0.1,
  reflectivity: 0.5
});

// Texture loading
const textureLoader = new THREE.TextureLoader();

// Create textured material
const texturedMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load('/textures/color.jpg'),           // color map
  normalMap: textureLoader.load('/textures/normal.jpg'),    // normal map
  roughnessMap: textureLoader.load('/textures/rough.jpg'),  // roughness map
  metalnessMap: textureLoader.load('/textures/metal.jpg'),  // metalness map
  aoMap: textureLoader.load('/textures/ao.jpg')            // ambient occlusion map
});

// Double-sided material
const doubleSidedMaterial = new THREE.MeshStandardMaterial({
  color: 0xff6347,
  side: THREE.DoubleSide,  // double-sided rendering
  roughness: 0.7
});

// Transparent material
const transparentMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
  transparent: true,
  opacity: 0.5,
  transmission: 0.9,      // transmission
  thickness: 0.5          // thickness
});

// Create mesh objects
const geometry = new THREE.SphereGeometry(1, 32, 32);
const mesh1 = new THREE.Mesh(geometry, standardMaterial);
const mesh2 = new THREE.Mesh(geometry, physicalMaterial);

// Material animation (changing properties over time)
function animateMaterial(time) {
  standardMaterial.roughness = Math.sin(time) * 0.5 + 0.5;
  standardMaterial.metalness = Math.cos(time) * 0.5 + 0.5;
}`,
        },
        {
          id: "lights",
          name: "Lights",
          link: "https://threejs.org/docs/#api/en/lights/Light",
          description: "Lights illuminate objects in the scene, creating realistic lighting and shadow effects.",
          content: `Lights are essential elements in 3D scenes that determine how objects are illuminated and how shadows are rendered. Different light types are suitable for different scene needs.

**Light Types**:

1. **AmbientLight**: Ambient light
   - Uniformly illuminates all objects in the scene
   - Non-directional
   - Does not cast shadows
   - Used to raise overall brightness

2. **DirectionalLight**: Directional light
   - Simulates sunlight
   - Light rays travel parallel
   - Can cast shadows
   - Suitable for large-scale illumination

3. **PointLight**: Point light
   - Emits light rays from a point in all directions
   - Simulates light bulb effect
   - Can cast shadows
   - Has attenuation effect

4. **SpotLight**: Spotlight
   - Cone-shaped light beam
   - Simulates flashlight or stage lighting
   - Can cast shadows
   - Controllable angle and attenuation

5. **HemisphereLight**: Hemisphere light
   - Simulates sky and ground reflected light
   - Has sky color and ground color
   - Does not cast shadows

**Light Properties**:

- \`color\`: Light color
- \`intensity\`: Light intensity
- \`distance\`: Light influence distance
- \`decay\`: Attenuation rate
- \`castShadow\`: Whether to cast shadows

**Shadow Configuration**:
To enable shadows, you need to configure renderer, light, and object shadow properties.`,
          codeExample: `import * as THREE from 'three';

// 1. Ambient light - provides base illumination
const ambientLight = new THREE.AmbientLight(
  0xffffff,  // white
  0.5        // intensity
);
scene.add(ambientLight);

// 2. Directional light - simulates sunlight
const directionalLight = new THREE.DirectionalLight(
  0xffffff,  // white
  1.0        // intensity
);
directionalLight.position.set(5, 10, 5);
directionalLight.castShadow = true;  // enable shadows

// Configure shadow properties
directionalLight.shadow.camera.left = -10;
directionalLight.shadow.camera.right = 10;
directionalLight.shadow.camera.top = 10;
directionalLight.shadow.camera.bottom = -10;
directionalLight.shadow.camera.near = 0.1;
directionalLight.shadow.camera.far = 50;
directionalLight.shadow.mapSize.width = 2048;   // shadow map resolution
directionalLight.shadow.mapSize.height = 2048;

scene.add(directionalLight);

// 3. Point light - simulates light bulb
const pointLight = new THREE.PointLight(
  0xff0000,  // red
  1.0,       // intensity
  100,       // distance
  2          // decay
);
pointLight.position.set(0, 3, 0);
pointLight.castShadow = true;

// Add helper for point light visualization
const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.5);
scene.add(pointLightHelper);

scene.add(pointLight);

// 4. Spotlight - simulates flashlight
const spotLight = new THREE.SpotLight(
  0xffffff,         // white
  1.0,              // intensity
  100,              // distance
  Math.PI / 6,      // angle
  0.5,              // penumbra
  2                 // decay
);
spotLight.position.set(0, 10, 0);
spotLight.target.position.set(0, 0, 0);  // light target
spotLight.castShadow = true;

// Configure spotlight shadows
spotLight.shadow.camera.near = 0.1;
spotLight.shadow.camera.far = 50;
spotLight.shadow.camera.fov = 30;
spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;

scene.add(spotLight);
scene.add(spotLight.target);

// 5. Hemisphere light - simulates sky and ground
const hemisphereLight = new THREE.HemisphereLight(
  0x87ceeb,  // sky color (sky blue)
  0x8b4513,  // ground color (brown)
  0.6        // intensity
);
scene.add(hemisphereLight);

// Renderer shadow settings
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;  // soft shadows

// Object shadow settings
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
cube.castShadow = true;     // object casts shadows
cube.receiveShadow = true;  // object receives shadows
scene.add(cube);

// Ground receives shadows
const planeGeometry = new THREE.PlaneGeometry(20, 20);
const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
plane.receiveShadow = true;
scene.add(plane);

// Dynamic lighting
function animateLights(time) {
  pointLight.position.x = Math.sin(time) * 5;
  pointLight.position.z = Math.cos(time) * 5;
  pointLight.intensity = Math.sin(time * 2) * 0.5 + 1.0;
}`,
        },
        {
          id: "animation",
          name: "Animation",
          link: "https://threejs.org/docs/#api/en/animation/AnimationMixer",
          description: "Animation brings 3D scenes to life, creating vivid visual effects.",
          content: `Animation in Three.js is primarily achieved through requestAnimationFrame for continuous frame updates. Animation can change object position, rotation, scale, and material properties.

**Animation Loop**:
Use requestAnimationFrame to create an animation loop that calls the callback when the browser is ready to render the next frame, typically 60 times per second.

**Transform Animations**:

1. **Position Animation**: Change object's \`position\` property
2. **Rotation Animation**: Change object's \`rotation\` property
3. **Scale Animation**: Change object's \`scale\` property

**Time Management**:
Use THREE.Clock to track time, ensuring animation maintains consistent speed across different frame rates.

**Keyframe Animation**:
Three.js's AnimationMixer system supports complex keyframe animations, suitable for model animations.

**Performance Optimization**:
- Only update objects that need animation
- Use requestAnimationFrame instead of setInterval
- Avoid creating new objects in animation loop
- Use object pools to reuse objects`,
          codeExample: `import * as THREE from 'three';

// Create scene, camera, renderer
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

// Create object to animate
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Add lights
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(5, 5, 5);
scene.add(light);
scene.add(new THREE.AmbientLight(0x404040));

// Create clock for time management
const clock = new THREE.Clock();

// Basic animation loop
function animate() {
  requestAnimationFrame(animate);

  // Get elapsed time
  const elapsedTime = clock.getElapsedTime();

  // Rotation animation
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render scene
  renderer.render(scene, camera);
}

// Start animation
animate();

// More complex animation example
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 32, 32),
  new THREE.MeshStandardMaterial({ color: 0xff0000 })
);
scene.add(sphere);

function complexAnimate() {
  requestAnimationFrame(complexAnimate);

  const time = clock.getElapsedTime();

  // Sinusoidal motion
  sphere.position.x = Math.sin(time) * 3;
  sphere.position.y = Math.cos(time) * 2;

  // Pulsing scale
  const scale = Math.sin(time * 2) * 0.5 + 1.5;
  sphere.scale.set(scale, scale, scale);

  // Color animation
  const hue = (time * 0.1) % 1;
  sphere.material.color.setHSL(hue, 1, 0.5);

  // Camera orbit
  camera.position.x = Math.sin(time * 0.5) * 5;
  camera.position.z = Math.cos(time * 0.5) * 5;
  camera.lookAt(0, 0, 0);

  renderer.render(scene, camera);
}

// Tween library example (requires @tweenjs/tween.js)
import TWEEN from '@tweenjs/tween.js';

const targetCube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0x0000ff })
);
scene.add(targetCube);

// Create tween animation
new TWEEN.Tween(targetCube.position)
  .to({ x: 3, y: 2, z: 0 }, 2000)  // Move to target position in 2 seconds
  .easing(TWEEN.Easing.Quadratic.InOut)
  .repeat(Infinity)
  .yoyo(true)
  .start();

function animateWithTween() {
  requestAnimationFrame(animateWithTween);

  TWEEN.update();  // Update tween animations

  renderer.render(scene, camera);
}

// AnimationMixer example (for model animations)
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const loader = new GLTFLoader();
let mixer;

loader.load('/models/animated-model.glb', (gltf) => {
  const model = gltf.scene;
  scene.add(model);

  // Create animation mixer
  mixer = new THREE.AnimationMixer(model);

  // Play all animations
  gltf.animations.forEach((clip) => {
    mixer.clipAction(clip).play();
  });
});

function animateWithMixer() {
  requestAnimationFrame(animateWithMixer);

  const delta = clock.getDelta();

  // Update animation mixer
  if (mixer) {
    mixer.update(delta);
  }

  renderer.render(scene, camera);
}

// Performance-optimized animation loop
let lastTime = 0;
const targetFPS = 60;
const frameInterval = 1000 / targetFPS;

function optimizedAnimate(currentTime) {
  requestAnimationFrame(optimizedAnimate);

  const deltaTime = currentTime - lastTime;

  if (deltaTime >= frameInterval) {
    lastTime = currentTime - (deltaTime % frameInterval);

    // Only update when target frame rate is reached
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }
}`,
        },
      ],
    },
    {
      title: "Practical Examples",
      items: [
        {
          id: "threejs-examples",
          name: "Three.js Practical Examples",
          link: "https://threejs.org/examples/",
          description: "Learn Three.js 3D rendering, particle systems, and interactive effects through practical examples.",
          content: "These examples demonstrate the application of Three.js in real-world development, including 3D model rendering, particle effects, and advanced shaders. Each example contains complete code implementation and detailed explanations to help you quickly master the essence of Three.js."
        },
      ],
    },
  ],
};
