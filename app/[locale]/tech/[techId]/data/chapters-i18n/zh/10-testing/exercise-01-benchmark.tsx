import React from 'react';

interface Props {
  className?: string;
}

export default function 练习4基准测试({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习4：基准测试</h3>
      <p>比较不同字符串拼接方法的性能。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习4：基准测试',
  section: '0'
};
