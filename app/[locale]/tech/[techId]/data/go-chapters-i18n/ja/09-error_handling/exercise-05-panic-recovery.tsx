import React from 'react';

interface Props {
  className?: string;
}

export default function 練習問題05Panic回復({ className }: Props) {
  return (
    <div className={`section-content \${className || ''}`}>
      <h3 className="section-title">0 練習問題4：panic回復</h3>
      <p>Webサーバーのミドルウェアを作成し、panicをキャッチしてHTTP 500エラーに変換してください。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習問題4：panic回復',
  section: '0'
};
