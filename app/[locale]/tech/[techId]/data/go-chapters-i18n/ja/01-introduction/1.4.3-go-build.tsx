import React from 'react';

interface Props {
  className?: string;
}

export default function GoBuild({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.4.3 go build</h3>

      <pre className="code-block">
        <code className="language-bash">{`# 現在のディレクトリをコンパイル
go build

# 指定したファイルをコンパイル
go build main.go

# 出力ファイル名を指定
go build -o myapp

# クロスコンパイル（他のプラットフォーム向け）
GOOS=linux GOARCH=amd64 go build
GOOS=windows GOARCH=amd64 go build -o app.exe`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '1-4-3',
  title: 'go build',
  section: '1.4.3'
};
