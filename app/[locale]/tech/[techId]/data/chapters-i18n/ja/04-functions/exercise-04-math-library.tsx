import React from 'react';

interface Props {
  className?: string;
}

export default function 練習1数学関数ライブラリを実装({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習1：数学関数ライブラリを実装</h3>

      <ul>
        <li>**問題：** 以下の機能を実装する数学関数ライブラリを作成する：</li>
        <li><code>Max(nums ...int) int</code> - 最大値を返す</li>
        <li><code>Min(nums ...int) int</code> - 最小値を返す</li>
        <li><code>Average(nums ...int) float64</code> - 平均値を返す</li>
        <li><code>Sum(nums ...int) int</code> - 合計を返す</li>
        <li>空のパラメータのケースを処理する</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習1：数学関数ライブラリを実装',
  section: '0'
};
