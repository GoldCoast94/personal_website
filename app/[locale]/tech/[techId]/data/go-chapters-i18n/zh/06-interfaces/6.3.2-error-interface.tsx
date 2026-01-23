import React from 'react';

interface Props {
  className?: string;
}

export default function Error接口({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">6.3.2 Error接口</h3>
      <p>Go的错误处理通过error接口实现。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "time"
)

// 自定义错误类型
type MyError struct {
    When time.Time
    What string
}

// 实现error接口
func (e *MyError) Error() string {
    return fmt.Sprintf("at %v, %s", e.When, e.What)
}

func run() error {
    return &MyError{
        When: time.Now(),
        What: "it didn't work",
    }
}

// 更复杂的错误类型
type ValidationError struct {
    Field   string
    Message string
}

func (ve ValidationError) Error() string {
    return fmt.Sprintf("validation error on field '%s': %s", ve.Field, ve.Message)
}

func validateAge(age int) error {
    if age < 0 {
        return ValidationError{
            Field:   "age",
            Message: "age cannot be negative",
        }
    }
    if age > 150 {
        return ValidationError{
            Field:   "age",
            Message: "age is unrealistic",
        }
    }
    return nil
}

func main() {
    if err := run(); err != nil {
        fmt.Println(err)
    }

    // 测试验证
    if err := validateAge(-5); err != nil {
        fmt.Println("Error:", err)

        // 类型断言获取详细信息
        if ve, ok := err.(ValidationError); ok {
            fmt.Printf("Field: %s, Message: %s\n", ve.Field, ve.Message)
        }
    }

    if err := validateAge(200); err != nil {
        fmt.Println("Error:", err)
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '6-3-2',
  title: 'Error接口',
  section: '6.3.2'
};
