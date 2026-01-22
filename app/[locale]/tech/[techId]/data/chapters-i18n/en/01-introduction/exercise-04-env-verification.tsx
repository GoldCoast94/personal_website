import React from 'react';

interface Props {
  className?: string;
}

export default function Exercise1EnvVerification({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Exercise 1: Environment Verification</h3>

      <ul>
        <li>**Question:** Verify that the Go environment is properly installed and output Go version information.</li>
      </ul>

      <ul>
        <li>**Requirements:**</li>
        <li>Check the Go version using the command line</li>
        <li>Check the GOPATH and GOROOT environment variables</li>
        <li>Check the Go proxy settings</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Exercise 1: Environment Verification',
  section: '0'
};
