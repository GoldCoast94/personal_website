import React from 'react';

interface Props {
  className?: string;
}

export default function 切片定义({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.2.1 切片定义</h3>
      <p>切片是动态数组，是Go中最常用的数据结构。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // 方式1：直接声明
    var slice1 []int
    fmt.Println("slice1:", slice1, "长度:", len(slice1), "容量:", cap(slice1))

    // 方式2：使用make创建
    slice2 := make([]int, 5)  // 长度为5，容量为5
    fmt.Println("slice2:", slice2)

    slice3 := make([]int, 5, 10)  // 长度为5，容量为10
    fmt.Println("slice3:", slice3, "长度:", len(slice3), "容量:", cap(slice3))

    // 方式3：字面量初始化
    slice4 := []int{1, 2, 3, 4, 5}
    fmt.Println("slice4:", slice4)

    // 方式4：从数组创建
    arr := [5]int{1, 2, 3, 4, 5}
    slice5 := arr[1:4]  // 截取索引1到3的元素
    fmt.Println("slice5:", slice5)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '3-2-1',
  title: '切片定义',
  section: '3.2.1'
};
