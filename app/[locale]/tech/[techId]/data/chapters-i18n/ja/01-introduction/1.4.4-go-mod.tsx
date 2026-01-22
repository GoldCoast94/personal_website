import React from 'react';

interface Props {
  className?: string;
}

export default function GoMod({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.4.4 go mod</h3>

      <pre className="code-block">
        <code className="language-bash">{`# モジュールの初期化
go mod init example.com/myproject

# 依存関係をダウンロード
go mod download

# 依存関係を整理（不足分を追加、未使用分を削除）
go mod tidy

# 依存関係を表示
go mod graph

# 依存関係をvendorディレクトリにコピー
go mod vendor`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '1-4-4',
  title: 'go mod',
  section: '1.4.4'
};
