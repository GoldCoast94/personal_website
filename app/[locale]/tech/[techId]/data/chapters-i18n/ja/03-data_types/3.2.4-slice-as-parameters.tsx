import React from 'react';

interface Props {
  className?: string;
}

export default function スライスを関数パラメータとして({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.2.4 スライスを関数パラメータとして</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// スライスをパラメータとして(参照渡し)
func modifySlice(s []int) {
    s[0] = 100
    fmt.Println("関数内:", s)
}

// 要素を追加(新しいスライスを返す)
func appendSlice(s []int, value int) []int {
    s = append(s, value)
    return s
}

func main() {
    slice := []int{1, 2, 3, 4, 5}

    fmt.Println("元のスライス:", slice)
    modifySlice(slice)
    fmt.Println("呼び出し後:", slice)  // 変更されている

    fmt.Println("\n要素を追加:")
    slice = appendSlice(slice, 6)
    fmt.Println("追加後:", slice)
}`}</code>
      </pre>
      <p>## 3.3 マップ(Map)</p>

    </div>
  );
}

export const metadata = {
  id: '3-2-4',
  title: 'スライスを関数パラメータとして',
  section: '3.2.4'
};
