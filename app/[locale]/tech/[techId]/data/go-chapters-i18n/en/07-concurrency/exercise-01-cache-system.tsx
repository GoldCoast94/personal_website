import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise1CacheSystem({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 1: Cache System</h3>

      <ul>
        <li>**Problem:** Implement a concurrency-safe cache system:</li>
        <li>Support Get, Set, Delete operations</li>
        <li>Implement TTL (Time To Live)</li>
        <li>Periodically clean expired data</li>
        <li>Use read-write locks to optimize performance</li>
        <li>Implement cache statistics (hit rate)</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 1: Cache System',
  section: '0'
};
