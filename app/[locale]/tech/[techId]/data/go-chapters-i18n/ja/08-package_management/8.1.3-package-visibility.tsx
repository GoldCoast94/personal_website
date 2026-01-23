import React from 'react';

interface Props {
  className?: string;
}

export default function パッケージの可視性({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.1.3 パッケージの可視性</h3>

      <pre className="code-block">
        <code className="language-go">{`package calculator

// エクスポート済み（公開）- 大文字で始まる
func Add(a, b int) int {
    return a + b
}

// エクスポートされていない（プライベート）- 小文字で始まる
func multiply(a, b int) int {
    return a * b
}

// エクスポート済み定数
const MaxValue = 100

// エクスポートされていない定数
const minValue = 0

// エクスポート済み型
type Calculator struct {
    Name string        // エクスポート済みフィールド
    version string     // エクスポートされていないフィールド
}`}</code>
      </pre>
      <p>## 8.2 カスタムパッケージの作成と使用</p>

    </div>
  );
}

export const metadata = {
  id: '8-1-3',
  title: 'パッケージの可視性',
  section: '8.1.3'
};
