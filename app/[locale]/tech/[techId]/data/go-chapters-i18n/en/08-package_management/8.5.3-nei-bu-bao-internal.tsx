import React from 'react';

interface Props {
  className?: string;
}

export default function InternalPackages({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.5.3 Internal Packages</h3>

      <pre className="code-block">
        <code className="language-go">{`myproject/
├── internal/
│   └── auth/
│       └── auth.go    # Can only be imported by myproject
└── pkg/
    └── public/
        └── public.go  # Can be imported externally`}</code>
      </pre>

      <pre className="code-block">
        <code className="language-go">{`// internal/auth/auth.go
package auth

// This package can only be imported by myproject and its subpackages
func ValidateToken(token string) bool {
    return token != ""
}`}</code>
      </pre>
      <p>## 8.6 Common Standard Library Packages</p>

    </div>
  );
}

export const metadata = {
  id: '8-5-3',
  title: 'Internal Packages',
  section: '8.5.3'
};
