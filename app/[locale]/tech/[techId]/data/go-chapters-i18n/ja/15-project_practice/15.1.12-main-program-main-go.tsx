import React from 'react';

interface Props {
  className?: string;
}

export default function メインプログラムMaingo({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">15.1.12 メインプログラム (main.go)</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "log"
    "net/http"
    "todoapi/config"
    "todoapi/database"
    "todoapi/handlers"
    "todoapi/middleware"

    "github.com/gorilla/mux"
)

func main() {
    // 設定を読み込む
    cfg := config.Load()

    // データベースに接続
    db, err := database.New(cfg.DatabaseURL)
    if err != nil {
        log.Fatal("Failed to connect to database:", err)
    }
    defer db.Close()

    // データベーススキーマを初期化
    if err := db.InitSchema(); err != nil {
        log.Fatal("Failed to initialize schema:", err)
    }

    // ルーターを作成
    router := mux.NewRouter()

    // グローバルミドルウェアを適用
    router.Use(middleware.LoggerMiddleware)

    // 認証ルート
    authHandler := handlers.NewAuthHandler(db, cfg.JWTSecret, cfg.JWTExpiration)
    router.HandleFunc("/api/auth/register", authHandler.Register).Methods("POST")
    router.HandleFunc("/api/auth/login", authHandler.Login).Methods("POST")

    // Todoルート（認証が必要）
    todoHandler := handlers.NewTodoHandler(db)
    protected := router.PathPrefix("/api/todos").Subrouter()
    protected.Use(middleware.AuthMiddleware(cfg.JWTSecret))
    protected.HandleFunc("", todoHandler.List).Methods("GET")
    protected.HandleFunc("", todoHandler.Create).Methods("POST")
    protected.HandleFunc("/{id}", todoHandler.Get).Methods("GET")
    protected.HandleFunc("/{id}", todoHandler.Update).Methods("PUT")
    protected.HandleFunc("/{id}", todoHandler.Delete).Methods("DELETE")

    // サーバーを起動
    addr := fmt.Sprintf(":%s", cfg.Port)
    log.Printf("Server starting on %s", addr)
    log.Fatal(http.ListenAndServe(addr, router))
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '15-1-12',
  title: 'メインプログラム (main.go)',
  section: '15.1.12'
};
