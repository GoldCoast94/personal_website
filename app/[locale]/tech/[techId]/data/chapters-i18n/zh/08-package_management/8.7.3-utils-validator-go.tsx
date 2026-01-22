import React from 'react';

interface Props {
  className?: string;
}

export default function Utilsvalidatorgo({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.7.3 utils/validator.go</h3>

      <pre className="code-block">
        <code className="language-go">{`package utils

import "errors"

func ValidateTaskTitle(title string) error {
    if title == "" {
        return errors.New("task title cannot be empty")
    }
    if len(title) > 100 {
        return errors.New("task title too long")
    }
    return nil
}

func ValidateTaskDescription(description string) error {
    if len(description) > 500 {
        return errors.New("task description too long")
    }
    return nil
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-7-3',
  title: 'utils/validator.go',
  section: '8.7.3'
};
