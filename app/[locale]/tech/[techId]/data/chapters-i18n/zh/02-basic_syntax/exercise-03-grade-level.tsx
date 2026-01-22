import React from 'react';

interface Props {
  className?: string;
}

export default function 练习3成绩等级判定({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习3：成绩等级判定</h3>

      <ul>
        <li>*题目：** 输入一个成绩（0-100），输出对应等级：</li>
        <li>90-100: A</li>
        <li>80-89: B</li>
        <li>70-79: C</li>
        <li>60-69: D</li>
        <li>0-59: F</li>
      </ul>

      <ul>
        <li>*要求：**</li>
        <li>使用if-else实现</li>
        <li>使用switch实现</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习3：成绩等级判定',
  section: '0'
};
