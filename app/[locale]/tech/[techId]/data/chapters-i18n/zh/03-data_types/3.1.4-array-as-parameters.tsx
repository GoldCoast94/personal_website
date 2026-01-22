import React from 'react';

interface Props {
  className?: string;
}

export default function 数组作为函数参数({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.1.4 数组作为函数参数</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// 数组作为参数（值传递）
func modifyArray(arr [5]int) {
    arr[0] = 100
    fmt.Println("函数内:", arr)
}

// 使用指针传递数组
func modifyArrayPtr(arr *[5]int) {
    arr[0] = 100
    fmt.Println("函数内:", arr)
}

func main() {
    arr := [5]int{1, 2, 3, 4, 5}

    fmt.Println("原数组:", arr)
    modifyArray(arr)
    fmt.Println("调用后:", arr)  // 未改变

    fmt.Println("\n使用指针:")
    modifyArrayPtr(&arr)
    fmt.Println("调用后:", arr)  // 已改变
}`}</code>
      </pre>
      <p>## 3.2 切片（Slice）</p>

    </div>
  );
}

export const metadata = {
  id: '3-1-4',
  title: '数组作为函数参数',
  section: '3.1.4'
};
