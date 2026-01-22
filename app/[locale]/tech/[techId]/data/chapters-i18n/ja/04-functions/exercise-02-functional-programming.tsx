import React from 'react';

interface Props {
  className?: string;
}

export default function 練習3関数型プログラミング({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習3：関数型プログラミング</h3>

      <ul>
        <li>**問題：** 以下の高階関数を実装する：</li>
        <li><code>Map(slice []int, fn func(int) int) []int</code> - マッピング</li>
        <li><code>Filter(slice []int, fn func(int) bool) []int</code> - フィルタリング</li>
        <li><code>Reduce(slice []int, initial int, fn func(int, int) int) int</code> - リダクション</li>
        <li>これらの関数を使用して：スライス内のすべての偶数を2倍にして合計する</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習3：関数型プログラミング',
  section: '0'
};
