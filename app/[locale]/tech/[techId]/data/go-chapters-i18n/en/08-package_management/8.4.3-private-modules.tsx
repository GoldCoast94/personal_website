import React from 'react';

interface Props {
  className?: string;
}

export default function PrivateModules({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.4.3 Private Modules</h3>

      <pre className="code-block">
        <code className="language-bash">{`# Configure private repositories
export GOPRIVATE=github.com/mycompany/*

# Configure git credentials
git config --global url."git@github.com:".insteadOf "https://github.com/"`}</code>
      </pre>
      <p>## 8.5 Package Internal Structure</p>

    </div>
  );
}

export const metadata = {
  id: '8-4-3',
  title: 'Private Modules',
  section: '8.4.3'
};
