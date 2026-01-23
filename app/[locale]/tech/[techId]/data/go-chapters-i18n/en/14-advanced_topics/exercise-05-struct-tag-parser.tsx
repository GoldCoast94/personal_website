import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise2StructTagParser({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 2: Struct Tag Parser</h3>
      <p>Parse struct tags using reflection and perform validation.</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 2: Struct Tag Parser',
  section: '0'
};
