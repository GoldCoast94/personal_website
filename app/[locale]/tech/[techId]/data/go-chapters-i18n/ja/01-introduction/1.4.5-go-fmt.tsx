import React from 'react';

interface Props {
  className?: string;
}

export default function GoFmt({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.4.5 go fmt</h3>

      <pre className="code-block">
        <code className="language-bash">{`# 現在のディレクトリの全ファイルをフォーマット
go fmt ./...

# 指定したファイルをフォーマット
go fmt main.go

# gofmtを使用（より多くのオプション）
gofmt -w main.go  # -wはファイルに直接書き込む`}</code>
      </pre>
      <p>## 1.5 Goコード規範</p>

    </div>
  );
}

export const metadata = {
  id: '1-4-5',
  title: 'go fmt',
  section: '1.4.5'
};
