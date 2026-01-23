import React from 'react';

interface Props {
  className?: string;
}

export default function ProjectStructure({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">15.1.1 Project Structure</h3>

      <pre className="code-block">
        <code className="language-go">{`todoapi/
├── main.go
├── go.mod
├── go.sum
├── config/
│   └── config.go
├── models/
│   ├── user.go
│   └── todo.go
├── handlers/
│   ├── auth.go
│   └── todo.go
├── middleware/
│   ├── auth.go
│   └── logger.go
├── database/
│   └── db.go
└── utils/
    ├── jwt.go
    └── response.go`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '15-1-1',
  title: 'Project Structure',
  section: '15.1.1'
};
