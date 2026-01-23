import React from 'react';

interface Props {
  className?: string;
}

export default function 練習1図書管理システム({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習1：図書管理システム</h3>
      <p>図書管理システムのデータベース操作を作成します。図書、著者、カテゴリのCRUDを含みます。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習1：図書管理システム',
  section: '0'
};
