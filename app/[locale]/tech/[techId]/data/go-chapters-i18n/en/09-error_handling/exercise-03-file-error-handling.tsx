import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise03FileErrorHandling({ className }: Props) {
  return (
    <div className={`section-content \${className || ''}`}>
      <h3 className="section-title">0 Exercise 1: File Operation Error Handling</h3>
      <p>Write a function that reads file content and handles various possible errors (file not found, permission denied, etc.).</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 1: File Operation Error Handling',
  section: '0'
};
