import React from 'react';

interface Props {
  className?: string;
}

export default function プライベートモジュール({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.4.3 プライベートモジュール</h3>

      <pre className="code-block">
        <code className="language-bash">{`# プライベートリポジトリを設定
export GOPRIVATE=github.com/mycompany/*

# git認証情報を設定
git config --global url."git@github.com:".insteadOf "https://github.com/"`}</code>
      </pre>
      <p>## 8.5 パッケージの内部構造</p>

    </div>
  );
}

export const metadata = {
  id: '8-4-3',
  title: 'プライベートモジュール',
  section: '8.4.3'
};
