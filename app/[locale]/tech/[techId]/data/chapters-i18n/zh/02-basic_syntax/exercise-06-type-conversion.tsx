import React from 'react';

interface Props {
  className?: string;
}

export default function 练习2类型转换练习({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习2：类型转换练习</h3>

      <ul>
        <li>*题目：** 编写程序实现以下转换：</li>
        <li>将字符串"12345"转换为整数</li>
        <li>将浮点数3.14159转换为字符串，保留2位小数</li>
        <li>将布尔值true转换为字符串"true"</li>
        <li>将整数65转换为字符'A'</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习2：类型转换练习',
  section: '0'
};
