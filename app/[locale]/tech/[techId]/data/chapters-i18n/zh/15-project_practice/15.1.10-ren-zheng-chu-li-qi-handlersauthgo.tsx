import React from 'react';

interface Props {
  className?: string;
}

export default function 认证处理器Handlersauthgo({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">15.1.10 认证处理器 (handlers/auth.go)</h3>

      <pre className="code-block">
        <code className="language-go">{`package handlers

import (
    "database/sql"
    "encoding/json"
    "net/http"
    "todoapi/database"
    "todoapi/models"
    "todoapi/utils"

    "golang.org/x/crypto/bcrypt"
)

type AuthHandler struct {
    db        *database.DB
    jwtSecret string
    jwtExp    int
}

func NewAuthHandler(db *database.DB, jwtSecret string, jwtExp int) *AuthHandler {
    return &AuthHandler{
        db:        db,
        jwtSecret: jwtSecret,
        jwtExp:    jwtExp,
    }
}

func (h *AuthHandler) Register(w http.ResponseWriter, r *http.Request) {
    var req models.RegisterRequest
    if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
        utils.SendError(w, http.StatusBadRequest, "Invalid request body")
        return
    }

    // 验证输入
    if req.Username == "" || req.Email == "" || req.Password == "" {
        utils.SendError(w, http.StatusBadRequest, "All fields are required")
        return
    }

    // 哈希密码
    hashedPassword, err := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)
    if err != nil {
        utils.SendError(w, http.StatusInternalServerError, "Failed to hash password")
        return
    }

    // 插入用户
    result, err := h.db.Exec(
        "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
        req.Username, req.Email, string(hashedPassword),
    )
    if err != nil {
        utils.SendError(w, http.StatusInternalServerError, "Failed to create user")
        return
    }

    userID, _ := result.LastInsertId()

    user := &models.User{
        ID:       int(userID),
        Username: req.Username,
        Email:    req.Email,
    }

    utils.SendSuccess(w, user)
}

func (h *AuthHandler) Login(w http.ResponseWriter, r *http.Request) {
    var req models.LoginRequest
    if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
        utils.SendError(w, http.StatusBadRequest, "Invalid request body")
        return
    }

    // 查询用户
    var user models.User
    var hashedPassword string
    err := h.db.QueryRow(
        "SELECT id, username, email, password FROM users WHERE email = ?",
        req.Email,
    ).Scan(&user.ID, &user.Username, &user.Email, &hashedPassword)

    if err == sql.ErrNoRows {
        utils.SendError(w, http.StatusUnauthorized, "Invalid credentials")
        return
    }
    if err != nil {
        utils.SendError(w, http.StatusInternalServerError, "Database error")
        return
    }

    // 验证密码
    if err := bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(req.Password)); err != nil {
        utils.SendError(w, http.StatusUnauthorized, "Invalid credentials")
        return
    }

    // 生成token
    token, err := utils.GenerateToken(user.ID, h.jwtSecret, h.jwtExp)
    if err != nil {
        utils.SendError(w, http.StatusInternalServerError, "Failed to generate token")
        return
    }

    response := models.LoginResponse{
        Token: token,
        User:  &user,
    }

    utils.SendSuccess(w, response)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '15-1-10',
  title: '认证处理器 (handlers/auth.go)',
  section: '15.1.10'
};
