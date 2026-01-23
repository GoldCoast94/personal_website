import React from 'react';

interface Props {
  className?: string;
}

export default function SelectStatement({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">7.2.4 Select Statement</h3>
      <p>Select is used to handle multiple channel operations.</p>

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

    // Select waits for multiple channel operations
    for i := 0; i < 2; i++ {
        select {
        case msg1 := <-ch1:
            fmt.Println(msg1)
        case msg2 := <-ch2:
            fmt.Println(msg2)
        }
    }

    // Select with timeout
    ch3 := make(chan string)

    select {
    case msg := <-ch3:
        fmt.Println(msg)
    case <-time.After(1 * time.Second):
        fmt.Println("Timeout!")
    }

    // Select with default
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
      <p>## 7.3 Concurrency Patterns</p>

    </div>
  );
}

export const metadata = {
  id: '7-2-4',
  title: 'Select Statement',
  section: '7.2.4'
};
