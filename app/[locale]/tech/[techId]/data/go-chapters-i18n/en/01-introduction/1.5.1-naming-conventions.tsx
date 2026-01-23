import React from 'react';

interface Props {
  className?: string;
}

export default function NamingConventions({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.5.1 Naming Conventions</h3>

      <pre className="code-block">
        <code className="language-go">{`// Package names: lowercase, short, meaningful
package user

// Variable names: camelCase
var userName string
var userAge int

// Constant names: camelCase or UPPER_CASE
const MaxSize = 100
const MAX_SIZE = 100

// Function names: camelCase, uppercase first letter means exported
func GetUserName() string { }  // Exported
func calculateAge() int { }     // Private

// Type names: camelCase
type UserInfo struct { }

// Interface names: end with 'er'
type Reader interface { }
type Writer interface { }`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '1-5-1',
  title: 'Naming Conventions',
  section: '1.5.1'
};
