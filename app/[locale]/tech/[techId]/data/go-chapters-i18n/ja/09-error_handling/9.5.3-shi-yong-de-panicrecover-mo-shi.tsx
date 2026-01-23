import React from 'react';

interface Props {
  className?: string;
}

export default function 実用的なPanicRecoverパターン({ className }: Props) {
  return (
    <div className={`section-content \${className || ''}`}>
      <h3 className="section-title">9.5.3 実用的な panic/recover パターン</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "log"
)

type Server struct {
    name string
}

func (s *Server) handleRequest() (err error) {
    defer func() {
        if r := recover(); r != nil {
            err = fmt.Errorf("panic recovered: %v", r)
        }
    }()

    // panicする可能性のあるコード
    var data []int
    fmt.Println(data[10])  // panicする

    return nil
}

func main() {
    server := &Server{name: "API Server"}

    if err := server.handleRequest(); err != nil {
        log.Println("Error handling request:", err)
    }

    fmt.Println("Server continues running")
}`}</code>
      </pre>
      <p>## 9.6 エラー処理のベストプラクティス</p>

    </div>
  );
}

export const metadata = {
  id: '9-5-3',
  title: '実用的な panic/recover パターン',
  section: '9.5.3'
};
