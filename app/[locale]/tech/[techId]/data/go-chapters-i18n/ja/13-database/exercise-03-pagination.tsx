import React from 'react';

interface Props {
  className?: string;
}

export default function 練習2ページネーションクエリ({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習2：ページネーションクエリ</h3>
      <p>汎用的なページネーションクエリ機能を実装します。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習2：ページネーションクエリ',
  section: '0'
};
