import React from 'react';

interface Props {
  className?: string;
}

export default function ChannelBasics({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">7.2.1 Channel Basics</h3>
      <p>Channel is a pipe for communication between goroutines.</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // Create channel
    ch := make(chan int)

    // Send data to channel (in a goroutine)
    go func() {
        ch <- 42  // Send
    }()

    // Receive data from channel
    value := <-ch  // Receive
    fmt.Println("Received:", value)

    // Buffered channel
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
  title: 'Channel Basics',
  section: '7.2.1'
};
