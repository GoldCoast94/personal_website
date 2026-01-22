import React from 'react';

interface Props {
  className?: string;
}

export default function CustomFunctionTypes({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">4.3.1 Custom Function Types</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// Define function type
type Operation func(int, int) int

// Use function type as parameter
func calculate(a, b int, op Operation) int {
    return op(a, b)
}

// Method on function type
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
    // Define concrete operation functions
    add := func(a, b int) int { return a + b }
    sub := func(a, b int) int { return a - b }
    mul := func(a, b int) int { return a * b }

    // Use function type
    fmt.Println(calculate(10, 5, add))  // 15
    fmt.Println(calculate(10, 5, sub))  // 5
    fmt.Println(calculate(10, 5, mul))  // 50

    // Use calculator
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
  title: 'Custom Function Types',
  section: '4.3.1'
};
