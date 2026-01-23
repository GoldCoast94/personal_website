import React from 'react';

interface Props {
  className?: string;
}

export default function 練習5画像処理API({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 練習5：画像処理API</h3>
      <p>画像のアップロード、リサイズ、フォーマット変換機能を実装してください。</p>
      <p>## 12.10 本章のまとめ</p>
      <p>本章ではGoのWeb開発の基礎を紹介しました：</p>

      <ul>
        <li>**HTTPサーバー**：HTTPサーバーの作成と設定</li>
        <li>**リクエスト処理**：さまざまなタイプのHTTPリクエストの処理</li>
        <li>**JSON API**：RESTful APIの構築</li>
        <li>**ルーティングとミドルウェア**：リクエスト処理の整理と拡張</li>
        <li>**ファイル操作**：ファイルのアップロードとダウンロード</li>
        <li>**テンプレートエンジン**：HTMLページのレンダリング</li>
        <li>**Session管理**：ユーザーセッションと認証</li>
        <li>**実践プロジェクト**：完全なRESTful API</li>
      </ul>
      <p>Goの標準ライブラリは、高性能なWebアプリケーションを構築するための強力なWeb開発機能を提供しています。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '練習5：画像処理API',
  section: '0'
};
