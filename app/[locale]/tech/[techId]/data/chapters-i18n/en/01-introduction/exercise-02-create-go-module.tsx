import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise3CreateGoModule({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 3: Create Go Module</h3>

      <ul>
        <li>**Question:** Create a Go module named "calculator" with a main.go file.</li>
      </ul>

      <ul>
        <li>**Requirements:**</li>
        <li>Initialize the module using go mod init</li>
        <li>Output "Calculator v1.0" in main.go</li>
        <li>Compile and run the program</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 3: Create Go Module',
  section: '0'
};
