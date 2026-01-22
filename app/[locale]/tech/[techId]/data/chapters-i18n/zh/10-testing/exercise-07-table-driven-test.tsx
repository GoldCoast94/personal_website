import React from 'react';

interface Props {
  className?: string;
}

export default function 练习2表格驱动测试({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习2：表格驱动测试</h3>
      <p>使用表格驱动测试验证一个排序函数。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习2：表格驱动测试',
  section: '0'
};
