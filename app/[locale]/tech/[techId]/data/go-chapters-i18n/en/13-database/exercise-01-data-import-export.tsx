import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise4DataImportExport({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 4: Data Import and Export</h3>
      <p>Implement CSV data import to database and export from database to CSV.</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 4: Data Import and Export',
  section: '0'
};
