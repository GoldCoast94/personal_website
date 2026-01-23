import React from 'react';

interface Props {
  className?: string;
}

export default function 練習問題1解答({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習問題1解答</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    n := 20
    fmt.Printf("フィボナッチ数列の最初の%d項:\n", n)

    // 方法1：ループを使用
    a, b := 0, 1
    for i := 0; i < n; i++ {
        fmt.Printf("%d ", a)
        a, b = b, a+b
    }
    fmt.Println()

    // 方法2：スライスで格納
    fib := make([]int, n)
    fib[0], fib[1] = 0, 1
    for i := 2; i < n; i++ {
        fib[i] = fib[i-1] + fib[i-2]
    }

    fmt.Println("\nスライスで格納:")
    for i, v := range fib {
        fmt.Printf("F(%d) = %d\n", i, v)
    }
}`}</code>
      </pre>

      <ul>
        <li>**出力:**</li>
      </ul>

      <pre className="code-block">
        <code className="language-go">{`フィボナッチ数列の最初の20項:
0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181

スライスで格納:
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
  title: '練習問題1解答',
  section: '0'
};
