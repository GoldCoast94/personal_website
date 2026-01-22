import React from 'react';

interface Props {
  className?: string;
}

export default function 策略模式({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">6.5.3 策略模式</h3>
      <p>使用接口实现可替换的算法。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "sort"
)

// 排序策略接口
type SortStrategy interface {
    Sort([]int)
}

// 冒泡排序
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

// 快速排序（使用标准库）
type QuickSort struct{}

func (q QuickSort) Sort(arr []int) {
    sort.Ints(arr)
}

// 选择排序
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

// 上下文
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

    // 使用冒泡排序
    arr1 := make([]int, len(data))
    copy(arr1, data)
    sorter.Sort(arr1)
    fmt.Println("Bubble Sort:", arr1)

    // 切换到快速排序
    sorter.SetStrategy(QuickSort{})
    arr2 := make([]int, len(data))
    copy(arr2, data)
    sorter.Sort(arr2)
    fmt.Println("Quick Sort:", arr2)

    // 切换到选择排序
    sorter.SetStrategy(SelectionSort{})
    arr3 := make([]int, len(data))
    copy(arr3, data)
    sorter.Sort(arr3)
    fmt.Println("Selection Sort:", arr3)
}`}</code>
      </pre>
      <p>## 6.6 练习题</p>

    </div>
  );
}

export const metadata = {
  id: '6-5-3',
  title: '策略模式',
  section: '6.5.3'
};
