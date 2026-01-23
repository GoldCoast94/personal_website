import React from 'react';

interface Props {
  className?: string;
}

export default function DataModelModelstodogo({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">15.1.4 Data Model (models/todo.go)</h3>

      <pre className="code-block">
        <code className="language-go">{`package models

import "time"

type Todo struct {
    ID          int       <code>json:"id"</code>
    UserID      int       <code>json:"user_id"</code>
    Title       string    <code>json:"title"</code>
    Description string    <code>json:"description"</code>
    Completed   bool      <code>json:"completed"</code>
    CreatedAt   time.Time <code>json:"created_at"</code>
    UpdatedAt   time.Time <code>json:"updated_at"</code>
}

type CreateTodoRequest struct {
    Title       string <code>json:"title"</code>
    Description string <code>json:"description"</code>
}

type UpdateTodoRequest struct {
    Title       *string <code>json:"title,omitempty"</code>
    Description *string <code>json:"description,omitempty"</code>
    Completed   *bool   <code>json:"completed,omitempty"</code>
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '15-1-4',
  title: 'Data Model (models/todo.go)',
  section: '15.1.4'
};
