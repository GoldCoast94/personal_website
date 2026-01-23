import React from 'react';

interface Props {
  className?: string;
}

export default function 结构体指针({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">5.1.2 结构体指针</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

type Point struct {
    X, Y int
}

func main() {
    // 方式1：使用new
    p1 := new(Point)
    p1.X = 10
    p1.Y = 20
    fmt.Println(p1)  // &{10 20}

    // 方式2：使用&操作符
    p2 := &Point{X: 30, Y: 40}
    fmt.Println(p2)  // &{30 40}

    // Go会自动解引用
    fmt.Println(p2.X)  // 等同于 (*p2).X

    // 修改值
    p2.X = 50
    fmt.Println(p2)  // &{50 40}

    // 结构体比较
    p3 := Point{X: 10, Y: 20}
    p4 := Point{X: 10, Y: 20}
    fmt.Println(p3 == p4)  // true（所有字段都相等）

    // 指针比较
    fmt.Println(p1 == p2)  // false（不同的指针）
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '5-1-2',
  title: '结构体指针',
  section: '5.1.2'
};
