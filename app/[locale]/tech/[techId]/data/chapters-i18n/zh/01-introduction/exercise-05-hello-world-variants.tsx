import React from 'react';

interface Props {
  className?: string;
}

export default function 练习2helloWorld变体({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习2：Hello World变体</h3>

      <ul>
        <li>*题目：** 修改Hello World程序，实现以下功能：</li>
        <li>输出 "欢迎学习Go语言！"</li>
        <li>输出当前的日期和时间</li>
        <li>输出Go的版本信息（提示：使用runtime包）</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习2：Hello World变体',
  section: '0'
};
