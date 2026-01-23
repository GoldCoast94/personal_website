import React from 'react';

interface Props {
  className?: string;
}

export default function 練習4データインポートエクスポート({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習4：データインポート・エクスポート</h3>
      <p>CSVデータのデータベースへのインポートとデータベースからCSVへのエクスポートを実装します。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習4：データインポート・エクスポート',
  section: '0'
};
