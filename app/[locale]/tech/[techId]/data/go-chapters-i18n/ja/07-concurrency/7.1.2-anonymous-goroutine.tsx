import React from 'react';

interface Props {
  className?: string;
}

export default function 匿名ゴルーチン({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">7.1.2 匿名ゴルーチン</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "time"
)

func main() {
    // 匿名関数のゴルーチン
    go func() {
        for i := 0; i < 3; i++ {
            fmt.Println("Anonymous goroutine:", i)
            time.Sleep(100 * time.Millisecond)
        }
    }()

    // パラメータ付き匿名ゴルーチン
    message := "Hello from goroutine"
    go func(msg string) {
        fmt.Println(msg)
    }(message)

    // 複数のゴルーチンを起動
    for i := 0; i < 3; i++ {
        go func(n int) {
            fmt.Printf("Goroutine %d\n", n)
        }(i)
    }

    time.Sleep(500 * time.Millisecond)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '7-1-2',
  title: '匿名ゴルーチン',
  section: '7.1.2'
};
