import React from 'react';

interface Props {
  className?: string;
}

export default function TypeAssertion({ className }: Props) {
  return (
    <div className={`section-content \${className || ''}`}>
      <h3 className="section-title">9.3.1 Type Assertion</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "os"
)

type TemporaryError interface {
    Temporary() bool
}

func handleError(err error) {
    // Check for specific error type
    if pathErr, ok := err.(*os.PathError); ok {
        fmt.Println("Path error:")
        fmt.Println("  Operation:", pathErr.Op)
        fmt.Println("  Path:", pathErr.Path)
        fmt.Println("  Error:", pathErr.Err)
    }

    // Check if implements specific interface
    if tempErr, ok := err.(TemporaryError); ok && tempErr.Temporary() {
        fmt.Println("This is a temporary error, retry later")
    }
}

func main() {
    _, err := os.Open("nonexistent.txt")
    if err != nil {
        handleError(err)
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '9-3-1',
  title: 'Type Assertion',
  section: '9.3.1'
};
