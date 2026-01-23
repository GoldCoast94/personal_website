import React from 'react';

interface Props {
  className?: string;
}

export default function 方法调用({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">14.1.4 方法调用</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "reflect"
)

type Calculator struct {
    Value int
}

func (c *Calculator) Add(n int) int {
    c.Value += n
    return c.Value
}

func (c *Calculator) Multiply(n int) int {
    c.Value *= n
    return c.Value
}

func callMethod(i interface{}, methodName string, args ...interface{}) ([]interface{}, error) {
    v := reflect.ValueOf(i)
    method := v.MethodByName(methodName)

    if !method.IsValid() {
        return nil, fmt.Errorf("method %s not found", methodName)
    }

    // 准备参数
    in := make([]reflect.Value, len(args))
    for i, arg := range args {
        in[i] = reflect.ValueOf(arg)
    }

    // 调用方法
    results := method.Call(in)

    // 转换结果
    out := make([]interface{}, len(results))
    for i, result := range results {
        out[i] = result.Interface()
    }

    return out, nil
}

func main() {
    calc := &Calculator{Value: 10}

    // 通过反射调用方法
    result, err := callMethod(calc, "Add", 5)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Println("Result:", result[0])  // Result: 15

    result, err = callMethod(calc, "Multiply", 2)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Println("Result:", result[0])  // Result: 30
}`}</code>
      </pre>
      <p>## 14.2 泛型 (Generics) - Go 1.18+</p>

    </div>
  );
}

export const metadata = {
  id: '14-1-4',
  title: '方法调用',
  section: '14.1.4'
};
