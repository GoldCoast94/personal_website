import React from 'react';

interface Props {
  className?: string;
}

export default function TestFileNaming({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">10.1.1 Test File Naming</h3>
      <p>Go test files must end with <code>_test.go</code>:</p>

      <pre className="code-block">
        <code className="language-go">{`calculator.go       # Source code
calculator_test.go  # Test code`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '10-1-1',
  title: 'Test File Naming',
  section: '10.1.1'
};
