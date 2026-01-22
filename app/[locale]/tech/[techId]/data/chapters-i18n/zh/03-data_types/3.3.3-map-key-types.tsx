import React from 'react';

interface Props {
  className?: string;
}

export default function Map的键类型({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.3.3 Map的键类型</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // 整数作为键
    map1 := map[int]string{
        1: "one",
        2: "two",
        3: "three",
    }

    // 结构体作为键
    type Point struct {
        X, Y int
    }
    map2 := map[Point]string{
        {0, 0}: "origin",
        {1, 1}: "point1",
    }

    // 数组作为键（切片不能作为键）
    map3 := map[[2]int]string{
        {1, 2}: "pair1",
        {3, 4}: "pair2",
    }

    fmt.Println("map1:", map1)
    fmt.Println("map2:", map2)
    fmt.Println("map3:", map3)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '3-3-3',
  title: 'Map的键类型',
  section: '3.3.3'
};
