import React from 'react';

interface Props {
  className?: string;
}

export default function 多重埋め込み({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">5.3.2 多重埋め込み</h3>

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

// Duckは飛ぶことも泳ぐこともできる
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
        Fish: Fish{Name: "Donald"},  // 注意：2つのNameフィールドは明示的に指定する必要がある
    }

    duck.Fly()    // Birdのメソッド
    duck.Swim()   // Fishのメソッド
    duck.Quack()

    // フィールドにアクセスする際は明示的に指定する必要がある
    fmt.Println("Bird name:", duck.Bird.Name)
    fmt.Println("Fish name:", duck.Fish.Name)
}`}</code>
      </pre>
      <p>## 5.4 コンストラクタとファクトリパターン</p>

    </div>
  );
}

export const metadata = {
  id: '5-3-2',
  title: '多重埋め込み',
  section: '5.3.2'
};
