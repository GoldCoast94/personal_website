import React from 'react';

interface Props {
  className?: string;
}

export default function 練習問題05データエクスポーター({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">練習問題5：データエクスポーター</h3>
      <p>データをCSVとJSON形式でエクスポートするプログラムを作成してください。</p>
      <p>## 11.11 練習問題の解答</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習問題5：データエクスポーター',
  section: '0'
};
