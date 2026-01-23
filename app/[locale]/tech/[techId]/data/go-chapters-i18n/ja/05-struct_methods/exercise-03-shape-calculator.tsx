import React from 'react';

interface Props {
  className?: string;
}

export default function 練習3図形計算機({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習3：図形計算機</h3>

      <ul>
        <li>**問題：** 図形計算機を作成する：</li>
        <li><code>Shape</code>インターフェースを定義し、<code>Area()</code>と<code>Perimeter()</code>メソッドを含める</li>
        <li>複数の図形を実装する：Circle、Rectangle、Triangle、Square</li>
        <li><code>ShapeCollection</code>構造体を実装する：</li>
        <li><code>Add(shape Shape)</code> - 図形を追加</li>
        <li><code>TotalArea() float64</code> - すべての図形の総面積を計算</li>
        <li><code>AverageArea() float64</code> - 平均面積を計算</li>
        <li><code>Largest() Shape</code> - 最大面積の図形を返す</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習3：図形計算機',
  section: '0'
};
