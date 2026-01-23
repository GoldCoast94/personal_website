import React from 'react';

interface Props {
  className?: string;
}

export default function FileDirectoryOps({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">11.2.2 File and Directory Operations</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "os"
    "path/filepath"
)

func fileOperations() {
    // Rename file
    err := os.Rename("old.txt", "new.txt")
    if err != nil {
        fmt.Println("Error:", err)
    }

    // Delete file
    err = os.Remove("test.txt")
    if err != nil {
        fmt.Println("Error:", err)
    }

    // Create directory
    err = os.Mkdir("testdir", 0755)
    if err != nil {
        fmt.Println("Error:", err)
    }

    // Create multi-level directory
    err = os.MkdirAll("path/to/dir", 0755)
    if err != nil {
        fmt.Println("Error:", err)
    }

    // Remove empty directory
    err = os.Remove("testdir")
    if err != nil {
        fmt.Println("Error:", err)
    }

    // Remove directory and its contents
    err = os.RemoveAll("path")
    if err != nil {
        fmt.Println("Error:", err)
    }

    // Change file permissions
    err = os.Chmod("file.txt", 0644)
    if err != nil {
        fmt.Println("Error:", err)
    }
}

func main() {
    fileOperations()
}`}</code>
      </pre>
      <p>## 11.3 Directory Traversal</p>

    </div>
  );
}

export const metadata = {
  id: '11-2-2',
  title: 'File and Directory Operations',
  section: '11.2.2'
};
