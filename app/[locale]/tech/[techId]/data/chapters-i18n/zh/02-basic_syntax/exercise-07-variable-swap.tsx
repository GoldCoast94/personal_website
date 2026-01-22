import React from 'react';

interface Props {
  className?: string;
}

export default function 练习1变量交换({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习1：变量交换</h3>

      <ul>
        <li>*题目：** 不使用第三个变量，交换两个变量的值。</li>
      </ul>

      <ul>
        <li>*要求：**</li>
        <li>使用算术运算实现</li>
        <li>使用位运算实现</li>
        <li>使用Go的多重赋值实现</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习1：变量交换',
  section: '0'
};
