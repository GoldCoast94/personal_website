import React from 'react';

interface Props {
  className?: string;
}

export default function CreateOpenFiles({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">11.1.1 Creating and Opening Files</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "os"
)

func main() {
    // Create file
    file, err := os.Create("test.txt")
    if err != nil {
        fmt.Println("Error creating file:", err)
        return
    }
    defer file.Close()

    // Write content
    file.WriteString("Hello, File!")

    // Open existing file
    file2, err := os.Open("test.txt")
    if err != nil {
        fmt.Println("Error opening file:", err)
        return
    }
    defer file2.Close()

    // Open in read-write mode
    file3, err := os.OpenFile("test.txt", os.O_RDWR|os.O_APPEND, 0644)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    defer file3.Close()
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '11-1-1',
  title: 'Creating and Opening Files',
  section: '11.1.1'
};
