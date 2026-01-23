import React from 'react';

interface Props {
  className?: string;
}

export default function Answer2SortFunctionTest({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Answer 2: Sort Function Test</h3>

      <pre className="code-block">
        <code className="language-go">{`package sort

import (
    "reflect"
    "testing"
)

func BubbleSort(arr []int) []int {
    n := len(arr)
    for i := 0; i < n-1; i++ {
        for j := 0; j < n-i-1; j++ {
            if arr[j] > arr[j+1] {
                arr[j], arr[j+1] = arr[j+1], arr[j]
            }
        }
    }
    return arr
}

func TestBubbleSort(t *testing.T) {
    tests := []struct {
        name  string
        input []int
        want  []int
    }{
        {"empty", []int{}, []int{}},
        {"single", []int{1}, []int{1}},
        {"sorted", []int{1, 2, 3}, []int{1, 2, 3}},
        {"reverse", []int{3, 2, 1}, []int{1, 2, 3}},
        {"duplicates", []int{3, 1, 2, 1}, []int{1, 1, 2, 3}},
        {"random", []int{5, 2, 8, 1, 9}, []int{1, 2, 5, 8, 9}},
    }

    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            input := make([]int, len(tt.input))
            copy(input, tt.input)

            got := BubbleSort(input)
            if !reflect.DeepEqual(got, tt.want) {
                t.Errorf("BubbleSort(%v) = %v, want %v", tt.input, got, tt.want)
            }
        })
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Answer 2: Sort Function Test',
  section: '0'
};
