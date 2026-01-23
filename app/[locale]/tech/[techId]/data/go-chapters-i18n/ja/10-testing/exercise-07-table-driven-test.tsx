import React from 'react';

interface Props {
  className?: string;
}

export default function 練習2テーブル駆動テスト({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習2：テーブル駆動テスト</h3>
      <p>テーブル駆動テストを使用してソート関数を検証します。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習2：テーブル駆動テスト',
  section: '0'
};
