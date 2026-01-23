import React from 'react';

interface Props {
  className?: string;
}

export default function FanoutFaninPattern({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">7.3.3 Fan-out/Fan-in Pattern</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "sync"
    "time"
)

func producer(ch chan<- int) {
    for i := 0; i < 10; i++ {
        ch <- i
        time.Sleep(100 * time.Millisecond)
    }
    close(ch)
}

// Fan-out: one input, multiple processors
func worker(id int, in <-chan int, out chan<- int, wg *sync.WaitGroup) {
    defer wg.Done()
    for num := range in {
        fmt.Printf("Worker %d processing %d\n", id, num)
        result := num * num
        time.Sleep(200 * time.Millisecond)
        out <- result
    }
}

// Fan-in: merge multiple inputs into one output
func merge(channels ...<-chan int) <-chan int {
    var wg sync.WaitGroup
    out := make(chan int)

    output := func(ch <-chan int) {
        defer wg.Done()
        for n := range ch {
            out <- n
        }
    }

    wg.Add(len(channels))
    for _, ch := range channels {
        go output(ch)
    }

    go func() {
        wg.Wait()
        close(out)
    }()

    return out
}

func main() {
    // Input channel
    input := make(chan int)

    // Fan-out: create multiple workers
    const numWorkers = 3
    channels := make([]chan int, numWorkers)
    var wg sync.WaitGroup

    for i := 0; i < numWorkers; i++ {
        channels[i] = make(chan int)
        wg.Add(1)
        go worker(i+1, input, channels[i], &wg)
    }

    // Start producer
    go producer(input)

    // Wait for all workers to complete and close channels
    go func() {
        wg.Wait()
        for _, ch := range channels {
            close(ch)
        }
    }()

    // Fan-in: merge all results
    chans := make([]<-chan int, numWorkers)
    for i, ch := range channels {
        chans[i] = ch
    }
    results := merge(chans...)

    // Output results
    for result := range results {
        fmt.Println("Result:", result)
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '7-3-3',
  title: 'Fan-out/Fan-in Pattern',
  section: '7.3.3'
};
