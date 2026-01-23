import React from 'react';

interface Props {
  className?: string;
}

export default function 修改值({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">14.1.2 修改值</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "reflect"
)

func main() {
    var x float64 = 3.4

    // 传递指针才能修改
    v := reflect.ValueOf(&x)
    fmt.Println("Can set:", v.CanSet())  // false

    // 获取指针指向的元素
    v = v.Elem()
    fmt.Println("Can set:", v.CanSet())  // true

    // 修改值
    v.SetFloat(7.1)
    fmt.Println("x:", x)  // x: 7.1
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '14-1-2',
  title: '修改值',
  section: '14.1.2'
};
