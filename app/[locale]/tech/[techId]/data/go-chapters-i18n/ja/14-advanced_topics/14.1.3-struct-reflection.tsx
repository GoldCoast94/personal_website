import React from 'react';

interface Props {
  className?: string;
}

export default function 構造体のリフレクション({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">14.1.3 構造体のリフレクション</h3>

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

    // フィールドを反復処理
    for i := 0; i < t.NumField(); i++ {
        field := t.Field(i)
        value := v.Field(i)

        fmt.Printf("Field %d:\n", i)
        fmt.Printf("  Name: %s\n", field.Name)
        fmt.Printf("  Type: %s\n", field.Type)
        fmt.Printf("  Value: %v\n", value.Interface())

        // タグを取得
        jsonTag := field.Tag.Get("json")
        validateTag := field.Tag.Get("validate")
        fmt.Printf("  Tags: json=%s, validate=%s\n", jsonTag, validateTag)
    }
}

func setStructField(i interface{}, fieldName string, value interface{}) error {
    v := reflect.ValueOf(i)

    // ポインタを渡す必要がある
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

    // フィールドを変更
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
  title: '構造体のリフレクション',
  section: '14.1.3'
};
