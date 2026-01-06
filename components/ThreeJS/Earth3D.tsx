"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export const Earth3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    // 创建场景
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // 创建相机
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3;

    // 创建渲染器
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    containerRef.current.appendChild(renderer.domElement);

    // 创建地球
    const geometry = new THREE.SphereGeometry(1, 64, 64);

    // 加载地球纹理
    const textureLoader = new THREE.TextureLoader();

    // 使用 NASA 的真实地球纹理 (Blue Marble)
    const earthTexture = textureLoader.load(
      "https://unpkg.com/three-globe@2.31.1/example/img/earth-blue-marble.jpg",
      () => setIsLoading(false)
    );

    // 加载地球夜晚纹理（城市灯光）
    const nightTexture = textureLoader.load(
      "https://unpkg.com/three-globe@2.31.1/example/img/earth-night.jpg"
    );

    // 创建着色器材质实现真实的地球效果
    const material = new THREE.ShaderMaterial({
      uniforms: {
        dayTexture: { value: earthTexture },
        nightTexture: { value: nightTexture },
        sunDirection: { value: new THREE.Vector3(5, 3, 5).normalize() },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D dayTexture;
        uniform sampler2D nightTexture;
        uniform vec3 sunDirection;
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
          // 采样日间和夜间纹理
          vec3 dayColor = texture2D(dayTexture, vUv).rgb;
          vec3 nightColor = texture2D(nightTexture, vUv).rgb;

          // 计算光照
          vec3 normal = normalize(vNormal);
          float sunIntensity = max(dot(normal, sunDirection), 0.0);

          // 在日夜交界处创建平滑过渡
          float mixFactor = smoothstep(-0.1, 0.2, sunIntensity);

          // 混合日间和夜间纹理
          vec3 baseColor = mix(nightColor * 1.5, dayColor, mixFactor);

          // 添加环境光
          vec3 ambient = baseColor * 0.3;

          // 添加漫反射光照
          vec3 diffuse = baseColor * sunIntensity;

          // 添加高光效果（海洋反光）
          vec3 viewDir = normalize(-vPosition);
          vec3 reflectDir = reflect(-sunDirection, normal);
          float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32.0);
          vec3 specular = vec3(0.5) * spec * sunIntensity;

          // 最终颜色
          vec3 color = ambient + diffuse + specular;

          gl_FragColor = vec4(color, 1.0);
        }
      `,
    });

    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // 添加大气层效果
    const atmosphereGeometry = new THREE.SphereGeometry(1.1, 64, 64);
    const atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);

    // 添加星空背景
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.02,
    });

    const starsVertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starsVertices.push(x, y, z);
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starsVertices, 3)
    );
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // 添加点光源
    const pointLight = new THREE.PointLight(0xffffff, 1.5);
    pointLight.position.set(5, 3, 5);
    scene.add(pointLight);

    // 动画
    const animate = () => {
      requestAnimationFrame(animate);

      // 地球自转
      earth.rotation.y += 0.001;
      atmosphere.rotation.y += 0.001;
      stars.rotation.y += 0.0001;

      renderer.render(scene, camera);
    };

    animate();

    // 鼠标交互
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;
      mouseX = (event.clientX / containerRef.current.clientWidth) * 2 - 1;
      mouseY = -(event.clientY / containerRef.current.clientHeight) * 2 + 1;

      earth.rotation.x = mouseY * 0.3;
      earth.rotation.y = mouseX * 0.3;
      atmosphere.rotation.x = mouseY * 0.3;
      atmosphere.rotation.y = mouseX * 0.3;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 处理窗口大小变化
    const handleResize = () => {
      if (!containerRef.current) return;

      camera.aspect =
        containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
    };

    window.addEventListener("resize", handleResize);

    // 清理
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      containerRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10">
          <div className="text-white text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p>加载地球纹理中...</p>
          </div>
        </div>
      )}
    </div>
  );
};
