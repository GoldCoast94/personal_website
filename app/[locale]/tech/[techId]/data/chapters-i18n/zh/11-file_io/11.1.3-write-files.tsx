import React from 'react';

interface Props {
  className?: string;
}

export default function 写入文件({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">11.1.3 写入文件</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "bufio"
    "fmt"
    "os"
)

func writeToFile(filename string) error {
    // 方法1: 直接写入
    content := []byte("Hello, World!\n")
    err := os.WriteFile(filename, content, 0644)
    return err
}

func writeWithWriter(filename string) error {
    // 方法2: 使用Writer
    file, err := os.Create(filename)
    if err != nil {
        return err
    }
    defer file.Close()

    writer := bufio.NewWriter(file)
    writer.WriteString("Line 1\n")
    writer.WriteString("Line 2\n")
    writer.Flush()  // 重要：刷新缓冲区

    return nil
}

func appendToFile(filename string) error {
    // 追加内容
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
      <p>## 11.2 文件信息和操作</p>

    </div>
  );
}

export const metadata = {
  id: '11-1-3',
  title: '写入文件',
  section: '11.1.3'
};
