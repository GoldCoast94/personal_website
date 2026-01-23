import React from 'react';

interface Props {
  className?: string;
}

export default function RunProgram({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.3.2 Running Programs</h3>

      <pre className="code-block">
        <code className="language-bash">{`# Method 1: Run directly
go run hello.go

# Method 2: Compile then run
go build hello.go
./hello

# Method 3: Compile with specified output name
go build -o myapp hello.go
./myapp`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '1-3-2',
  title: 'Running Programs',
  section: '1.3.2'
};
