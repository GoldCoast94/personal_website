import React from 'react';

interface Props {
  className?: string;
}

export default function カスタム関数型({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">4.3.1 カスタム関数型</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// 関数型を定義
type Operation func(int, int) int

// 関数型をパラメータとして使用
func calculate(a, b int, op Operation) int {
    return op(a, b)
}

// 関数型のメソッド
type Calculator struct {
    operation Operation
}

func (c *Calculator) SetOperation(op Operation) {
    c.operation = op
}

func (c *Calculator) Calculate(a, b int) int {
    if c.operation == nil {
        return 0
    }
    return c.operation(a, b)
}

func main() {
    // 具体的な操作関数を定義
    add := func(a, b int) int { return a + b }
    sub := func(a, b int) int { return a - b }
    mul := func(a, b int) int { return a * b }

    // 関数型を使用
    fmt.Println(calculate(10, 5, add))  // 15
    fmt.Println(calculate(10, 5, sub))  // 5
    fmt.Println(calculate(10, 5, mul))  // 50

    // 計算機を使用
    calc := &Calculator{}
    calc.SetOperation(add)
    fmt.Println(calc.Calculate(20, 10))  // 30

    calc.SetOperation(mul)
    fmt.Println(calc.Calculate(20, 10))  // 200
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '4-3-1',
  title: 'カスタム関数型',
  section: '4.3.1'
};
