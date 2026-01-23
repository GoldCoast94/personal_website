import React from 'react';

interface Props {
  className?: string;
}

export default function WaitGroup({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">7.4.3 WaitGroup</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "sync"
    "time"
)

func worker(id int, wg *sync.WaitGroup) {
    defer wg.Done()
    fmt.Printf("Worker %d starting\n", id)
    time.Sleep(time.Second)
    fmt.Printf("Worker %d done\n", id)
}

func main() {
    var wg sync.WaitGroup

    for i := 1; i <= 5; i++ {
        wg.Add(1)
        go worker(i, &wg)
    }

    fmt.Println("Waiting for workers...")
    wg.Wait()
    fmt.Println("All workers done")
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '7-4-3',
  title: 'WaitGroup',
  section: '7.4.3'
};
