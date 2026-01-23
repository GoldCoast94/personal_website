import React from 'react';

interface Props {
  className?: string;
}

export default function 空インターフェース({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">6.1.2 空インターフェース</h3>
      <p>空インターフェース<code>{'interface{}'}</code>は任意の型の値を受け入れることができます。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// 空インターフェースは任意の型を受け入れ可能
func PrintAnything(v interface{}) {
    fmt.Printf("Value: %v, Type: %T\n", v, v)
}

func main() {
    PrintAnything(42)
    PrintAnything("hello")
    PrintAnything(3.14)
    PrintAnything(true)
    PrintAnything([]int{1, 2, 3})

    // 空インターフェースを使用して異なる型の値を格納
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
  title: '空インターフェース',
  section: '6.1.2'
};
