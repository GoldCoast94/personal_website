import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise1StudentManagementSystem({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 1: Student Management System</h3>

      <ul>
        <li>**Problem:** Create a student management system with the following features:</li>
        <li>Define <code>Student</code> struct, including: ID, name, age, grades (multiple subjects)</li>
        <li>Implement <code>NewStudent</code> constructor function</li>
        <li>Implement methods:</li>
        <li><code>AddScore(subject string, score float64)</code> - Add grade</li>
        <li><code>AverageScore() float64</code> - Calculate average score</li>
        <li><code>GetGrade() string</code> - Return grade level based on average (A/B/C/D/F)</li>
        <li>Implement <code>String()</code> method that returns student information</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 1: Student Management System',
  section: '0'
};
