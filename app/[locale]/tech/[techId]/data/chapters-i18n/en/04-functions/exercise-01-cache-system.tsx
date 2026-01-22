import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise4CacheSystem({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 4: Cache System</h3>

      <ul>
        <li>**Problem:** Implement a simple cache system using closures:</li>
        <li>Create a cache function that memoizes expensive computation results</li>
        <li>Implement <code>MakeCache(fn func(int) int) func(int) int</code></li>
        <li>Test: Use a recursive Fibonacci function</li>
        <li>Compare performance differences before and after caching</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 4: Cache System',
  section: '0'
};
