import React from 'react';

interface Props {
  className?: string;
}

export default function 練習問題タスク管理拡張({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習問題5：タスク管理システムの拡張</h3>
      <p>タスク管理システムに以下を追加してください：
- タスクの優先度
- タスクのタグ
- タスク検索機能
- データの永続化（ファイルへの保存）</p>
      <p>## 8.9 練習問題の解答</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習問題5：タスク管理システムの拡張',
  section: '0'
};
