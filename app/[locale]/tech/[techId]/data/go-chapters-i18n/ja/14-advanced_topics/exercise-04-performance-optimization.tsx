import React from 'react';

interface Props {
  className?: string;
}

export default function 練習問題5パフォーマンス最適化({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習問題5：パフォーマンス最適化</h3>
      <p>文字列処理プログラムを最適化し、ベンチマークを使用してパフォーマンスを比較してください。</p>
      <p>## 14.8 練習問題の解答</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習問題5：パフォーマンス最適化',
  section: '0'
};
