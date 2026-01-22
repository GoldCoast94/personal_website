import React from 'react';

interface Props {
  className?: string;
}

export default function 练习5重试机制({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习5：重试机制</h3>
      <p>实现一个通用的重试函数，支持指数退避策略。</p>
      <p>## 9.9 练习答案</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习5：重试机制',
  section: '0'
};
