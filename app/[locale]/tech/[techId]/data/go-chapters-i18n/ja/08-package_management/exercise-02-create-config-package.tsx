import React from 'react';

interface Props {
  className?: string;
}

export default function 練習問題設定パッケージ作成({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習問題2：設定管理パッケージの作成</h3>
      <p>設定ファイル（JSON または YAML 形式）を読み込んで解析できる config パッケージを作成してください。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習問題2：設定管理パッケージの作成',
  section: '0'
};
