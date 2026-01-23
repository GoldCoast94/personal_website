import React from 'react';

interface Props {
  className?: string;
}

export default function 配列を関数パラメータとして({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.1.4 配列を関数パラメータとして</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// 配列をパラメータとして（値渡し）
func modifyArray(arr [5]int) {
    arr[0] = 100
    fmt.Println("関数内:", arr)
}

// ポインタを使用して配列を渡す
func modifyArrayPtr(arr *[5]int) {
    arr[0] = 100
    fmt.Println("関数内:", arr)
}

func main() {
    arr := [5]int{1, 2, 3, 4, 5}

    fmt.Println("元の配列:", arr)
    modifyArray(arr)
    fmt.Println("呼び出し後:", arr)  // 変更なし

    fmt.Println("\nポインタを使用:")
    modifyArrayPtr(&arr)
    fmt.Println("呼び出し後:", arr)  // 変更あり
}`}</code>
      </pre>
      <p>## 3.2 スライス（Slice）</p>

    </div>
  );
}

export const metadata = {
  id: '3-1-4',
  title: '配列を関数パラメータとして',
  section: '3.1.4'
};
