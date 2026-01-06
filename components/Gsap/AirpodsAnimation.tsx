"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import CometLoading from "../CometLoading";

const frameCount = 147;
const urls = new Array(frameCount)
  .fill(null)
  .map(
    (_, i) =>
      `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(
        i + 1
      )
        .toString()
        .padStart(4, "0")}.jpg`
  );

// 全局图片缓存，避免重复加载
const imageCache = new Map<string, HTMLImageElement>();
let isPreloading = false;

export const AirpodsAnimation: React.FC = () => {
  const modalCanvasRef = useRef<HTMLCanvasElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  // 更新 canvas 尺寸
  useEffect(() => {
    const updateCanvasSize = () => {
      const maxWidth = window.innerWidth * 0.9;
      const maxHeight = window.innerHeight * 0.9;
      const aspectRatio = 16 / 9;

      let width = maxWidth;
      let height = width / aspectRatio;

      if (height > maxHeight) {
        height = maxHeight;
        width = height * aspectRatio;
      }

      setCanvasSize({ width, height });
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);
    return () => window.removeEventListener("resize", updateCanvasSize);
  }, []);

  // 预加载图片函数
  const preloadImages = async () => {
    if (isPreloading) return; // 防止重复加载

    // 检查是否已经全部缓存
    if (imageCache.size === frameCount) {
      const cachedImages = urls.map((url) => imageCache.get(url)!);
      imagesRef.current = cachedImages;
      setIsLoading(false);
      return;
    }

    isPreloading = true;
    setIsLoading(true);
    setError(null);
    const images: HTMLImageElement[] = [];

    try {
      // 使用 Promise.all 并发加载，提高加载速度
      const loadPromises = urls.map((url, i) => {
        return new Promise<HTMLImageElement>((resolve, reject) => {
          // 先检查缓存
          if (imageCache.has(url)) {
            resolve(imageCache.get(url)!);
            return;
          }

          const img = new window.Image();
          // 设置 crossOrigin 以支持浏览器缓存
          img.crossOrigin = "anonymous";
          img.src = url;

          img.onload = () => {
            imageCache.set(url, img); // 缓存图片
            setLoadProgress(Math.round(((i + 1) / frameCount) * 100));
            resolve(img);
          };
          img.onerror = () => reject(new Error(`Failed to load image ${i + 1}`));
        });
      });

      images.push(...(await Promise.all(loadPromises)));
      imagesRef.current = images;
      setIsLoading(false);
      isPreloading = false;
    } catch (error) {
      console.error("Error loading images:", error);
      setError("加载图片失败，请刷新重试");
      setIsLoading(false);
      isPreloading = false;
    }
  };

  // 组件挂载时预加载第一帧，打开弹窗时加载全部
  useEffect(() => {
    // 预加载第一帧用于预览
    if (!imageCache.has(urls[0])) {
      const img = new window.Image();
      img.crossOrigin = "anonymous";
      img.src = urls[0];
      img.onload = () => imageCache.set(urls[0], img);
    }
  }, []);

  // 打开弹窗时才开始加载全部图片
  useEffect(() => {
    if (isOpen && imageCache.size < frameCount) {
      preloadImages();
    } else if (isOpen && imageCache.size === frameCount) {
      // 如果已经全部缓存，直接使用缓存
      const cachedImages = urls.map((url) => imageCache.get(url)!);
      imagesRef.current = cachedImages;
    }
  }, [isOpen]);

  // 弹窗动画
  useEffect(() => {
    if (!modalCanvasRef.current || !imagesRef.current[currentFrame]) return;

    const canvas = modalCanvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    try {
      const img = imagesRef.current[currentFrame];
      const scaleX = canvas.width / img.width;
      const scaleY = canvas.height / img.height;
      const scale = Math.min(scaleX, scaleY);

      const drawWidth = img.width * scale;
      const drawHeight = img.height * scale;
      const offsetX = (canvas.width - drawWidth) / 2;
      const offsetY = (canvas.height - drawHeight) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    } catch (error) {
      console.error("Error rendering frame:", error);
      setError("渲染图片失败");
    }
  }, [currentFrame, canvasSize]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY;
    setCurrentFrame((prev) => {
      const next = prev + (delta > 0 ? 1 : -1);
      return Math.max(0, Math.min(frameCount - 1, next));
    });
  };

  return (
    <>
      <div className="relative h-[400px] bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src={urls[currentFrame]}
            alt="Airpods Animation"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-gray-500 dark:text-gray-400">
          使用滚轮控制动画播放
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={() => setIsOpen(true)}
          className="px-8 py-3 text-lg bg-indigo-500 text-white rounded-lg shadow-lg hover:bg-indigo-600 transition-colors duration-200 cursor-pointer"
        >
          查看完整动画
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative w-full h-full flex items-center justify-center">
            <div
              className="bg-black rounded-xl p-4 md:p-6 relative"
              style={{ width: canvasSize.width, height: canvasSize.height }}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 md:top-4 md:right-4 text-gray-400 hover:text-gray-200 z-50 cursor-pointer"
              >
                <svg
                  className="w-6 h-6 md:w-8 md:h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div
                className="w-full h-full overflow-hidden relative"
                onWheel={handleWheel}
              >
                {isLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black z-20">
                    <CometLoading />
                    <div className="mt-4 text-white">
                      加载中... {loadProgress}%
                    </div>
                    <div className="mt-2 text-gray-400 text-sm">
                      {imageCache.size > 0 ? "使用缓存加速加载" : "首次加载"}
                    </div>
                  </div>
                )}
                {error && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black z-20">
                    <div className="text-red-400">{error}</div>
                  </div>
                )}
                <div className="w-full h-full flex items-center justify-center">
                  <canvas
                    ref={modalCanvasRef}
                    className="max-w-full max-h-full object-contain"
                    width={canvasSize.width}
                    height={canvasSize.height}
                  />
                </div>
                <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 text-sm md:text-base text-gray-400">
                  使用滚轮控制动画播放
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
