import React from 'react';

interface Props {
  className?: string;
}

export default function 内部パッケージ({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.5.3 内部パッケージ（internal）</h3>

      <pre className="code-block">
        <code className="language-go">{`myproject/
├── internal/
│   └── auth/
│       └── auth.go    # myprojectのみがインポート可能
└── pkg/
    └── public/
        └── public.go  # 外部からインポート可能`}</code>
      </pre>

      <pre className="code-block">
        <code className="language-go">{`// internal/auth/auth.go
package auth

// このパッケージはmyprojectとそのサブパッケージのみがインポート可能
func ValidateToken(token string) bool {
    return token != ""
}`}</code>
      </pre>
      <p>## 8.6 よく使う標準ライブラリパッケージ</p>

    </div>
  );
}

export const metadata = {
  id: '8-5-3',
  title: '内部パッケージ（internal）',
  section: '8.5.3'
};
