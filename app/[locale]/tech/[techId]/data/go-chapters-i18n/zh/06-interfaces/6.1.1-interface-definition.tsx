import React from 'react';

interface Props {
  className?: string;
}

export default function 接口定义({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">6.1.1 接口定义</h3>
      <p>接口是一组方法签名的集合，定义了对象的行为规范。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// 定义接口
type Animal interface {
    Speak() string
    Move() string
}

// Dog实现Animal接口
type Dog struct {
    Name string
}

func (d Dog) Speak() string {
    return "Woof!"
}

func (d Dog) Move() string {
    return "Running"
}

// Cat实现Animal接口
type Cat struct {
    Name string
}

func (c Cat) Speak() string {
    return "Meow!"
}

func (c Cat) Move() string {
    return "Walking"
}

// 接受接口类型的函数
func AnimalInfo(a Animal) {
    fmt.Printf("Animal speaks: %s\n", a.Speak())
    fmt.Printf("Animal moves: %s\n", a.Move())
}

func main() {
    dog := Dog{Name: "Buddy"}
    cat := Cat{Name: "Whiskers"}

    // Dog和Cat都实现了Animal接口
    AnimalInfo(dog)
    fmt.Println()
    AnimalInfo(cat)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '6-1-1',
  title: '接口定义',
  section: '6.1.1'
};
