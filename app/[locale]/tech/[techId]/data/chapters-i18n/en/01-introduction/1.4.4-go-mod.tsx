import React from 'react';

interface Props {
  className?: string;
}

export default function GoMod({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.4.4 go mod</h3>

      <pre className="code-block">
        <code className="language-bash">{`# Initialize module
go mod init example.com/myproject

# Download dependencies
go mod download

# Tidy dependencies (add missing, remove unused)
go mod tidy

# View dependencies
go mod graph

# Copy dependencies to vendor directory
go mod vendor`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '1-4-4',
  title: 'go mod',
  section: '1.4.4'
};
