import React from 'react';

interface Props {
  className?: string;
}

export default function 複雑なテーブルテスト({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">10.2.2 複雑なテーブルテスト</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "errors"
    "testing"
)

func Divide(a, b int) (int, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }
    return a / b, nil
}

func TestDivideTable(t *testing.T) {
    tests := []struct {
        name      string
        a, b      int
        want      int
        wantError bool
    }{
        {"normal division", 10, 2, 5, false},
        {"division by zero", 10, 0, 0, true},
        {"negative result", -10, 2, -5, false},
        {"zero dividend", 0, 5, 0, false},
    }

    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            got, err := Divide(tt.a, tt.b)

            if (err != nil) != tt.wantError {
                t.Errorf("Divide(%d, %d) error = %v, wantError %v",
                    tt.a, tt.b, err, tt.wantError)
                return
            }

            if !tt.wantError && got != tt.want {
                t.Errorf("Divide(%d, %d) = %d, want %d",
                    tt.a, tt.b, got, tt.want)
            }
        })
    }
}`}</code>
      </pre>
      <p>## 10.3 テストヘルパー関数</p>

    </div>
  );
}

export const metadata = {
  id: '10-2-2',
  title: '複雑なテーブルテスト',
  section: '10.2.2'
};
