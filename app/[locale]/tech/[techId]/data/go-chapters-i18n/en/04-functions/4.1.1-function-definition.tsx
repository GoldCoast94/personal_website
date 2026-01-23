import React from 'react';

interface Props {
  className?: string;
}

export default function FunctionDefinition({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">4.1.1 Function Definition</h3>
      <p>Functions are organized, reusable blocks of code. The basic syntax for functions in Go:</p>

      <pre className="code-block">
        <code className="language-go">{`func functionName(parameterList) returnType {
    functionBody
}`}</code>
      </pre>

      <ul>
        <li>**Basic examples:**</li>
      </ul>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// No parameters, no return value
func sayHello() {
    fmt.Println("Hello, World!")
}

// With parameters, no return value
func greet(name string) {
    fmt.Printf("Hello, %s!\n", name)
}

// With parameters and return value
func add(a int, b int) int {
    return a + b
}

// Shorthand for parameters of the same type
func multiply(a, b int) int {
    return a * b
}

// Multiple return values
func swap(a, b string) (string, string) {
    return b, a
}

func main() {
    sayHello()
    greet("Go")

    sum := add(3, 5)
    fmt.Println("Sum:", sum)

    product := multiply(4, 6)
    fmt.Println("Product:", product)

    x, y := swap("hello", "world")
    fmt.Println(x, y)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '4-1-1',
  title: 'Function Definition',
  section: '4.1.1'
};
