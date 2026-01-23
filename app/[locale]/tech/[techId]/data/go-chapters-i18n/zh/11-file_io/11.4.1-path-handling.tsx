import React from 'react';

interface Props {
  className?: string;
}

export default function 路径处理({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">11.4.1 路径处理</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "path/filepath"
)

func pathOperations() {
    // 连接路径
    path := filepath.Join("dir", "subdir", "file.txt")
    fmt.Println("Joined path:", path)

    // 获取目录
    dir := filepath.Dir("/path/to/file.txt")
    fmt.Println("Directory:", dir)

    // 获取文件名
    base := filepath.Base("/path/to/file.txt")
    fmt.Println("Basename:", base)

    // 获取扩展名
    ext := filepath.Ext("file.txt")
    fmt.Println("Extension:", ext)

    // 分离目录和文件名
    dir, file := filepath.Split("/path/to/file.txt")
    fmt.Println("Dir:", dir, "File:", file)

    // 获取绝对路径
    absPath, _ := filepath.Abs("test.txt")
    fmt.Println("Absolute path:", absPath)

    // 获取相对路径
    relPath, _ := filepath.Rel("/a/b", "/a/b/c/d")
    fmt.Println("Relative path:", relPath)

    // 清理路径
    clean := filepath.Clean("path//to/../file.txt")
    fmt.Println("Cleaned path:", clean)

    // 匹配模式
    matched, _ := filepath.Match("*.txt", "file.txt")
    fmt.Println("Matched:", matched)

    // Glob模式
    files, _ := filepath.Glob("*.go")
    fmt.Println("Go files:", files)
}

func main() {
    pathOperations()
}`}</code>
      </pre>
      <p>## 11.5 临时文件和目录</p>

    </div>
  );
}

export const metadata = {
  id: '11-4-1',
  title: '路径处理',
  section: '11.4.1'
};
