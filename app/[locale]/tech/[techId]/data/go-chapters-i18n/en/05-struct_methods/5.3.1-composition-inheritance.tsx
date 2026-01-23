import React from 'react';

interface Props {
  className?: string;
}

export default function CompositionInheritance({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">5.3.1 Composition and Inheritance</h3>
      <p>Go achieves inheritance-like effects through embedding, which is called "composition over inheritance".</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// Base type
type Animal struct {
    Name string
    Age  int
}

func (a Animal) Eat() {
    fmt.Printf("%s is eating\n", a.Name)
}

func (a Animal) Sleep() {
    fmt.Printf("%s is sleeping\n", a.Name)
}

// Embed Animal
type Dog struct {
    Animal            // Embedding
    Breed string
}

func (d Dog) Bark() {
    fmt.Printf("%s is barking: Woof!\n", d.Name)
}

// Override method
func (d Dog) Eat() {
    fmt.Printf("%s (Dog) is eating dog food\n", d.Name)
}

type Cat struct {
    Animal
    Color string
}

func (c Cat) Meow() {
    fmt.Printf("%s is meowing: Meow!\n", c.Name)
}

func main() {
    // Create Dog
    dog := Dog{
        Animal: Animal{Name: "Buddy", Age: 3},
        Breed:  "Golden Retriever",
    }

    // Access embedded type fields
    fmt.Println("Name:", dog.Name)
    fmt.Println("Age:", dog.Age)
    fmt.Println("Breed:", dog.Breed)

    // Call methods
    dog.Bark()        // Dog's method
    dog.Eat()         // Overridden method
    dog.Sleep()       // Animal's method
    dog.Animal.Eat()  // Explicitly call Animal's method

    fmt.Println()

    // Create Cat
    cat := Cat{
        Animal: Animal{Name: "Whiskers", Age: 2},
        Color:  "Orange",
    }

    cat.Meow()
    cat.Eat()
    cat.Sleep()
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '5-3-1',
  title: 'Composition and Inheritance',
  section: '5.3.1'
};
