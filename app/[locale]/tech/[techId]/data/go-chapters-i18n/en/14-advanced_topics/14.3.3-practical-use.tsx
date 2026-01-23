import React from 'react';

interface Props {
  className?: string;
}

export default function PracticalUse({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">14.3.3 Practical Application</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "context"
    "fmt"
    "time"
)

func fetchData(ctx context.Context, url string) (string, error) {
    // Simulate network request
    resultChan := make(chan string, 1)
    errorChan := make(chan error, 1)

    go func() {
        // Simulate time-consuming operation
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
    // Set 3 second timeout
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
      <p>## 14.4 Memory Management and Performance Optimization</p>

    </div>
  );
}

export const metadata = {
  id: '14-3-3',
  title: 'Practical Application',
  section: '14.3.3'
};
