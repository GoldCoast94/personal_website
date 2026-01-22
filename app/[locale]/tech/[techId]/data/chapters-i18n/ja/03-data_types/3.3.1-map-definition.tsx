import React from 'react';

interface Props {
  className?: string;
}

export default function Mapの定義({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">3.3.1 Mapの定義</h3>
      <p>Mapはキーと値のペアの順序なしのコレクションです。</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import "fmt"

func main() {
    // 方法1: makeを使用して作成
    var map1 = make(map[string]int)
    map1["apple"] = 10
    map1["banana"] = 20

    // 方法2: リテラルで初期化
    map2 := map[string]int{
        "apple":  10,
        "banana": 20,
        "orange": 30,
    }

    // 方法3: 空のmap
    map3 := map[string]int{}

    fmt.Println("map1:", map1)
    fmt.Println("map2:", map2)
    fmt.Println("map3:", map3)

    // 注意: nil mapは直接使用できません
    var map4 map[string]int
    fmt.Println("map4 is nil:", map4 == nil)
    // map4["key"] = 1  // panicします
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '3-3-1',
  title: 'Mapの定義',
  section: '3.3.1'
};
