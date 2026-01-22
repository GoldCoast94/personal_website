import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise3FunctionalProgramming({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 3: Functional Programming</h3>

      <ul>
        <li>**Problem:** Implement the following higher-order functions:</li>
        <li><code>Map(slice []int, fn func(int) int) []int</code> - mapping</li>
        <li><code>Filter(slice []int, fn func(int) bool) []int</code> - filtering</li>
        <li><code>Reduce(slice []int, initial int, fn func(int, int) int) int</code> - reduction</li>
        <li>Use these functions to: multiply all even numbers in a slice by 2 and sum them</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 3: Functional Programming',
  section: '0'
};
