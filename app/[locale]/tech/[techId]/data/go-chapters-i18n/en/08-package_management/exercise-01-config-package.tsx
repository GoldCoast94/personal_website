import React from 'react';

interface Props {
  className?: string;
}

export default function AnswerConfigPackage({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 Answer 2: Configuration Management Package</h3>

      <ul>
        <li>*config/config.go:**</li>
      </ul>

      <pre className="code-block">
        <code className="language-go">{`package config

import (
    "encoding/json"
    "os"
)

type Config struct {
    Database struct {
        Host     string <code>json:"host"</code>
        Port     int    <code>json:"port"</code>
        Username string <code>json:"username"</code>
        Password string <code>json:"password"</code>
    } <code>json:"database"</code>
    Server struct {
        Port int    <code>json:"port"</code>
        Host string <code>json:"host"</code>
    } <code>json:"server"</code>
}

func LoadConfig(filename string) (*Config, error) {
    file, err := os.Open(filename)
    if err != nil {
        return nil, err
    }
    defer file.Close()

    config := &Config{}
    decoder := json.NewDecoder(file)
    if err := decoder.Decode(config); err != nil {
        return nil, err
    }

    return config, nil
}

func SaveConfig(filename string, config *Config) error {
    file, err := os.Create(filename)
    if err != nil {
        return err
    }
    defer file.Close()

    encoder := json.NewEncoder(file)
    encoder.SetIndent("", "  ")
    return encoder.Encode(config)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: 'Answer 2: Configuration Management Package',
  section: '0'
};
