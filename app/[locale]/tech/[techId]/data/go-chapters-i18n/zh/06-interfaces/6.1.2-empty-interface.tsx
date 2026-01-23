import React from 'react';

interface Props {
  className?: string;
}

export default function 空接口({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">6.1.2 空接口</h3>
      <p>空接口<code>{'interface{}'}</code>可以接受任何类型的值。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// 空接口可以接受任何类型
func PrintAnything(v interface{}) {
    fmt.Printf("Value: %v, Type: %T\n", v, v)
}

func main() {
    PrintAnything(42)
    PrintAnything("hello")
    PrintAnything(3.14)
    PrintAnything(true)
    PrintAnything([]int{1, 2, 3})

    // 使用空接口存储不同类型的值
    var anything interface{}

    anything = 100
    fmt.Printf("%v, %T\n", anything, anything)

    anything = "string"
    fmt.Printf("%v, %T\n", anything, anything)

    anything = struct{ Name string }{"Go"}
    fmt.Printf("%v, %T\n", anything, anything)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '6-1-2',
  title: '空接口',
  section: '6.1.2'
};
