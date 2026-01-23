import React from 'react';

interface Props {
  className?: string;
}

export default function GoModFileExplained({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.3.3 go.mod File Explained</h3>

      <pre className="code-block">
        <code className="language-go">{`module github.com/username/myproject

go 1.21

// Direct dependencies
require (
    github.com/gin-gonic/gin v1.9.1
    github.com/google/uuid v1.3.0
)

// Exclude specific versions
exclude github.com/old/package v1.0.0

// Replace dependencies
replace (
    github.com/old/package => github.com/new/package v2.0.0
    github.com/local/package => ./local/path
)

// Retract versions
retract v1.0.0 // Version with serious bugs`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-3-3',
  title: 'go.mod File Explained',
  section: '8.3.3'
};
