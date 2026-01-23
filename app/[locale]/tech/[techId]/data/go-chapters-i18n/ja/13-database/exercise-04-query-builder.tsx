import React from 'react';

interface Props {
  className?: string;
}

export default function 練習5クエリビルダー({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習5：クエリビルダー</h3>
      <p>シンプルなSQLクエリビルダーを作成します。</p>
      <p>## 13.10 本章のまとめ</p>
      <p>本章ではGo言語のデータベースプログラミングを包括的に紹介しました：</p>

      <ul>
        <li>**database/sqlパッケージ**：Go標準ライブラリのデータベースインターフェース</li>
        <li>**CRUD操作**：作成、読み取り、更新、削除の基本操作</li>
        <li>**トランザクション処理**：データの整合性を保証</li>
        <li>**接続プール**：データベース接続の管理</li>
        <li>**プリペアドステートメント**：パフォーマンスとセキュリティの向上</li>
        <li>**NULL値の処理**：NULL可能なフィールドの取り扱い</li>
        <li>**データベースマイグレーション**：バージョン管理とスキーマの進化</li>
        <li>**実践プロジェクト**：完全なユーザー管理システム</li>
      </ul>
      <p>データベースプログラミングを習得することは、実用的なアプリケーションを構築する上での基礎です。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習5：クエリビルダー',
  section: '0'
};
