import React from 'react';

interface Props {
  className?: string;
}

export default function BasicUsage({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">14.3.1 Basic Usage</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "context"
    "fmt"
    "time"
)

func doWork(ctx context.Context, name string) {
    for {
        select {
        case <-ctx.Done():
            fmt.Printf("%s: stopped (%v)\n", name, ctx.Err())
            return
        default:
            fmt.Printf("%s: working...\n", name)
            time.Sleep(500 * time.Millisecond)
        }
    }
}

func main() {
    // WithTimeout
    ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
    defer cancel()

    go doWork(ctx, "Worker 1")

    time.Sleep(3 * time.Second)
    fmt.Println("Main: done")
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '14-3-1',
  title: 'Basic Usage',
  section: '14.3.1'
};
