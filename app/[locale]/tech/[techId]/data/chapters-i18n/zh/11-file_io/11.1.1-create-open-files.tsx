import React from 'react';

interface Props {
  className?: string;
}

export default function 创建和打开文件({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">11.1.1 创建和打开文件</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "os"
)

func main() {
    // 创建文件
    file, err := os.Create("test.txt")
    if err != nil {
        fmt.Println("Error creating file:", err)
        return
    }
    defer file.Close()

    // 写入内容
    file.WriteString("Hello, File!")

    // 打开已存在的文件
    file2, err := os.Open("test.txt")
    if err != nil {
        fmt.Println("Error opening file:", err)
        return
    }
    defer file2.Close()

    // 以读写模式打开
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
  title: '创建和打开文件',
  section: '11.1.1'
};
