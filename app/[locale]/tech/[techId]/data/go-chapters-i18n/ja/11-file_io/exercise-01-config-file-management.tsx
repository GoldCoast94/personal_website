import React from 'react';

interface Props {
  className?: string;
}

export default function 練習問題03設定ファイル管理({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">練習問題3：設定ファイル管理</h3>
      <p>設定の読み取り、変更、保存をサポートする設定ファイルマネージャーを作成してください。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習問題3：設定ファイル管理',
  section: '0'
};
