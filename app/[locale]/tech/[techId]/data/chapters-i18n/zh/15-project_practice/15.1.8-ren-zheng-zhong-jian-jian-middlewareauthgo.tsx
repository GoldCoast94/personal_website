import React from 'react';

interface Props {
  className?: string;
}

export default function 认证中间件Middlewareauthgo({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">15.1.8 认证中间件 (middleware/auth.go)</h3>

      <pre className="code-block">
        <code className="language-go">{`package middleware

import (
    "context"
    "net/http"
    "strings"
    "todoapi/utils"
)

type contextKey string

const UserIDKey contextKey = "user_id"

func AuthMiddleware(secret string) func(http.Handler) http.Handler {
    return func(next http.Handler) http.Handler {
        return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
            authHeader := r.Header.Get("Authorization")
            if authHeader == "" {
                utils.SendError(w, http.StatusUnauthorized, "Authorization header required")
                return
            }

            parts := strings.Split(authHeader, " ")
            if len(parts) != 2 || parts[0] != "Bearer" {
                utils.SendError(w, http.StatusUnauthorized, "Invalid authorization header format")
                return
            }

            token := parts[1]
            claims, err := utils.ValidateToken(token, secret)
            if err != nil {
                utils.SendError(w, http.StatusUnauthorized, "Invalid token")
                return
            }

            ctx := context.WithValue(r.Context(), UserIDKey, claims.UserID)
            next.ServeHTTP(w, r.WithContext(ctx))
        })
    }
}

func GetUserID(ctx context.Context) (int, bool) {
    userID, ok := ctx.Value(UserIDKey).(int)
    return userID, ok
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '15-1-8',
  title: '认证中间件 (middleware/auth.go)',
  section: '15.1.8'
};
