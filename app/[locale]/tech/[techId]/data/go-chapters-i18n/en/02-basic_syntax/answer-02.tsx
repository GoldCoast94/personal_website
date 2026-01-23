import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise2Answer({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 2 Answer</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    n := 20
    fmt.Printf("First %d terms of Fibonacci sequence:\n", n)

    // Method 1: Using loop
    a, b := 0, 1
    for i := 0; i < n; i++ {
        fmt.Printf("%d ", a)
        a, b = b, a+b
    }
    fmt.Println()

    // Method 2: Using slice storage
    fib := make([]int, n)
    fib[0], fib[1] = 0, 1
    for i := 2; i < n; i++ {
        fib[i] = fib[i-1] + fib[i-2]
    }

    fmt.Println("\nUsing slice storage:")
    for i, v := range fib {
        fmt.Printf("F(%d) = %d\n", i, v)
    }
}`}</code>
      </pre>

      <ul>
        <li>**Output:**</li>
      </ul>

      <pre className="code-block">
        <code className="language-go">{`First 20 terms of Fibonacci sequence:
0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181

Using slice storage:
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
  title: 'Exercise 2 Answer',
  section: '0'
};
