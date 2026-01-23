import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise04FileSearchTool({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">Exercise 4: File Search Tool</h3>
      <p>Implement a file search tool that supports searching by name, size, and modification time.</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 4: File Search Tool',
  section: '0'
};
