import React from 'react';

interface Props {
  className?: string;
}

export default function WriteFiles({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">11.1.3 Writing Files</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "bufio"
    "fmt"
    "os"
)

func writeToFile(filename string) error {
    // Method 1: Direct write
    content := []byte("Hello, World!\n")
    err := os.WriteFile(filename, content, 0644)
    return err
}

func writeWithWriter(filename string) error {
    // Method 2: Use Writer
    file, err := os.Create(filename)
    if err != nil {
        return err
    }
    defer file.Close()

    writer := bufio.NewWriter(file)
    writer.WriteString("Line 1\n")
    writer.WriteString("Line 2\n")
    writer.Flush()  // Important: flush buffer

    return nil
}

func appendToFile(filename string) error {
    // Append content
    file, err := os.OpenFile(filename, os.O_APPEND|os.O_WRONLY|os.O_CREATE, 0644)
    if err != nil {
        return err
    }
    defer file.Close()

    _, err = file.WriteString("Appended line\n")
    return err
}

func main() {
    writeToFile("output.txt")
    writeWithWriter("output2.txt")
    appendToFile("output2.txt")
}`}</code>
      </pre>
      <p>## 11.2 File Information and Operations</p>

    </div>
  );
}

export const metadata = {
  id: '11-1-3',
  title: 'Writing Files',
  section: '11.1.3'
};
