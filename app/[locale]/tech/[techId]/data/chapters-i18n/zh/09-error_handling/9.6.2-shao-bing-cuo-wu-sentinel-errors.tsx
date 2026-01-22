import React from 'react';

interface Props {
  className?: string;
}

export default function 哨兵错误sentinelErrors({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">9.6.2 哨兵错误（Sentinel Errors）</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "errors"
    "fmt"
)

// 定义哨兵错误
var (
    ErrNotFound     = errors.New("resource not found")
    ErrInvalidInput = errors.New("invalid input")
    ErrPermission   = errors.New("permission denied")
)

func getUser(id int) error {
    if id <= 0 {
        return ErrInvalidInput
    }
    if id == 404 {
        return ErrNotFound
    }
    return nil
}

func main() {
    err := getUser(404)

    switch {
    case errors.Is(err, ErrNotFound):
        fmt.Println("User not found, creating new user...")
    case errors.Is(err, ErrInvalidInput):
        fmt.Println("Invalid input, please check...")
    case errors.Is(err, ErrPermission):
        fmt.Println("Permission denied")
    case err != nil:
        fmt.Println("Unknown error:", err)
    default:
        fmt.Println("Success")
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '9-6-2',
  title: '哨兵错误（Sentinel Errors）',
  section: '9.6.2'
};
