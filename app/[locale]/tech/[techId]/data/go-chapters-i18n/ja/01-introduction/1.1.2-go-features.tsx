import React from 'react';

interface Props {
  className?: string;
}

export default function Go言語の特徴({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.1.2 Go言語の特徴</h3>

      <ul>
        <li>**シンプルさ**：シンプルな構文、キーワードは25個のみ</li>
        <li>**並行性**：並行プログラミングのネイティブサポート（ゴルーチンとチャネル）</li>
        <li>**高性能**：C言語に近い実行効率を持つコンパイル型言語</li>
        <li>**ガベージコレクション**：自動メモリ管理</li>
        <li>**静的型付け**：コンパイル時の型チェック</li>
        <li>**高速コンパイル**：非常に高速なコンパイル速度</li>
        <li>**クロスプラットフォーム**：複数のOSとアーキテクチャをサポート</li>
        <li>**豊富な標準ライブラリ**：包括的な標準ライブラリ</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '1-1-2',
  title: 'Go言語の特徴',
  section: '1.1.2'
};
