import React from 'react';

interface Props {
  className?: string;
}

export default function GoroutineScheduling({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">7.1.3 Goroutine Scheduling</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "runtime"
    "sync"
)

func main() {
    // Check CPU cores
    fmt.Println("CPU cores:", runtime.NumCPU())

    // Set number of CPU cores to use
    runtime.GOMAXPROCS(runtime.NumCPU())

    // Check current number of goroutines
    fmt.Println("Number of goroutines:", runtime.NumGoroutine())

    var wg sync.WaitGroup

    // Launch multiple goroutines
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
      <p>## 7.2 Channel</p>

    </div>
  );
}

export const metadata = {
  id: '7-1-3',
  title: 'Goroutine Scheduling',
  section: '7.1.3'
};
