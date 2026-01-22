import React from 'react';

interface Props {
  className?: string;
}

export default function 练习1实现数学函数库({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习1：实现数学函数库</h3>

      <ul>
        <li>*题目：** 创建一个数学函数库，实现以下功能：</li>
        <li><code>Max(nums ...int) int</code> - 返回最大值</li>
        <li><code>Min(nums ...int) int</code> - 返回最小值</li>
        <li><code>Average(nums ...int) float64</code> - 返回平均值</li>
        <li><code>Sum(nums ...int) int</code> - 返回总和</li>
        <li>处理空参数的情况</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习1：实现数学函数库',
  section: '0'
};
