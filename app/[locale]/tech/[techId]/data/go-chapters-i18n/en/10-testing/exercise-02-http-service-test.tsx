import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise5HttpServiceTest({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 5: HTTP Service Test</h3>
      <p>Create a REST API and write a complete test suite.</p>
      <p>## 10.11 Exercise Solutions</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 5: HTTP Service Test',
  section: '0'
};
