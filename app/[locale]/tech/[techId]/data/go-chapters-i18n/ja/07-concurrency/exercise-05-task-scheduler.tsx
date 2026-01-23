import React from 'react';

interface Props {
  className?: string;
}

export default function 練習問題5タスクスケジューラー({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習問題5：タスクスケジューラー</h3>

      <ul>
        <li>**問題：** シンプルなタスクスケジューラーを実装してください：</li>
        <li>定期タスクの追加をサポート</li>
        <li>goroutineプールを使用してタスクを実行</li>
        <li>タスクのキャンセルをサポート</li>
        <li>タスク優先度を実装</li>
        <li>タスク実行履歴を記録</li>
      </ul>
      <p>## 7.7 練習問題の解答</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習問題5：タスクスケジューラー',
  section: '0'
};
