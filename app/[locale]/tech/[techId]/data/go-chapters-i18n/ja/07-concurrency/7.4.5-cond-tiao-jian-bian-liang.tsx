import React from 'react';

interface Props {
  className?: string;
}

export default function Cond条件変数({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">7.4.5 Cond条件変数</h3>

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

    // コンシューマー
    for i := 1; i <= 3; i++ {
        go func(id int) {
            for {
                mu.Lock()
                for len(queue) == 0 {
                    cond.Wait()  // 通知を待つ
                }
                item := queue[0]
                queue = queue[1:]
                fmt.Printf("Consumer %d got: %d\n", id, item)
                mu.Unlock()
                time.Sleep(time.Second)
            }
        }(i)
    }

    // プロデューサー
    for i := 0; i < 10; i++ {
        time.Sleep(500 * time.Millisecond)
        mu.Lock()
        queue = append(queue, i)
        fmt.Printf("Produced: %d\n", i)
        cond.Signal()  // 待機中の1つのgoroutineに通知
        // cond.Broadcast()  // 待機中のすべてのgoroutineに通知
        mu.Unlock()
    }

    time.Sleep(5 * time.Second)
}`}</code>
      </pre>
      <p>## 7.5 並行安全性</p>

    </div>
  );
}

export const metadata = {
  id: '7-4-5',
  title: 'Cond条件変数',
  section: '7.4.5'
};
