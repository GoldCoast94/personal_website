import React from 'react';

interface Props {
  className?: string;
}

export default function タイムアウトとキャンセル({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">7.3.4 タイムアウトとキャンセル</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "context"
    "fmt"
    "time"
)

// contextを使用してタイムアウトを実装
func doWorkWithTimeout(ctx context.Context) {
    select {
    case <-time.After(2 * time.Second):
        fmt.Println("Work completed")
    case <-ctx.Done():
        fmt.Println("Work cancelled:", ctx.Err())
    }
}

// キャンセル可能なタスク
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
    // タイムアウト制御
    fmt.Println("=== Timeout Example ===")
    ctx1, cancel1 := context.WithTimeout(context.Background(), 1*time.Second)
    defer cancel1()

    doWorkWithTimeout(ctx1)

    // 手動キャンセル
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
      <p>## 7.4 同期プリミティブ</p>

    </div>
  );
}

export const metadata = {
  id: '7-3-4',
  title: 'タイムアウトとキャンセル',
  section: '7.3.4'
};
