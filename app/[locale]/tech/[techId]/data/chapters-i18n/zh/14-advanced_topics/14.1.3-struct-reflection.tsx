import React from 'react';

interface Props {
  className?: string;
}

export default function 结构体反射({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">14.1.3 结构体反射</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "reflect"
)

type Person struct {
    Name string <code>json:"name" validate:"required"</code>
    Age  int    <code>json:"age" validate:"min=0,max=150"</code>
}

func inspectStruct(i interface{}) {
    t := reflect.TypeOf(i)
    v := reflect.ValueOf(i)

    fmt.Printf("Type: %s\n", t.Name())
    fmt.Printf("Kind: %s\n", t.Kind())

    // 遍历字段
    for i := 0; i < t.NumField(); i++ {
        field := t.Field(i)
        value := v.Field(i)

        fmt.Printf("Field %d:\n", i)
        fmt.Printf("  Name: %s\n", field.Name)
        fmt.Printf("  Type: %s\n", field.Type)
        fmt.Printf("  Value: %v\n", value.Interface())

        // 获取标签
        jsonTag := field.Tag.Get("json")
        validateTag := field.Tag.Get("validate")
        fmt.Printf("  Tags: json=%s, validate=%s\n", jsonTag, validateTag)
    }
}

func setStructField(i interface{}, fieldName string, value interface{}) error {
    v := reflect.ValueOf(i)

    // 必须传递指针
    if v.Kind() != reflect.Ptr {
        return fmt.Errorf("must pass a pointer")
    }

    v = v.Elem()
    if v.Kind() != reflect.Struct {
        return fmt.Errorf("must be a struct")
    }

    field := v.FieldByName(fieldName)
    if !field.IsValid() {
        return fmt.Errorf("field %s not found", fieldName)
    }

    if !field.CanSet() {
        return fmt.Errorf("field %s cannot be set", fieldName)
    }

    fieldValue := reflect.ValueOf(value)
    if field.Type() != fieldValue.Type() {
        return fmt.Errorf("type mismatch")
    }

    field.Set(fieldValue)
    return nil
}

func main() {
    person := Person{Name: "Alice", Age: 30}
    inspectStruct(person)

    // 修改字段
    err := setStructField(&person, "Name", "Bob")
    if err != nil {
        fmt.Println("Error:", err)
    }
    fmt.Printf("Modified: %+v\n", person)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '14-1-3',
  title: '结构体反射',
  section: '14.1.3'
};
