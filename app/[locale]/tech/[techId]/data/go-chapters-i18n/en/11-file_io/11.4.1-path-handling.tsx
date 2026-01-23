import React from 'react';

interface Props {
  className?: string;
}

export default function PathHandling({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">11.4.1 Path Handling</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "path/filepath"
)

func pathOperations() {
    // Join paths
    path := filepath.Join("dir", "subdir", "file.txt")
    fmt.Println("Joined path:", path)

    // Get directory
    dir := filepath.Dir("/path/to/file.txt")
    fmt.Println("Directory:", dir)

    // Get filename
    base := filepath.Base("/path/to/file.txt")
    fmt.Println("Basename:", base)

    // Get extension
    ext := filepath.Ext("file.txt")
    fmt.Println("Extension:", ext)

    // Split directory and filename
    dir, file := filepath.Split("/path/to/file.txt")
    fmt.Println("Dir:", dir, "File:", file)

    // Get absolute path
    absPath, _ := filepath.Abs("test.txt")
    fmt.Println("Absolute path:", absPath)

    // Get relative path
    relPath, _ := filepath.Rel("/a/b", "/a/b/c/d")
    fmt.Println("Relative path:", relPath)

    // Clean path
    clean := filepath.Clean("path//to/../file.txt")
    fmt.Println("Cleaned path:", clean)

    // Match pattern
    matched, _ := filepath.Match("*.txt", "file.txt")
    fmt.Println("Matched:", matched)

    // Glob pattern
    files, _ := filepath.Glob("*.go")
    fmt.Println("Go files:", files)
}

func main() {
    pathOperations()
}`}</code>
      </pre>
      <p>## 11.5 Temporary Files and Directories</p>

    </div>
  );
}

export const metadata = {
  id: '11-4-1',
  title: 'Path Handling',
  section: '11.4.1'
};
