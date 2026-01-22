import React from 'react';

interface Props {
  className?: string;
}

export default function 类型断言({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">6.1.3 类型断言</h3>
      <p>类型断言用于获取接口值的底层具体值。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    var i interface{} = "hello"

    // 类型断言
    s := i.(string)
    fmt.Println(s)  // hello

    // 安全的类型断言（带检查）
    s, ok := i.(string)
    if ok {
        fmt.Println("String:", s)
    }

    n, ok := i.(int)
    if !ok {
        fmt.Println("Not an int")
    } else {
        fmt.Println("Int:", n)
    }

    // 不安全的类型断言（会panic）
    // n := i.(int)  // panic: interface conversion
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '6-1-3',
  title: '类型断言',
  section: '6.1.3'
};
