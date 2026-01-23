import React from 'react';

interface Props {
  className?: string;
}

export default function チャネル基礎({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">7.2.1 チャネル基礎</h3>
      <p>チャネルはゴルーチン間の通信パイプです。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // チャネルを作成
    ch := make(chan int)

    // チャネルにデータを送信（ゴルーチン内で）
    go func() {
        ch <- 42  // 送信
    }()

    // チャネルからデータを受信
    value := <-ch  // 受信
    fmt.Println("Received:", value)

    // バッファ付きチャネル
    bufferedCh := make(chan string, 2)
    bufferedCh <- "Hello"
    bufferedCh <- "World"

    fmt.Println(<-bufferedCh)
    fmt.Println(<-bufferedCh)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '7-2-1',
  title: 'チャネル基礎',
  section: '7.2.1'
};
