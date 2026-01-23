import React from 'react';

interface Props {
  className?: string;
}

export default function ArithmeticOperators({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.4.1 Arithmetic Operators</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    a, b := 10, 3

    fmt.Println("Addition:", a+b)    // 13
    fmt.Println("Subtraction:", a-b)    // 7
    fmt.Println("Multiplication:", a*b)    // 30
    fmt.Println("Division:", a/b)    // 3 (integer division)
    fmt.Println("Modulus:", a%b)    // 1

    // Floating-point division
    fmt.Println("Float division:", float64(a)/float64(b))  // 3.333...

    // Increment and decrement (postfix form only)
    i := 5
    i++  // Increment
    fmt.Println("i++:", i)  // 6
    i--  // Decrement
    fmt.Println("i--:", i)  // 5

    // Note: Go does not support ++i and --i
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-4-1',
  title: 'Arithmetic Operators',
  section: '2.4.1'
};
