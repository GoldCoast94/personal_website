import React from 'react';

interface Props {
  className?: string;
}

export default function 基本反射操作({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">14.1.1 基本反射操作</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "reflect"
)

func main() {
    var x float64 = 3.4

    // 获取类型和值
    t := reflect.TypeOf(x)
    v := reflect.ValueOf(x)

    fmt.Println("Type:", t)           // Type: float64
    fmt.Println("Value:", v)          // Value: 3.4
    fmt.Println("Kind:", v.Kind())    // Kind: float64

    // 类型断言
    fmt.Println("Type string:", t.String())
    fmt.Println("Value float64:", v.Float())

    // 检查类型
    if v.Kind() == reflect.Float64 {
        fmt.Println("x is a float64")
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '14-1-1',
  title: '基本反射操作',
  section: '14.1.1'
};
