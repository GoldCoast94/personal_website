import React from 'react';

interface Props {
  className?: string;
}

export default function 練習問題5解答({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習問題5解答</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "math/rand"
    "sync"
    "time"
)

type CrawlResult struct {
    URL     string
    Success bool
    Content string
    Error   error
}

type Crawler struct {
    maxConcurrent int
    visited       map[string]bool
    visitedMu     sync.Mutex
}

func NewCrawler(maxConcurrent int) *Crawler {
    return &Crawler{
        maxConcurrent: maxConcurrent,
        visited:       make(map[string]bool),
    }
}

func (c *Crawler) isVisited(url string) bool {
    c.visitedMu.Lock()
    defer c.visitedMu.Unlock()
    return c.visited[url]
}

func (c *Crawler) markVisited(url string) {
    c.visitedMu.Lock()
    defer c.visitedMu.Unlock()
    c.visited[url] = true
}

func (c *Crawler) crawlURL(url string) CrawlResult {
    // 訪問済みかチェック
    if c.isVisited(url) {
        return CrawlResult{
            URL:     url,
            Success: false,
            Error:   fmt.Errorf("URL already visited"),
        }
    }

    c.markVisited(url)

    // クロールをシミュレート（ランダム遅延）
    time.Sleep(time.Duration(rand.Intn(1000)) * time.Millisecond)

    // ランダム失敗をシミュレート
    if rand.Float32() < 0.2 {
        return CrawlResult{
            URL:     url,
            Success: false,
            Error:   fmt.Errorf("failed to crawl"),
        }
    }

    return CrawlResult{
        URL:     url,
        Success: true,
        Content: fmt.Sprintf("Content from %s", url),
    }
}

func (c *Crawler) Crawl(urls []string) []CrawlResult {
    results := make([]CrawlResult, 0, len(urls))
    resultsChan := make(chan CrawlResult, len(urls))

    // Worker pool
    urlChan := make(chan string, len(urls))
    var wg sync.WaitGroup

    // workerを起動
    for i := 0; i < c.maxConcurrent; i++ {
        wg.Add(1)
        go func(workerID int) {
            defer wg.Done()
            for url := range urlChan {
                fmt.Printf("Worker %d crawling: %s\n", workerID, url)
                result := c.crawlURL(url)
                resultsChan <- result
            }
        }(i)
    }

    // URLを送信
    go func() {
        for _, url := range urls {
            urlChan <- url
        }
        close(urlChan)
    }()

    // 完了を待つ
    go func() {
        wg.Wait()
        close(resultsChan)
    }()

    // 結果を収集
    for result := range resultsChan {
        results = append(results, result)
    }

    return results
}

func main() {
    rand.Seed(time.Now().UnixNano())

    urls := []string{
        "http://example.com/page1",
        "http://example.com/page2",
        "http://example.com/page3",
        "http://example.com/page1",  // 重複
        "http://example.com/page4",
        "http://example.com/page5",
        "http://example.com/page2",  // 重複
    }

    crawler := NewCrawler(3)
    results := crawler.Crawl(urls)

    // 結果を出力
    fmt.Println("\n=== Crawl Results ===")
    successCount := 0
    for _, result := range results {
        if result.Success {
            successCount++
            fmt.Printf("✓ %s - %s\n", result.URL, result.Content)
        } else {
            fmt.Printf("✗ %s - Error: %v\n", result.URL, result.Error)
        }
    }

    fmt.Printf("\nSuccess rate: %d/%d\n", successCount, len(results))
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習問題5解答',
  section: '0'
};
