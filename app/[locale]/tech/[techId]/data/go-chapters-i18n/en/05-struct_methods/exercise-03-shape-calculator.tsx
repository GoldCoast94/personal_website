import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise3ShapeCalculator({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 3: Shape Calculator</h3>

      <ul>
        <li>**Problem:** Create a shape calculator:</li>
        <li>Define <code>Shape</code> interface, including <code>Area()</code> and <code>Perimeter()</code> methods</li>
        <li>Implement multiple shapes: Circle, Rectangle, Triangle, Square</li>
        <li>Implement <code>ShapeCollection</code> struct:</li>
        <li><code>Add(shape Shape)</code> - Add shape</li>
        <li><code>TotalArea() float64</code> - Calculate total area of all shapes</li>
        <li><code>AverageArea() float64</code> - Calculate average area</li>
        <li><code>Largest() Shape</code> - Return shape with largest area</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 3: Shape Calculator',
  section: '0'
};
