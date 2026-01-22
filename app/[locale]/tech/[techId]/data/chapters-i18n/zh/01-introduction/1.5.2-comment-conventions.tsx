import React from 'react';

interface Props {
  className?: string;
}

export default function 注释规范({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.5.2 注释规范</h3>

      <pre className="code-block">
        <code className="language-go">{`// 单行注释使用 //

/*
多行注释使用
/* ... */
*/

// 包注释：在package语句前
// Package user provides user management functions.
package user

// 函数注释：说明函数功能
// GetUserName returns the name of the user.
func GetUserName() string {
    return ""
}

// 类型注释
// User represents a system user.
type User struct {
    Name string // 字段注释
    Age  int
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '1-5-2',
  title: '注释规范',
  section: '1.5.2'
};
