import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise5LinkedListImplementation({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 5: Linked List Implementation</h3>

      <ul>
        <li>**Problem:** Implement a singly linked list:</li>
        <li>Define <code>Node</code> struct, including: value, next node pointer</li>
        <li>Define <code>LinkedList</code> struct and methods:</li>
        <li><code>Append(value int)</code> - Add node at the end</li>
        <li><code>Prepend(value int)</code> - Add node at the beginning</li>
        <li><code>Delete(value int)</code> - Delete node with specified value</li>
        <li><code>Find(value int) bool</code> - Find node</li>
        <li><code>Length() int</code> - Return length</li>
        <li><code>Print()</code> - Print linked list</li>
      </ul>
      <p>## 5.7 Exercise Answers</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 5: Linked List Implementation',
  section: '0'
};
