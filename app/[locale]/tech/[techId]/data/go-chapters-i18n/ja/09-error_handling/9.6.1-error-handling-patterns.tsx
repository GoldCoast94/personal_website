import React from 'react';

interface Props {
  className?: string;
}

export default function エラー処理パターン({ className }: Props) {
  return (
    <div className={`section-content \${className || ''}`}>
      <h3 className="section-title">9.6.1 エラー処理パターン</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "os"
)

// パターン1: 早期リターン
func processFile(filename string) error {
    file, err := os.Open(filename)
    if err != nil {
        return fmt.Errorf("failed to open file: %w", err)
    }
    defer file.Close()

    // ファイル処理...
    return nil
}

// パターン2: エラー変数
func parseData(data []byte) (result int, err error) {
    // 複雑なパース処理
    // 名前付き戻り値を使用
    if len(data) == 0 {
        err = fmt.Errorf("empty data")
        return
    }

    result = 42
    return
}

// パターン3: エラー蓄積
type MultiError struct {
    Errors []error
}

func (m *MultiError) Error() string {
    return fmt.Sprintf("%d errors occurred", len(m.Errors))
}

func (m *MultiError) Add(err error) {
    if err != nil {
        m.Errors = append(m.Errors, err)
    }
}

func validateUser(username, email, password string) error {
    var errs MultiError

    if username == "" {
        errs.Add(fmt.Errorf("username is required"))
    }
    if email == "" {
        errs.Add(fmt.Errorf("email is required"))
    }
    if len(password) < 8 {
        errs.Add(fmt.Errorf("password too short"))
    }

    if len(errs.Errors) > 0 {
        return &errs
    }
    return nil
}

func main() {
    if err := validateUser("", "", "123"); err != nil {
        fmt.Println(err)
        if multiErr, ok := err.(*MultiError); ok {
            for i, e := range multiErr.Errors {
                fmt.Printf("  Error %d: %v\\n", i+1, e)
            }
        }
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '9-6-1',
  title: 'エラー処理パターン',
  section: '9.6.1'
};
