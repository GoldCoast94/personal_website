import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise3MockTest({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 3: Mock Test</h3>
      <p>Create a filesystem interface and test it using mocks.</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 3: Mock Test',
  section: '0'
};
