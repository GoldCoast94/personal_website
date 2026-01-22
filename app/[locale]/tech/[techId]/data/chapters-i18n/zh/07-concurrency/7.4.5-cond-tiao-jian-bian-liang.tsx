import React from 'react';

interface Props {
  className?: string;
}

export default function Cond条件变量({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">7.4.5 Cond条件变量</h3>

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

    // 消费者
    for i := 1; i <= 3; i++ {
        go func(id int) {
            for {
                mu.Lock()
                for len(queue) == 0 {
                    cond.Wait()  // 等待通知
                }
                item := queue[0]
                queue = queue[1:]
                fmt.Printf("Consumer %d got: %d\n", id, item)
                mu.Unlock()
                time.Sleep(time.Second)
            }
        }(i)
    }

    // 生产者
    for i := 0; i < 10; i++ {
        time.Sleep(500 * time.Millisecond)
        mu.Lock()
        queue = append(queue, i)
        fmt.Printf("Produced: %d\n", i)
        cond.Signal()  // 通知一个等待的goroutine
        // cond.Broadcast()  // 通知所有等待的goroutine
        mu.Unlock()
    }

    time.Sleep(5 * time.Second)
}`}</code>
      </pre>
      <p>## 7.5 并发安全</p>

    </div>
  );
}

export const metadata = {
  id: '7-4-5',
  title: 'Cond条件变量',
  section: '7.4.5'
};
