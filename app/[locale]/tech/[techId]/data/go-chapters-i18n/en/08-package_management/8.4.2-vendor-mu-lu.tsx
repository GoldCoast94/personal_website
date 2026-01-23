import React from 'react';

interface Props {
  className?: string;
}

export default function VendorDirectory({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.4.2 vendor Directory</h3>

      <pre className="code-block">
        <code className="language-bash">{`# Create vendor directory
go mod vendor

# Build using vendor directory
go build -mod=vendor`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-4-2',
  title: 'vendor Directory',
  section: '8.4.2'
};
