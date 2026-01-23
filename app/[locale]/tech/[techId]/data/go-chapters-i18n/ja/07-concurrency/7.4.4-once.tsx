import React from 'react';

interface Props {
  className?: string;
}

export default function Once({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">7.4.4 Once</h3>
      <p>ある操作が一度だけ実行されることを保証します。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "sync"
)

type Singleton struct {
    data string
}

var (
    instance *Singleton
    once     sync.Once
)

func GetInstance() *Singleton {
    once.Do(func() {
        fmt.Println("Creating singleton instance")
        instance = &Singleton{data: "singleton data"}
    })
    return instance
}

func main() {
    var wg sync.WaitGroup

    for i := 0; i < 10; i++ {
        wg.Add(1)
        go func(n int) {
            defer wg.Done()
            s := GetInstance()
            fmt.Printf("Goroutine %d: %p\n", n, s)
        }(i)
    }

    wg.Wait()
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '7-4-4',
  title: 'Once',
  section: '7.4.4'
};
