import React from 'react';

interface Props {
  className?: string;
}

export default function 答案1字符串工具测试({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 答案1：字符串工具测试</h3>

      <pre className="code-block">
        <code className="language-go">{`package stringutil

import "testing"

func Reverse(s string) string {
    runes := []rune(s)
    for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
        runes[i], runes[j] = runes[j], runes[i]
    }
    return string(runes)
}

func TestReverse(t *testing.T) {
    tests := []struct {
        input string
        want  string
    }{
        {"hello", "olleh"},
        {"世界", "界世"},
        {"", ""},
        {"a", "a"},
        {"Go语言", "言语oG"},
    }

    for _, tt := range tests {
        t.Run(tt.input, func(t *testing.T) {
            got := Reverse(tt.input)
            if got != tt.want {
                t.Errorf("Reverse(%q) = %q, want %q", tt.input, got, tt.want)
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
  title: '答案1：字符串工具测试',
  section: '0'
};
