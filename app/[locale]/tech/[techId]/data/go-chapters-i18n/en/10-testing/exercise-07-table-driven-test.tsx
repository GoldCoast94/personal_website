import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise2TableDrivenTest({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 2: Table-Driven Test</h3>
      <p>Verify a sorting function using table-driven tests.</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 2: Table-Driven Test',
  section: '0'
};
