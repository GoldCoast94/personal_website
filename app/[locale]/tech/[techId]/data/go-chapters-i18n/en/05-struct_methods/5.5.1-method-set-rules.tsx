import React from 'react';

interface Props {
  className?: string;
}

export default function MethodSetRules({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">5.5.1 Method Set Rules</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

type Printer interface {
    Print()
}

type Document struct {
    Content string
}

// Value receiver method
func (d Document) Print() {
    fmt.Println("Document:", d.Content)
}

// Pointer receiver method
func (d *Document) Edit(newContent string) {
    d.Content = newContent
}

func main() {
    // Value type can call both value receiver and pointer receiver methods (Go automatically takes address)
    doc1 := Document{Content: "Hello"}
    doc1.Print()
    doc1.Edit("World")  // Go automatically converts to (&doc1).Edit("World")

    // Pointer type can also call both value receiver and pointer receiver methods
    doc2 := &Document{Content: "Foo"}
    doc2.Print()  // Go automatically dereferences
    doc2.Edit("Bar")

    // Interface assignment
    var p Printer

    // Value type implements interface (because it has value receiver Print method)
    p = doc1
    p.Print()

    // Pointer type also implements interface
    p = doc2
    p.Print()

    // Note: If Print is a pointer receiver, only pointer type implements interface
}`}</code>
      </pre>
      <p>## 5.6 Exercises</p>

    </div>
  );
}

export const metadata = {
  id: '5-5-1',
  title: 'Method Set Rules',
  section: '5.5.1'
};
