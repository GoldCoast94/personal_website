import React from 'react';

interface Props {
  className?: string;
}

export default function 超时和取消({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">7.3.4 超时和取消</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "context"
    "fmt"
    "time"
)

// 使用context实现超时
func doWorkWithTimeout(ctx context.Context) {
    select {
    case <-time.After(2 * time.Second):
        fmt.Println("Work completed")
    case <-ctx.Done():
        fmt.Println("Work cancelled:", ctx.Err())
    }
}

// 可取消的任务
func doWorkWithCancel(ctx context.Context, id int) {
    for {
        select {
        case <-ctx.Done():
            fmt.Printf("Worker %d cancelled\n", id)
            return
        default:
            fmt.Printf("Worker %d working...\n", id)
            time.Sleep(500 * time.Millisecond)
        }
    }
}

func main() {
    // 超时控制
    fmt.Println("=== Timeout Example ===")
    ctx1, cancel1 := context.WithTimeout(context.Background(), 1*time.Second)
    defer cancel1()

    doWorkWithTimeout(ctx1)

    // 手动取消
    fmt.Println("\n=== Cancel Example ===")
    ctx2, cancel2 := context.WithCancel(context.Background())

    go doWorkWithCancel(ctx2, 1)
    go doWorkWithCancel(ctx2, 2)

    time.Sleep(2 * time.Second)
    fmt.Println("Cancelling workers...")
    cancel2()

    time.Sleep(1 * time.Second)
    fmt.Println("Main done")
}`}</code>
      </pre>
      <p>## 7.4 同步原语</p>

    </div>
  );
}

export const metadata = {
  id: '7-3-4',
  title: '超时和取消',
  section: '7.3.4'
};
