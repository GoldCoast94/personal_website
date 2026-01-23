import React from 'react';

interface Props {
  className?: string;
}

export default function MainGo({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">8.7.5 main.go</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "taskmanager/models"
    "taskmanager/services"
)

func main() {
    service := services.NewTaskService()

    // Create tasks
    task1, err := service.CreateTask("Learn Go", "Complete Go tutorial")
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Printf("Created task: %+v\n", task1)

    task2, _ := service.CreateTask("Write code", "Implement task management system")
    task3, _ := service.CreateTask("Test", "Test all features")

    // List all tasks
    fmt.Println("\nAll tasks:")
    for _, task := range service.ListTasks() {
        fmt.Printf("ID: %d, Title: %s, Status: %s\n",
            task.ID, task.Title, task.Status)
    }

    // Update task status
    service.UpdateTaskStatus(task1.ID, models.StatusInProgress)
    service.UpdateTaskStatus(task2.ID, models.StatusCompleted)

    // List tasks again
    fmt.Println("\nUpdated tasks:")
    for _, task := range service.ListTasks() {
        fmt.Printf("ID: %d, Title: %s, Status: %s\n",
            task.ID, task.Title, task.Status)
    }

    // Delete task
    service.DeleteTask(task3.ID)

    fmt.Println("\nAfter deleting task:")
    for _, task := range service.ListTasks() {
        fmt.Printf("ID: %d, Title: %s, Status: %s\n",
            task.ID, task.Title, task.Status)
    }
}`}</code>
      </pre>
      <p>## 8.8 Exercises</p>

    </div>
  );
}

export const metadata = {
  id: '8-7-5',
  title: 'main.go',
  section: '8.7.5'
};
