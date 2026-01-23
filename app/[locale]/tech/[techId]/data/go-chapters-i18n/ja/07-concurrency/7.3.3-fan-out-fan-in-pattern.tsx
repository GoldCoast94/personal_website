import React from 'react';

interface Props {
  className?: string;
}

export default function FanoutFaninパターン({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">7.3.3 Fan-out/Fan-inパターン</h3>

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

// Fan-out: 1つの入力、複数のプロセッサ
func worker(id int, in <-chan int, out chan<- int, wg *sync.WaitGroup) {
    defer wg.Done()
    for num := range in {
        fmt.Printf("Worker %d processing %d\n", id, num)
        result := num * num
        time.Sleep(200 * time.Millisecond)
        out <- result
    }
}

// Fan-in: 複数の入力を1つの出力にマージ
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
    // 入力チャネル
    input := make(chan int)

    // Fan-out: 複数のworkerを作成
    const numWorkers = 3
    channels := make([]chan int, numWorkers)
    var wg sync.WaitGroup

    for i := 0; i < numWorkers; i++ {
        channels[i] = make(chan int)
        wg.Add(1)
        go worker(i+1, input, channels[i], &wg)
    }

    // プロデューサーを起動
    go producer(input)

    // すべてのworkerが完了するのを待ってチャネルを閉じる
    go func() {
        wg.Wait()
        for _, ch := range channels {
            close(ch)
        }
    }()

    // Fan-in: すべての結果をマージ
    chans := make([]<-chan int, numWorkers)
    for i, ch := range channels {
        chans[i] = ch
    }
    results := merge(chans...)

    // 結果を出力
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
  title: 'Fan-out/Fan-inパターン',
  section: '7.3.3'
};
