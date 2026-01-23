import React from 'react';

interface Props {
  className?: string;
}

export default function 練習4タスクマネージャ({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習4：タスクマネージャ</h3>

      <ul>
        <li>**問題：** タスクマネージャを実装する：</li>
        <li><code>Task</code>構造体を定義し、以下を含める：ID、タイトル、説明、ステータス、優先度、作成時刻</li>
        <li><code>TaskStatus</code>型を定義（Pending/InProgress/Completed）</li>
        <li><code>Priority</code>型を定義（Low/Medium/High）</li>
        <li><code>TaskManager</code>構造体とメソッドを実装する：</li>
        <li><code>AddTask(title, desc string, priority Priority)</code> - タスクを追加</li>
        <li><code>UpdateStatus(id int, status TaskStatus)</code> - ステータスを更新</li>
        <li><code>ListTasks(filter TaskStatus)</code> - 指定されたステータスのタスクを一覧表示</li>
        <li><code>DeleteTask(id int)</code> - タスクを削除</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習4：タスクマネージャ',
  section: '0'
};
