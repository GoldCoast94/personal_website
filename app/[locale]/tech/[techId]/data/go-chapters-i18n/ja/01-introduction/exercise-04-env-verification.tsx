import React from 'react';

interface Props {
  className?: string;
}

export default function 演習1環境検証({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 演習1：環境検証</h3>

      <ul>
        <li>**問題：** Go環境が正しくインストールされているか確認し、Goバージョン情報を出力してください。</li>
      </ul>

      <ul>
        <li>**要件：**</li>
        <li>コマンドラインでGoバージョンを確認する</li>
        <li>GOPATHとGOROOT環境変数を確認する</li>
        <li>Goプロキシ設定を確認する</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '演習1：環境検証',
  section: '0'
};
