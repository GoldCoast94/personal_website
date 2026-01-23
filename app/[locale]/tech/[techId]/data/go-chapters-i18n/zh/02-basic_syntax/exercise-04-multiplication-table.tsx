import React from 'react';

interface Props {
  className?: string;
}

export default function 练习4九九乘法表({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习4：九九乘法表</h3>

      <ul>
        <li>*题目：** 使用嵌套循环打印九九乘法表。</li>
      </ul>

      <ul>
        <li>*输出格式：**</li>
      </ul>

      <pre className="code-block">
        <code className="language-go">{`1*1=1
1*2=2  2*2=4
1*3=3  2*3=6  3*3=9
...`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习4：九九乘法表',
  section: '0'
};
