import React from 'react';

interface Props {
  className?: string;
}

export default function 算术运算符({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.4.1 算术运算符</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    a, b := 10, 3

    fmt.Println("加法:", a+b)    // 13
    fmt.Println("减法:", a-b)    // 7
    fmt.Println("乘法:", a*b)    // 30
    fmt.Println("除法:", a/b)    // 3（整数除法）
    fmt.Println("取余:", a%b)    // 1

    // 浮点数除法
    fmt.Println("浮点除法:", float64(a)/float64(b))  // 3.333...

    // 自增自减（只有后缀形式）
    i := 5
    i++  // 自增
    fmt.Println("i++:", i)  // 6
    i--  // 自减
    fmt.Println("i--:", i)  // 5

    // 注意：Go不支持 ++i 和 --i
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-4-1',
  title: '算术运算符',
  section: '2.4.1'
};
