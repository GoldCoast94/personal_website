import React from 'react';

interface Props {
  className?: string;
}

export default function ExerciseExtendTaskManager({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 5: Extend Task Management System</h3>
      <p>Add the following to the task management system:
- Task priority
- Task tags
- Task search functionality
- Data persistence (save to file)</p>
      <p>## 8.9 Exercise Answers</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 5: Extend Task Management System',
  section: '0'
};
