import React from 'react';

interface Props {
  className?: string;
}

export default function IoInputOutput({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.6.5 io - Input/Output</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "io"
    "os"
    "strings"
)

func main() {
    // Reader interface
    reader := strings.NewReader("Hello, Reader!")
    buf := make([]byte, 5)
    for {
        n, err := reader.Read(buf)
        if err == io.EOF {
            break
        }
        fmt.Print(string(buf[:n]))
    }
    fmt.Println()

    // Writer interface
    writer := os.Stdout
    io.WriteString(writer, "Hello, Writer!\n")

    // Copy
    src := strings.NewReader("Copy this content")
    dst := os.Stdout
    io.Copy(dst, src)
    fmt.Println()
}`}</code>
      </pre>
      <p>## 8.7 Practical Project: Task Management System</p>

    </div>
  );
}

export const metadata = {
  id: '8-6-5',
  title: 'io - Input/Output',
  section: '8.6.5'
};
