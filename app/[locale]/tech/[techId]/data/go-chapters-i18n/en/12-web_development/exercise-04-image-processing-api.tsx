import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise5ImageProcessingAPI({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 5: Image Processing API</h3>
      <p>Implement image upload, resizing, and format conversion features.</p>
      <p>## 12.10 Chapter Summary</p>
      <p>This chapter introduced the fundamentals of web development in Go:</p>

      <ul>
        <li>**HTTP Server**: Creating and configuring HTTP servers</li>
        <li>**Request Handling**: Processing different types of HTTP requests</li>
        <li>**JSON API**: Building RESTful APIs</li>
        <li>**Routing and Middleware**: Organizing and enhancing request processing</li>
        <li>**File Operations**: Uploading and downloading files</li>
        <li>**Template Engine**: Rendering HTML pages</li>
        <li>**Session Management**: User sessions and authentication</li>
        <li>**Practical Project**: Complete RESTful API</li>
      </ul>
      <p>Go's standard library provides powerful web development capabilities for building high-performance web applications.</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 5: Image Processing API',
  section: '0'
};
