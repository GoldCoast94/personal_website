import React from 'react';

interface Props {
  className?: string;
}

export default function 简单的http服务器({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">12.1.1 简单的HTTP服务器</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "net/http"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello, World!")
}

func main() {
    http.HandleFunc("/", helloHandler)

    fmt.Println("Server starting on :8080")
    http.ListenAndServe(":8080", nil)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '12-1-1',
  title: '简单的HTTP服务器',
  section: '12.1.1'
};
