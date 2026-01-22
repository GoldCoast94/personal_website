import React from 'react';

interface Props {
  className?: string;
}

export default function 包的导入({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.5.2 包的导入</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    // 标准导入
    "fmt"
    "net/http"

    // 别名导入
    str "strings"

    // 点导入（不推荐）
    . "math"

    // 空白导入（只执行init）
    _ "github.com/go-sql-driver/mysql"

    // 第三方包
    "github.com/gin-gonic/gin"
)

func main() {
    fmt.Println(str.ToUpper("hello"))  // 使用别名
    fmt.Println(Sqrt(16))               // 点导入可直接使用
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-5-2',
  title: '包的导入',
  section: '8.5.2'
};
