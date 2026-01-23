import React from 'react';

interface Props {
  className?: string;
}

export default function 組み合わせと継承({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">5.3.1 組み合わせと継承</h3>
      <p>Goは埋め込みによって継承のような効果を実現します。これは「継承よりも組み合わせ」と呼ばれます。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// 基本型
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

// Animalを埋め込む
type Dog struct {
    Animal            // 埋め込み
    Breed string
}

func (d Dog) Bark() {
    fmt.Printf("%s is barking: Woof!\n", d.Name)
}

// メソッドをオーバーライド
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
    // Dogを作成
    dog := Dog{
        Animal: Animal{Name: "Buddy", Age: 3},
        Breed:  "Golden Retriever",
    }

    // 埋め込まれた型のフィールドにアクセス
    fmt.Println("Name:", dog.Name)
    fmt.Println("Age:", dog.Age)
    fmt.Println("Breed:", dog.Breed)

    // メソッドを呼び出す
    dog.Bark()        // Dogのメソッド
    dog.Eat()         // オーバーライドされたメソッド
    dog.Sleep()       // Animalのメソッド
    dog.Animal.Eat()  // Animalのメソッドを明示的に呼び出す

    fmt.Println()

    // Catを作成
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
  title: '組み合わせと継承',
  section: '5.3.1'
};
