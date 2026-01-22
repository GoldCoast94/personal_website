import React from 'react';

interface Props {
  className?: string;
}

export default function 接口隔离原则({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">6.4.2 接口隔离原则</h3>
      <p>客户端不应该依赖它不需要的接口。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// 不好的设计：大而全的接口
type BadWorker interface {
    Work()
    Eat()
    Sleep()
    GetSalary() float64
    TakeLeavе()
}

// 好的设计：分离的接口
type Worker interface {
    Work()
}

type Eater interface {
    Eat()
}

type Sleeper interface {
    Sleep()
}

type Employee interface {
    Worker
    GetSalary() float64
}

// 具体实现
type Robot struct {
    ID string
}

func (r Robot) Work() {
    fmt.Printf("Robot %s is working\n", r.ID)
}

type Human struct {
    Name   string
    Salary float64
}

func (h Human) Work() {
    fmt.Printf("%s is working\n", h.Name)
}

func (h Human) Eat() {
    fmt.Printf("%s is eating\n", h.Name)
}

func (h Human) Sleep() {
    fmt.Printf("%s is sleeping\n", h.Name)
}

func (h Human) GetSalary() float64 {
    return h.Salary
}

// 只需要工作能力的函数
func DoWork(w Worker) {
    w.Work()
}

// 需要员工信息的函数
func PaySalary(e Employee) {
    fmt.Printf("Paying %.2f\n", e.GetSalary())
}

func main() {
    robot := Robot{ID: "R2D2"}
    human := Human{Name: "Alice", Salary: 50000}

    // Robot和Human都可以工作
    DoWork(robot)
    DoWork(human)

    // 只有Human是员工
    PaySalary(human)
    // PaySalary(robot)  // 编译错误
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '6-4-2',
  title: '接口隔离原则',
  section: '6.4.2'
};
