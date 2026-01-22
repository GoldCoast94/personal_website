import React from 'react';

interface Props {
  className?: string;
}

export default function 实际应用({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">14.3.3 实际应用</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "context"
    "fmt"
    "time"
)

func fetchData(ctx context.Context, url string) (string, error) {
    // 模拟网络请求
    resultChan := make(chan string, 1)
    errorChan := make(chan error, 1)

    go func() {
        // 模拟耗时操作
        time.Sleep(2 * time.Second)
        resultChan <- fmt.Sprintf("Data from %s", url)
    }()

    select {
    case <-ctx.Done():
        return "", ctx.Err()
    case result := <-resultChan:
        return result, nil
    case err := <-errorChan:
        return "", err
    }
}

func main() {
    // 设置3秒超时
    ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
    defer cancel()

    result, err := fetchData(ctx, "https://example.com")
    if err != nil {
        fmt.Println("Error:", err)
        return
    }

    fmt.Println("Result:", result)
}`}</code>
      </pre>
      <p>## 14.4 内存管理和性能优化</p>

    </div>
  );
}

export const metadata = {
  id: '14-3-3',
  title: '实际应用',
  section: '14.3.3'
};
