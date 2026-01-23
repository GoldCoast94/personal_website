import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise1BlogSystem({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 1: Blog System</h3>
      <p>Create a simple blog API that supports CRUD operations for articles.</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 1: Blog System',
  section: '0'
};
