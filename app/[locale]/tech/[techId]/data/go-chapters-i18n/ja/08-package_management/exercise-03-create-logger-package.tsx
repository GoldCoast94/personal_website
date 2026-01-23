import React from 'react';

interface Props {
  className?: string;
}

export default function 練習問題ロガーパッケージ作成({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習問題3：ロガーパッケージの作成</h3>
      <p>異なるログレベル（DEBUG、INFO、WARN、ERROR）をサポートするカスタムロガーパッケージを作成してください。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習問題3：ロガーパッケージの作成',
  section: '0'
};
