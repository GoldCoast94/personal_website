import React from 'react';

interface Props {
  className?: string;
}

export default function パッケージとは({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.1.1 パッケージとは</h3>
      <p>パッケージはGoでコードを整理するための基本単位です。すべてのGoソースファイルはパッケージに属し、パッケージはコードのモジュール化と再利用性を提供します。</p>

      <pre className="code-block">
        <code className="language-go">{`// ファイルの先頭でパッケージ名を宣言
package main

import "fmt"

func main() {
    fmt.Println("Hello, Package!")
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-1-1',
  title: 'パッケージとは',
  section: '8.1.1'
};
