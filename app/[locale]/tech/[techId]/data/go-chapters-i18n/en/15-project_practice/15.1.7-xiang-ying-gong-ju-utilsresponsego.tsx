import React from 'react';

interface Props {
  className?: string;
}

export default function ResponseUtilityUtilsresponsego({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">15.1.7 Response Utility (utils/response.go)</h3>

      <pre className="code-block">
        <code className="language-go">{`package utils

import (
    "encoding/json"
    "net/http"
)

type Response struct {
    Success bool        <code>json:"success"</code>
    Message string      <code>json:"message,omitempty"</code>
    Data    interface{} <code>json:"data,omitempty"</code>
    Error   string      <code>json:"error,omitempty"</code>
}

func SendJSON(w http.ResponseWriter, statusCode int, data interface{}) {
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(statusCode)
    json.NewEncoder(w).Encode(data)
}

func SendSuccess(w http.ResponseWriter, data interface{}) {
    SendJSON(w, http.StatusOK, Response{
        Success: true,
        Data:    data,
    })
}

func SendError(w http.ResponseWriter, statusCode int, message string) {
    SendJSON(w, statusCode, Response{
        Success: false,
        Error:   message,
    })
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '15-1-7',
  title: 'Response Utility (utils/response.go)',
  section: '15.1.7'
};
