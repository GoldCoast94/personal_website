import React from 'react';

interface Props {
  className?: string;
}

export default function 基本表格测试({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">10.2.1 基本表格测试</h3>

      <pre className="code-block">
        <code className="language-go">{`package calculator

import "testing"

func TestAddTable(t *testing.T) {
    tests := []struct {
        name     string
        a, b     int
        expected int
    }{
        {"positive numbers", 2, 3, 5},
        {"negative numbers", -2, -3, -5},
        {"mixed signs", -2, 3, 1},
        {"zero", 0, 5, 5},
    }

    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            result := Add(tt.a, tt.b)
            if result != tt.expected {
                t.Errorf("Add(%d, %d) = %d; want %d",
                    tt.a, tt.b, result, tt.expected)
            }
        })
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '10-2-1',
  title: '基本表格测试',
  section: '10.2.1'
};
