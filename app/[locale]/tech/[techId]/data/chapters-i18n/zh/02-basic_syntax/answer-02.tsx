import React from 'react';

interface Props {
  className?: string;
}

export default function 练习6答案({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习6答案</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    n := 20
    fmt.Printf("斐波那契数列前%d项:\n", n)

    // 方法1：使用循环
    a, b := 0, 1
    for i := 0; i < n; i++ {
        fmt.Printf("%d ", a)
        a, b = b, a+b
    }
    fmt.Println()

    // 方法2：使用切片存储
    fib := make([]int, n)
    fib[0], fib[1] = 0, 1
    for i := 2; i < n; i++ {
        fib[i] = fib[i-1] + fib[i-2]
    }

    fmt.Println("\n使用切片存储:")
    for i, v := range fib {
        fmt.Printf("F(%d) = %d\n", i, v)
    }
}`}</code>
      </pre>

      <ul>
        <li>*输出：**</li>
      </ul>

      <pre className="code-block">
        <code className="language-go">{`斐波那契数列前20项:
0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181

使用切片存储:
F(0) = 0
F(1) = 1
F(2) = 1
F(3) = 2
F(4) = 3
F(5) = 5
...`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习6答案',
  section: '0'
};
