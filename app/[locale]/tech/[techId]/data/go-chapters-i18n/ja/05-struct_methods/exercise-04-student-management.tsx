import React from 'react';

interface Props {
  className?: string;
}

export default function 練習1学生管理システム({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習1：学生管理システム</h3>

      <ul>
        <li>**問題：** 以下の機能を持つ学生管理システムを作成する：</li>
        <li><code>Student</code>構造体を定義し、以下を含める：ID、名前、年齢、成績（複数の科目）</li>
        <li><code>NewStudent</code>コンストラクタ関数を実装</li>
        <li>メソッドを実装する：</li>
        <li><code>AddScore(subject string, score float64)</code> - 成績を追加</li>
        <li><code>AverageScore() float64</code> - 平均点を計算</li>
        <li><code>GetGrade() string</code> - 平均点に基づいて成績（A/B/C/D/F）を返す</li>
        <li><code>String()</code>メソッドを実装して学生情報を返す</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習1：学生管理システム',
  section: '0'
};
