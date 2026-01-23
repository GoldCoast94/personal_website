import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise1LibraryManagement({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 1: Library Management System</h3>
      <p>Create database operations for a library management system, including CRUD for books, authors, and categories.</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 1: Library Management System',
  section: '0'
};
