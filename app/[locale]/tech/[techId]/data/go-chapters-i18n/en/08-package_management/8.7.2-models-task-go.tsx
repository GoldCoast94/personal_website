import React from 'react';

interface Props {
  className?: string;
}

export default function ModelsTaskGo({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.7.2 models/task.go</h3>

      <pre className="code-block">
        <code className="language-go">{`package models

import "time"

type TaskStatus string

const (
    StatusPending    TaskStatus = "pending"
    StatusInProgress TaskStatus = "in_progress"
    StatusCompleted  TaskStatus = "completed"
)

type Task struct {
    ID          int
    Title       string
    Description string
    Status      TaskStatus
    CreatedAt   time.Time
    UpdatedAt   time.Time
}

func NewTask(title, description string) *Task {
    return &Task{
        Title:       title,
        Description: description,
        Status:      StatusPending,
        CreatedAt:   time.Now(),
        UpdatedAt:   time.Now(),
    }
}

func (t *Task) Complete() {
    t.Status = StatusCompleted
    t.UpdatedAt = time.Now()
}

func (t *Task) Start() {
    t.Status = StatusInProgress
    t.UpdatedAt = time.Now()
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-7-2',
  title: 'models/task.go',
  section: '8.7.2'
};
