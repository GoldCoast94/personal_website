import React from 'react';

interface Props {
  className?: string;
}

export default function 切片作为函数参数({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.2.4 切片作为函数参数</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// 切片作为参数（引用传递）
func modifySlice(s []int) {
    s[0] = 100
    fmt.Println("函数内:", s)
}

// 追加元素（返回新切片）
func appendSlice(s []int, value int) []int {
    s = append(s, value)
    return s
}

func main() {
    slice := []int{1, 2, 3, 4, 5}

    fmt.Println("原切片:", slice)
    modifySlice(slice)
    fmt.Println("调用后:", slice)  // 已改变

    fmt.Println("\n追加元素:")
    slice = appendSlice(slice, 6)
    fmt.Println("追加后:", slice)
}`}</code>
      </pre>
      <p>## 3.3 映射（Map）</p>

    </div>
  );
}

export const metadata = {
  id: '3-2-4',
  title: '切片作为函数参数',
  section: '3.2.4'
};
