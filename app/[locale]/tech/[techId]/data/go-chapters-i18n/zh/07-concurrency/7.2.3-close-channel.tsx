import React from 'react';

interface Props {
  className?: string;
}

export default function 关闭channel({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">7.2.3 关闭Channel</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func fibonacci(n int, ch chan int) {
    x, y := 0, 1
    for i := 0; i < n; i++ {
        ch <- x
        x, y = y, x+y
    }
    close(ch)  // 关闭channel
}

func main() {
    ch := make(chan int, 10)
    go fibonacci(cap(ch), ch)

    // 方式1：使用for range读取直到channel关闭
    for num := range ch {
        fmt.Println(num)
    }

    // 方式2：使用ok检查channel是否关闭
    ch2 := make(chan int, 2)
    ch2 <- 1
    ch2 <- 2
    close(ch2)

    for {
        value, ok := <-ch2
        if !ok {
            fmt.Println("Channel closed")
            break
        }
        fmt.Println("Value:", value)
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '7-2-3',
  title: '关闭Channel',
  section: '7.2.3'
};
