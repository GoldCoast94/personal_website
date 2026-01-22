import React from 'react';

interface Props {
  className?: string;
}

export default function 多次元配列({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.1.3 多次元配列</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // 二次元配列
    var matrix [3][4]int = [3][4]int{
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 11, 12},
    }

    // 簡略化された構文
    matrix2 := [3][4]int{
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 11, 12},
    }

    // 要素へのアクセス
    fmt.Println("matrix[1][2] =", matrix[1][2])  // 7

    // 二次元配列の走査
    fmt.Println("二次元配列の走査:")
    for i := 0; i < len(matrix); i++ {
        for j := 0; j < len(matrix[i]); j++ {
            fmt.Printf("%3d ", matrix[i][j])
        }
        fmt.Println()
    }

    // rangeを使用した走査
    fmt.Println("\nrangeを使用した走査:")
    for i, row := range matrix2 {
        for j, value := range row {
            fmt.Printf("matrix2[%d][%d] = %d\n", i, j, value)
        }
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '3-1-3',
  title: '多次元配列',
  section: '3.1.3'
};
