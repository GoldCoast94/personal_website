import React from 'react';

interface Props {
  className?: string;
}

export default function 練習問題01データベース抽象化層({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習問題1：データベース抽象化層</h3>

      <ul>
        <li>**課題:** データベース抽象化層を作成：</li>
        <li><code>Database</code>インターフェースを定義：Connect、Close、Query、Execute</li>
        <li>テスト用に<code>MockDB</code>を実装</li>
        <li><code>Database</code>インターフェースに依存する<code>UserRepository</code>を実装</li>
        <li>依存性注入とテストを実演</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習問題1：データベース抽象化層',
  section: '0'
};
