import React from 'react';

interface Props {
  className?: string;
}

export default function 練習問題2並行クローラー({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習問題2：並行クローラー</h3>

      <ul>
        <li>**問題：** シンプルな並行クローラーを実装してください：</li>
        <li>URLリストを与える</li>
        <li>各URLを並行してクロール（シミュレート）</li>
        <li>URL重複排除を実装</li>
        <li>最大並行数を制限</li>
        <li>クロール結果を収集</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習問題2：並行クローラー',
  section: '0'
};
