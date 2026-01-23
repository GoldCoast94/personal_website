import React from 'react';

interface Props {
  className?: string;
}

export default function MutexLock({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">7.4.1 Mutex Lock</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "sync"
)

type Counter struct {
    mu    sync.Mutex
    value int
}

func (c *Counter) Increment() {
    c.mu.Lock()
    defer c.mu.Unlock()
    c.value++
}

func (c *Counter) Value() int {
    c.mu.Lock()
    defer c.mu.Unlock()
    return c.value
}

func main() {
    counter := &Counter{}
    var wg sync.WaitGroup

    // Start 100 goroutines, each incrementing 1000 times
    for i := 0; i < 100; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            for j := 0; j < 1000; j++ {
                counter.Increment()
            }
        }()
    }

    wg.Wait()
    fmt.Println("Final counter value:", counter.Value())  // 100000
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '7-4-1',
  title: 'Mutex Lock',
  section: '7.4.1'
};
