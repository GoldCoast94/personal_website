import React from 'react';

interface Props {
  className?: string;
}

export default function コード構成({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.5.3 コード構成</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    // 標準ライブラリ
    "fmt"
    "os"

    // サードパーティライブラリ
    "github.com/gin-gonic/gin"

    // ローカルパッケージ
    "myproject/models"
)

// 定数グループ
const (
    StatusOK = 200
    StatusError = 500
)

// 変数グループ
var (
    count int
    name  string
)

// 型定義
type Config struct {
    Port int
    Host string
}

// init関数
func init() {
    // 初期化操作
}

// main関数
func main() {
    // プログラムエントリーポイント
}

// その他の関数
func helper() {
    // ヘルパー関数
}`}</code>
      </pre>
      <p>## 1.6 練習問題</p>

    </div>
  );
}

export const metadata = {
  id: '1-5-3',
  title: 'コード構成',
  section: '1.5.3'
};
