import React from 'react';

interface Props {
  className?: string;
}

export default function 练习1数组统计({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习1：数组统计</h3>

      <ul>
        <li>*题目：** 给定一个整数数组，统计：</li>
        <li>最大值和最小值</li>
        <li>平均值</li>
        <li>所有元素的和</li>
      </ul>

      <ul>
        <li>*测试数据：** <code>[23, 45, 12, 67, 89, 34, 56]</code></li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习1：数组统计',
  section: '0'
};
