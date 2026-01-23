import React from 'react';

interface Props {
  className?: string;
}

export default function MultipleEmbedding({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">5.3.2 Multiple Embedding</h3>

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

// Duck can both fly and swim
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
        Fish: Fish{Name: "Donald"},  // Note: Both Name fields must be explicitly specified
    }

    duck.Fly()    // Bird's method
    duck.Swim()   // Fish's method
    duck.Quack()

    // Fields must be explicitly specified when accessing
    fmt.Println("Bird name:", duck.Bird.Name)
    fmt.Println("Fish name:", duck.Fish.Name)
}`}</code>
      </pre>
      <p>## 5.4 Constructors and Factory Pattern</p>

    </div>
  );
}

export const metadata = {
  id: '5-3-2',
  title: 'Multiple Embedding',
  section: '5.3.2'
};
