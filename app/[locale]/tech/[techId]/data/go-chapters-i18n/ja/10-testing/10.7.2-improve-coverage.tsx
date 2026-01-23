import React from 'react';

interface Props {
  className?: string;
}

export default function カバレッジの向上({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">10.7.2 カバレッジの向上</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "errors"

func ProcessValue(value int) (string, error) {
    if value < 0 {
        return "", errors.New("negative value")
    }

    if value == 0 {
        return "zero", nil
    }

    if value > 100 {
        return "large", nil
    }

    return "normal", nil
}`}</code>
      </pre>

      <ul>
        <li>**完全なテスト:**</li>
      </ul>

      <pre className="code-block">
        <code className="language-go">{`package main

import "testing"

func TestProcessValue(t *testing.T) {
    tests := []struct {
        name      string
        value     int
        want      string
        wantError bool
    }{
        {"negative", -1, "", true},
        {"zero", 0, "zero", false},
        {"normal", 50, "normal", false},
        {"large", 150, "large", false},
    }

    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            got, err := ProcessValue(tt.value)

            if (err != nil) != tt.wantError {
                t.Errorf("error = %v, wantError %v", err, tt.wantError)
                return
            }

            if got != tt.want {
                t.Errorf("got %v, want %v", got, tt.want)
            }
        })
    }
}`}</code>
      </pre>
      <p>## 10.8 HTTPテスト</p>

    </div>
  );
}

export const metadata = {
  id: '10-7-2',
  title: 'カバレッジの向上',
  section: '10.7.2'
};
