import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise3ConcurrentDownloader({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 3: Concurrent Downloader</h3>

      <ul>
        <li>**Problem:** Implement a concurrent file downloader:</li>
        <li>Create a <code>Downloader</code> struct</li>
        <li>Implement <code>Download(urls []string, maxConcurrent int)</code> method</li>
        <li>Use worker pool pattern to limit concurrency</li>
        <li>Return download results (success/failure) and time taken</li>
        <li>Implement timeout control</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 3: Concurrent Downloader',
  section: '0'
};
