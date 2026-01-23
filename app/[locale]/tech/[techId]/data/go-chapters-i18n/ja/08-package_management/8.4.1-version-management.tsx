import React from 'react';

interface Props {
  className?: string;
}

export default function バージョン管理({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.4.1 バージョン管理</h3>

      <pre className="code-block">
        <code className="language-go">{`// セマンティックバージョニングを使用
// v1.2.3
// メジャー.マイナー.パッチ

// 例：異なるバージョンの使用
require (
    github.com/pkg/errors v0.9.1      // 安定版
    github.com/newpkg/test v2.0.0+incompatible  // 非互換のv2
    github.com/experimental/pkg v0.0.0-20230101120000-abcdef123456 // 疑似バージョン
)`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-4-1',
  title: 'バージョン管理',
  section: '8.4.1'
};
