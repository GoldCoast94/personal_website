import React from 'react';

interface Props {
  className?: string;
}

export default function CommonCommands({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.4.1 Common Commands</h3>

      <pre className="code-block">
        <code className="language-bash">{`go run      # Compile and run Go program
go build    # Compile Go program
go install  # Compile and install Go program
go get      # Download and install packages and dependencies
go mod      # Module maintenance
go test     # Run tests
go fmt      # Format code
go vet      # Check code for errors
go doc      # View documentation`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '1-4-1',
  title: 'Common Commands',
  section: '1.4.1'
};
