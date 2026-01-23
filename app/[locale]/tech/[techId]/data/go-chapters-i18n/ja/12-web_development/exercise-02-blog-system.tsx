import React from 'react';

interface Props {
  className?: string;
}

export default function 練習1ブログシステム({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習1：ブログシステム</h3>
      <p>記事のCRUD操作をサポートするシンプルなブログAPIを作成してください。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習1：ブログシステム',
  section: '0'
};
