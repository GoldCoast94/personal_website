import React from 'react';

interface Props {
  className?: string;
}

export default function 变量作用域({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.1.2 变量作用域</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// 包级别变量（全局变量）
var globalVar = "I am global"

func main() {
    // 函数级别变量（局部变量）
    localVar := "I am local"

    if true {
        // 块级别变量
        blockVar := "I am in block"
        fmt.Println(blockVar)   // 可以访问
        fmt.Println(localVar)   // 可以访问
        fmt.Println(globalVar)  // 可以访问
    }

    // fmt.Println(blockVar)    // 错误：blockVar未定义
    fmt.Println(localVar)       // 可以访问
    fmt.Println(globalVar)      // 可以访问
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-1-2',
  title: '变量作用域',
  section: '2.1.2'
};
