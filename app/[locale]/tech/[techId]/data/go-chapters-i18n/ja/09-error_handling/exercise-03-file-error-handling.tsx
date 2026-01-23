import React from 'react';

interface Props {
  className?: string;
}

export default function 練習問題03ファイルエラー処理({ className }: Props) {
  return (
    <div className={`section-content \${className || ''}`}>
      <h3 className="section-title">0 練習問題1：ファイル操作のエラー処理</h3>
      <p>ファイルの内容を読み取る関数を作成し、さまざまな可能性のあるエラー（ファイルが見つからない、権限不足など）を処理してください。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習問題1：ファイル操作のエラー処理',
  section: '0'
};
