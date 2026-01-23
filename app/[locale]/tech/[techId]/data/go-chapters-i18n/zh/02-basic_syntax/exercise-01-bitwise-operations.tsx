import React from 'react';

interface Props {
  className?: string;
}

export default function 练习7位运算应用({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习7：位运算应用</h3>

      <ul>
        <li>*题目：** 使用位运算实现以下功能：</li>
        <li>判断一个数是否是2的幂</li>
        <li>交换两个数</li>
        <li>统计一个数的二进制表示中1的个数</li>
      </ul>
      <p>## 2.7 练习答案</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习7：位运算应用',
  section: '0'
};
