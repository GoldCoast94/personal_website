import React from 'react';

interface Props {
  className?: string;
}

export default function ObjectPool({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">14.4.2 Object Pool</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "sync"
)

type Buffer struct {
    data []byte
}

var bufferPool = sync.Pool{
    New: func() interface{} {
        return &Buffer{
            data: make([]byte, 1024),
        }
    },
}

func processData(data []byte) {
    // Get buffer from pool
    buffer := bufferPool.Get().(*Buffer)
    defer bufferPool.Put(buffer)  // Return to pool after use

    // Use buffer to process data
    copy(buffer.data, data)
    // ... processing logic
}

func main() {
    data := []byte("some data")

    for i := 0; i < 100; i++ {
        processData(data)
    }

    fmt.Println("Processing completed")
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '14-4-2',
  title: 'Object Pool',
  section: '14.4.2'
};
