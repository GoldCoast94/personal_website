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

    // タスクを作成
    task1, err := service.CreateTask("Go言語を学ぶ", "Go言語チュートリアルを完了する")
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Printf("Created task: %+v\n", task1)

    task2, _ := service.CreateTask("コードを書く", "タスク管理システムを実装する")
    task3, _ := service.CreateTask("テスト", "すべての機能をテストする")

    // すべてのタスクをリスト
    fmt.Println("\nすべてのタスク:")
    for _, task := range service.ListTasks() {
        fmt.Printf("ID: %d, Title: %s, Status: %s\n",
            task.ID, task.Title, task.Status)
    }

    // タスクのステータスを更新
    service.UpdateTaskStatus(task1.ID, models.StatusInProgress)
    service.UpdateTaskStatus(task2.ID, models.StatusCompleted)

    // 再度タスクをリスト
    fmt.Println("\n更新後のタスク:")
    for _, task := range service.ListTasks() {
        fmt.Printf("ID: %d, Title: %s, Status: %s\n",
            task.ID, task.Title, task.Status)
    }

    // タスクを削除
    service.DeleteTask(task3.ID)

    fmt.Println("\nタスク削除後:")
    for _, task := range service.ListTasks() {
        fmt.Printf("ID: %d, Title: %s, Status: %s\n",
            task.ID, task.Title, task.Status)
    }
}`}</code>
      </pre>
      <p>## 8.8 練習問題</p>

    </div>
  );
}

export const metadata = {
  id: '8-7-5',
  title: 'main.go',
  section: '8.7.5'
};
