import React from 'react';

interface Props {
  className?: string;
}

export default function CommentConventions({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.5.2 Comment Conventions</h3>

      <pre className="code-block">
        <code className="language-go">{`// Single-line comments use //

/*
Multi-line comments use
/* ... */
*/

// Package comment: before package statement
// Package user provides user management functions.
package user

// Function comment: describes function purpose
// GetUserName returns the name of the user.
func GetUserName() string {
    return ""
}

// Type comment
// User represents a system user.
type User struct {
    Name string // Field comment
    Age  int
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '1-5-2',
  title: 'Comment Conventions',
  section: '1.5.2'
};
