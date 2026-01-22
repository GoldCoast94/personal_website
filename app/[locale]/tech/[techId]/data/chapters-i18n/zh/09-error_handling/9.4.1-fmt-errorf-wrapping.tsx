import React from 'react';

interface Props {
  className?: string;
}

export default function 使用Fmterrorf包装({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">9.4.1 使用 fmt.Errorf 包装</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "errors"
    "fmt"
)

func readConfig() error {
    return errors.New("config file not found")
}

func initialize() error {
    if err := readConfig(); err != nil {
        return fmt.Errorf("initialization failed: %w", err)
    }
    return nil
}

func main() {
    err := initialize()
    if err != nil {
        fmt.Println(err)

        // 使用 errors.Unwrap 解包
        fmt.Println("Original error:", errors.Unwrap(err))
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '9-4-1',
  title: '使用 fmt.Errorf 包装',
  section: '9.4.1'
};
