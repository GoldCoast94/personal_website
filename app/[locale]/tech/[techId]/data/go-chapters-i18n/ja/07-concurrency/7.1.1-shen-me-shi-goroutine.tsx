import React from 'react';

interface Props {
  className?: string;
}

export default function ゴルーチンとは({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">7.1.1 ゴルーチンとは</h3>
      <p>ゴルーチンはGo言語で並行性を実現するための中核メカニズムであり、軽量スレッドです。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "time"
)

func sayHello() {
    for i := 0; i < 5; i++ {
        fmt.Println("Hello", i)
        time.Sleep(100 * time.Millisecond)
    }
}

func sayWorld() {
    for i := 0; i < 5; i++ {
        fmt.Println("World", i)
        time.Sleep(150 * time.Millisecond)
    }
}

func main() {
    // 逐次実行
    fmt.Println("=== Sequential Execution ===")
    sayHello()
    sayWorld()

    fmt.Println("\n=== Concurrent Execution ===")
    // 並行実行
    go sayHello()  // ゴルーチンを起動
    go sayWorld()  // ゴルーチンを起動

    // ゴルーチンの完了を待つ
    time.Sleep(1 * time.Second)
    fmt.Println("Main function ends")
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '7-1-1',
  title: 'ゴルーチンとは',
  section: '7.1.1'
};
