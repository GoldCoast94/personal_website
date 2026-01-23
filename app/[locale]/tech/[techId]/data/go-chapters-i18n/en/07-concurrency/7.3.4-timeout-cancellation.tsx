import React from 'react';

interface Props {
  className?: string;
}

export default function TimeoutAndCancellation({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">7.3.4 Timeout and Cancellation</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "context"
    "fmt"
    "time"
)

// Implement timeout using context
func doWorkWithTimeout(ctx context.Context) {
    select {
    case <-time.After(2 * time.Second):
        fmt.Println("Work completed")
    case <-ctx.Done():
        fmt.Println("Work cancelled:", ctx.Err())
    }
}

// Cancellable task
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
    // Timeout control
    fmt.Println("=== Timeout Example ===")
    ctx1, cancel1 := context.WithTimeout(context.Background(), 1*time.Second)
    defer cancel1()

    doWorkWithTimeout(ctx1)

    // Manual cancellation
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
      <p>## 7.4 Synchronization Primitives</p>

    </div>
  );
}

export const metadata = {
  id: '7-3-4',
  title: 'Timeout and Cancellation',
  section: '7.3.4'
};
