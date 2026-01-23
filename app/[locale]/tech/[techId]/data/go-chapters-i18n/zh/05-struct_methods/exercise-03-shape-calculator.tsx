import React from 'react';

interface Props {
  className?: string;
}

export default function 练习3图形计算器({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习3：图形计算器</h3>

      <ul>
        <li>*题目：** 创建一个图形计算器：</li>
        <li>定义<code>Shape</code>接口，包含<code>Area()</code>和<code>Perimeter()</code>方法</li>
        <li>实现多种图形：Circle、Rectangle、Triangle、Square</li>
        <li>实现<code>ShapeCollection</code>结构体：</li>
        <li><code>Add(shape Shape)</code> - 添加图形</li>
        <li><code>TotalArea() float64</code> - 计算所有图形的总面积</li>
        <li><code>AverageArea() float64</code> - 计算平均面积</li>
        <li><code>Largest() Shape</code> - 返回面积最大的图形</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习3：图形计算器',
  section: '0'
};
