import React from 'react';

interface Props {
  className?: string;
}

export default function GoFmt({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.4.5 go fmt</h3>

      <pre className="code-block">
        <code className="language-bash">{`# Format all files in current directory
go fmt ./...

# Format specified file
go fmt main.go

# Use gofmt (more options)
gofmt -w main.go  # -w means write directly to file`}</code>
      </pre>
      <p>## 1.5 Go Code Standards</p>

    </div>
  );
}

export const metadata = {
  id: '1-4-5',
  title: 'go fmt',
  section: '1.4.5'
};
