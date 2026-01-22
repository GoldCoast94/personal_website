import React from 'react';

interface Props {
  className?: string;
}

export default function GoRun({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.4.2 go run</h3>

      <pre className="code-block">
        <code className="language-bash">{`# 単一ファイルを実行
go run main.go

# 複数ファイルを実行
go run main.go util.go

# ディレクトリ全体を実行
go run .`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '1-4-2',
  title: 'go run',
  section: '1.4.2'
};
