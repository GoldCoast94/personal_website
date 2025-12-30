"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function AboutPage() {
  const t = useTranslations("about");
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [hasBackgroundImage, setHasBackgroundImage] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // 检查背景图片是否存在
    const img = new Image();
    img.onload = () => setHasBackgroundImage(true);
    img.onerror = () => setHasBackgroundImage(false);
    img.src = "/images/background.jpg";

    const ctx = gsap.context(() => {
      // 标题打字机效果
      gsap.to(titleRef.current, {
        duration: 2,
        text: t("title"),
        ease: "none",
      });

      // 描述文字渐入
      gsap.from(descriptionRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 1,
      });

      // 技能卡片动画
      const skillCards = gsap.utils.toArray<HTMLElement>(".skill-card");
      skillCards.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          duration: 1,
          delay: index * 0.2,
          ease: "power2.out",
        });
      });

      // 时间线动画
      gsap.from(".timeline-item", {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top center",
        },
        opacity: 0,
        x: -100,
        duration: 0.8,
        stagger: 0.3,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const skills = [
    { name: "React", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", level: 90, color: "from-yellow-500 to-orange-500" },
    { name: "TypeScript", level: 85, color: "from-blue-600 to-indigo-600" },
    { name: "CSS 3", level: 90, color: "from-pink-500 to-purple-500" },
    { name: "GSAP", level: 85, color: "from-green-500 to-emerald-500" },
    { name: "Three.js", level: 80, color: "from-red-500 to-pink-500" },
  ];

  const timeline = [
    {
      year: "2024",
      title: t("positions.fullstack"),
      description: t("descriptions.fullstack"),
    },
    {
      year: "2023",
      title: t("positions.frontend"),
      description: t("descriptions.frontend"),
    },
    {
      year: "2022",
      title: t("positions.junior"),
      description: t("descriptions.junior"),
    },
  ];

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gray-50 dark:bg-gray-900"
    >
      {/* 头部区域 */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {hasBackgroundImage ? (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/background.jpg')",
              backgroundBlendMode: "overlay",
            }}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />
        <div className="relative z-10 text-center px-4">
          <h1
            ref={titleRef}
            className="text-6xl font-bold text-gray-100 mb-6"
          />
          <p
            ref={descriptionRef}
            className="text-xl text-gray-100 max-w-2xl mx-auto"
          >
            {t("subtitle")}
          </p>
        </div>
      </div>

      {/* 技能区域 */}
      <div ref={skillsRef} className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            {t("skills")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="skill-card group relative bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 h-[200px] flex flex-col justify-between"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}
                />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
                <div className="relative h-3 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                  <div
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color}`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 时间线区域 */}
      <div ref={timelineRef} className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            {t("timeline")}
          </h2>
          <div className="space-y-6 md:space-y-8">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="timeline-item relative pl-6 md:pl-8 border-l-2 border-indigo-500"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-indigo-500 rounded-full" />
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                    <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                      {item.year}
                    </span>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mt-1 md:mt-0">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
