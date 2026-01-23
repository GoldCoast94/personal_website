import React from 'react';

interface Props {
  className?: string;
}

export default function Gomodファイル詳解({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.3.3 go.mod ファイル詳解</h3>

      <pre className="code-block">
        <code className="language-go">{`module github.com/username/myproject

go 1.21

// 直接依存関係
require (
    github.com/gin-gonic/gin v1.9.1
    github.com/google/uuid v1.3.0
)

// 特定バージョンを除外
exclude github.com/old/package v1.0.0

// 依存関係を置換
replace (
    github.com/old/package => github.com/new/package v2.0.0
    github.com/local/package => ./local/path
)

// バージョンを取り消し
retract v1.0.0 // 重大なバグのあるバージョン`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-3-3',
  title: 'go.mod ファイル詳解',
  section: '8.3.3'
};
