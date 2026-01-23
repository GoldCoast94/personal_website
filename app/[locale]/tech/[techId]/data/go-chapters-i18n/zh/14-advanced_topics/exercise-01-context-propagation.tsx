import React from 'react';

interface Props {
  className?: string;
}

export default function 练习3上下文传播({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习3：上下文传播</h3>
      <p>实现一个HTTP中间件，使用context传递请求ID。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习3：上下文传播',
  section: '0'
};
