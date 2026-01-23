import React from 'react';

interface Props {
  className?: string;
}

export default function コメント規則({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.5.2 コメント規則</h3>

      <pre className="code-block">
        <code className="language-go">{`// 単一行コメントは // を使用

/*
複数行コメントは
/* ... */
*/

// パッケージコメント：package文の前に記述
// Package user provides user management functions.
package user

// 関数コメント：関数の機能を説明
// GetUserName returns the name of the user.
func GetUserName() string {
    return ""
}

// 型コメント
// User represents a system user.
type User struct {
    Name string // フィールドコメント
    Age  int
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '1-5-2',
  title: 'コメント規則',
  section: '1.5.2'
};
