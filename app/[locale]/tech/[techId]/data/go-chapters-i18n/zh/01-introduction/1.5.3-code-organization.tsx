import React from 'react';

interface Props {
  className?: string;
}

export default function 代码组织({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.5.3 代码组织</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    // 标准库
    "fmt"
    "os"

    // 第三方库
    "github.com/gin-gonic/gin"

    // 本地包
    "myproject/models"
)

// 常量组
const (
    StatusOK = 200
    StatusError = 500
)

// 变量组
var (
    count int
    name  string
)

// 类型定义
type Config struct {
    Port int
    Host string
}

// init函数
func init() {
    // 初始化操作
}

// main函数
func main() {
    // 程序入口
}

// 其他函数
func helper() {
    // 辅助函数
}`}</code>
      </pre>
      <p>## 1.6 练习题</p>

    </div>
  );
}

export const metadata = {
  id: '1-5-3',
  title: '代码组织',
  section: '1.5.3'
};
