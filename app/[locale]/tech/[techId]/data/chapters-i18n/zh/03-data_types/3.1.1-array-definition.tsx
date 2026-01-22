import React from 'react';

interface Props {
  className?: string;
}

export default function 数组定义({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.1.1 数组定义</h3>
      <p>数组是固定长度、相同类型元素的序列。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // 方式1：声明后赋值
    var arr1 [5]int
    arr1[0] = 1
    arr1[1] = 2

    // 方式2：声明并初始化
    var arr2 = [5]int{1, 2, 3, 4, 5}

    // 方式3：自动推导长度
    arr3 := [...]int{1, 2, 3, 4, 5, 6}

    // 方式4：指定索引初始化
    arr4 := [5]int{0: 10, 2: 30, 4: 50}

    fmt.Println("arr1:", arr1)  // [1 2 0 0 0]
    fmt.Println("arr2:", arr2)  // [1 2 3 4 5]
    fmt.Println("arr3:", arr3)  // [1 2 3 4 5 6]
    fmt.Println("arr4:", arr4)  // [10 0 30 0 50]
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '3-1-1',
  title: '数组定义',
  section: '3.1.1'
};
