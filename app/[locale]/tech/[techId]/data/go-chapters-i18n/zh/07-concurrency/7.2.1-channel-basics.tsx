import React from 'react';

interface Props {
  className?: string;
}

export default function Channel基础({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">7.2.1 Channel基础</h3>
      <p>Channel是goroutine之间通信的管道。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // 创建channel
    ch := make(chan int)

    // 发送数据到channel（在goroutine中）
    go func() {
        ch <- 42  // 发送
    }()

    // 从channel接收数据
    value := <-ch  // 接收
    fmt.Println("Received:", value)

    // 带缓冲的channel
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
  title: 'Channel基础',
  section: '7.2.1'
};
