import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise01DatabaseAbstraction({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 1: Database Abstraction</h3>

      <ul>
        <li>**Task:** Create a database abstraction layer:</li>
        <li>Define <code>Database</code> interface: Connect, Close, Query, Execute</li>
        <li>Implement <code>MockDB</code> for testing</li>
        <li>Implement <code>UserRepository</code> that depends on <code>Database</code> interface</li>
        <li>Demonstrate dependency injection and testing</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 1: Database Abstraction',
  section: '0'
};
