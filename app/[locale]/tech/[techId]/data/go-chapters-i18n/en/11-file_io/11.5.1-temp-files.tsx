import React from 'react';

interface Props {
  className?: string;
}

export default function TempFiles({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">11.5.1 Creating Temporary Files</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "os"
)

func tempFileExample() error {
    // Create temporary file
    tmpFile, err := os.CreateTemp("", "example-*.txt")
    if err != nil {
        return err
    }
    defer os.Remove(tmpFile.Name())  // Cleanup
    defer tmpFile.Close()

    fmt.Println("Temp file:", tmpFile.Name())

    // Write to temporary file
    _, err = tmpFile.WriteString("temporary content")
    return err
}

func tempDirExample() error {
    // Create temporary directory
    tmpDir, err := os.MkdirTemp("", "example-dir-")
    if err != nil {
        return err
    }
    defer os.RemoveAll(tmpDir)  // Cleanup

    fmt.Println("Temp directory:", tmpDir)

    // Create file in temporary directory
    filePath := tmpDir + "/test.txt"
    err = os.WriteFile(filePath, []byte("content"), 0644)
    return err
}

func main() {
    tempFileExample()
    tempDirExample()
}`}</code>
      </pre>
      <p>## 11.6 JSON and Files</p>

    </div>
  );
}

export const metadata = {
  id: '11-5-1',
  title: 'Creating Temporary Files',
  section: '11.5.1'
};
