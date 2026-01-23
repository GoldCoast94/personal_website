import React from 'react';

interface Props {
  className?: string;
}

export default function AnonymousGoroutine({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">7.1.2 Anonymous Goroutine</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "time"
)

func main() {
    // Anonymous function goroutine
    go func() {
        for i := 0; i < 3; i++ {
            fmt.Println("Anonymous goroutine:", i)
            time.Sleep(100 * time.Millisecond)
        }
    }()

    // Anonymous goroutine with parameters
    message := "Hello from goroutine"
    go func(msg string) {
        fmt.Println(msg)
    }(message)

    // Launch multiple goroutines
    for i := 0; i < 3; i++ {
        go func(n int) {
            fmt.Printf("Goroutine %d\n", n)
        }(i)
    }

    time.Sleep(500 * time.Millisecond)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '7-1-2',
  title: 'Anonymous Goroutine',
  section: '7.1.2'
};
