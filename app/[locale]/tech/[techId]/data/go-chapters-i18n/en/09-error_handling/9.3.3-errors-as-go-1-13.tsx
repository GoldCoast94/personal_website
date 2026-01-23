import React from 'react';

interface Props {
  className?: string;
}

export default function ErrorsAsGo113({ className }: Props) {
  return (
    <div className={`section-content \${className || ''}`}>
      <h3 className="section-title">9.3.3 errors.As (Go 1.13+)</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "errors"
    "fmt"
    "os"
)

func main() {
    _, err := os.Open("nonexistent.txt")

    // Use errors.As to extract specific error type
    var pathErr *os.PathError
    if errors.As(err, &pathErr) {
        fmt.Println("Path error occurred:")
        fmt.Println("  Operation:", pathErr.Op)
        fmt.Println("  Path:", pathErr.Path)
    }
}`}</code>
      </pre>
      <p>## 9.4 Error Wrapping</p>

    </div>
  );
}

export const metadata = {
  id: '9-3-3',
  title: 'errors.As (Go 1.13+)',
  section: '9.3.3'
};
