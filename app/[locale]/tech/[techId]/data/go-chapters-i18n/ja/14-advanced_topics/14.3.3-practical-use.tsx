import React from 'react';

interface Props {
  className?: string;
}

export default function 実践的な応用({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">14.3.3 実践的な応用</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "context"
    "fmt"
    "time"
)

func fetchData(ctx context.Context, url string) (string, error) {
    // ネットワークリクエストをシミュレート
    resultChan := make(chan string, 1)
    errorChan := make(chan error, 1)

    go func() {
        // 時間のかかる操作をシミュレート
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
    // 3秒のタイムアウトを設定
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
      <p>## 14.4 メモリ管理とパフォーマンスの最適化</p>

    </div>
  );
}

export const metadata = {
  id: '14-3-3',
  title: '実践的な応用',
  section: '14.3.3'
};
