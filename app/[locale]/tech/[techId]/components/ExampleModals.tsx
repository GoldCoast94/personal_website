"use client";

import { useTranslations } from 'next-intl';
import { Modal } from '@/components/Gsap/Modal';
import dynamic from 'next/dynamic';

// 优化：使用动态导入实现代码分割，仅在需要时加载重型组件
const RotatingCube = dynamic(() => import('@/components/ThreeJS').then(mod => ({ default: mod.RotatingCube })), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center h-full"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div></div>
});

const ParticleSystem = dynamic(() => import('@/components/ThreeJS').then(mod => ({ default: mod.ParticleSystem })), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center h-full"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div></div>
});

const AirpodsAnimation = dynamic(() => import('@/components/Gsap/AirpodsAnimation').then(mod => ({ default: mod.AirpodsAnimation })), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center h-full"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div></div>
});

const ScrollAnimation = dynamic(() => import('@/components/Gsap').then(mod => ({ default: mod.ScrollAnimation })), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center h-full"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div></div>
});

const TimelineAnimation = dynamic(() => import('@/components/Gsap').then(mod => ({ default: mod.TimelineAnimation })), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center h-full"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div></div>
});

interface ExampleModalsProps {
  selectedExample: string | null;
  onClose: () => void;
}

export function ExampleModals({ selectedExample, onClose }: ExampleModalsProps) {
  const t = useTranslations('tech');
  const tExamples = useTranslations('examples');

  return (
    <>
      {/* Three.js Modals */}
      <Modal
        isOpen={selectedExample === "rotating-cube"}
        onClose={onClose}
        title={t('threejsExamples.rotatingCube.title')}
      >
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {tExamples('functionalDescription')}
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              {t('threejsExamples.rotatingCube.modalDescription')}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {tExamples('liveDemo')}
            </h4>
            <div className="relative h-[500px] bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden">
              <RotatingCube />
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={selectedExample === "particle-system"}
        onClose={onClose}
        title={t('threejsExamples.particleSystem.title')}
      >
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {tExamples('functionalDescription')}
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              {t('threejsExamples.particleSystem.modalDescription')}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {tExamples('liveDemo')}
            </h4>
            <div className="relative h-[500px] bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden">
              <ParticleSystem />
            </div>
          </div>
        </div>
      </Modal>

      {/* GSAP Modals */}
      <Modal
        isOpen={selectedExample === "airpods"}
        onClose={onClose}
        title={t('gsapExamples.airpods.title')}
      >
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {tExamples('functionalDescription')}
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              {t('gsapExamples.airpods.modalDescription')}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {tExamples('liveDemo')}
            </h4>
            <div className="relative h-[500px] bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden">
              <AirpodsAnimation />
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={selectedExample === "timeline"}
        onClose={onClose}
        title={t('gsapExamples.timeline.title')}
      >
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {tExamples('functionalDescription')}
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              {t('gsapExamples.timeline.modalDescription')}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {tExamples('liveDemo')}
            </h4>
            <div className="relative h-[400px] bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden">
              <TimelineAnimation />
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={selectedExample === "scroll"}
        onClose={onClose}
        title={t('gsapExamples.scroll.title')}
      >
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {tExamples('functionalDescription')}
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              {t('gsapExamples.scroll.modalDescription')}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {tExamples('liveDemo')}
            </h4>
            <div className="relative h-[600px] bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden">
              <ScrollAnimation />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
