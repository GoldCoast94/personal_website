import React from 'react';

interface Props {
  className?: string;
}

export default function 练习5素数判断({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习5：素数判断</h3>

      <ul>
        <li>*题目：** 编写函数判断一个数是否为素数，并找出1-100之间的所有素数。</li>
      </ul>

      <ul>
        <li>*要求：**</li>
        <li>实现isPrime函数</li>
        <li>使用循环找出所有素数</li>
        <li>输出素数个数</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习5：素数判断',
  section: '0'
};
