import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise2StringProcessingFunctions({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 2: String Processing Functions</h3>

      <ul>
        <li>**Problem:** Implement the following string processing functions:</li>
        <li><code>Reverse(s string) string</code> - reverse a string</li>
        <li><code>IsPalindrome(s string) bool</code> - check if it's a palindrome</li>
        <li><code>WordCount(s string) map[string]int</code> - count word occurrences</li>
        <li><code>RemoveSpaces(s string) string</code> - remove all spaces</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 2: String Processing Functions',
  section: '0'
};
