import React from 'react';

interface Props {
  className?: string;
}

export default function 配置管理Configconfiggo({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">15.1.2 配置管理 (config/config.go)</h3>

      <pre className="code-block">
        <code className="language-go">{`package config

import (
    "os"
    "strconv"
)

type Config struct {
    Port           string
    DatabaseURL    string
    JWTSecret      string
    JWTExpiration  int
}

func Load() *Config {
    return &Config{
        Port:          getEnv("PORT", "8080"),
        DatabaseURL:   getEnv("DATABASE_URL", "root:password@tcp(localhost:3306)/todoapp"),
        JWTSecret:     getEnv("JWT_SECRET", "your-secret-key"),
        JWTExpiration: getEnvInt("JWT_EXPIRATION", 3600),
    }
}

func getEnv(key, defaultValue string) string {
    if value := os.Getenv(key); value != "" {
        return value
    }
    return defaultValue
}

func getEnvInt(key string, defaultValue int) int {
    if value := os.Getenv(key); value != "" {
        if intValue, err := strconv.Atoi(value); err == nil {
            return intValue
        }
    }
    return defaultValue
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '15-1-2',
  title: '配置管理 (config/config.go)',
  section: '15.1.2'
};
