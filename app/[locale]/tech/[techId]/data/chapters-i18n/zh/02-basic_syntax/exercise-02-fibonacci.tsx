import React from 'react';

interface Props {
  className?: string;
}

export default function 练习6斐波那契数列({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习6：斐波那契数列</h3>

      <ul>
        <li>*题目：** 生成斐波那契数列的前20项。</li>
      </ul>

      <ul>
        <li>*要求：**</li>
        <li>使用循环实现</li>
        <li>输出格式：0 1 1 2 3 5 8 13 ...</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习6：斐波那契数列',
  section: '0'
};
