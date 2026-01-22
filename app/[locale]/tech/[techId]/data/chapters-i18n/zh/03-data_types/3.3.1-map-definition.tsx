import React from 'react';

interface Props {
  className?: string;
}

export default function Map定义({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.3.1 Map定义</h3>
      <p>Map是键值对的无序集合。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // 方式1：使用make创建
    var map1 = make(map[string]int)
    map1["apple"] = 10
    map1["banana"] = 20

    // 方式2：字面量初始化
    map2 := map[string]int{
        "apple":  10,
        "banana": 20,
        "orange": 30,
    }

    // 方式3：空map
    map3 := map[string]int{}

    fmt.Println("map1:", map1)
    fmt.Println("map2:", map2)
    fmt.Println("map3:", map3)

    // 注意：nil map不能直接使用
    var map4 map[string]int
    fmt.Println("map4 is nil:", map4 == nil)
    // map4["key"] = 1  // 会panic
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '3-3-1',
  title: 'Map定义',
  section: '3.3.1'
};
