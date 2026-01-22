import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise5HttpMiddleware({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 5: HTTP Middleware</h3>

      <ul>
        <li>**Problem:** Implement a simple HTTP middleware system:</li>
        <li>Define middleware type: <code>type Middleware func(HandlerFunc) HandlerFunc</code></li>
        <li>Define handler function type: <code>type HandlerFunc func(string) string</code></li>
        <li>Implement logging middleware</li>
        <li>Implement authentication middleware</li>
        <li>Chain multiple middleware together</li>
      </ul>
      <p>## 4.6 Exercise Answers</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 5: HTTP Middleware',
  section: '0'
};
