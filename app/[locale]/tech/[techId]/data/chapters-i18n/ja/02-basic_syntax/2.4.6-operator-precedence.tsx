import React from 'react';

interface Props {
  className?: string;
}

export default function 演算子の優先順位({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.4.6 演算子の優先順位</h3>

      <pre className="code-block">
        <code className="language-go">{`優先順位（高い順）：
1. ()                    括弧
2. ++, --               インクリメント、デクリメント
3. *, /, %, <<, >>, &, &^  乗除、ビット演算
4. +, -, |, ^           加減、ビットOR、ビットXOR
5. ==, !=, <, <=, >, >=  関係演算子
6. &&                   論理AND
7. ||                   論理OR`}</code>
      </pre>
      <p>## 2.5 制御フロー</p>

    </div>
  );
}

export const metadata = {
  id: '2-4-6',
  title: '演算子の優先順位',
  section: '2.4.6'
};
