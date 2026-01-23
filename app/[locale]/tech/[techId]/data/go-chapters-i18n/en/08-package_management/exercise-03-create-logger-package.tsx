import React from 'react';

interface Props {
  className?: string;
}

export default function ExerciseCreateLoggerPackage({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 3: Create Logger Package</h3>
      <p>Create a custom logger package that supports different log levels (DEBUG, INFO, WARN, ERROR).</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 3: Create Logger Package',
  section: '0'
};
