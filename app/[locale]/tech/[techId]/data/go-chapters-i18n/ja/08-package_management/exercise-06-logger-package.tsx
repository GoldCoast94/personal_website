import React from 'react';

interface Props {
  className?: string;
}

export default function 解答ロガーパッケージ({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 解答3：ロガーパッケージ</h3>

      <ul>
        <li>*logger/logger.go:**</li>
      </ul>

      <pre className="code-block">
        <code className="language-go">{`package logger

import (
    "fmt"
    "log"
    "os"
    "time"
)

type Level int

const (
    DEBUG Level = iota
    INFO
    WARN
    ERROR
)

type Logger struct {
    level  Level
    logger *log.Logger
}

func New(level Level) *Logger {
    return &Logger{
        level:  level,
        logger: log.New(os.Stdout, "", 0),
    }
}

func (l *Logger) log(level Level, levelStr string, format string, args ...interface{}) {
    if level >= l.level {
        timestamp := time.Now().Format("2006-01-02 15:04:05")
        message := fmt.Sprintf(format, args...)
        l.logger.Printf("[%s] %s: %s", timestamp, levelStr, message)
    }
}

func (l *Logger) Debug(format string, args ...interface{}) {
    l.log(DEBUG, "DEBUG", format, args...)
}

func (l *Logger) Info(format string, args ...interface{}) {
    l.log(INFO, "INFO", format, args...)
}

func (l *Logger) Warn(format string, args ...interface{}) {
    l.log(WARN, "WARN", format, args...)
}

func (l *Logger) Error(format string, args ...interface{}) {
    l.log(ERROR, "ERROR", format, args...)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '解答3：ロガーパッケージ',
  section: '0'
};
