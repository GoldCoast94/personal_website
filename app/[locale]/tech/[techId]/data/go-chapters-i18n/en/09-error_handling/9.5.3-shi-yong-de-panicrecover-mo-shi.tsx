import React from 'react';

interface Props {
  className?: string;
}

export default function PracticalPanicRecoverPatterns({ className }: Props) {
  return (
    <div className={`section-content \${className || ''}`}>
      <h3 className="section-title">9.5.3 Practical panic/recover Patterns</h3>

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

    // Code that might panic
    var data []int
    fmt.Println(data[10])  // Will panic

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
      <p>## 9.6 Error Handling Best Practices</p>

    </div>
  );
}

export const metadata = {
  id: '9-5-3',
  title: 'Practical panic/recover Patterns',
  section: '9.5.3'
};
