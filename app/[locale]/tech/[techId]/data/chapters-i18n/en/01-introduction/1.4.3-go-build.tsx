import React from 'react';

interface Props {
  className?: string;
}

export default function GoBuild({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.4.3 go build</h3>

      <pre className="code-block">
        <code className="language-bash">{`# Compile current directory
go build

# Compile specified file
go build main.go

# Specify output filename
go build -o myapp

# Cross-compile (compile for other platforms)
GOOS=linux GOARCH=amd64 go build
GOOS=windows GOARCH=amd64 go build -o app.exe`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '1-4-3',
  title: 'go build',
  section: '1.4.3'
};
