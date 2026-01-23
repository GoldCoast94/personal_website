import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise3ContextPropagation({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 3: Context Propagation</h3>
      <p>Implement an HTTP middleware that uses context to pass request IDs.</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 3: Context Propagation',
  section: '0'
};
