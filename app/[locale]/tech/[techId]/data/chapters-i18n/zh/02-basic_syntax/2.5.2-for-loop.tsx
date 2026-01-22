import React from 'react';

interface Props {
  className?: string;
}

export default function For循环({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.5.2 for循环</h3>
      <p>Go语言只有for循环，没有while循环：</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // 标准for循环
    for i := 0; i < 5; i++ {
        fmt.Println(i)
    }

    // while风格
    j := 0
    for j < 5 {
        fmt.Println(j)
        j++
    }

    // 无限循环
    k := 0
    for {
        if k >= 3 {
            break
        }
        fmt.Println(k)
        k++
    }

    // for range遍历
    nums := []int{1, 2, 3, 4, 5}
    for index, value := range nums {
        fmt.Printf("索引:%d, 值:%d\n", index, value)
    }

    // 只要索引
    for index := range nums {
        fmt.Println("索引:", index)
    }

    // 只要值
    for _, value := range nums {
        fmt.Println("值:", value)
    }

    // continue和break
    for i := 0; i < 10; i++ {
        if i%2 == 0 {
            continue  // 跳过偶数
        }
        if i > 7 {
            break  // 大于7时退出
        }
        fmt.Println(i)
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-5-2',
  title: 'for循环',
  section: '2.5.2'
};
