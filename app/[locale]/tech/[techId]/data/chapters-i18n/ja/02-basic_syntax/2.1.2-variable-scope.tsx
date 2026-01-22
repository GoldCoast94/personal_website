import React from 'react';

interface Props {
  className?: string;
}

export default function 変数スコープ({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.1.2 変数スコープ</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// パッケージレベル変数（グローバル変数）
var globalVar = "I am global"

func main() {
    // 関数レベル変数（ローカル変数）
    localVar := "I am local"

    if true {
        // ブロックレベル変数
        blockVar := "I am in block"
        fmt.Println(blockVar)   // アクセス可能
        fmt.Println(localVar)   // アクセス可能
        fmt.Println(globalVar)  // アクセス可能
    }

    // fmt.Println(blockVar)    // エラー: blockVarが未定義
    fmt.Println(localVar)       // アクセス可能
    fmt.Println(globalVar)      // アクセス可能
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '2-1-2',
  title: '変数スコープ',
  section: '2.1.2'
};
