import React from 'react';

interface Props {
  className?: string;
}

export default function 練習4キャッシュシステム({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習4：キャッシュシステム</h3>

      <ul>
        <li>**問題：** クロージャを使用してシンプルなキャッシュシステムを実装する：</li>
        <li>高価な計算の結果をメモ化するキャッシュ関数を作成する</li>
        <li><code>MakeCache(fn func(int) int) func(int) int</code>を実装する</li>
        <li>テスト：再帰的なフィボナッチ関数を使用する</li>
        <li>キャッシュ前後のパフォーマンス差を比較する</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習4：キャッシュシステム',
  section: '0'
};
