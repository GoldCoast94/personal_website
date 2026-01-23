import React from 'react';

interface Props {
  className?: string;
}

export default function インターフェース定義({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">6.1.1 インターフェース定義</h3>
      <p>インターフェースはメソッドシグネチャのコレクションで、オブジェクトの動作規範を定義します。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// インターフェースを定義
type Animal interface {
    Speak() string
    Move() string
}

// DogはAnimalインターフェースを実装
type Dog struct {
    Name string
}

func (d Dog) Speak() string {
    return "Woof!"
}

func (d Dog) Move() string {
    return "Running"
}

// CatはAnimalインターフェースを実装
type Cat struct {
    Name string
}

func (c Cat) Speak() string {
    return "Meow!"
}

func (c Cat) Move() string {
    return "Walking"
}

// インターフェース型を受け入れる関数
func AnimalInfo(a Animal) {
    fmt.Printf("Animal speaks: %s\n", a.Speak())
    fmt.Printf("Animal moves: %s\n", a.Move())
}

func main() {
    dog := Dog{Name: "Buddy"}
    cat := Cat{Name: "Whiskers"}

    // DogとCatの両方がAnimalインターフェースを実装
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
  title: 'インターフェース定義',
  section: '6.1.1'
};
