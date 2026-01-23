import React from 'react';

interface Props {
  className?: string;
}

export default function 名前付きサンプル({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">10.5.2 名前付きサンプル</h3>

      <pre className="code-block">
        <code className="language-go">{`package calculator

import "fmt"

func ExampleAdd_positive() {
    fmt.Println(Add(2, 3))
    // Output: 5
}

func ExampleAdd_negative() {
    fmt.Println(Add(-2, -3))
    // Output: -5
}`}</code>
      </pre>
      <p>## 10.6 モックとインターフェース</p>

    </div>
  );
}

export const metadata = {
  id: '10-5-2',
  title: '名前付きサンプル',
  section: '10.5.2'
};
