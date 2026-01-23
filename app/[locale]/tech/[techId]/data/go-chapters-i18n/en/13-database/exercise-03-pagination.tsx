import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise2Pagination({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 2: Pagination Query</h3>
      <p>Implement a generic pagination query functionality.</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 2: Pagination Query',
  section: '0'
};
