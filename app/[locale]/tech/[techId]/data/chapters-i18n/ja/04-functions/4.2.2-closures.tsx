import React from 'react';

interface Props {
  className?: string;
}

export default function クロージャ({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">4.2.2 クロージャ</h3>
      <p>クロージャは、外部の変数を参照する関数です:</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// クロージャの例1: カウンター
func counter() func() int {
    count := 0
    return func() int {
        count++
        return count
    }
}

// クロージャの例2: アキュムレータ
func adder() func(int) int {
    sum := 0
    return func(x int) int {
        sum += x
        return sum
    }
}

// クロージャの例3: ジェネレータ
func makeMultiplier(factor int) func(int) int {
    return func(n int) int {
        return n * factor
    }
}

func main() {
    // カウンターを使用
    c1 := counter()
    fmt.Println(c1())  // 1
    fmt.Println(c1())  // 2
    fmt.Println(c1())  // 3

    c2 := counter()    // 新しいクロージャで独立したcount
    fmt.Println(c2())  // 1

    // アキュムレータを使用
    acc := adder()
    fmt.Println(acc(1))   // 1
    fmt.Println(acc(2))   // 3
    fmt.Println(acc(3))   // 6

    // ジェネレータを使用
    double := makeMultiplier(2)
    triple := makeMultiplier(3)
    fmt.Println(double(5))  // 10
    fmt.Println(triple(5))  // 15
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '4-2-2',
  title: 'クロージャ',
  section: '4.2.2'
};
