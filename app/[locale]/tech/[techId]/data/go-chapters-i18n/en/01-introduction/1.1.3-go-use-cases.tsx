import React from 'react';

interface Props {
  className?: string;
}

export default function GoUseCases({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.1.3 Go Language Use Cases</h3>

      <ul>
        <li>Server-side development</li>
        <li>Cloud computing and microservices</li>
        <li>Network programming</li>
        <li>Distributed systems</li>
        <li>Blockchain development</li>
        <li>DevOps tools</li>
        <li>Command-line tools</li>
      </ul>
      <p>## 1.2 Environment Setup</p>

    </div>
  );
}

export const metadata = {
  id: '1-1-3',
  title: 'Go Language Use Cases',
  section: '1.1.3'
};
