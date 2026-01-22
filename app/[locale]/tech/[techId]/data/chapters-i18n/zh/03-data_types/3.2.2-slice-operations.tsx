import React from 'react';

interface Props {
  className?: string;
}

export default function 切片操作({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.2.2 切片操作</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // 创建切片
    slice := []int{1, 2, 3, 4, 5}

    // 访问元素
    fmt.Println("第一个元素:", slice[0])

    // 修改元素
    slice[0] = 10
    fmt.Println("修改后:", slice)

    // 追加元素
    slice = append(slice, 6)
    fmt.Println("追加一个:", slice)

    slice = append(slice, 7, 8, 9)
    fmt.Println("追加多个:", slice)

    // 追加另一个切片
    slice2 := []int{10, 11, 12}
    slice = append(slice, slice2...)
    fmt.Println("追加切片:", slice)

    // 切片截取
    fmt.Println("slice[2:5] =", slice[2:5])   // [3 4 5]
    fmt.Println("slice[:3] =", slice[:3])     // [10 2 3]
    fmt.Println("slice[3:] =", slice[3:])     // [4 5 6 7 8 9 10 11 12]
    fmt.Println("slice[:] =", slice[:])       // 所有元素

    // 复制切片
    slice3 := make([]int, len(slice))
    copy(slice3, slice)
    fmt.Println("复制的切片:", slice3)

    // 删除元素（删除索引2的元素）
    index := 2
    slice = append(slice[:index], slice[index+1:]...)
    fmt.Println("删除后:", slice)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '3-2-2',
  title: '切片操作',
  section: '3.2.2'
};
