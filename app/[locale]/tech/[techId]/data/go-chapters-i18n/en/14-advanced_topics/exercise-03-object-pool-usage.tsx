import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise4ObjectPoolUsage({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 4: Object Pool Application</h3>
      <p>Implement an object pool for database connections.</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 4: Object Pool Application',
  section: '0'
};
