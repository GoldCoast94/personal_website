import React from 'react';

interface Props {
  className?: string;
}

export default function 内存分配({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">14.4.1 内存分配</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "runtime"
)

func printMemStats() {
    var m runtime.MemStats
    runtime.ReadMemStats(&m)

    fmt.Printf("Alloc = %v MB", m.Alloc/1024/1024)
    fmt.Printf("\tTotalAlloc = %v MB", m.TotalAlloc/1024/1024)
    fmt.Printf("\tSys = %v MB", m.Sys/1024/1024)
    fmt.Printf("\tNumGC = %v\n", m.NumGC)
}

func inefficientStringConcat(n int) string {
    result := ""
    for i := 0; i < n; i++ {
        result += "x"  // 每次都分配新内存
    }
    return result
}

func efficientStringConcat(n int) string {
    bytes := make([]byte, n)
    for i := 0; i < n; i++ {
        bytes[i] = 'x'
    }
    return string(bytes)
}

func main() {
    fmt.Println("Before:")
    printMemStats()

    // 低效方式
    _ = inefficientStringConcat(100000)

    fmt.Println("\nAfter inefficient:")
    printMemStats()

    runtime.GC()

    fmt.Println("\nAfter GC:")
    printMemStats()

    // 高效方式
    _ = efficientStringConcat(100000)

    fmt.Println("\nAfter efficient:")
    printMemStats()
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '14-4-1',
  title: '内存分配',
  section: '14.4.1'
};
