import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise4Benchmark({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 4: Benchmark</h3>
      <p>Compare the performance of different string concatenation methods.</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 4: Benchmark',
  section: '0'
};
