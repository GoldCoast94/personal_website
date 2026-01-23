import React from 'react';

interface Props {
  className?: string;
}

export default function ゴルーチンスケジューリング({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">7.1.3 ゴルーチンスケジューリング</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "runtime"
    "sync"
)

func main() {
    // CPUコア数を確認
    fmt.Println("CPU cores:", runtime.NumCPU())

    // 使用するCPUコア数を設定
    runtime.GOMAXPROCS(runtime.NumCPU())

    // 現在のゴルーチン数を確認
    fmt.Println("Number of goroutines:", runtime.NumGoroutine())

    var wg sync.WaitGroup

    // 複数のゴルーチンを起動
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
      <p>## 7.2 チャネル</p>

    </div>
  );
}

export const metadata = {
  id: '7-1-3',
  title: 'ゴルーチンスケジューリング',
  section: '7.1.3'
};
