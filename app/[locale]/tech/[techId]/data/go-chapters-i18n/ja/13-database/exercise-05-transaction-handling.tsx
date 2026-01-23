import React from 'react';

interface Props {
  className?: string;
}

export default function 練習3トランザクション処理({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習3：トランザクション処理</h3>
      <p>注文システムのトランザクション処理を実装します（在庫の減少、注文の作成、支払い）。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習3：トランザクション処理',
  section: '0'
};
