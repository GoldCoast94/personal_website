import React from 'react';

interface Props {
  className?: string;
}

export default function TaskManagerProjectStructure({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.7.1 Project Structure</h3>

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
  title: 'Project Structure',
  section: '8.7.1'
};
