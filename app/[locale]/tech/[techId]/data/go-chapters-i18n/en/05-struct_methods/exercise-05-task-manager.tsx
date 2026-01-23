import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise4TaskManager({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 4: Task Manager</h3>

      <ul>
        <li>**Problem:** Implement a task manager:</li>
        <li>Define <code>Task</code> struct, including: ID, title, description, status, priority, creation time</li>
        <li>Define <code>TaskStatus</code> type (Pending/InProgress/Completed)</li>
        <li>Define <code>Priority</code> type (Low/Medium/High)</li>
        <li>Implement <code>TaskManager</code> struct and methods:</li>
        <li><code>AddTask(title, desc string, priority Priority)</code> - Add task</li>
        <li><code>UpdateStatus(id int, status TaskStatus)</code> - Update status</li>
        <li><code>ListTasks(filter TaskStatus)</code> - List tasks with specified status</li>
        <li><code>DeleteTask(id int)</code> - Delete task</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 4: Task Manager',
  section: '0'
};
