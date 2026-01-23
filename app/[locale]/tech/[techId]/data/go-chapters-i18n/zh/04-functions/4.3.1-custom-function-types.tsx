import React from 'react';

interface Props {
  className?: string;
}

export default function 自定义函数类型({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">4.3.1 自定义函数类型</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// 定义函数类型
type Operation func(int, int) int

// 使用函数类型作为参数
func calculate(a, b int, op Operation) int {
    return op(a, b)
}

// 函数类型的方法
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
    // 定义具体的操作函数
    add := func(a, b int) int { return a + b }
    sub := func(a, b int) int { return a - b }
    mul := func(a, b int) int { return a * b }

    // 使用函数类型
    fmt.Println(calculate(10, 5, add))  // 15
    fmt.Println(calculate(10, 5, sub))  // 5
    fmt.Println(calculate(10, 5, mul))  // 50

    // 使用计算器
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
  title: '自定义函数类型',
  section: '4.3.1'
};
