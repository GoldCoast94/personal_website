import React from 'react';

interface Props {
  className?: string;
}

export default function 错误链({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">9.4.2 错误链</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "errors"
    "fmt"
)

var ErrDatabase = errors.New("database error")

func queryDatabase() error {
    return ErrDatabase
}

func getUser(id int) error {
    if err := queryDatabase(); err != nil {
        return fmt.Errorf("failed to get user %d: %w", id, err)
    }
    return nil
}

func handleRequest() error {
    if err := getUser(123); err != nil {
        return fmt.Errorf("request handling failed: %w", err)
    }
    return nil
}

func main() {
    err := handleRequest()
    if err != nil {
        fmt.Println("Error:", err)

        // 检查错误链中的原始错误
        if errors.Is(err, ErrDatabase) {
            fmt.Println("Root cause: database error")
        }
    }
}`}</code>
      </pre>
      <p>## 9.5 panic 和 recover</p>

    </div>
  );
}

export const metadata = {
  id: '9-4-2',
  title: '错误链',
  section: '9.4.2'
};
