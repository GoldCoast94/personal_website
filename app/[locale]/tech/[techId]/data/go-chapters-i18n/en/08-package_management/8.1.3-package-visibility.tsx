import React from 'react';

interface Props {
  className?: string;
}

export default function PackageVisibility({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.1.3 Package Visibility</h3>

      <pre className="code-block">
        <code className="language-go">{`package calculator

// Exported (public) - starts with uppercase
func Add(a, b int) int {
    return a + b
}

// Unexported (private) - starts with lowercase
func multiply(a, b int) int {
    return a * b
}

// Exported constant
const MaxValue = 100

// Unexported constant
const minValue = 0

// Exported type
type Calculator struct {
    Name string        // Exported field
    version string     // Unexported field
}`}</code>
      </pre>
      <p>## 8.2 Creating and Using Custom Packages</p>

    </div>
  );
}

export const metadata = {
  id: '8-1-3',
  title: 'Package Visibility',
  section: '8.1.3'
};
