import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise05PanicRecovery({ className }: Props) {
  return (
    <div className={`section-content \${className || ''}`}>
      <h3 className="section-title">0 Exercise 4: panic Recovery</h3>
      <p>Write a web server middleware that catches panic and converts it to an HTTP 500 error.</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 4: panic Recovery',
  section: '0'
};
