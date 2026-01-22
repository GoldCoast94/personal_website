import React from 'react';

interface Props {
  className?: string;
}

export default function GoHistory({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.1.1 History of Go Language</h3>
      <p>Go language (also known as Golang) was designed by Google starting in 2007 and officially released to the public in 2009. The main designers include:
- Robert Griesemer
- Rob Pike
- Ken Thompson</p>

      <p>Go was created to address the challenges of modern software development, particularly in the areas of concurrency, scalability, and ease of use.</p>

      <h4>Key Milestones</h4>
      <ul>
        <li><strong>2007</strong>: Design work begins at Google</li>
        <li><strong>November 2009</strong>: Go is announced as an open source project</li>
        <li><strong>March 2012</strong>: Go 1.0 is released with a stable API</li>
        <li><strong>Present</strong>: Go continues to evolve with regular releases</li>
      </ul>

      <h4>Design Philosophy</h4>
      <p>Go was designed with several key principles in mind:</p>
      <ul>
        <li><strong>Simplicity</strong>: Easy to learn and read</li>
        <li><strong>Efficiency</strong>: Fast compilation and execution</li>
        <li><strong>Safety</strong>: Strong typing and memory safety</li>
        <li><strong>Concurrency</strong>: Built-in support for concurrent programming</li>
      </ul>
    </div>
  );
}

export const metadata = {
  id: '1-1-1',
  title: 'History of Go Language',
  section: '1.1.1'
};
