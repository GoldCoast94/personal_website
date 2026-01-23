import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise03DirectorySync({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">Exercise 2: Directory Synchronization</h3>
      <p>Write a program that synchronizes the contents of two directories.</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 2: Directory Synchronization',
  section: '0'
};
