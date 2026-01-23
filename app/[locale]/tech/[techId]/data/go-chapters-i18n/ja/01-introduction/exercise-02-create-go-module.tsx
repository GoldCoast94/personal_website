import React from 'react';

interface Props {
  className?: string;
}

export default function 演習3Goモジュール作成({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 演習3：Goモジュールの作成</h3>

      <ul>
        <li>**問題：** "calculator"という名前のGoモジュールを作成し、main.goファイルを含めてください。</li>
      </ul>

      <ul>
        <li>**要件：**</li>
        <li>go mod initを使用してモジュールを初期化する</li>
        <li>main.goで「Calculator v1.0」を出力する</li>
        <li>プログラムをコンパイルして実行する</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '演習3：Goモジュールの作成',
  section: '0'
};
