import React from 'react';

interface Props {
  className?: string;
}

export default function RWMutex読み書きロック({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">7.4.2 RWMutex読み書きロック</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "sync"
    "time"
)

type Cache struct {
    mu   sync.RWMutex
    data map[string]string
}

func NewCache() *Cache {
    return &Cache{
        data: make(map[string]string),
    }
}

func (c *Cache) Set(key, value string) {
    c.mu.Lock()
    defer c.mu.Unlock()
    c.data[key] = value
}

func (c *Cache) Get(key string) (string, bool) {
    c.mu.RLock()
    defer c.mu.RUnlock()
    value, ok := c.data[key]
    return value, ok
}

func main() {
    cache := NewCache()
    var wg sync.WaitGroup

    // 書き込み者
    for i := 0; i < 5; i++ {
        wg.Add(1)
        go func(n int) {
            defer wg.Done()
            key := fmt.Sprintf("key%d", n)
            cache.Set(key, fmt.Sprintf("value%d", n))
            fmt.Printf("Set %s\n", key)
        }(i)
    }

    // 書き込み完了を待つ
    time.Sleep(100 * time.Millisecond)

    // 複数の読み取り者が並行して読み取り可能
    for i := 0; i < 10; i++ {
        wg.Add(1)
        go func(n int) {
            defer wg.Done()
            key := fmt.Sprintf("key%d", n%5)
            value, ok := cache.Get(key)
            if ok {
                fmt.Printf("Get %s = %s\n", key, value)
            }
        }(i)
    }

    wg.Wait()
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '7-4-2',
  title: 'RWMutex読み書きロック',
  section: '7.4.2'
};
