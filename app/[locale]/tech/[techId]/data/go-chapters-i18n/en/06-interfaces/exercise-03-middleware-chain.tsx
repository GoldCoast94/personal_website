import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise03MiddlewareChain({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 3: Middleware Chain</h3>

      <ul>
        <li>**Task:** Implement HTTP middleware chain:</li>
        <li>Define <code>Handler</code> and <code>Middleware</code> interfaces</li>
        <li>Implement multiple middlewares: Logger, Auth, RateLimit, Recovery</li>
        <li>Implement middleware chain composition</li>
        <li>Create example HTTP request handling flow</li>
      </ul>

      <p>## 6.7 Exercise Answers</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 3: Middleware Chain',
  section: '0'
};
