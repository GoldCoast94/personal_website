import React from 'react';

interface Props {
  className?: string;
}

export default function ErrorInterface({ className }: Props) {
  return (
    <div className={`section-content \${className || ''}`}>
      <h3 className="section-title">9.1.1 error Interface</h3>
      <p>Go uses the error interface to represent errors:</p>

      <pre className="code-block">
        <code className="language-go">{`type error interface {
    Error() string
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '9-1-1',
  title: 'error Interface',
  section: '9.1.1'
};
