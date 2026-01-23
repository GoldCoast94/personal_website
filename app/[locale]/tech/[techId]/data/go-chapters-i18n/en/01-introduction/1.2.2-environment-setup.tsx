import React from 'react';

interface Props {
  className?: string;
}

export default function EnvironmentSetup({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.2.2 Environment Variable Configuration</h3>

      <pre className="code-block">
        <code className="language-bash">{`# Check Go version
go version

# Check Go environment information
go env

# Important environment variables
export GOROOT=/usr/local/go           # Go installation directory
export GOPATH=$HOME/go                # Go workspace directory
export PATH=$PATH:$GOROOT/bin:$GOPATH/bin

# Go 1.11+ uses Go Modules, recommended to enable
export GO111MODULE=on
export GOPROXY=https://proxy.golang.org,direct  # Proxy for faster downloads`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '1-2-2',
  title: 'Environment Variable Configuration',
  section: '1.2.2'
};
