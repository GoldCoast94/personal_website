import React from 'react';

interface Props {
  className?: string;
}

export default function 練習3モックテスト({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習3：モックテスト</h3>
      <p>ファイルシステムインターフェースを作成し、モックを使用してテストします。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習3：モックテスト',
  section: '0'
};
