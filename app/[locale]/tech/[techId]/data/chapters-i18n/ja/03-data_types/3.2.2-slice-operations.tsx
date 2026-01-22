import React from 'react';

interface Props {
  className?: string;
}

export default function スライス操作({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.2.2 スライス操作</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // スライスを作成
    slice := []int{1, 2, 3, 4, 5}

    // 要素にアクセス
    fmt.Println("最初の要素:", slice[0])

    // 要素を変更
    slice[0] = 10
    fmt.Println("変更後:", slice)

    // 要素を追加
    slice = append(slice, 6)
    fmt.Println("1つ追加:", slice)

    slice = append(slice, 7, 8, 9)
    fmt.Println("複数追加:", slice)

    // 別のスライスを追加
    slice2 := []int{10, 11, 12}
    slice = append(slice, slice2...)
    fmt.Println("スライスを追加:", slice)

    // スライスの切り出し
    fmt.Println("slice[2:5] =", slice[2:5])   // [3 4 5]
    fmt.Println("slice[:3] =", slice[:3])     // [10 2 3]
    fmt.Println("slice[3:] =", slice[3:])     // [4 5 6 7 8 9 10 11 12]
    fmt.Println("slice[:] =", slice[:])       // すべての要素

    // スライスをコピー
    slice3 := make([]int, len(slice))
    copy(slice3, slice)
    fmt.Println("コピーしたスライス:", slice3)

    // 要素を削除(インデックス2の要素を削除)
    index := 2
    slice = append(slice[:index], slice[index+1:]...)
    fmt.Println("削除後:", slice)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '3-2-2',
  title: 'スライス操作',
  section: '3.2.2'
};
