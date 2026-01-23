import React from 'react';

interface Props {
  className?: string;
}

export default function 匿名goroutine({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">7.1.2 匿名Goroutine</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "time"
)

func main() {
    // 匿名函数goroutine
    go func() {
        for i := 0; i < 3; i++ {
            fmt.Println("Anonymous goroutine:", i)
            time.Sleep(100 * time.Millisecond)
        }
    }()

    // 带参数的匿名goroutine
    message := "Hello from goroutine"
    go func(msg string) {
        fmt.Println(msg)
    }(message)

    // 启动多个goroutine
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
  title: '匿名Goroutine',
  section: '7.1.2'
};
