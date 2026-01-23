import React from 'react';

interface Props {
  className?: string;
}

export default function Map操作({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.3.2 Map操作</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // 创建map
    scores := map[string]int{
        "Alice": 90,
        "Bob":   85,
        "Carol": 95,
    }

    // 访问元素
    fmt.Println("Alice的分数:", scores["Alice"])

    // 添加/修改元素
    scores["David"] = 88
    scores["Alice"] = 92
    fmt.Println("修改后:", scores)

    // 删除元素
    delete(scores, "Bob")
    fmt.Println("删除Bob后:", scores)

    // 检查键是否存在
    value, ok := scores["Bob"]
    if ok {
        fmt.Println("Bob的分数:", value)
    } else {
        fmt.Println("Bob不存在")
    }

    // 遍历map
    fmt.Println("\n遍历map:")
    for key, value := range scores {
        fmt.Printf("%s: %d\n", key, value)
    }

    // 只遍历键
    fmt.Println("\n只遍历键:")
    for key := range scores {
        fmt.Println(key)
    }

    // 只遍历值
    fmt.Println("\n只遍历值:")
    for _, value := range scores {
        fmt.Println(value)
    }

    // map长度
    fmt.Println("\nmap长度:", len(scores))
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '3-3-2',
  title: 'Map操作',
  section: '3.3.2'
};
