import React from 'react';

interface Props {
  className?: string;
}

export default function 練習問題02JSONシリアライゼーションインターフェース({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習問題2：JSONシリアライゼーションインターフェース</h3>

      <ul>
        <li>**課題:** シリアライゼーションシステムを作成：</li>
        <li><code>Serializer</code>インターフェースを定義、<code>Serialize()</code>と<code>Deserialize()</code>メソッドを含む</li>
        <li><code>JSONSerializer</code>と<code>XMLSerializer</code>を実装</li>
        <li>異なるシリアライザーを使用できる<code>Data</code>構造体を作成</li>
        <li>シリアライゼーションとデシリアライゼーションをテスト</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習問題2：JSONシリアライゼーションインターフェース',
  section: '0'
};
