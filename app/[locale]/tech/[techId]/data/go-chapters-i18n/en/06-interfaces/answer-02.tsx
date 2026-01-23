import React from 'react';

interface Props {
  className?: string;
}

export default function Answer02({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Answer 2</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "encoding/json"
    "encoding/xml"
    "fmt"
)

// Serializer interface
type Serializer interface {
    Serialize(v interface{}) ([]byte, error)
    Deserialize(data []byte, v interface{}) error
}

// JSONSerializer
type JSONSerializer struct{}

func (j JSONSerializer) Serialize(v interface{}) ([]byte, error) {
    return json.Marshal(v)
}

func (j JSONSerializer) Deserialize(data []byte, v interface{}) error {
    return json.Unmarshal(data, v)
}

// XMLSerializer
type XMLSerializer struct{}

func (x XMLSerializer) Serialize(v interface{}) ([]byte, error) {
    return xml.Marshal(v)
}

func (x XMLSerializer) Deserialize(data []byte, v interface{}) error {
    return xml.Unmarshal(data, v)
}

// Data struct
type User struct {
    Name  string
    Email string
    Age   int
}

type DataManager struct {
    serializer Serializer
}

func NewDataManager(serializer Serializer) *DataManager {
    return &DataManager{serializer: serializer}
}

func (dm *DataManager) Save(v interface{}) ([]byte, error) {
    return dm.serializer.Serialize(v)
}

func (dm *DataManager) Load(data []byte, v interface{}) error {
    return dm.serializer.Deserialize(data, v)
}

func main() {
    user := User{
        Name:  "Alice",
        Email: "alice@example.com",
        Age:   30,
    }

    // Using JSON serializer
    jsonManager := NewDataManager(JSONSerializer{})
    jsonData, _ := jsonManager.Save(user)
    fmt.Printf("JSON: %s\n", string(jsonData))

    var jsonUser User
    jsonManager.Load(jsonData, &jsonUser)
    fmt.Printf("Deserialized from JSON: %+v\n\n", jsonUser)

    // Using XML serializer
    xmlManager := NewDataManager(XMLSerializer{})
    xmlData, _ := xmlManager.Save(user)
    fmt.Printf("XML: %s\n", string(xmlData))

    var xmlUser User
    xmlManager.Load(xmlData, &xmlUser)
    fmt.Printf("Deserialized from XML: %+v\n", xmlUser)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Answer 2',
  section: '0'
};
