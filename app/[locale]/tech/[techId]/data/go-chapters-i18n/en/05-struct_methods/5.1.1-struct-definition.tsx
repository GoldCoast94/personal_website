import React from 'react';

interface Props {
  className?: string;
}

export default function StructDefinition({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">5.1.1 Struct Definition</h3>
      <p>A struct is an aggregate data type that aggregates zero or more values of any type into a single entity.</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// Define a struct
type Person struct {
    Name string
    Age  int
    City string
}

// Nested struct
type Address struct {
    Street  string
    City    string
    ZipCode string
}

type Employee struct {
    Name    string
    Age     int
    Address Address  // Nested struct
    Salary  float64
}

// Anonymous fields (type is the field name)
type Manager struct {
    Person          // Anonymous field
    Department string
}

func main() {
    // Method 1: Direct initialization
    p1 := Person{
        Name: "Alice",
        Age:  30,
        City: "Beijing",
    }
    fmt.Println(p1)

    // Method 2: Initialize by order (not recommended)
    p2 := Person{"Bob", 25, "Shanghai"}
    fmt.Println(p2)

    // Method 3: Partial initialization
    p3 := Person{Name: "Charlie"}
    fmt.Println(p3)  // Uninitialized fields have zero values

    // Nested struct
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

    // Anonymous fields
    mgr := Manager{
        Person:     Person{Name: "Eve", Age: 40, City: "Guangzhou"},
        Department: "Engineering",
    }
    fmt.Println(mgr)
    fmt.Println(mgr.Name)  // Can directly access fields of anonymous field
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '5-1-1',
  title: 'Struct Definition',
  section: '5.1.1'
};
