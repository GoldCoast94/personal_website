import React from 'react';

interface Props {
  className?: string;
}

export default function ErrorsIs113({ className }: Props) {
  return (
    <div className={`section-content \${className || ''}`}>
      <h3 className="section-title">9.3.2 errors.Is (Go 1.13+)</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "errors"
    "fmt"
    "os"
)

var (
    ErrNotFound     = errors.New("not found")
    ErrUnauthorized = errors.New("unauthorized")
    ErrInternal     = errors.New("internal server error")
)

func getResource(id int) error {
    if id == 0 {
        return ErrNotFound
    }
    return nil
}

func main() {
    err := getResource(0)

    // errors.Isを使用してエラーをチェック
    if errors.Is(err, ErrNotFound) {
        fmt.Println("Resource not found")
    }

    // ファイルが存在しないエラーをチェック
    _, err = os.Open("nonexistent.txt")
    if errors.Is(err, os.ErrNotExist) {
        fmt.Println("File does not exist")
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '9-3-2',
  title: 'errors.Is (Go 1.13+)',
  section: '9.3.2'
};
