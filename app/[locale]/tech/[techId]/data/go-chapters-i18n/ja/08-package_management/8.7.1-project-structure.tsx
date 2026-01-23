import React from 'react';

interface Props {
  className?: string;
}

export default function タスクマネージャープロジェクト構造({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.7.1 プロジェクト構造</h3>

      <pre className="code-block">
        <code className="language-go">{`taskmanager/
├── main.go
├── go.mod
├── models/
│   └── task.go
├── services/
│   └── taskservice.go
└── utils/
    └── validator.go`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-7-1',
  title: 'プロジェクト構造',
  section: '8.7.1'
};
