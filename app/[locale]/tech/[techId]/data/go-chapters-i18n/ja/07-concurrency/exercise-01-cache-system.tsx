import React from 'react';

interface Props {
  className?: string;
}

export default function 練習問題1キャッシュシステム({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習問題1：キャッシュシステム</h3>

      <ul>
        <li>**問題：** 並行安全なキャッシュシステムを実装してください：</li>
        <li>Get、Set、Delete操作をサポート</li>
        <li>TTL（有効期限）を実装</li>
        <li>期限切れデータを定期的にクリーンアップ</li>
        <li>読み書きロックを使用してパフォーマンスを最適化</li>
        <li>キャッシュ統計（ヒット率）を実装</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習問題1：キャッシュシステム',
  section: '0'
};
