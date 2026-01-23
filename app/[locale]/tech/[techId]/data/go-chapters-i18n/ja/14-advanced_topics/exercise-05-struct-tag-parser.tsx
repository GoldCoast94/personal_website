import React from 'react';

interface Props {
  className?: string;
}

export default function 練習問題2構造体タグパーサー({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習問題2：構造体タグパーサー</h3>
      <p>リフレクションを使用して構造体タグを解析し、検証を行ってください。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習問題2：構造体タグパーサー',
  section: '0'
};
