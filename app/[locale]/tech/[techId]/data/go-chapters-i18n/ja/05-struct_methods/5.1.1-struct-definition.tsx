import React from 'react';

interface Props {
  className?: string;
}

export default function 構造体定義({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">5.1.1 構造体定義</h3>
      <p>構造体は、ゼロ個以上の任意の型の値を1つのエンティティに集約する集約データ型です。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// 構造体を定義
type Person struct {
    Name string
    Age  int
    City string
}

// ネストされた構造体
type Address struct {
    Street  string
    City    string
    ZipCode string
}

type Employee struct {
    Name    string
    Age     int
    Address Address  // ネストされた構造体
    Salary  float64
}

// 匿名フィールド（型がフィールド名）
type Manager struct {
    Person          // 匿名フィールド
    Department string
}

func main() {
    // 方法1：直接初期化
    p1 := Person{
        Name: "Alice",
        Age:  30,
        City: "Beijing",
    }
    fmt.Println(p1)

    // 方法2：順序による初期化（推奨されません）
    p2 := Person{"Bob", 25, "Shanghai"}
    fmt.Println(p2)

    // 方法3：部分初期化
    p3 := Person{Name: "Charlie"}
    fmt.Println(p3)  // 初期化されていないフィールドはゼロ値

    // ネストされた構造体
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

    // 匿名フィールド
    mgr := Manager{
        Person:     Person{Name: "Eve", Age: 40, City: "Guangzhou"},
        Department: "Engineering",
    }
    fmt.Println(mgr)
    fmt.Println(mgr.Name)  // 匿名フィールドのフィールドに直接アクセス可能
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '5-1-1',
  title: '構造体定義',
  section: '5.1.1'
};
