import React from 'react';

interface Props {
  className?: string;
}

export default function 練習問題3並行ダウンローダー({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習問題3：並行ダウンローダー</h3>

      <ul>
        <li>**問題：** 並行ファイルダウンローダーを実装してください：</li>
        <li><code>Downloader</code>構造体を作成</li>
        <li><code>Download(urls []string, maxConcurrent int)</code>メソッドを実装</li>
        <li>Worker Poolパターンを使用して並行数を制限</li>
        <li>ダウンロード結果（成功/失敗）と所要時間を返す</li>
        <li>タイムアウト制御を実装</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習問題3：並行ダウンローダー',
  section: '0'
};
