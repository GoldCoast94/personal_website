import React from 'react';

interface Props {
  className?: string;
}

export default function Docker化({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">15.4.1 Docker化</h3>

      <ul>
        <li>**Dockerfile:**</li>
      </ul>

      <pre className="code-block">
        <code className="language-dockerfile">{`FROM golang:1.21-alpine AS builder

WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o main .

FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/

COPY --from=builder /app/main .

EXPOSE 8080
CMD ["./main"]`}</code>
      </pre>

      <ul>
        <li>**docker-compose.yml:**</li>
      </ul>

      <pre className="code-block">
        <code className="language-yaml">{`version: '3.8'

services:
  app:
    build: .
    ports:
      - "8080:8080"
    environment:
      - DATABASE_URL=root:password@tcp(db:3306)/todoapp
      - JWT_SECRET=your-secret-key
    depends_on:
      - db

  db:
    image: mysql:8.0
    environment:
      - MYSQL_ROOT_PASSWORD=password
      - MYSQL_DATABASE=todoapp
    volumes:
      - mysql_data:/var/lib/mysql

volumes:
  mysql_data:`}</code>
      </pre>
      <p>## 15.5 本章のまとめ</p>
      <p>本章では、完全なTodoリストAPIプロジェクトを通じて以下を示しました：</p>

      <ul>
        <li>**プロジェクトアーキテクチャ**：階層設計とモジュール化</li>
        <li>**データベース統合**：MySQL操作とマイグレーション</li>
        <li>**認証と認可**：JWTトークンの実装</li>
        <li>**ミドルウェアパターン**：横断的関心事の処理</li>
        <li>**RESTful設計**：APIベストプラクティス</li>
        <li>**デプロイソリューション**：Dockerコンテナ化</li>
      </ul>
      <p>このプロジェクトは、Go Web開発の中核概念をカバーしており、実際のプロジェクトの出発点として役立ちます。</p>
      <p>## 全書まとめ</p>
      <p>「Go言語：入門から熟達まで」の学習を完了したことをお祝いします！</p>
      <p>あなたは以下を習得しました：</p>

      <ul>
        <li>**Go言語の基礎**：構文、データ型、制御フロー</li>
        <li>**オブジェクト指向**：構造体、メソッド、インターフェース</li>
        <li>**並行プログラミング**：ゴルーチン、チャネル、sync</li>
        <li>**標準ライブラリ**：パッケージ管理、IO、エラー処理</li>
        <li>**テスト**：単体テスト、ベンチマークテスト</li>
        <li>**Web開発**：HTTPサーバー、RESTful API</li>
        <li>**データベース**：SQL操作、トランザクション処理</li>
        <li>**高度な機能**：リフレクション、ジェネリクス、Context</li>
        <li>**実践プロジェクト**：完全なAPIプロジェクト</li>
      </ul>
      <p>学習を続けるための提案：</p>

      <ul>
        <li>より多くのコードを書き、オープンソースプロジェクトに参加する</li>
        <li>Go標準ライブラリのソースコードを深く学ぶ</li>
        <li>マイクロサービスアーキテクチャを学ぶ（gRPC、Kubernetes）</li>
        <li>クラウドネイティブ領域におけるGoの応用を探求する</li>
        <li>Goコミュニティと最新の発展をフォローする</li>
      </ul>
      <p>Go言語の世界でますます前進することを願っています！</p>

    </div>
  );
}

export const metadata = {
  id: '15-4-1',
  title: 'Docker化',
  section: '15.4.1'
};
