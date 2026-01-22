import React from 'react';

interface Props {
  className?: string;
}

export default function MultidimensionalArrays({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.1.3 Multidimensional Arrays</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // Two-dimensional array
    var matrix [3][4]int = [3][4]int{
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 11, 12},
    }

    // Simplified syntax
    matrix2 := [3][4]int{
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 11, 12},
    }

    // Access elements
    fmt.Println("matrix[1][2] =", matrix[1][2])  // 7

    // Iterate over 2D array
    fmt.Println("Iterate over 2D array:")
    for i := 0; i < len(matrix); i++ {
        for j := 0; j < len(matrix[i]); j++ {
            fmt.Printf("%3d ", matrix[i][j])
        }
        fmt.Println()
    }

    // Iterate using range
    fmt.Println("\nIterate using range:")
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
  title: 'Multidimensional Arrays',
  section: '3.1.3'
};
