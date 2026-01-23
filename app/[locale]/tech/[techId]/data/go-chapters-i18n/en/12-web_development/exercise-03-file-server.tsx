import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise2FileServer({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 2: File Server</h3>
      <p>Implement a file browsing and download server.</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 2: File Server',
  section: '0'
};
