import React from 'react';

interface Props {
  className?: string;
}

export default function パッケージの命名規則({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.1.2 パッケージの命名規則</h3>

      <pre className="code-block">
        <code className="language-go">{`// 良いパッケージ名の例
package user       // 短く明確
package http       // 説明的
package strings    // 複数形（適切な場合）

// 避けるべきパッケージ名
package my_package // アンダースコアを使用しない
package MyPackage  // 大文字を使用しない
package util       // 広範すぎる`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-1-2',
  title: 'パッケージの命名規則',
  section: '8.1.2'
};
