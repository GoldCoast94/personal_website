import React from 'react';

interface Props {
  className?: string;
}

export default function 练习3二维数组转置({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习3：二维数组转置</h3>

      <ul>
        <li>*题目：** 实现矩阵转置函数。</li>
      </ul>

      <ul>
        <li>*示例：**</li>
      </ul>

      <pre className="code-block">
        <code className="language-go">{`原矩阵:
1 2 3
4 5 6

转置后:
1 4
2 5
3 6`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习3：二维数组转置',
  section: '0'
};
