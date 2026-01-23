import React from 'react';

interface Props {
  className?: string;
}

export default function OsOperatingSystemFunctions({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.6.4 os - Operating System Functions</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "os"
)

func main() {
    // Environment variables
    os.Setenv("MY_VAR", "value")
    fmt.Println(os.Getenv("MY_VAR"))
    fmt.Println(os.Environ())

    // Command-line arguments
    fmt.Println(os.Args)

    // File operations
    file, err := os.Create("test.txt")
    if err != nil {
        fmt.Println(err)
        return
    }
    defer file.Close()

    file.WriteString("Hello, File!")

    // File information
    info, _ := os.Stat("test.txt")
    fmt.Println("Size:", info.Size())
    fmt.Println("IsDir:", info.IsDir())
    fmt.Println("ModTime:", info.ModTime())

    // Delete file
    os.Remove("test.txt")
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-6-4',
  title: 'os - Operating System Functions',
  section: '8.6.4'
};
