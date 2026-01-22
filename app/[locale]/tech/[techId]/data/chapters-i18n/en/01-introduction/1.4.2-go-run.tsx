import React from 'react';

interface Props {
  className?: string;
}

export default function GoRun({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.4.2 go run</h3>

      <pre className="code-block">
        <code className="language-bash">{`# Run a single file
go run main.go

# Run multiple files
go run main.go util.go

# Run entire directory
go run .`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '1-4-2',
  title: 'go run',
  section: '1.4.2'
};
