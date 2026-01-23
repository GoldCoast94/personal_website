import React from 'react';

interface Props {
  className?: string;
}

export default function Api試験({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">15.1.13 API試験</h3>

      <pre className="code-block">
        <code className="language-bash">{`# ユーザー登録
curl -X POST http://localhost:8080/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"alice","email":"alice@example.com","password":"password123"}'

# ログイン
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"alice@example.com","password":"password123"}'

# Todoを作成（トークンが必要）
curl -X POST http://localhost:8080/api/todos \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"title":"Learn Go","description":"Complete Go tutorial"}'

# すべてのTodoを取得
curl -X GET http://localhost:8080/api/todos \
  -H "Authorization: Bearer YOUR_TOKEN"

# Todoを更新
curl -X PUT http://localhost:8080/api/todos/1 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"completed":true}'

# Todoを削除
curl -X DELETE http://localhost:8080/api/todos/1 \
  -H "Authorization: Bearer YOUR_TOKEN"`}</code>
      </pre>
      <p>## 15.2 プロジェクト概要</p>
      <p>このTodoリストAPIプロジェクトは以下を示しています：</p>

      <ul>
        <li>**プロジェクト構造**：明確な階層型アーキテクチャ</li>
        <li>**設定管理**：環境変数の設定</li>
        <li>**データベース操作**：MySQL CRUD操作</li>
        <li>**認証システム**：JWTトークン認証</li>
        <li>**ミドルウェア**：認証とロギングのミドルウェア</li>
        <li>**RESTful API**：標準的なRESTインターフェース設計</li>
        <li>**エラー処理**：統一されたエラーレスポンス形式</li>
        <li>**セキュリティ**：パスワードハッシュ化、トークン検証</li>
      </ul>
      <p>## 15.3 拡張提案</p>
      <p>以下の機能を追加できます：</p>

      <ul>
        <li>**ページネーションとソート**：リストエンドポイントにページネーションを追加</li>
        <li>**検索機能**：タイトルでTodoを検索</li>
        <li>**データ検証**：より包括的な入力検証</li>
        <li>**単体テスト**：各レイヤーにテストを追加</li>
        <li>**APIドキュメント**：Swaggerを使用してドキュメントを生成</li>
        <li>**レート制限**：API濫用を防止</li>
        <li>**キャッシング**：Redisを使用してデータをキャッシュ</li>
        <li>**WebSocket**：リアルタイム更新機能</li>
      </ul>
      <p>## 15.4 デプロイガイド</p>

    </div>
  );
}

export const metadata = {
  id: '15-1-13',
  title: 'API試験',
  section: '15.1.13'
};
