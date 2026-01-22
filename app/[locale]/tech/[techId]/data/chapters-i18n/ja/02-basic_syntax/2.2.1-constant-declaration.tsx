import React from 'react';

interface Props {
  className?: string;
}

export default function 定数宣言({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.2.1 定数宣言</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // 単一定数
    const PI = 3.14159

    // バッチ宣言
    const (
        StatusOK    = 200
        StatusError = 500
    )

    // 型付き定数
    const Width int = 100
    const Height int = 200

    // 複数定数
    const a, b, c = 1, 2, 3

    fmt.Println(PI, StatusOK, StatusError, Width, Height, a, b, c)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-2-1',
  title: '定数宣言',
  section: '2.2.1'
};
