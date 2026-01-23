import React from 'react';

interface Props {
  className?: string;
}

export default function 練習5HTTPサービステスト({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習5：HTTPサービステスト</h3>
      <p>REST APIを作成し、完全なテストスイートを作成します。</p>
      <p>## 10.11 練習問題の解答</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習5：HTTPサービステスト',
  section: '0'
};
