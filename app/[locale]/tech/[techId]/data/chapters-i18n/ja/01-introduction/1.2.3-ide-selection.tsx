import React from 'react';

interface Props {
  className?: string;
}

export default function IDE選択({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.2.3 IDE選択</h3>
      <p>推奨開発ツール：
1. <strong>Visual Studio Code</strong> + Go拡張機能（推奨）
2. <strong>GoLand</strong>（JetBrains製、機能豊富）
3. <strong>Vim/Neovim</strong> + vim-goプラグイン
4. <strong>Sublime Text</strong> + GoSublimeプラグイン</p>
      <p>## 1.3 最初のGoプログラム</p>

    </div>
  );
}

export const metadata = {
  id: '1-2-3',
  title: 'IDE選択',
  section: '1.2.3'
};
