import React from 'react';

interface Props {
  className?: string;
}

export default function 对象池({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">14.4.2 对象池</h3>

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
    // 从池中获取buffer
    buffer := bufferPool.Get().(*Buffer)
    defer bufferPool.Put(buffer)  // 使用完后放回池中

    // 使用buffer处理数据
    copy(buffer.data, data)
    // ... 处理逻辑
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
  title: '对象池',
  section: '14.4.2'
};
