import React from 'react';

interface Props {
  className?: string;
}

export default function ModuleInit({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.3.1 Initializing a Module</h3>

      <pre className="code-block">
        <code className="language-bash">{`# Initialize a new module
go mod init github.com/username/myproject

# Generated go.mod file
module github.com/username/myproject

go 1.21

require (
    github.com/gin-gonic/gin v1.9.1
    github.com/google/uuid v1.3.0
)`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-3-1',
  title: 'Initializing a Module',
  section: '8.3.1'
};
