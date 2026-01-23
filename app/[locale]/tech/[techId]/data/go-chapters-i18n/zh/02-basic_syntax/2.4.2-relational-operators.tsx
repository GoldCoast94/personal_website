import React from 'react';

interface Props {
  className?: string;
}

export default function 关系运算符({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.4.2 关系运算符</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    a, b := 10, 20

    fmt.Println("==:", a == b)  // false
    fmt.Println("!=:", a != b)  // true
    fmt.Println("<:", a < b)    // true
    fmt.Println(">:", a > b)    // false
    fmt.Println("<=:", a <= b)  // true
    fmt.Println(">=:", a >= b)  // false
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-4-2',
  title: '关系运算符',
  section: '2.4.2'
};
