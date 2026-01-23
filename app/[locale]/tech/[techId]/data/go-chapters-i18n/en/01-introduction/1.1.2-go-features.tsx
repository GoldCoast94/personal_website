import React from 'react';

interface Props {
  className?: string;
}

export default function GoFeatures({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.1.2 Features of Go Language</h3>

      <ul>
        <li>**Simplicity**: Simple syntax with only 25 keywords</li>
        <li>**Concurrency**: Native support for concurrent programming (goroutines and channels)</li>
        <li>**High Performance**: Compiled language with execution efficiency close to C</li>
        <li>**Garbage Collection**: Automatic memory management</li>
        <li>**Static Typing**: Compile-time type checking</li>
        <li>**Fast Compilation**: Extremely fast compilation speed</li>
        <li>**Cross-Platform**: Support for multiple operating systems and architectures</li>
        <li>**Rich Standard Library**: Comprehensive standard library</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '1-1-2',
  title: 'Features of Go Language',
  section: '1.1.2'
};
