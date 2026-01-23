import React from 'react';

interface Props {
  className?: string;
}

export default function 練習問題数学パッケージ作成({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習問題1：数学パッケージの作成</h3>
      <p>基本的な数学演算関数（加算、減算、乗算、除算、累乗、平方根など）を含む math パッケージを作成してください。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習問題1：数学パッケージの作成',
  section: '0'
};
