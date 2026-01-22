import React from 'react';

interface Props {
  className?: string;
}

export default function 函数定义({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">4.1.1 函数定义</h3>
      <p>函数是组织好的、可重复使用的代码块。Go语言中函数的基本语法：</p>

      <pre className="code-block">
        <code className="language-go">{`func 函数名(参数列表) 返回值类型 {
    函数体
}`}</code>
      </pre>

      <ul>
        <li>*基本示例：**</li>
      </ul>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// 无参数无返回值
func sayHello() {
    fmt.Println("Hello, World!")
}

// 有参数无返回值
func greet(name string) {
    fmt.Printf("Hello, %s!\n", name)
}

// 有参数有返回值
func add(a int, b int) int {
    return a + b
}

// 相同类型参数简写
func multiply(a, b int) int {
    return a * b
}

// 多个返回值
func swap(a, b string) (string, string) {
    return b, a
}

func main() {
    sayHello()
    greet("Go")

    sum := add(3, 5)
    fmt.Println("Sum:", sum)

    product := multiply(4, 6)
    fmt.Println("Product:", product)

    x, y := swap("hello", "world")
    fmt.Println(x, y)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '4-1-1',
  title: '函数定义',
  section: '4.1.1'
};
