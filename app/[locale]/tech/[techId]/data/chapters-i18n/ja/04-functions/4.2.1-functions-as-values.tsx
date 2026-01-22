import React from 'react';

interface Props {
  className?: string;
}

export default function 関数を値として({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">4.2.1 関数を値として</h3>
      <p>Goでは、関数はファーストクラスオブジェクトであり、変数に代入できます:</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "math"
)

func main() {
    // 関数を変数に代入
    add := func(a, b int) int {
        return a + b
    }

    result := add(3, 5)
    fmt.Println("Result:", result)

    // 関数をパラメータとして
    compute := func(a, b int, op func(int, int) int) int {
        return op(a, b)
    }

    sum := compute(10, 5, add)
    fmt.Println("Sum:", sum)

    // 無名関数をパラメータとして
    product := compute(10, 5, func(a, b int) int {
        return a * b
    })
    fmt.Println("Product:", product)

    // 関数を戻り値として
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
  title: '関数を値として',
  section: '4.2.1'
};
