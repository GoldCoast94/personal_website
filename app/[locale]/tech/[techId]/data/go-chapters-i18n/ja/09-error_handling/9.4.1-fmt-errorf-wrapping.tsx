import React from 'react';

interface Props {
  className?: string;
}

export default function FmtErrorfラッピング({ className }: Props) {
  return (
    <div className={`section-content \${className || ''}`}>
      <h3 className="section-title">9.4.1 fmt.Errorを使用したラッピング</h3>

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

        // errors.Unwrapを使用してアンラップ
        fmt.Println("Original error:", errors.Unwrap(err))
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '9-4-1',
  title: 'fmt.Errorを使用したラッピング',
  section: '9.4.1'
};
