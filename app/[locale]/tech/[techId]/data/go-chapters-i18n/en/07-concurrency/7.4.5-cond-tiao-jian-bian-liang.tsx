import React from 'react';

interface Props {
  className?: string;
}

export default function CondConditionVariable({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">7.4.5 Cond Condition Variable</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "sync"
    "time"
)

func main() {
    var mu sync.Mutex
    cond := sync.NewCond(&mu)
    queue := make([]int, 0)

    // Consumers
    for i := 1; i <= 3; i++ {
        go func(id int) {
            for {
                mu.Lock()
                for len(queue) == 0 {
                    cond.Wait()  // Wait for notification
                }
                item := queue[0]
                queue = queue[1:]
                fmt.Printf("Consumer %d got: %d\n", id, item)
                mu.Unlock()
                time.Sleep(time.Second)
            }
        }(i)
    }

    // Producer
    for i := 0; i < 10; i++ {
        time.Sleep(500 * time.Millisecond)
        mu.Lock()
        queue = append(queue, i)
        fmt.Printf("Produced: %d\n", i)
        cond.Signal()  // Notify one waiting goroutine
        // cond.Broadcast()  // Notify all waiting goroutines
        mu.Unlock()
    }

    time.Sleep(5 * time.Second)
}`}</code>
      </pre>
      <p>## 7.5 Concurrency Safety</p>

    </div>
  );
}

export const metadata = {
  id: '7-4-5',
  title: 'Cond Condition Variable',
  section: '7.4.5'
};
