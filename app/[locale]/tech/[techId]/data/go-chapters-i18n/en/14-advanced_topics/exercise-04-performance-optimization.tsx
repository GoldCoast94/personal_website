import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise5PerformanceOptimization({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 5: Performance Optimization</h3>
      <p>Optimize a string processing program and compare performance using benchmarks.</p>
      <p>## 14.8 Exercise Answers</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 5: Performance Optimization',
  section: '0'
};
