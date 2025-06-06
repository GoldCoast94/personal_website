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

export const AirpodsAnimation: React.FC = () => {
  const modalCanvasRef = useRef<HTMLCanvasElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
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

  // 加载图片
  useEffect(() => {
    const loadImages = async () => {
      setIsLoading(true);
      setError(null);
      const images: HTMLImageElement[] = [];
      let loadedCount = 0;

      for (let i = 0; i < frameCount; i++) {
        try {
          const img = new window.Image();
          img.src = urls[i];
          await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
          });
          images.push(img);
          loadedCount++;
          if (loadedCount === frameCount) {
            imagesRef.current = images;
            setIsLoading(false);
          }
        } catch (error) {
          console.error(`Error loading image ${i + 1}:`, error);
          setError("加载图片失败");
          setIsLoading(false);
          return;
        }
      }
    };

    loadImages();
  }, []);

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
                {!isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black">
                    <CometLoading />
                  </div>
                )}
                {error && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black">
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
