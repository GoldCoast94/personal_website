import React from 'react';

interface Props {
  className?: string;
}

export default function ワーカープールパターン({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">7.3.1 ワーカープールパターン</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "sync"
    "time"
)

func worker(id int, jobs <-chan int, results chan<- int, wg *sync.WaitGroup) {
    defer wg.Done()
    for job := range jobs {
        fmt.Printf("Worker %d started job %d\n", id, job)
        time.Sleep(time.Second)
        fmt.Printf("Worker %d finished job %d\n", id, job)
        results <- job * 2
    }
}

func main() {
    const numJobs = 5
    const numWorkers = 3

    jobs := make(chan int, numJobs)
    results := make(chan int, numJobs)

    var wg sync.WaitGroup

    // ワーカーを起動
    for w := 1; w <= numWorkers; w++ {
        wg.Add(1)
        go worker(w, jobs, results, &wg)
    }

    // ジョブを送信
    for j := 1; j <= numJobs; j++ {
        jobs <- j
    }
    close(jobs)

    // すべてのワーカーの完了を待つ
    go func() {
        wg.Wait()
        close(results)
    }()

    // 結果を収集
    for result := range results {
        fmt.Println("Result:", result)
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '7-3-1',
  title: 'ワーカープールパターン',
  section: '7.3.1'
};
