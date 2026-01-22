import React from 'react';

interface Props {
  className?: string;
}

export default function FunctionsAsValues({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">4.2.1 Functions as Values</h3>
      <p>In Go, functions are first-class citizens and can be assigned to variables:</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "math"
)

func main() {
    // Assign function to variable
    add := func(a, b int) int {
        return a + b
    }

    result := add(3, 5)
    fmt.Println("Result:", result)

    // Function as parameter
    compute := func(a, b int, op func(int, int) int) int {
        return op(a, b)
    }

    sum := compute(10, 5, add)
    fmt.Println("Sum:", sum)

    // Anonymous function as parameter
    product := compute(10, 5, func(a, b int) int {
        return a * b
    })
    fmt.Println("Product:", product)

    // Function as return value
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
  title: 'Functions as Values',
  section: '4.2.1'
};
