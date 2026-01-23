import React from 'react';

interface Props {
  className?: string;
}

export default function パッケージのインポート({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.5.2 パッケージのインポート</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    // 標準インポート
    "fmt"
    "net/http"

    // エイリアスインポート
    str "strings"

    // ドットインポート（非推奨）
    . "math"

    // ブランクインポート（initのみ実行）
    _ "github.com/go-sql-driver/mysql"

    // サードパーティパッケージ
    "github.com/gin-gonic/gin"
)

func main() {
    fmt.Println(str.ToUpper("hello"))  // エイリアスを使用
    fmt.Println(Sqrt(16))               // ドットインポートは直接使用可能
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-5-2',
  title: 'パッケージのインポート',
  section: '8.5.2'
};
