import React from 'react';

interface Props {
  className?: string;
}

export default function HelloWorld({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.3.1 Hello World</h3>
      <p>ファイル <code>hello.go</code> を作成：</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`}</code>
      </pre>

      <ul>
        <li>**コード解析：**</li>
        <li><code>package main</code>：パッケージ名の宣言、mainパッケージはプログラムのエントリーポイント</li>
        <li><code>import "fmt"</code>：fmtフォーマットパッケージをインポート</li>
        <li><code>func main()</code>：main関数はプログラム実行のエントリーポイント</li>
        <li><code>fmt.Println()</code>：出力を印刷</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '1-3-1',
  title: 'Hello World',
  section: '1.3.1'
};
