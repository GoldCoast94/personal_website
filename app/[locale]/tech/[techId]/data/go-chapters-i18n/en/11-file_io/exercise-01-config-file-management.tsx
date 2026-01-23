import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise01ConfigFileManagement({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">Exercise 3: Configuration File Management</h3>
      <p>Create a configuration file manager that supports reading, modifying, and saving configurations.</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 3: Configuration File Management',
  section: '0'
};
