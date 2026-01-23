import React from 'react';

interface Props {
  className?: string;
}

export default function 練習4WebSocketチャット({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習4：WebSocketチャット</h3>
      <p>リアルタイムチャットアプリケーションを作成してください。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習4：WebSocketチャット',
  section: '0'
};
