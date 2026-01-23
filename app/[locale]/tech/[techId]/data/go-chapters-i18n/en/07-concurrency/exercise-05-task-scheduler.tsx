import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise5TaskScheduler({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 5: Task Scheduler</h3>

      <ul>
        <li>**Problem:** Implement a simple task scheduler:</li>
        <li>Support adding scheduled tasks</li>
        <li>Use goroutine pool to execute tasks</li>
        <li>Support task cancellation</li>
        <li>Implement task priority</li>
        <li>Record task execution history</li>
      </ul>
      <p>## 7.7 Exercise Answers</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 5: Task Scheduler',
  section: '0'
};
