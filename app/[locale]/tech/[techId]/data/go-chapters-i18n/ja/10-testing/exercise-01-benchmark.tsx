import React from 'react';

interface Props {
  className?: string;
}

export default function 練習4ベンチマーク({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習4：ベンチマーク</h3>
      <p>異なる文字列連結方法のパフォーマンスを比較します。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習4：ベンチマーク',
  section: '0'
};
