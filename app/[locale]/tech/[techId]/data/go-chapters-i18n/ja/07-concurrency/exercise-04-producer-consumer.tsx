import React from 'react';

interface Props {
  className?: string;
}

export default function 練習問題4プロデューサーコンシューマー({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習問題4：プロデューサー-コンシューマー</h3>

      <ul>
        <li>**問題：** プロデューサー-コンシューマーパターンを実装してください：</li>
        <li>複数のプロデューサーがランダムな数値を生成</li>
        <li>複数のコンシューマーがデータを処理（平方を計算）</li>
        <li>バッファ付きチャネルをキューとして使用</li>
        <li>グレースフルシャットダウンを実装</li>
        <li>処理したデータの総数を統計</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習問題4：プロデューサー-コンシューマー',
  section: '0'
};
