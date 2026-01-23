import React from 'react';

interface Props {
  className?: string;
}

export default function ExerciseCreateConfigPackage({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 2: Create Configuration Management Package</h3>
      <p>Create a config package that can read and parse configuration files (JSON or YAML format).</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 2: Create Configuration Management Package',
  section: '0'
};
