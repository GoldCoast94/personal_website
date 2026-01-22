import React from 'react';

interface Props {
  className?: string;
}

export default function 命名規則({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.5.1 命名規則</h3>

      <pre className="code-block">
        <code className="language-go">{`// パッケージ名：小文字、短く、意味のある名前
package user

// 変数名：キャメルケース
var userName string
var userAge int

// 定数名：キャメルケースまたは全て大文字
const MaxSize = 100
const MAX_SIZE = 100

// 関数名：キャメルケース、大文字で始まるとエクスポート可能
func GetUserName() string { }  // エクスポート可能
func calculateAge() int { }     // プライベート

// 型名：キャメルケース
type UserInfo struct { }

// インターフェース名：erで終わる
type Reader interface { }
type Writer interface { }`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '1-5-1',
  title: '命名規則',
  section: '1.5.1'
};
