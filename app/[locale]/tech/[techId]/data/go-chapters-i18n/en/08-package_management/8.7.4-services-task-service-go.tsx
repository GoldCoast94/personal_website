import React from 'react';

interface Props {
  className?: string;
}

export default function ServicesTaskServiceGo({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.7.4 services/taskservice.go</h3>

      <pre className="code-block">
        <code className="language-go">{`package services

import (
    "errors"
    "taskmanager/models"
    "taskmanager/utils"
)

type TaskService struct {
    tasks  map[int]*models.Task
    nextID int
}

func NewTaskService() *TaskService {
    return &TaskService{
        tasks:  make(map[int]*models.Task),
        nextID: 1,
    }
}

func (s *TaskService) CreateTask(title, description string) (*models.Task, error) {
    if err := utils.ValidateTaskTitle(title); err != nil {
        return nil, err
    }
    if err := utils.ValidateTaskDescription(description); err != nil {
        return nil, err
    }

    task := models.NewTask(title, description)
    task.ID = s.nextID
    s.nextID++
    s.tasks[task.ID] = task
    return task, nil
}

func (s *TaskService) GetTask(id int) (*models.Task, error) {
    task, exists := s.tasks[id]
    if !exists {
        return nil, errors.New("task not found")
    }
    return task, nil
}

func (s *TaskService) ListTasks() []*models.Task {
    tasks := make([]*models.Task, 0, len(s.tasks))
    for _, task := range s.tasks {
        tasks = append(tasks, task)
    }
    return tasks
}

func (s *TaskService) UpdateTaskStatus(id int, status models.TaskStatus) error {
    task, err := s.GetTask(id)
    if err != nil {
        return err
    }

    switch status {
    case models.StatusInProgress:
        task.Start()
    case models.StatusCompleted:
        task.Complete()
    default:
        return errors.New("invalid status")
    }
    return nil
}

func (s *TaskService) DeleteTask(id int) error {
    if _, exists := s.tasks[id]; !exists {
        return errors.New("task not found")
    }
    delete(s.tasks, id)
    return nil
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '8-7-4',
  title: 'services/taskservice.go',
  section: '8.7.4'
};
