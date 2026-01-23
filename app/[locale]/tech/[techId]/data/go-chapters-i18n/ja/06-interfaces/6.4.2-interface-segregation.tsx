import React from 'react';

interface Props {
  className?: string;
}

export default function インターフェース分離の原則({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">6.4.2 インターフェース分離の原則</h3>
      <p>クライアントは使用しないインターフェースに依存すべきではありません。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// Bad design: large and comprehensive interface
type BadWorker interface {
    Work()
    Eat()
    Sleep()
    GetSalary() float64
    TakeLeavе()
}

// Good design: segregated interfaces
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

// Concrete implementations
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

// Function that only needs work capability
func DoWork(w Worker) {
    w.Work()
}

// Function that needs employee information
func PaySalary(e Employee) {
    fmt.Printf("Paying %.2f\n", e.GetSalary())
}

func main() {
    robot := Robot{ID: "R2D2"}
    human := Human{Name: "Alice", Salary: 50000}

    // Both Robot and Human can work
    DoWork(robot)
    DoWork(human)

    // Only Human is an employee
    PaySalary(human)
    // PaySalary(robot)  // Compilation error
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '6-4-2',
  title: 'インターフェース分離の原則',
  section: '6.4.2'
};
