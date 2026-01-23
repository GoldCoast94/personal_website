import React from 'react';

interface Props {
  className?: string;
}

export default function 可変長引数({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">4.1.3 可変長引数</h3>
      <p>関数は可変数のパラメータを受け取ることができます：</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// 可変長引数は最後のパラメータでなければならない
func sum(nums ...int) int {
    total := 0
    for _, num := range nums {
        total += num
    }
    return total
}

// 固定パラメータと可変長引数の混在
func printInfo(prefix string, values ...interface{}) {
    fmt.Print(prefix, ": ")
    for _, v := range values {
        fmt.Print(v, " ")
    }
    fmt.Println()
}

func main() {
    // 任意の数の引数を渡す
    fmt.Println(sum(1, 2, 3))           // 6
    fmt.Println(sum(1, 2, 3, 4, 5))     // 15

    // スライスを渡す
    numbers := []int{10, 20, 30}
    fmt.Println(sum(numbers...))        // 60

    // 混在パラメータ
    printInfo("Numbers", 1, 2, 3)
    printInfo("Mixed", "hello", 42, true)
}`}</code>
      </pre>
      <p>## 4.2 高度な関数機能</p>

    </div>
  );
}

export const metadata = {
  id: '4-1-3',
  title: '可変長引数',
  section: '4.1.3'
};
