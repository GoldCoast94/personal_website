import React from 'react';

interface Props {
  className?: string;
}

export default function 練習3認証システム({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習3：認証システム</h3>
      <p>ユーザー登録、ログイン、JWT認証を実装してください。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習3：認証システム',
  section: '0'
};
