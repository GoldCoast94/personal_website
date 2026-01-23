import React from 'react';

interface Props {
  className?: string;
}

export default function 内部包internal({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.5.3 内部包（internal）</h3>

      <pre className="code-block">
        <code className="language-go">{`myproject/
├── internal/
│   └── auth/
│       └── auth.go    # 只能被myproject导入
└── pkg/
    └── public/
        └── public.go  # 可以被外部导入`}</code>
      </pre>

      <pre className="code-block">
        <code className="language-go">{`// internal/auth/auth.go
package auth

// 这个包只能被myproject及其子包导入
func ValidateToken(token string) bool {
    return token != ""
}`}</code>
      </pre>
      <p>## 8.6 常用标准库包</p>

    </div>
  );
}

export const metadata = {
  id: '8-5-3',
  title: '内部包（internal）',
  section: '8.5.3'
};
