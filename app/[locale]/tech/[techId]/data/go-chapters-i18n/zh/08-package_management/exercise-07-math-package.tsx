import React from 'react';

interface Props {
  className?: string;
}

export default function 答案1数学包({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 答案1：数学包</h3>

      <ul>
        <li>*math/operations.go:**</li>
      </ul>

      <pre className="code-block">
        <code className="language-go">{`package math

import "math"

func Add(a, b float64) float64 {
    return a + b
}

func Subtract(a, b float64) float64 {
    return a - b
}

func Multiply(a, b float64) float64 {
    return a * b
}

func Divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }
    return a / b, nil
}

func Power(base, exp float64) float64 {
    return math.Pow(base, exp)
}

func SquareRoot(n float64) (float64, error) {
    if n < 0 {
        return 0, errors.New("square root of negative number")
    }
    return math.Sqrt(n), nil
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '答案1：数学包',
  section: '0'
};
