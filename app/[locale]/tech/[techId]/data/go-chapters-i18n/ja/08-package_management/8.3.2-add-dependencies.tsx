import React from 'react';

interface Props {
  className?: string;
}

export default function 依存関係の追加({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.3.2 依存関係の追加</h3>

      <pre className="code-block">
        <code className="language-bash">{`# 依存関係を追加
go get github.com/gin-gonic/gin

# 特定のバージョンを追加
go get github.com/gin-gonic/gin@v1.9.1

# 依存関係をアップグレード
go get -u github.com/gin-gonic/gin

# すべての依存関係をアップグレード
go get -u ./...

# 未使用の依存関係を削除
go mod tidy`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-3-2',
  title: '依存関係の追加',
  section: '8.3.2'
};
