import React from 'react';

interface Props {
  className?: string;
}

export default function 练习1创建数学包({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习1：创建数学包</h3>
      <p>创建一个math包，包含基本的数学运算函数（加减乘除、幂运算、平方根等）。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习1：创建数学包',
  section: '0'
};
