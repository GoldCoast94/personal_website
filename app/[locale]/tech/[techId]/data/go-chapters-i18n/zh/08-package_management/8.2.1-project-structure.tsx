import React from 'react';

interface Props {
  className?: string;
}

export default function 项目结构({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.2.1 项目结构</h3>

      <pre className="code-block">
        <code className="language-go">{`myproject/
├── main.go
├── go.mod
├── utils/
│   └── string.go
├── models/
│   └── user.go
└── services/
    └── userservice.go`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-2-1',
  title: '项目结构',
  section: '8.2.1'
};
