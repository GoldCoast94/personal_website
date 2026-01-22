import React from 'react';

interface Props {
  className?: string;
}

export default function 数组操作({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.1.2 数组操作</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    arr := [5]int{1, 2, 3, 4, 5}

    // 访问元素
    fmt.Println("第一个元素:", arr[0])
    fmt.Println("最后一个元素:", arr[len(arr)-1])

    // 修改元素
    arr[2] = 30
    fmt.Println("修改后:", arr)

    // 数组长度
    fmt.Println("数组长度:", len(arr))

    // 遍历数组
    fmt.Println("方式1：使用索引")
    for i := 0; i < len(arr); i++ {
        fmt.Printf("arr[%d] = %d\n", i, arr[i])
    }

    fmt.Println("方式2：使用range")
    for index, value := range arr {
        fmt.Printf("索引:%d, 值:%d\n", index, value)
    }

    // 只要值
    fmt.Println("只遍历值:")
    for _, value := range arr {
        fmt.Println(value)
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '3-1-2',
  title: '数组操作',
  section: '3.1.2'
};
