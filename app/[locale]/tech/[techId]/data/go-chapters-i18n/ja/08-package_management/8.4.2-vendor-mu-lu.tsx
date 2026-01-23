import React from 'react';

interface Props {
  className?: string;
}

export default function Vendorディレクトリ({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.4.2 vendor ディレクトリ</h3>

      <pre className="code-block">
        <code className="language-bash">{`# vendorディレクトリを作成
go mod vendor

# vendorディレクトリを使用してビルド
go build -mod=vendor`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-4-2',
  title: 'vendor ディレクトリ',
  section: '8.4.2'
};
