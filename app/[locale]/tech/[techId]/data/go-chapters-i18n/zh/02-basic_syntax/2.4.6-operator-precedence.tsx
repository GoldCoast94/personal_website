import React from 'react';

interface Props {
  className?: string;
}

export default function 运算符优先级({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.4.6 运算符优先级</h3>

      <pre className="code-block">
        <code className="language-go">{`优先级（从高到低）：
1. ()                    括号
2. ++, --               自增、自减
3. *, /, %, <<, >>, &, &^  乘除、位运算
4. +, -, |, ^           加减、位或、位异或
5. ==, !=, <, <=, >, >=  关系运算符
6. &&                   逻辑与
7. ||                   逻辑或`}</code>
      </pre>
      <p>## 2.5 控制流程</p>

    </div>
  );
}

export const metadata = {
  id: '2-4-6',
  title: '运算符优先级',
  section: '2.4.6'
};
