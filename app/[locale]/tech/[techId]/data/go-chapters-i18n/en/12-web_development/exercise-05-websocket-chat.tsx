import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise4WebSocketChat({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 4: WebSocket Chat</h3>
      <p>Create a real-time chat application.</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 4: WebSocket Chat',
  section: '0'
};
