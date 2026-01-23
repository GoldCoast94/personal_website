import React from 'react';

interface Props {
  className?: string;
}

export default function ゼロ値({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.1.3 ゼロ値</h3>
      <p>Goでは、宣言されたが初期化されていない変数にはゼロ値が割り当てられます:</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    var i int       // 0
    var f float64   // 0.0
    var b bool      // false
    var s string    // ""（空文字列）
    var p *int      // nil

    fmt.Printf("int: %v\n", i)
    fmt.Printf("float64: %v\n", f)
    fmt.Printf("bool: %v\n", b)
    fmt.Printf("string: %q\n", s)
    fmt.Printf("pointer: %v\n", p)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-1-3',
  title: 'ゼロ値',
  section: '2.1.3'
};
