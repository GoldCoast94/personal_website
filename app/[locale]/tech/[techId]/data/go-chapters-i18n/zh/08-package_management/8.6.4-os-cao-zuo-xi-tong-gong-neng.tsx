import React from 'react';

interface Props {
  className?: string;
}

export default function Os操作系统功能({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.6.4 os - 操作系统功能</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "os"
)

func main() {
    // 环境变量
    os.Setenv("MY_VAR", "value")
    fmt.Println(os.Getenv("MY_VAR"))
    fmt.Println(os.Environ())

    // 命令行参数
    fmt.Println(os.Args)

    // 文件操作
    file, err := os.Create("test.txt")
    if err != nil {
        fmt.Println(err)
        return
    }
    defer file.Close()

    file.WriteString("Hello, File!")

    // 文件信息
    info, _ := os.Stat("test.txt")
    fmt.Println("Size:", info.Size())
    fmt.Println("IsDir:", info.IsDir())
    fmt.Println("ModTime:", info.ModTime())

    // 删除文件
    os.Remove("test.txt")
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-6-4',
  title: 'os - 操作系统功能',
  section: '8.6.4'
};
