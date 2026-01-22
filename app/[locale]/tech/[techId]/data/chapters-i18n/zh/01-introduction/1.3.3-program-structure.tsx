import React from 'react';

interface Props {
  className?: string;
}

export default function 程序结构({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.3.3 程序结构</h3>
      <p>一个标准的Go程序包含：</p>

      <pre className="code-block">
        <code className="language-go">{`// 1. 包声明（必须）
package main

// 2. 导入包
import (
    "fmt"
    "math"
)

// 3. 常量定义
const PI = 3.14159

// 4. 变量定义
var name string = "Go"

// 5. 类型定义
type Person struct {
    Name string
    Age  int
}

// 6. 函数定义
func main() {
    fmt.Println("Hello, Go!")
}

// 7. init函数（可选，在main之前自动执行）
func init() {
    fmt.Println("Initializing...")
}`}</code>
      </pre>
      <p>## 1.4 Go命令详解</p>

    </div>
  );
}

export const metadata = {
  id: '1-3-3',
  title: '程序结构',
  section: '1.3.3'
};
