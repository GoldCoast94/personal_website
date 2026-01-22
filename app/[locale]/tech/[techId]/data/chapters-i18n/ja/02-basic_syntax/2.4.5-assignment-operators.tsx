import React from 'react';

interface Props {
  className?: string;
}

export default function 代入演算子({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.4.5 代入演算子</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    a := 10

    a += 5   // a = a + 5
    fmt.Println("+=:", a)  // 15

    a -= 3   // a = a - 3
    fmt.Println("-=:", a)  // 12

    a *= 2   // a = a * 2
    fmt.Println("*=:", a)  // 24

    a /= 4   // a = a / 4
    fmt.Println("/=:", a)  // 6

    a %= 4   // a = a % 4
    fmt.Println("%=:", a)  // 2

    a <<= 2  // a = a << 2
    fmt.Println("<<=:", a)  // 8

    a >>= 1  // a = a >> 1
    fmt.Println(">>=:", a)  // 4

    a &= 3   // a = a & 3
    fmt.Println("&=:", a)  // 0

    a |= 5   // a = a | 5
    fmt.Println("|=:", a)  // 5

    a ^= 3   // a = a ^ 3
    fmt.Println("^=:", a)  // 6
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-4-5',
  title: '代入演算子',
  section: '2.4.5'
};
