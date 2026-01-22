import React from 'react';

interface Props {
  className?: string;
}

export default function 可变参数({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">4.1.3 可变参数</h3>
      <p>函数可以接受不定数量的参数：</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// 可变参数必须是最后一个参数
func sum(nums ...int) int {
    total := 0
    for _, num := range nums {
        total += num
    }
    return total
}

// 混合使用固定参数和可变参数
func printInfo(prefix string, values ...interface{}) {
    fmt.Print(prefix, ": ")
    for _, v := range values {
        fmt.Print(v, " ")
    }
    fmt.Println()
}

func main() {
    // 传入任意数量的参数
    fmt.Println(sum(1, 2, 3))           // 6
    fmt.Println(sum(1, 2, 3, 4, 5))     // 15

    // 传入切片
    numbers := []int{10, 20, 30}
    fmt.Println(sum(numbers...))        // 60

    // 混合参数
    printInfo("Numbers", 1, 2, 3)
    printInfo("Mixed", "hello", 42, true)
}`}</code>
      </pre>
      <p>## 4.2 高级函数特性</p>

    </div>
  );
}

export const metadata = {
  id: '4-1-3',
  title: '可变参数',
  section: '4.1.3'
};
