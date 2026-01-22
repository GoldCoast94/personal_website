import React from 'react';

interface Props {
  className?: string;
}

export default function Go言語の応用シーン({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.1.3 Go言語の応用シーン</h3>

      <ul>
        <li>サーバーサイド開発</li>
        <li>クラウドコンピューティングとマイクロサービス</li>
        <li>ネットワークプログラミング</li>
        <li>分散システム</li>
        <li>ブロックチェーン開発</li>
        <li>DevOpsツール</li>
        <li>コマンドラインツール</li>
      </ul>
      <p>## 1.2 環境構築</p>

    </div>
  );
}

export const metadata = {
  id: '1-1-3',
  title: 'Go言語の応用シーン',
  section: '1.1.3'
};
