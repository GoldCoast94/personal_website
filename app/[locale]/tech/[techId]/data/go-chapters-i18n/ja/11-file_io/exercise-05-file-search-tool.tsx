import React from 'react';

interface Props {
  className?: string;
}

export default function 練習問題04ファイル検索ツール({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">練習問題4：ファイル検索ツール</h3>
      <p>名前、サイズ、変更時刻で検索できるファイル検索ツールを実装してください。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習問題4：ファイル検索ツール',
  section: '0'
};
