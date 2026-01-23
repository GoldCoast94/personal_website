import React from 'react';

interface Props {
  className?: string;
}

export default function VersionManagement({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.4.1 Version Management</h3>

      <pre className="code-block">
        <code className="language-go">{`// Use semantic versioning
// v1.2.3
// major.minor.patch

// Example: using different versions
require (
    github.com/pkg/errors v0.9.1      // Stable version
    github.com/newpkg/test v2.0.0+incompatible  // Incompatible v2
    github.com/experimental/pkg v0.0.0-20230101120000-abcdef123456 // Pseudo-version
)`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-4-1',
  title: 'Version Management',
  section: '8.4.1'
};
