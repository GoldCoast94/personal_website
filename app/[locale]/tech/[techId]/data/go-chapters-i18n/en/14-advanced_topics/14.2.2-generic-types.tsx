import React from 'react';

interface Props {
  className?: string;
}

export default function GenericTypes({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">14.2.2 Generic Types</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// Generic stack
type Stack[T any] struct {
    items []T
}

func NewStack[T any]() *Stack[T] {
    return &Stack[T]{
        items: make([]T, 0),
    }
}

func (s *Stack[T]) Push(item T) {
    s.items = append(s.items, item)
}

func (s *Stack[T]) Pop() (T, bool) {
    if len(s.items) == 0 {
        var zero T
        return zero, false
    }

    index := len(s.items) - 1
    item := s.items[index]
    s.items = s.items[:index]

    return item, true
}

func (s *Stack[T]) Peek() (T, bool) {
    if len(s.items) == 0 {
        var zero T
        return zero, false
    }

    return s.items[len(s.items)-1], true
}

func (s *Stack[T]) IsEmpty() bool {
    return len(s.items) == 0
}

func (s *Stack[T]) Size() int {
    return len(s.items)
}

// Generic pair
type Pair[K comparable, V any] struct {
    Key   K
    Value V
}

func NewPair[K comparable, V any](key K, value V) Pair[K, V] {
    return Pair[K, V]{Key: key, Value: value}
}

func main() {
    // Integer stack
    intStack := NewStack[int]()
    intStack.Push(1)
    intStack.Push(2)
    intStack.Push(3)

    fmt.Println("Stack size:", intStack.Size())
    if item, ok := intStack.Pop(); ok {
        fmt.Println("Popped:", item)
    }

    // String stack
    strStack := NewStack[string]()
    strStack.Push("hello")
    strStack.Push("world")

    if item, ok := strStack.Peek(); ok {
        fmt.Println("Top item:", item)
    }

    // Using Pair
    pair := NewPair("name", "Alice")
    fmt.Printf("Pair: %s = %s\n", pair.Key, pair.Value)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '14-2-2',
  title: 'Generic Types',
  section: '14.2.2'
};
