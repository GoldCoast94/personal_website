import React from 'react';

interface Props {
  className?: string;
}

export default function 组合与继承({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">5.3.1 组合与继承</h3>
      <p>Go通过嵌入实现类似继承的效果，这被称为"组合优于继承"。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

// 基础类型
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

// 嵌入Animal
type Dog struct {
    Animal            // 嵌入
    Breed string
}

func (d Dog) Bark() {
    fmt.Printf("%s is barking: Woof!\n", d.Name)
}

// 重写方法
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
    // 创建Dog
    dog := Dog{
        Animal: Animal{Name: "Buddy", Age: 3},
        Breed:  "Golden Retriever",
    }

    // 访问嵌入类型的字段
    fmt.Println("Name:", dog.Name)
    fmt.Println("Age:", dog.Age)
    fmt.Println("Breed:", dog.Breed)

    // 调用方法
    dog.Bark()        // Dog的方法
    dog.Eat()         // 重写的方法
    dog.Sleep()       // Animal的方法
    dog.Animal.Eat()  // 显式调用Animal的方法

    fmt.Println()

    // 创建Cat
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
  title: '组合与继承',
  section: '5.3.1'
};
