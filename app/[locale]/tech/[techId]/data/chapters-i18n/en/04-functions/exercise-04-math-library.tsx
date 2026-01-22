import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise1MathLibrary({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 1: Implement Math Function Library</h3>

      <ul>
        <li>**Problem:** Create a math function library implementing the following features:</li>
        <li><code>Max(nums ...int) int</code> - returns the maximum value</li>
        <li><code>Min(nums ...int) int</code> - returns the minimum value</li>
        <li><code>Average(nums ...int) float64</code> - returns the average value</li>
        <li><code>Sum(nums ...int) int</code> - returns the sum</li>
        <li>Handle empty parameter cases</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 1: Implement Math Function Library',
  section: '0'
};
