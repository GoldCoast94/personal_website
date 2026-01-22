import React from 'react';

interface Props {
  className?: string;
}

export default function 练习7杨辉三角({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习7：杨辉三角</h3>

      <ul>
        <li>*题目：** 打印杨辉三角的前n行。</li>
      </ul>

      <ul>
        <li>*示例（n=5）：**</li>
      </ul>

      <pre className="code-block">
        <code className="language-go">{`1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1`}</code>
      </pre>
      <p>## 3.6 练习答案</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习7：杨辉三角',
  section: '0'
};
