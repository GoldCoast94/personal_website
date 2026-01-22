import React from 'react';

interface Props {
  className?: string;
}

export default function 函数作为值({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">4.2.1 函数作为值</h3>
      <p>在Go中，函数是一等公民，可以赋值给变量：</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "math"
)

func main() {
    // 函数赋值给变量
    add := func(a, b int) int {
        return a + b
    }

    result := add(3, 5)
    fmt.Println("Result:", result)

    // 函数作为参数
    compute := func(a, b int, op func(int, int) int) int {
        return op(a, b)
    }

    sum := compute(10, 5, add)
    fmt.Println("Sum:", sum)

    // 匿名函数作为参数
    product := compute(10, 5, func(a, b int) int {
        return a * b
    })
    fmt.Println("Product:", product)

    // 函数作为返回值
    getOperation := func(op string) func(int, int) int {
        switch op {
        case "add":
            return func(a, b int) int { return a + b }
        case "sub":
            return func(a, b int) int { return a - b }
        case "mul":
            return func(a, b int) int { return a * b }
        default:
            return func(a, b int) int { return 0 }
        }
    }

    addFunc := getOperation("add")
    fmt.Println("5 + 3 =", addFunc(5, 3))

    mulFunc := getOperation("mul")
    fmt.Println("5 * 3 =", mulFunc(5, 3))
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '4-2-1',
  title: '函数作为值',
  section: '4.2.1'
};
