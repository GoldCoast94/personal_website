import React from 'react';

interface Props {
  className?: string;
}

export default function 练习2切片去重({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习2：切片去重</h3>

      <ul>
        <li>*题目：** 编写函数实现切片去重。</li>
      </ul>

      <ul>
        <li>*要求：**</li>
        <li>保持原有顺序</li>
        <li>实现一个通用的去重函数（提示：使用map）</li>
      </ul>

      <ul>
        <li>*测试数据：** <code>{'[]int{1, 2, 3, 2, 4, 3, 5, 1, 6}'}</code></li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习2：切片去重',
  section: '0'
};
