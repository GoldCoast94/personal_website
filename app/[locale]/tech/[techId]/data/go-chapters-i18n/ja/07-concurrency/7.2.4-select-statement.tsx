import React from 'react';

interface Props {
  className?: string;
}

export default function Select文({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">7.2.4 Select文</h3>
      <p>Selectは複数のチャネル操作を処理するために使用されます。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "time"
)

func main() {
    ch1 := make(chan string)
    ch2 := make(chan string)

    go func() {
        time.Sleep(1 * time.Second)
        ch1 <- "Message from channel 1"
    }()

    go func() {
        time.Sleep(2 * time.Second)
        ch2 <- "Message from channel 2"
    }()

    // Selectは複数のチャネル操作を待機
    for i := 0; i < 2; i++ {
        select {
        case msg1 := <-ch1:
            fmt.Println(msg1)
        case msg2 := <-ch2:
            fmt.Println(msg2)
        }
    }

    // タイムアウト付きSelect
    ch3 := make(chan string)

    select {
    case msg := <-ch3:
        fmt.Println(msg)
    case <-time.After(1 * time.Second):
        fmt.Println("Timeout!")
    }

    // defaultありのSelect
    ch4 := make(chan int, 1)
    ch4 <- 1

    select {
    case val := <-ch4:
        fmt.Println("Received:", val)
    default:
        fmt.Println("No value ready")
    }
}`}</code>
      </pre>
      <p>## 7.3 並行パターン</p>

    </div>
  );
}

export const metadata = {
  id: '7-2-4',
  title: 'Select文',
  section: '7.2.4'
};
