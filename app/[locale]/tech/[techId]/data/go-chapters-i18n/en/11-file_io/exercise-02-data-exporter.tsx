import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise02DataExporter({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">Exercise 5: Data Exporter</h3>
      <p>Create a program that exports data in CSV and JSON formats.</p>
      <p>## 11.11 Exercise Solutions</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 5: Data Exporter',
  section: '0'
};
