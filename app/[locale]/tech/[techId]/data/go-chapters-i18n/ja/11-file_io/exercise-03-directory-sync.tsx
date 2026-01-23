import React from 'react';

interface Props {
  className?: string;
}

export default function 練習問題02ディレクトリ同期({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">練習問題2：ディレクトリ同期</h3>
      <p>2つのディレクトリの内容を同期するプログラムを作成してください。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習問題2：ディレクトリ同期',
  section: '0'
};
