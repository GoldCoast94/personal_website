import React from 'react';

interface Props {
  className?: string;
}

export default function 基本的なサンプル({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">10.5.1 基本的なサンプル</h3>

      <pre className="code-block">
        <code className="language-go">{`package calculator

import "fmt"

func ExampleAdd() {
    result := Add(2, 3)
    fmt.Println(result)
    // Output: 5
}

func ExampleSubtract() {
    result := Subtract(5, 3)
    fmt.Println(result)
    // Output: 2
}

// 順序なし出力
func ExampleMultiple() {
    fmt.Println(Add(1, 2))
    fmt.Println(Add(2, 3))
    // Unordered output:
    // 3
    // 5
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '10-5-1',
  title: '基本的なサンプル',
  section: '10.5.1'
};
