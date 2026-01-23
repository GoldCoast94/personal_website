import React from 'react';

interface Props {
  className?: string;
}

export default function AtomicOperations({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">7.5.1 Atomic Operations</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "sync"
    "sync/atomic"
)

func main() {
    var counter int64
    var wg sync.WaitGroup

    for i := 0; i < 1000; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            atomic.AddInt64(&counter, 1)
        }()
    }

    wg.Wait()
    fmt.Println("Counter:", atomic.LoadInt64(&counter))

    // Other atomic operations
    var value int64 = 100

    // Load
    fmt.Println("Load:", atomic.LoadInt64(&value))

    // Store
    atomic.StoreInt64(&value, 200)
    fmt.Println("After store:", value)

    // Swap
    old := atomic.SwapInt64(&value, 300)
    fmt.Println("Old value:", old, "New value:", value)

    // Compare and Swap (CAS)
    swapped := atomic.CompareAndSwapInt64(&value, 300, 400)
    fmt.Println("Swapped:", swapped, "Value:", value)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '7-5-1',
  title: 'Atomic Operations',
  section: '7.5.1'
};
