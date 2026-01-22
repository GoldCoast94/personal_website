import React from 'react';

interface Props {
  className?: string;
}

export default function 什么是goroutine({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">7.1.1 什么是Goroutine</h3>
      <p>Goroutine是Go语言实现并发的核心机制，是一种轻量级线程。</p>

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
    // 串行执行
    fmt.Println("=== Sequential Execution ===")
    sayHello()
    sayWorld()

    fmt.Println("\n=== Concurrent Execution ===")
    // 并发执行
    go sayHello()  // 启动goroutine
    go sayWorld()  // 启动goroutine

    // 等待goroutine完成
    time.Sleep(1 * time.Second)
    fmt.Println("Main function ends")
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '7-1-1',
  title: '什么是Goroutine',
  section: '7.1.1'
};
