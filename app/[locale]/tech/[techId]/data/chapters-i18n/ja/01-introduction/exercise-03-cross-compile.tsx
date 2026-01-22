import React from 'react';

interface Props {
  className?: string;
}

export default function 演習5クロスコンパイル({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 演習5：クロスコンパイル</h3>

      <ul>
        <li>**問題：** シンプルなGoプログラムを書いて、異なるプラットフォーム用の実行ファイルにコンパイルしてください。</li>
      </ul>

      <ul>
        <li>**要件：**</li>
        <li>「Hello from [オペレーティングシステム]」を出力するプログラムを書く</li>
        <li>runtime.GOOSを使用してオペレーティングシステム情報を取得する</li>
        <li>Linux、Windows、macOS用にそれぞれコンパイルする</li>
      </ul>
      <p>## 1.7 演習の解答</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '演習5：クロスコンパイル',
  section: '0'
};
