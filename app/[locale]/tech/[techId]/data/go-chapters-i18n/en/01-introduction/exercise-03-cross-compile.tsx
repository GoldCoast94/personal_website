import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise5CrossCompile({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 5: Cross Compilation</h3>

      <ul>
        <li>**Question:** Write a simple Go program and compile it for different platforms.</li>
      </ul>

      <ul>
        <li>**Requirements:**</li>
        <li>Write a program that outputs "Hello from [operating system]"</li>
        <li>Use runtime.GOOS to get the operating system information</li>
        <li>Compile for Linux, Windows, and macOS versions</li>
      </ul>
      <p>## 1.7 Exercise Answers</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 5: Cross Compilation',
  section: '0'
};
