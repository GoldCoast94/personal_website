import React from 'react';

interface Props {
  className?: string;
}

export default function DeferStatement({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">4.2.4 Defer Statement</h3>
      <p>The defer statement defers the execution of a function until the surrounding function returns:</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "os"
)

func example1() {
    fmt.Println("Start")
    defer fmt.Println("End")  // Executed last
    fmt.Println("Middle")
}

// Multiple defers execute in Last-In-First-Out (LIFO) order
func example2() {
    defer fmt.Println("1")
    defer fmt.Println("2")
    defer fmt.Println("3")
    fmt.Println("Start")
    // Output: Start 3 2 1
}

// defer executes after the function returns
func example3() int {
    x := 10
    defer func() {
        x = 20  // Modify x
    }()
    return x  // Returns 10, because return executes before defer
}

// defer accessing named return value
func example4() (result int) {
    defer func() {
        result = 20  // Modify named return value
    }()
    return 10  // Returns 20, because defer modifies result
}

// Practical use of defer: Resource cleanup
func readFile(filename string) error {
    file, err := os.Open(filename)
    if err != nil {
        return err
    }
    defer file.Close()  // Ensure file is closed

    // Read file...
    // file.Close() will be called no matter how the function exits

    return nil
}

// defer catching panic
func safeDivide(a, b int) {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Recovered from panic:", r)
        }
    }()

    if b == 0 {
        panic("division by zero")
    }

    result := a / b
    fmt.Println("Result:", result)
}

func main() {
    example1()
    fmt.Println()

    example2()
    fmt.Println()

    fmt.Println("example3 returns:", example3())
    fmt.Println("example4 returns:", example4())
    fmt.Println()

    safeDivide(10, 2)
    safeDivide(10, 0)
    fmt.Println("Program continues...")
}`}</code>
      </pre>
      <p>## 4.3 Function Types and Interfaces</p>

    </div>
  );
}

export const metadata = {
  id: '4-2-4',
  title: 'Defer Statement',
  section: '4.2.4'
};
