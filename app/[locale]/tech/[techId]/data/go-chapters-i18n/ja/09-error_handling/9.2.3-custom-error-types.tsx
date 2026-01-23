import React from 'react';

interface Props {
  className?: string;
}

export default function カスタムエラー型({ className }: Props) {
  return (
    <div className={`section-content \${className || ''}`}>
      <h3 className="section-title">9.2.3 カスタムエラー型</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
)

// カスタムエラー型
type ValidationError struct {
    Field   string
    Message string
}

func (e *ValidationError) Error() string {
    return fmt.Sprintf("validation error on field '%s': %s", e.Field, e.Message)
}

type NotFoundError struct {
    Resource string
    ID       int
}

func (e *NotFoundError) Error() string {
    return fmt.Sprintf("%s with ID %d not found", e.Resource, e.ID)
}

// カスタムエラーの使用
func validateUsername(username string) error {
    if username == "" {
        return &ValidationError{
            Field:   "username",
            Message: "cannot be empty",
        }
    }
    if len(username) < 3 {
        return &ValidationError{
            Field:   "username",
            Message: "must be at least 3 characters",
        }
    }
    return nil
}

func getUser(id int) error {
    // ユーザーが見つからないシミュレーション
    return &NotFoundError{
        Resource: "User",
        ID:       id,
    }
}

func main() {
    // バリデーションエラー
    if err := validateUsername("ab"); err != nil {
        fmt.Println(err)
    }

    // 見つからないエラー
    if err := getUser(123); err != nil {
        fmt.Println(err)
    }
}`}</code>
      </pre>
      <p>## 9.3 エラーチェックと処理</p>

    </div>
  );
}

export const metadata = {
  id: '9-2-3',
  title: 'カスタムエラー型',
  section: '9.2.3'
};
