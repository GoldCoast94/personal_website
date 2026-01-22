import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise2HelloWorldVariants({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 2: Hello World Variants</h3>

      <ul>
        <li>**Question:** Modify the Hello World program to implement the following features:</li>
        <li>Output "Welcome to learning Go!"</li>
        <li>Output the current date and time</li>
        <li>Output Go version information (Hint: use the runtime package)</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 2: Hello World Variants',
  section: '0'
};
