import React from 'react';

interface Props {
  className?: string;
}

export default function 演習4コードフォーマット({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 演習4：コードフォーマット</h3>

      <ul>
        <li>**問題：** 乱雑なGoコードを書いて、go fmtでフォーマットしてください。</li>
      </ul>

      <pre className="code-block">
        <code className="language-go">{`// 乱雑なコードの例
package main
import "fmt"
func main(){
fmt.Println("Hello")
x:=10
y:=20
fmt.Println(x+y)
}`}</code>
      </pre>

      <ul>
        <li>**要件：**</li>
        <li>上記のコードをmessy.goとして保存する</li>
        <li>go fmtを使用してフォーマットする</li>
        <li>フォーマット後の変化を観察する</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '演習4：コードフォーマット',
  section: '0'
};
