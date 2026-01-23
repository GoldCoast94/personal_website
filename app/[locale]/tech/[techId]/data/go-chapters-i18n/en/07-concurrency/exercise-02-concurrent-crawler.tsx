import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise2ConcurrentCrawler({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 2: Concurrent Crawler</h3>

      <ul>
        <li>**Problem:** Implement a simple concurrent crawler:</li>
        <li>Given a list of URLs</li>
        <li>Concurrently crawl each URL (simulated)</li>
        <li>Implement URL deduplication</li>
        <li>Limit maximum concurrency</li>
        <li>Collect crawling results</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 2: Concurrent Crawler',
  section: '0'
};
