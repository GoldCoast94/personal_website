import React from 'react';

interface Props {
  className?: string;
}

export default function 结构体定义({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">5.1.1 结构体定义</h3>
      <p>结构体是一种聚合数据类型，将零个或多个任意类型的值聚合成一个实体。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// 定义结构体
type Person struct {
    Name string
    Age  int
    City string
}

// 嵌套结构体
type Address struct {
    Street  string
    City    string
    ZipCode string
}

type Employee struct {
    Name    string
    Age     int
    Address Address  // 嵌套结构体
    Salary  float64
}

// 匿名字段（类型即为字段名）
type Manager struct {
    Person          // 匿名字段
    Department string
}

func main() {
    // 方式1：直接初始化
    p1 := Person{
        Name: "Alice",
        Age:  30,
        City: "Beijing",
    }
    fmt.Println(p1)

    // 方式2：按顺序初始化（不推荐）
    p2 := Person{"Bob", 25, "Shanghai"}
    fmt.Println(p2)

    // 方式3：部分初始化
    p3 := Person{Name: "Charlie"}
    fmt.Println(p3)  // 未初始化的字段为零值

    // 嵌套结构体
    emp := Employee{
        Name: "David",
        Age:  35,
        Address: Address{
            Street:  "123 Main St",
            City:    "Shenzhen",
            ZipCode: "518000",
        },
        Salary: 10000,
    }
    fmt.Println(emp)
    fmt.Println(emp.Address.City)

    // 匿名字段
    mgr := Manager{
        Person:     Person{Name: "Eve", Age: 40, City: "Guangzhou"},
        Department: "Engineering",
    }
    fmt.Println(mgr)
    fmt.Println(mgr.Name)  // 可以直接访问匿名字段的字段
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '5-1-1',
  title: '结构体定义',
  section: '5.1.1'
};
