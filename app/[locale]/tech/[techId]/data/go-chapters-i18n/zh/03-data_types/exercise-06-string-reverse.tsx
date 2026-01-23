import React from 'react';

interface Props {
  className?: string;
}

export default function 练习6字符串反转({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习6：字符串反转</h3>

      <ul>
        <li>*题目：** 实现字符串反转功能。</li>
      </ul>

      <ul>
        <li>*要求：**</li>
        <li>支持英文字符串反转</li>
        <li>支持中文字符串反转（按字符反转，不是字节）</li>
      </ul>

      <ul>
        <li>*测试数据：**</li>
        <li>"Hello, World!"</li>
        <li>"你好，世界！"</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习6：字符串反转',
  section: '0'
};
