import React from 'react';

interface Props {
  className?: string;
}

export default function 文件和目录操作({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">11.2.2 文件和目录操作</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "os"
    "path/filepath"
)

func fileOperations() {
    // 重命名文件
    err := os.Rename("old.txt", "new.txt")
    if err != nil {
        fmt.Println("Error:", err)
    }

    // 删除文件
    err = os.Remove("test.txt")
    if err != nil {
        fmt.Println("Error:", err)
    }

    // 创建目录
    err = os.Mkdir("testdir", 0755)
    if err != nil {
        fmt.Println("Error:", err)
    }

    // 创建多层目录
    err = os.MkdirAll("path/to/dir", 0755)
    if err != nil {
        fmt.Println("Error:", err)
    }

    // 删除空目录
    err = os.Remove("testdir")
    if err != nil {
        fmt.Println("Error:", err)
    }

    // 删除目录及其内容
    err = os.RemoveAll("path")
    if err != nil {
        fmt.Println("Error:", err)
    }

    // 更改文件权限
    err = os.Chmod("file.txt", 0644)
    if err != nil {
        fmt.Println("Error:", err)
    }
}

func main() {
    fileOperations()
}`}</code>
      </pre>
      <p>## 11.3 目录遍历</p>

    </div>
  );
}

export const metadata = {
  id: '11-2-2',
  title: '文件和目录操作',
  section: '11.2.2'
};
