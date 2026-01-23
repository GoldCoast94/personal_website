import React from 'react';

interface Props {
  className?: string;
}

export default function 練習問題3コンテキスト伝播({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習問題3：コンテキスト伝播</h3>
      <p>contextを使用してリクエストIDを渡すHTTPミドルウェアを実装してください。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習問題3：コンテキスト伝播',
  section: '0'
};
