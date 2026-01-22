import React from 'react';

interface Props {
  className?: string;
}

export default function Goto和标签({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.5.4 goto和标签</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // goto跳转
    i := 0
Loop:
    if i < 5 {
        fmt.Println(i)
        i++
        goto Loop
    }

    // break标签
    fmt.Println("break标签示例:")
OuterLoop:
    for i := 0; i < 3; i++ {
        for j := 0; j < 3; j++ {
            if i == 1 && j == 1 {
                break OuterLoop  // 跳出外层循环
            }
            fmt.Printf("i=%d, j=%d\n", i, j)
        }
    }

    // continue标签
    fmt.Println("continue标签示例:")
Outer:
    for i := 0; i < 3; i++ {
        for j := 0; j < 3; j++ {
            if j == 1 {
                continue Outer  // 继续外层循环
            }
            fmt.Printf("i=%d, j=%d\n", i, j)
        }
    }
}`}</code>
      </pre>
      <p>## 2.6 练习题</p>

    </div>
  );
}

export const metadata = {
  id: '2-5-4',
  title: 'goto和标签',
  section: '2.5.4'
};
