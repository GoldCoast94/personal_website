import React from 'react';

interface Props {
  className?: string;
}

export default function Sort接口({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">6.3.3 Sort接口</h3>
      <p>实现sort.Interface可以自定义排序。</p>

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

// 按年龄排序
type ByAge []Person

func (a ByAge) Len() int           { return len(a) }
func (a ByAge) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a ByAge) Less(i, j int) bool { return a[i].Age < a[j].Age }

// 按姓名排序
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

    // 按年龄排序
    sort.Sort(ByAge(people))
    fmt.Println("By age:", people)

    // 按姓名排序
    sort.Sort(ByName(people))
    fmt.Println("By name:", people)

    // 使用sort.Slice（更简洁）
    sort.Slice(people, func(i, j int) bool {
        return people[i].Age > people[j].Age  // 降序
    })
    fmt.Println("By age (desc):", people)
}`}</code>
      </pre>
      <p>## 6.4 接口最佳实践</p>

    </div>
  );
}

export const metadata = {
  id: '6-3-3',
  title: 'Sort接口',
  section: '6.3.3'
};
