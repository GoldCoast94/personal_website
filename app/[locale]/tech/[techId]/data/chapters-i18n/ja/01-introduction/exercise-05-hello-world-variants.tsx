import React from 'react';

interface Props {
  className?: string;
}

export default function 演習2HelloWorldバリエーション({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 演習2：Hello Worldのバリエーション</h3>

      <ul>
        <li>**問題：** Hello Worldプログラムを修正して、以下の機能を実装してください：</li>
        <li>「Goの学習へようこそ！」を出力する</li>
        <li>現在の日付と時刻を出力する</li>
        <li>Goのバージョン情報を出力する（ヒント：runtimeパッケージを使用）</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '演習2：Hello Worldのバリエーション',
  section: '0'
};
