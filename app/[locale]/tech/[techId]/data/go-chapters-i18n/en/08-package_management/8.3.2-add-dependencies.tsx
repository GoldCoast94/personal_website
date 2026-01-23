import React from 'react';

interface Props {
  className?: string;
}

export default function AddDependencies({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.3.2 Adding Dependencies</h3>

      <pre className="code-block">
        <code className="language-bash">{`# Add a dependency
go get github.com/gin-gonic/gin

# Add a specific version
go get github.com/gin-gonic/gin@v1.9.1

# Upgrade a dependency
go get -u github.com/gin-gonic/gin

# Upgrade all dependencies
go get -u ./...

# Remove unused dependencies
go mod tidy`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-3-2',
  title: 'Adding Dependencies',
  section: '8.3.2'
};
