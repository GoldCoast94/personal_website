import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise3AuthSystem({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 3: Authentication System</h3>
      <p>Implement user registration, login, and JWT authentication.</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 3: Authentication System',
  section: '0'
};
