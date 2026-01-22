import React from 'react';

interface Props {
  className?: string;
}

export default function プログラム構造({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.3.3 プログラム構造</h3>
      <p>標準的なGoプログラムの構成要素：</p>

      <pre className="code-block">
        <code className="language-go">{`// 1. パッケージ宣言（必須）
package main

// 2. パッケージのインポート
import (
    "fmt"
    "math"
)

// 3. 定数定義
const PI = 3.14159

// 4. 変数定義
var name string = "Go"

// 5. 型定義
type Person struct {
    Name string
    Age  int
}

// 6. 関数定義
func main() {
    fmt.Println("Hello, Go!")
}

// 7. init関数（オプション、main前に自動実行）
func init() {
    fmt.Println("Initializing...")
}`}</code>
      </pre>
      <p>## 1.4 Goコマンド詳解</p>

    </div>
  );
}

export const metadata = {
  id: '1-3-3',
  title: 'プログラム構造',
  section: '1.3.3'
};
