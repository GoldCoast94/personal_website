import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise5QueryBuilder({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 5: Query Builder</h3>
      <p>Create a simple SQL query builder.</p>
      <p>## 13.10 Chapter Summary</p>
      <p>This chapter provided a comprehensive introduction to database programming in Go:</p>

      <ul>
        <li>**database/sql package**: Go standard library's database interface</li>
        <li>**CRUD operations**: Basic create, read, update, and delete operations</li>
        <li>**Transaction processing**: Ensuring data consistency</li>
        <li>**Connection pool**: Managing database connections</li>
        <li>**Prepared statements**: Improving performance and security</li>
        <li>**NULL value handling**: Dealing with nullable fields</li>
        <li>**Database migration**: Version control and schema evolution</li>
        <li>**Practical project**: Complete user management system</li>
      </ul>
      <p>Mastering database programming is fundamental to building practical applications.</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 5: Query Builder',
  section: '0'
};
