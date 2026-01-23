import React from 'react';

interface Props {
  className?: string;
}

export default function Maingo({ className }: Props) {
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

    // 创建任务
    task1, err := service.CreateTask("学习Go语言", "完成Go语言教程")
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Printf("Created task: %+v\n", task1)

    task2, _ := service.CreateTask("写代码", "实现任务管理系统")
    task3, _ := service.CreateTask("测试", "测试所有功能")

    // 列出所有任务
    fmt.Println("\n所有任务:")
    for _, task := range service.ListTasks() {
        fmt.Printf("ID: %d, Title: %s, Status: %s\n",
            task.ID, task.Title, task.Status)
    }

    // 更新任务状态
    service.UpdateTaskStatus(task1.ID, models.StatusInProgress)
    service.UpdateTaskStatus(task2.ID, models.StatusCompleted)

    // 再次列出任务
    fmt.Println("\n更新后的任务:")
    for _, task := range service.ListTasks() {
        fmt.Printf("ID: %d, Title: %s, Status: %s\n",
            task.ID, task.Title, task.Status)
    }

    // 删除任务
    service.DeleteTask(task3.ID)

    fmt.Println("\n删除任务后:")
    for _, task := range service.ListTasks() {
        fmt.Printf("ID: %d, Title: %s, Status: %s\n",
            task.ID, task.Title, task.Status)
    }
}`}</code>
      </pre>
      <p>## 8.8 练习题</p>

    </div>
  );
}

export const metadata = {
  id: '8-7-5',
  title: 'main.go',
  section: '8.7.5'
};
