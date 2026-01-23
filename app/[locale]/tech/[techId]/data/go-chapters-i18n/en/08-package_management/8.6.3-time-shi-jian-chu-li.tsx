import React from 'react';

interface Props {
  className?: string;
}

export default function TimeTimeProcessing({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.6.3 time - Time Processing</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "time"
)

func main() {
    // Current time
    now := time.Now()
    fmt.Println(now)

    // Create time
    date := time.Date(2024, time.January, 1, 0, 0, 0, 0, time.UTC)
    fmt.Println(date)

    // Format time (using Go's special format: 2006-01-02 15:04:05)
    fmt.Println(now.Format("2006-01-02 15:04:05"))
    fmt.Println(now.Format("2006/01/02"))
    fmt.Println(now.Format("15:04:05"))

    // Parse time
    t, _ := time.Parse("2006-01-02", "2024-01-01")
    fmt.Println(t)

    // Time arithmetic
    tomorrow := now.Add(24 * time.Hour)
    fmt.Println(tomorrow)

    // Time comparison
    if tomorrow.After(now) {
        fmt.Println("Tomorrow is after now")
    }

    // Sleep
    time.Sleep(1 * time.Second)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-6-3',
  title: 'time - Time Processing',
  section: '8.6.3'
};
