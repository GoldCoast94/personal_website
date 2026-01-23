import React from 'react';

interface Props {
  className?: string;
}

export default function 解答1ジェネリックキュー({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 解答1：ジェネリックキュー</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

type Queue[T any] struct {
    items []T
}

func NewQueue[T any]() *Queue[T] {
    return &Queue[T]{
        items: make([]T, 0),
    }
}

func (q *Queue[T]) Enqueue(item T) {
    q.items = append(q.items, item)
}

func (q *Queue[T]) Dequeue() (T, bool) {
    if len(q.items) == 0 {
        var zero T
        return zero, false
    }

    item := q.items[0]
    q.items = q.items[1:]
    return item, true
}

func (q *Queue[T]) Peek() (T, bool) {
    if len(q.items) == 0 {
        var zero T
        return zero, false
    }

    return q.items[0], true
}

func (q *Queue[T]) IsEmpty() bool {
    return len(q.items) == 0
}

func (q *Queue[T]) Size() int {
    return len(q.items)
}

func main() {
    queue := NewQueue[int]()
    queue.Enqueue(1)
    queue.Enqueue(2)
    queue.Enqueue(3)

    fmt.Println("Queue size:", queue.Size())

    if item, ok := queue.Dequeue(); ok {
        fmt.Println("Dequeued:", item)
    }

    if item, ok := queue.Peek(); ok {
        fmt.Println("Front:", item)
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '解答1：ジェネリックキュー',
  section: '0'
};
