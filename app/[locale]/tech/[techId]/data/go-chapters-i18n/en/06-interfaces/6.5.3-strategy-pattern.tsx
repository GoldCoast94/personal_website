import React from 'react';

interface Props {
  className?: string;
}

export default function StrategyPattern({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">6.5.3 Strategy Pattern</h3>
      <p>Using interfaces to implement interchangeable algorithms.</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "sort"
)

// Sort strategy interface
type SortStrategy interface {
    Sort([]int)
}

// Bubble sort
type BubbleSort struct{}

func (b BubbleSort) Sort(arr []int) {
    n := len(arr)
    for i := 0; i < n-1; i++ {
        for j := 0; j < n-i-1; j++ {
            if arr[j] > arr[j+1] {
                arr[j], arr[j+1] = arr[j+1], arr[j]
            }
        }
    }
}

// Quick sort (using standard library)
type QuickSort struct{}

func (q QuickSort) Sort(arr []int) {
    sort.Ints(arr)
}

// Selection sort
type SelectionSort struct{}

func (s SelectionSort) Sort(arr []int) {
    n := len(arr)
    for i := 0; i < n-1; i++ {
        minIdx := i
        for j := i + 1; j < n; j++ {
            if arr[j] < arr[minIdx] {
                minIdx = j
            }
        }
        arr[i], arr[minIdx] = arr[minIdx], arr[i]
    }
}

// Context
type Sorter struct {
    strategy SortStrategy
}

func NewSorter(strategy SortStrategy) *Sorter {
    return &Sorter{strategy: strategy}
}

func (s *Sorter) SetStrategy(strategy SortStrategy) {
    s.strategy = strategy
}

func (s *Sorter) Sort(arr []int) {
    s.strategy.Sort(arr)
}

func main() {
    data := []int{64, 34, 25, 12, 22, 11, 90}

    sorter := NewSorter(BubbleSort{})

    // Using bubble sort
    arr1 := make([]int, len(data))
    copy(arr1, data)
    sorter.Sort(arr1)
    fmt.Println("Bubble Sort:", arr1)

    // Switching to quick sort
    sorter.SetStrategy(QuickSort{})
    arr2 := make([]int, len(data))
    copy(arr2, data)
    sorter.Sort(arr2)
    fmt.Println("Quick Sort:", arr2)

    // Switching to selection sort
    sorter.SetStrategy(SelectionSort{})
    arr3 := make([]int, len(data))
    copy(arr3, data)
    sorter.Sort(arr3)
    fmt.Println("Selection Sort:", arr3)
}`}</code>
      </pre>

      <p>## 6.6 Exercises</p>

    </div>
  );
}

export const metadata = {
  id: '6-5-3',
  title: 'Strategy Pattern',
  section: '6.5.3'
};
