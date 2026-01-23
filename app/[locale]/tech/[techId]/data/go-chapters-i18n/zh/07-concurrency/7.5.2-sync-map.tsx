import React from 'react';

interface Props {
  className?: string;
}

export default function Syncmap({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">7.5.2 sync.Map</h3>
      <p>并发安全的map。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "sync"
)

func main() {
    var sm sync.Map
    var wg sync.WaitGroup

    // 并发写入
    for i := 0; i < 10; i++ {
        wg.Add(1)
        go func(n int) {
            defer wg.Done()
            sm.Store(fmt.Sprintf("key%d", n), n)
        }(i)
    }

    wg.Wait()

    // 读取
    sm.Range(func(key, value interface{}) bool {
        fmt.Printf("%s: %v\n", key, value)
        return true  // 返回false会停止迭代
    })

    // Load
    if value, ok := sm.Load("key5"); ok {
        fmt.Println("key5:", value)
    }

    // LoadOrStore
    actual, loaded := sm.LoadOrStore("key10", 10)
    fmt.Println("LoadOrStore:", actual, loaded)

    // Delete
    sm.Delete("key0")
    fmt.Println("After delete key0:")

    sm.Range(func(key, value interface{}) bool {
        fmt.Printf("%s: %v\n", key, value)
        return true
    })
}`}</code>
      </pre>
      <p>## 7.6 练习题</p>

    </div>
  );
}

export const metadata = {
  id: '7-5-2',
  title: 'sync.Map',
  section: '7.5.2'
};
