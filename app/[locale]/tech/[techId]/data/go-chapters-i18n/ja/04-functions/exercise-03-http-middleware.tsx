import React from 'react';

interface Props {
  className?: string;
}

export default function 練習5httpミドルウェア({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習5：HTTPミドルウェア</h3>

      <ul>
        <li>**問題：** シンプルなHTTPミドルウェアシステムを実装する：</li>
        <li>ミドルウェア型を定義する：<code>type Middleware func(HandlerFunc) HandlerFunc</code></li>
        <li>ハンドラ関数型を定義する：<code>type HandlerFunc func(string) string</code></li>
        <li>ロギングミドルウェアを実装する</li>
        <li>認証ミドルウェアを実装する</li>
        <li>複数のミドルウェアをチェーンで組み合わせる</li>
      </ul>
      <p>## 4.6 練習解答</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習5：HTTPミドルウェア',
  section: '0'
};
