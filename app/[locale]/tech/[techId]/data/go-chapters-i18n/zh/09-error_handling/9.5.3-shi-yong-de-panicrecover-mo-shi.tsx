import React from 'react';

interface Props {
  className?: string;
}

export default function 实用的Panicrecover模式({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">9.5.3 实用的 panic/recover 模式</h3>

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

    // 可能panic的代码
    var data []int
    fmt.Println(data[10])  // 会panic

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
      <p>## 9.6 错误处理最佳实践</p>

    </div>
  );
}

export const metadata = {
  id: '9-5-3',
  title: '实用的 panic/recover 模式',
  section: '9.5.3'
};
