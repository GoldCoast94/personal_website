import React from 'react';

interface Props {
  className?: string;
}

export default function カバレッジレポート({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">10.7.1 カバレッジレポート</h3>

      <pre className="code-block">
        <code className="language-bash">{`# テストを実行してカバレッジを生成
go test -cover

# 詳細なカバレッジレポートを生成
go test -coverprofile=coverage.out

# カバレッジの詳細を表示
go tool cover -func=coverage.out

# HTMLレポートを生成
go tool cover -html=coverage.out`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '10-7-1',
  title: 'カバレッジレポート',
  section: '10.7.1'
};
