import React from 'react';

interface Props {
  className?: string;
}

export default function Goroutine调度({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">7.1.3 Goroutine调度</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "runtime"
    "sync"
)

func main() {
    // 查看CPU核心数
    fmt.Println("CPU cores:", runtime.NumCPU())

    // 设置使用的CPU核心数
    runtime.GOMAXPROCS(runtime.NumCPU())

    // 查看当前goroutine数量
    fmt.Println("Number of goroutines:", runtime.NumGoroutine())

    var wg sync.WaitGroup

    // 启动多个goroutine
    for i := 0; i < 10; i++ {
        wg.Add(1)
        go func(n int) {
            defer wg.Done()
            fmt.Printf("Goroutine %d running on processor\n", n)
        }(i)
    }

    fmt.Println("Number of goroutines after launch:", runtime.NumGoroutine())

    wg.Wait()
    fmt.Println("All goroutines finished")
}`}</code>
      </pre>
      <p>## 7.2 Channel通道</p>

    </div>
  );
}

export const metadata = {
  id: '7-1-3',
  title: 'Goroutine调度',
  section: '7.1.3'
};
