import React from 'react';

interface Props {
  className?: string;
}

export default function 第一个测试({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">10.1.2 第一个测试</h3>

      <ul>
        <li>*calculator.go:**</li>
      </ul>

      <pre className="code-block">
        <code className="language-go">{`package calculator

func Add(a, b int) int {
    return a + b
}

func Subtract(a, b int) int {
    return a - b
}

func Multiply(a, b int) int {
    return a * b
}

func Divide(a, b int) (int, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }
    return a / b, nil
}`}</code>
      </pre>

      <ul>
        <li>*calculator_test.go:**</li>
      </ul>

      <pre className="code-block">
        <code className="language-go">{`package calculator

import "testing"

func TestAdd(t *testing.T) {
    result := Add(2, 3)
    expected := 5

    if result != expected {
        t.Errorf("Add(2, 3) = %d; want %d", result, expected)
    }
}

func TestSubtract(t *testing.T) {
    result := Subtract(5, 3)
    expected := 2

    if result != expected {
        t.Errorf("Subtract(5, 3) = %d; want %d", result, expected)
    }
}

func TestDivide(t *testing.T) {
    result, err := Divide(10, 2)
    if err != nil {
        t.Fatalf("Divide(10, 2) unexpected error: %v", err)
    }

    expected := 5
    if result != expected {
        t.Errorf("Divide(10, 2) = %d; want %d", result, expected)
    }
}

func TestDivideByZero(t *testing.T) {
    _, err := Divide(10, 0)
    if err == nil {
        t.Error("Divide(10, 0) should return error")
    }
}`}</code>
      </pre>
      <p>运行测试：</p>

      <pre className="code-block">
        <code className="language-bash">{`go test
go test -v              # 详细输出
go test -run TestAdd    # 运行特定测试
go test ./...           # 测试所有包`}</code>
      </pre>
      <p>## 10.2 表格驱动测试</p>

    </div>
  );
}

export const metadata = {
  id: '10-1-2',
  title: '第一个测试',
  section: '10.1.2'
};
