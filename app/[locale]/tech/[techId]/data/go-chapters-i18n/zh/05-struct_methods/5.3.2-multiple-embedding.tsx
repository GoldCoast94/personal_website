import React from 'react';

interface Props {
  className?: string;
}

export default function 多重嵌入({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">5.3.2 多重嵌入</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

type Flyer interface {
    Fly()
}

type Swimmer interface {
    Swim()
}

type Bird struct {
    Name string
}

func (b Bird) Fly() {
    fmt.Printf("%s is flying\n", b.Name)
}

type Fish struct {
    Name string
}

func (f Fish) Swim() {
    fmt.Printf("%s is swimming\n", f.Name)
}

// Duck既能飞又能游泳
type Duck struct {
    Bird
    Fish
}

func (d Duck) Quack() {
    fmt.Printf("%s is quacking\n", d.Bird.Name)
}

func main() {
    duck := Duck{
        Bird: Bird{Name: "Donald"},
        Fish: Fish{Name: "Donald"},  // 注意：两个Name字段需要明确指定
    }

    duck.Fly()    // Bird的方法
    duck.Swim()   // Fish的方法
    duck.Quack()

    // 访问字段时需要明确指定
    fmt.Println("Bird name:", duck.Bird.Name)
    fmt.Println("Fish name:", duck.Fish.Name)
}`}</code>
      </pre>
      <p>## 5.4 构造函数和工厂模式</p>

    </div>
  );
}

export const metadata = {
  id: '5-3-2',
  title: '多重嵌入',
  section: '5.3.2'
};
