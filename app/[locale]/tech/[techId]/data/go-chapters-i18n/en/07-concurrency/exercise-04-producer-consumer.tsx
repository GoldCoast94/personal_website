import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise4ProducerConsumer({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 4: Producer-Consumer</h3>

      <ul>
        <li>**Problem:** Implement the producer-consumer pattern:</li>
        <li>Multiple producers generate random numbers</li>
        <li>Multiple consumers process data (calculate square)</li>
        <li>Use buffered channel as queue</li>
        <li>Implement graceful shutdown</li>
        <li>Count total processed data</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 4: Producer-Consumer',
  section: '0'
};
