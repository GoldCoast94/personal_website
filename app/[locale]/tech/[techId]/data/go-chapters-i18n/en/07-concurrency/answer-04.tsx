import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise4Answer({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 4 Answer</h3>

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
    // Check if already visited
    if c.isVisited(url) {
        return CrawlResult{
            URL:     url,
            Success: false,
            Error:   fmt.Errorf("URL already visited"),
        }
    }

    c.markVisited(url)

    // Simulate crawling (random delay)
    time.Sleep(time.Duration(rand.Intn(1000)) * time.Millisecond)

    // Simulate random failure
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

    // Start workers
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

    // Send URLs
    go func() {
        for _, url := range urls {
            urlChan <- url
        }
        close(urlChan)
    }()

    // Wait for completion
    go func() {
        wg.Wait()
        close(resultsChan)
    }()

    // Collect results
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
        "http://example.com/page1",  // Duplicate
        "http://example.com/page4",
        "http://example.com/page5",
        "http://example.com/page2",  // Duplicate
    }

    crawler := NewCrawler(3)
    results := crawler.Crawl(urls)

    // Print results
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
  title: 'Exercise 4 Answer',
  section: '0'
};
