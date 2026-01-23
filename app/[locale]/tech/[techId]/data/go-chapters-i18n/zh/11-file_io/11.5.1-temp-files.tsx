import React from 'react';

interface Props {
  className?: string;
}

export default function 创建临时文件({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">11.5.1 创建临时文件</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "os"
)

func tempFileExample() error {
    // 创建临时文件
    tmpFile, err := os.CreateTemp("", "example-*.txt")
    if err != nil {
        return err
    }
    defer os.Remove(tmpFile.Name())  // 清理
    defer tmpFile.Close()

    fmt.Println("Temp file:", tmpFile.Name())

    // 写入临时文件
    _, err = tmpFile.WriteString("temporary content")
    return err
}

func tempDirExample() error {
    // 创建临时目录
    tmpDir, err := os.MkdirTemp("", "example-dir-")
    if err != nil {
        return err
    }
    defer os.RemoveAll(tmpDir)  // 清理

    fmt.Println("Temp directory:", tmpDir)

    // 在临时目录中创建文件
    filePath := tmpDir + "/test.txt"
    err = os.WriteFile(filePath, []byte("content"), 0644)
    return err
}

func main() {
    tempFileExample()
    tempDirExample()
}`}</code>
      </pre>
      <p>## 11.6 JSON和文件</p>

    </div>
  );
}

export const metadata = {
  id: '11-5-1',
  title: '创建临时文件',
  section: '11.5.1'
};
