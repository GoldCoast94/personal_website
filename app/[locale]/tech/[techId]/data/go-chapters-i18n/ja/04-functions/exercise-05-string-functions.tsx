import React from 'react';

interface Props {
  className?: string;
}

export default function 練習2文字列処理関数({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習2：文字列処理関数</h3>

      <ul>
        <li>**問題：** 以下の文字列処理関数を実装する：</li>
        <li><code>Reverse(s string) string</code> - 文字列を反転する</li>
        <li><code>IsPalindrome(s string) bool</code> - 回文かどうかを判定する</li>
        <li><code>WordCount(s string) map[string]int</code> - 単語の出現回数を数える</li>
        <li><code>RemoveSpaces(s string) string</code> - すべてのスペースを削除する</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習2：文字列処理関数',
  section: '0'
};
