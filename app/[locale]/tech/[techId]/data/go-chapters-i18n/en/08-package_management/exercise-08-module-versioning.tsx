import React from 'react';

interface Props {
  className?: string;
}

export default function ExerciseModuleVersioning({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 4: Module Version Management</h3>
      <p>Create a project that uses go modules to manage dependencies, and try using the replace directive to replace a dependency.</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 4: Module Version Management',
  section: '0'
};
