"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const ParticleSystem: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 创建场景
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);

    // 创建相机
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    // 创建渲染器
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    containerRef.current.appendChild(renderer.domElement);

    // 创建粒子
    const particleCount = 5000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities: THREE.Vector3[] = [];

    for (let i = 0; i < particleCount; i++) {
      // 位置
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;

      // 颜色 (渐变从蓝色到紫色)
      const colorMix = Math.random();
      colors[i * 3] = 0.4 + colorMix * 0.6; // R
      colors[i * 3 + 1] = 0.2 + colorMix * 0.4; // G
      colors[i * 3 + 2] = 0.8 + colorMix * 0.2; // B

      // 速度
      velocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.1,
          (Math.random() - 0.5) * 0.1,
          (Math.random() - 0.5) * 0.1
        )
      );
    }

    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particles.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // 创建材质
    const material = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    // 创建粒子系统
    const particleSystem = new THREE.Points(particles, material);
    scene.add(particleSystem);

    // 动画
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);

      time += 0.01;

      // 更新粒子位置
      const positions = particles.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += velocities[i].x;
        positions[i * 3 + 1] += velocities[i].y;
        positions[i * 3 + 2] += velocities[i].z;

        // 边界检测
        if (Math.abs(positions[i * 3]) > 50) velocities[i].x *= -1;
        if (Math.abs(positions[i * 3 + 1]) > 50) velocities[i].y *= -1;
        if (Math.abs(positions[i * 3 + 2]) > 50) velocities[i].z *= -1;
      }

      particles.attributes.position.needsUpdate = true;

      // 旋转粒子系统
      particleSystem.rotation.y = time * 0.1;
      particleSystem.rotation.x = Math.sin(time * 0.05) * 0.2;

      renderer.render(scene, camera);
    };

    animate();

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
      containerRef.current?.removeChild(renderer.domElement);
      particles.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
};
