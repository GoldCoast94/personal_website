import React from 'react';

interface Props {
  className?: string;
}

export default function 主程序Maingo({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">15.1.12 主程序 (main.go)</h3>

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
    // 加载配置
    cfg := config.Load()

    // 连接数据库
    db, err := database.New(cfg.DatabaseURL)
    if err != nil {
        log.Fatal("Failed to connect to database:", err)
    }
    defer db.Close()

    // 初始化数据库表
    if err := db.InitSchema(); err != nil {
        log.Fatal("Failed to initialize schema:", err)
    }

    // 创建路由
    router := mux.NewRouter()

    // 应用全局中间件
    router.Use(middleware.LoggerMiddleware)

    // 认证路由
    authHandler := handlers.NewAuthHandler(db, cfg.JWTSecret, cfg.JWTExpiration)
    router.HandleFunc("/api/auth/register", authHandler.Register).Methods("POST")
    router.HandleFunc("/api/auth/login", authHandler.Login).Methods("POST")

    // Todo路由（需要认证）
    todoHandler := handlers.NewTodoHandler(db)
    protected := router.PathPrefix("/api/todos").Subrouter()
    protected.Use(middleware.AuthMiddleware(cfg.JWTSecret))
    protected.HandleFunc("", todoHandler.List).Methods("GET")
    protected.HandleFunc("", todoHandler.Create).Methods("POST")
    protected.HandleFunc("/{id}", todoHandler.Get).Methods("GET")
    protected.HandleFunc("/{id}", todoHandler.Update).Methods("PUT")
    protected.HandleFunc("/{id}", todoHandler.Delete).Methods("DELETE")

    // 启动服务器
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
  title: '主程序 (main.go)',
  section: '15.1.12'
};
