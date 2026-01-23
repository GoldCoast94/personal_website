import React from 'react';

interface Props {
  className?: string;
}

export default function OperatorPrecedence({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">2.4.6 Operator Precedence</h3>

      <pre className="code-block">
        <code className="language-go">{`Precedence (from highest to lowest):
1. ()                    Parentheses
2. ++, --               Increment, Decrement
3. *, /, %, <<, >>, &, &^  Multiplication, Division, Bitwise operations
4. +, -, |, ^           Addition, Subtraction, Bitwise OR, Bitwise XOR
5. ==, !=, <, <=, >, >=  Relational operators
6. &&                   Logical AND
7. ||                   Logical OR`}</code>
      </pre>
      <p>## 2.5 Control Flow</p>

    </div>
  );
}

export const metadata = {
  id: '2-4-6',
  title: 'Operator Precedence',
  section: '2.4.6'
};
