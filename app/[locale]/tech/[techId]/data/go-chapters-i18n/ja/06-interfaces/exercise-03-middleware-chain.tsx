import React from 'react';

interface Props {
  className?: string;
}

export default function 練習問題03ミドルウェアチェーン({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習問題3：ミドルウェアチェーン</h3>

      <ul>
        <li>**課題:** HTTPミドルウェアチェーンを実装：</li>
        <li><code>Handler</code>と<code>Middleware</code>インターフェースを定義</li>
        <li>複数のミドルウェアを実装：Logger、Auth、RateLimit、Recovery</li>
        <li>ミドルウェアチェーンの組み合わせを実装</li>
        <li>HTTPリクエスト処理フローの例を作成</li>
      </ul>

      <p>## 6.7 練習問題の解答</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習問題3：ミドルウェアチェーン',
  section: '0'
};
