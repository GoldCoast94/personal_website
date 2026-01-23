import React from 'react';

interface Props {
  className?: string;
}

export default function 类型选择({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">6.1.4 类型选择</h3>
      <p>使用type switch可以判断接口值的类型。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func describe(i interface{}) {
    switch v := i.(type) {
    case int:
        fmt.Printf("Integer: %d\n", v)
    case string:
        fmt.Printf("String: %s (length: %d)\n", v, len(v))
    case bool:
        fmt.Printf("Boolean: %t\n", v)
    case float64:
        fmt.Printf("Float: %.2f\n", v)
    case []int:
        fmt.Printf("Int slice: %v\n", v)
    case nil:
        fmt.Println("Nil value")
    default:
        fmt.Printf("Unknown type: %T\n", v)
    }
}

func main() {
    describe(42)
    describe("hello")
    describe(true)
    describe(3.14)
    describe([]int{1, 2, 3})
    describe(nil)
    describe(struct{ Name string }{"Go"})
}`}</code>
      </pre>
      <p>## 6.2 接口组合</p>

    </div>
  );
}

export const metadata = {
  id: '6-1-4',
  title: '类型选择',
  section: '6.1.4'
};
