import React from 'react';

interface Props {
  className?: string;
}

export default function 値の変更({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">14.1.2 値の変更</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "reflect"
)

func main() {
    var x float64 = 3.4

    // 変更するにはポインタを渡す必要がある
    v := reflect.ValueOf(&x)
    fmt.Println("Can set:", v.CanSet())  // false

    // ポインタが指す要素を取得
    v = v.Elem()
    fmt.Println("Can set:", v.CanSet())  // true

    // 値を変更
    v.SetFloat(7.1)
    fmt.Println("x:", x)  // x: 7.1
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '14-1-2',
  title: '値の変更',
  section: '14.1.2'
};
