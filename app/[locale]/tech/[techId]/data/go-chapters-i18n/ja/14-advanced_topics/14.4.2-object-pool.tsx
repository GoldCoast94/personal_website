import React from 'react';

interface Props {
  className?: string;
}

export default function オブジェクトプール({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">14.4.2 オブジェクトプール</h3>

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
    // プールからバッファを取得
    buffer := bufferPool.Get().(*Buffer)
    defer bufferPool.Put(buffer)  // 使用後にプールに戻す

    // バッファを使用してデータを処理
    copy(buffer.data, data)
    // ... 処理ロジック
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
  title: 'オブジェクトプール',
  section: '14.4.2'
};
