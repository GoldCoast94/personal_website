import React from 'react';

interface Props {
  className?: string;
}

export default function エラーの返却({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">4.4.1 エラーの返却</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "errors"
    "fmt"
)

// エラーを返す
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }
    return a / b, nil
}

// カスタムエラー
type DivisionError struct {
    Dividend float64
    Divisor  float64
}

func (e *DivisionError) Error() string {
    return fmt.Sprintf("cannot divide %f by %f", e.Dividend, e.Divisor)
}

func safeDivide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, &DivisionError{Dividend: a, Divisor: b}
    }
    return a / b, nil
}

// エラーラッピング
func processData(a, b float64) error {
    result, err := divide(a, b)
    if err != nil {
        return fmt.Errorf("processData failed: %w", err)
    }
    fmt.Println("Result:", result)
    return nil
}

func main() {
    // エラーを処理
    if result, err := divide(10, 2); err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Result:", result)
    }

    // カスタムエラー
    if result, err := safeDivide(10, 0); err != nil {
        if divErr, ok := err.(*DivisionError); ok {
            fmt.Printf("Division error: %f / %f\n",
                divErr.Dividend, divErr.Divisor)
        }
    } else {
        fmt.Println("Result:", result)
    }

    // エラーラッピング
    if err := processData(10, 0); err != nil {
        fmt.Println("Error:", err)
    }
}`}</code>
      </pre>
      <p>## 4.5 練習問題</p>

    </div>
  );
}

export const metadata = {
  id: '4-4-1',
  title: 'エラーの返却',
  section: '4.4.1'
};
