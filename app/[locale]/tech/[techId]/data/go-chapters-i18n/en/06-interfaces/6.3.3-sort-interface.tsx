import React from 'react';

interface Props {
  className?: string;
}

export default function SortInterface({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">6.3.3 Sort Interface</h3>
      <p>Implementing sort.Interface allows you to customize sorting.</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "sort"
)

type Person struct {
    Name string
    Age  int
}

// Sort by age
type ByAge []Person

func (a ByAge) Len() int           { return len(a) }
func (a ByAge) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a ByAge) Less(i, j int) bool { return a[i].Age < a[j].Age }

// Sort by name
type ByName []Person

func (a ByName) Len() int           { return len(a) }
func (a ByName) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a ByName) Less(i, j int) bool { return a[i].Name < a[j].Name }

func main() {
    people := []Person{
        {"Bob", 31},
        {"John", 42},
        {"Michael", 17},
        {"Jenny", 26},
    }

    fmt.Println("Original:", people)

    // Sort by age
    sort.Sort(ByAge(people))
    fmt.Println("By age:", people)

    // Sort by name
    sort.Sort(ByName(people))
    fmt.Println("By name:", people)

    // Using sort.Slice (more concise)
    sort.Slice(people, func(i, j int) bool {
        return people[i].Age > people[j].Age  // descending
    })
    fmt.Println("By age (desc):", people)
}`}</code>
      </pre>

      <p>## 6.4 Interface Best Practices</p>

    </div>
  );
}

export const metadata = {
  id: '6-3-3',
  title: 'Sort Interface',
  section: '6.3.3'
};
