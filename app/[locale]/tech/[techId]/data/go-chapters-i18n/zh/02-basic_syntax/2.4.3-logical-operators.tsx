import React from 'react';

interface Props {
  className?: string;
}

export default function 逻辑运算符({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.4.3 逻辑运算符</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    a, b := true, false

    fmt.Println("AND (&&):", a && b)  // false
    fmt.Println("OR (||):", a || b)   // true
    fmt.Println("NOT (!):", !a)       // false

    // 短路运算
    x := 5
    if x > 0 && x < 10 {
        fmt.Println("x在0到10之间")
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-4-3',
  title: '逻辑运算符',
  section: '2.4.3'
};
