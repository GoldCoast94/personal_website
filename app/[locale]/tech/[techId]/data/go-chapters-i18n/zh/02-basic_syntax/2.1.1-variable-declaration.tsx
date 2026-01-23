import React from 'react';

interface Props {
  className?: string;
}

export default function 变量声明({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.1.1 变量声明</h3>
      <p>Go语言提供多种变量声明方式：</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // 方式1：标准声明
    var name string
    name = "Go"

    // 方式2：声明并初始化
    var age int = 25

    // 方式3：类型推导
    var city = "Beijing"  // 自动推导为string类型

    // 方式4：短变量声明（仅在函数内使用）
    country := "China"    // 推荐方式

    // 方式5：批量声明
    var (
        a int
        b string
        c bool
    )

    // 方式6：批量声明并初始化
    var x, y, z int = 1, 2, 3

    // 方式7：多变量不同类型
    var m, n, o = 1, "hello", true

    fmt.Println(name, age, city, country, a, b, c, x, y, z, m, n, o)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-1-1',
  title: '变量声明',
  section: '2.1.1'
};
