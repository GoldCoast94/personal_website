import React from 'react';

interface Props {
  className?: string;
}

export default function 練習5連結リスト実装({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習5：連結リスト実装</h3>

      <ul>
        <li>**問題：** 単方向連結リストを実装する：</li>
        <li><code>Node</code>構造体を定義し、以下を含める：値、次のノードへのポインタ</li>
        <li><code>LinkedList</code>構造体とメソッドを定義する：</li>
        <li><code>Append(value int)</code> - 末尾にノードを追加</li>
        <li><code>Prepend(value int)</code> - 先頭にノードを追加</li>
        <li><code>Delete(value int)</code> - 指定された値のノードを削除</li>
        <li><code>Find(value int) bool</code> - ノードを検索</li>
        <li><code>Length() int</code> - 長さを返す</li>
        <li><code>Print()</code> - 連結リストを出力</li>
      </ul>
      <p>## 5.7 練習問題解答</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習5：連結リスト実装',
  section: '0'
};
