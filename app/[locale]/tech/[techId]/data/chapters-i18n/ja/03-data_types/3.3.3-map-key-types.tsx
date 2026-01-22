import React from 'react';

interface Props {
  className?: string;
}

export default function Mapのキー型({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.3.3 Mapのキー型</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // 整数をキーとして使用
    map1 := map[int]string{
        1: "one",
        2: "two",
        3: "three",
    }

    // 構造体をキーとして使用
    type Point struct {
        X, Y int
    }
    map2 := map[Point]string{
        {0, 0}: "origin",
        {1, 1}: "point1",
    }

    // 配列をキーとして使用(スライスはキーとして使用できません)
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
  title: 'Mapのキー型',
  section: '3.3.3'
};
