import React from 'react';

interface Props {
  className?: string;
}

export default function 算術演算子({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.4.1 算術演算子</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    a, b := 10, 3

    fmt.Println("加算:", a+b)    // 13
    fmt.Println("減算:", a-b)    // 7
    fmt.Println("乗算:", a*b)    // 30
    fmt.Println("除算:", a/b)    // 3(整数除算)
    fmt.Println("剰余:", a%b)    // 1

    // 浮動小数点除算
    fmt.Println("浮動小数点除算:", float64(a)/float64(b))  // 3.333...

    // インクリメント・デクリメント(後置形式のみ)
    i := 5
    i++  // インクリメント
    fmt.Println("i++:", i)  // 6
    i--  // デクリメント
    fmt.Println("i--:", i)  // 5

    // 注意：Goは ++i と --i をサポートしていません
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-4-1',
  title: '算術演算子',
  section: '2.4.1'
};
