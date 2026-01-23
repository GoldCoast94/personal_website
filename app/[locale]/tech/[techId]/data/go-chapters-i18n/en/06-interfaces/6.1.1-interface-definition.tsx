import React from 'react';

interface Props {
  className?: string;
}

export default function InterfaceDefinition({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">6.1.1 Interface Definition</h3>
      <p>An interface is a collection of method signatures that defines the behavioral contract for objects.</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// Define an interface
type Animal interface {
    Speak() string
    Move() string
}

// Dog implements the Animal interface
type Dog struct {
    Name string
}

func (d Dog) Speak() string {
    return "Woof!"
}

func (d Dog) Move() string {
    return "Running"
}

// Cat implements the Animal interface
type Cat struct {
    Name string
}

func (c Cat) Speak() string {
    return "Meow!"
}

func (c Cat) Move() string {
    return "Walking"
}

// Function that accepts interface type
func AnimalInfo(a Animal) {
    fmt.Printf("Animal speaks: %s\n", a.Speak())
    fmt.Printf("Animal moves: %s\n", a.Move())
}

func main() {
    dog := Dog{Name: "Buddy"}
    cat := Cat{Name: "Whiskers"}

    // Both Dog and Cat implement the Animal interface
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
  title: 'Interface Definition',
  section: '6.1.1'
};
