import React from 'react';

interface Props {
  className?: string;
}

export default function WhatIsGoroutine({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">7.1.1 What is Goroutine</h3>
      <p>Goroutine is the core mechanism for implementing concurrency in Go, a lightweight thread.</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "time"
)

func sayHello() {
    for i := 0; i < 5; i++ {
        fmt.Println("Hello", i)
        time.Sleep(100 * time.Millisecond)
    }
}

func sayWorld() {
    for i := 0; i < 5; i++ {
        fmt.Println("World", i)
        time.Sleep(150 * time.Millisecond)
    }
}

func main() {
    // Sequential execution
    fmt.Println("=== Sequential Execution ===")
    sayHello()
    sayWorld()

    fmt.Println("\n=== Concurrent Execution ===")
    // Concurrent execution
    go sayHello()  // Launch goroutine
    go sayWorld()  // Launch goroutine

    // Wait for goroutines to complete
    time.Sleep(1 * time.Second)
    fmt.Println("Main function ends")
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '7-1-1',
  title: 'What is Goroutine',
  section: '7.1.1'
};
