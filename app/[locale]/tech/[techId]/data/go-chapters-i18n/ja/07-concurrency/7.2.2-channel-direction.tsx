import React from 'react';

interface Props {
  className?: string;
}

export default function チャネル方向({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">7.2.2 チャネル方向</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// 送信専用チャネル
func sendOnly(ch chan<- int) {
    ch <- 10
}

// 受信専用チャネル
func receiveOnly(ch <-chan int) {
    value := <-ch
    fmt.Println("Received:", value)
}

// 双方向チャネル
func bidirectional(ch chan int) {
    ch <- 20
    value := <-ch
    fmt.Println("Bidirectional:", value)
}

func main() {
    ch := make(chan int, 1)

    go sendOnly(ch)
    receiveOnly(ch)

    go bidirectional(ch)
    ch <- 30
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '7-2-2',
  title: 'チャネル方向',
  section: '7.2.2'
};
