import React from 'react';

interface Props {
  className?: string;
}

export default function 型アサーション({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">6.1.3 型アサーション</h3>
      <p>型アサーションはインターフェース値の基底となる具体的な値を取得するために使用されます。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    var i interface{} = "hello"

    // Type assertion
    s := i.(string)
    fmt.Println(s)  // hello

    // Safe type assertion (with check)
    s, ok := i.(string)
    if ok {
        fmt.Println("String:", s)
    }

    n, ok := i.(int)
    if !ok {
        fmt.Println("Not an int")
    } else {
        fmt.Println("Int:", n)
    }

    // Unsafe type assertion (will panic)
    // n := i.(int)  // panic: interface conversion
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '6-1-3',
  title: '型アサーション',
  section: '6.1.3'
};
