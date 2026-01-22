import React from 'react';

interface Props {
  className?: string;
}

export default function 遅延呼び出しdefer({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">4.2.4 遅延呼び出し(defer)</h3>
      <p>defer文は、外側の関数が戻るまで関数の実行を遅延させます:</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "os"
)

func example1() {
    fmt.Println("Start")
    defer fmt.Println("End")  // 最後に実行
    fmt.Println("Middle")
}

// 複数のdeferは後入れ先出し(LIFO)の順序で実行される
func example2() {
    defer fmt.Println("1")
    defer fmt.Println("2")
    defer fmt.Println("3")
    fmt.Println("Start")
    // 出力: Start 3 2 1
}

// deferは関数が戻った後に実行される
func example3() int {
    x := 10
    defer func() {
        x = 20  // xを変更
    }()
    return x  // 10を返す、returnはdeferの前に実行されるため
}

// deferで名前付き戻り値にアクセス
func example4() (result int) {
    defer func() {
        result = 20  // 名前付き戻り値を変更
    }()
    return 10  // 20を返す、deferがresultを変更するため
}

// deferの実用例: リソースのクリーンアップ
func readFile(filename string) error {
    file, err := os.Open(filename)
    if err != nil {
        return err
    }
    defer file.Close()  // ファイルが確実に閉じられる

    // ファイルを読み取る...
    // 関数がどのように終了しても、file.Close()が呼び出される

    return nil
}

// deferでpanicをキャッチ
func safeDivide(a, b int) {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Recovered from panic:", r)
        }
    }()

    if b == 0 {
        panic("division by zero")
    }

    result := a / b
    fmt.Println("Result:", result)
}

func main() {
    example1()
    fmt.Println()

    example2()
    fmt.Println()

    fmt.Println("example3 returns:", example3())
    fmt.Println("example4 returns:", example4())
    fmt.Println()

    safeDivide(10, 2)
    safeDivide(10, 0)
    fmt.Println("Program continues...")
}`}</code>
      </pre>
      <p>## 4.3 関数型とインターフェース</p>

    </div>
  );
}

export const metadata = {
  id: '4-2-4',
  title: '遅延呼び出し(defer)',
  section: '4.2.4'
};
