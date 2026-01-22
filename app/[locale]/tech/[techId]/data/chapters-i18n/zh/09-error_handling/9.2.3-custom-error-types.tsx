import React from 'react';

interface Props {
  className?: string;
}

export default function 自定义错误类型({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">9.2.3 自定义错误类型</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
)

// 自定义错误类型
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

// 使用自定义错误
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
    // 模拟未找到用户
    return &NotFoundError{
        Resource: "User",
        ID:       id,
    }
}

func main() {
    // 验证错误
    if err := validateUsername("ab"); err != nil {
        fmt.Println(err)
    }

    // 未找到错误
    if err := getUser(123); err != nil {
        fmt.Println(err)
    }
}`}</code>
      </pre>
      <p>## 9.3 错误检查和处理</p>

    </div>
  );
}

export const metadata = {
  id: '9-2-3',
  title: '自定义错误类型',
  section: '9.2.3'
};
