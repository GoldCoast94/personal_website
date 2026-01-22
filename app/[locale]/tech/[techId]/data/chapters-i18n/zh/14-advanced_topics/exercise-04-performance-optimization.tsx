import React from 'react';

interface Props {
  className?: string;
}

export default function 练习5性能优化({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习5：性能优化</h3>
      <p>优化一个字符串处理程序，使用基准测试比较性能。</p>
      <p>## 14.8 练习答案</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习5：性能优化',
  section: '0'
};
