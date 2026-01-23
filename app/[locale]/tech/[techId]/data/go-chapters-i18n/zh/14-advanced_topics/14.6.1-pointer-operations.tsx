import React from 'react';

interface Props {
  className?: string;
}

export default function 指针操作({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">14.6.1 指针操作</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "unsafe"
)

func main() {
    var x int64 = 10

    // 获取指针
    ptr := unsafe.Pointer(&x)

    // 转换为不同类型的指针
    intPtr := (*int64)(ptr)

    // 修改值
    *intPtr = 20

    fmt.Println("x:", x)  // x: 20

    // 获取大小
    fmt.Println("Size of int64:", unsafe.Sizeof(x))

    // 结构体字段偏移
    type Person struct {
        Name string
        Age  int
    }

    person := Person{Name: "Alice", Age: 30}
    nameOffset := unsafe.Offsetof(person.Name)
    ageOffset := unsafe.Offsetof(person.Age)

    fmt.Printf("Name offset: %d, Age offset: %d\n", nameOffset, ageOffset)
}`}</code>
      </pre>
      <p>## 14.7 练习题</p>

    </div>
  );
}

export const metadata = {
  id: '14-6-1',
  title: '指针操作',
  section: '14.6.1'
};
