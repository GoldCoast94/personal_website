import React from 'react';

interface Props {
  className?: string;
}

export default function PackageNaming({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.1.2 Package Naming Rules</h3>

      <pre className="code-block">
        <code className="language-go">{`// Good package name examples
package user       // short and clear
package http       // descriptive
package strings    // plural form (when appropriate)

// Package names to avoid
package my_package // don't use underscores
package MyPackage  // don't use uppercase
package util       // too generic`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-1-2',
  title: 'Package Naming Rules',
  section: '8.1.2'
};
