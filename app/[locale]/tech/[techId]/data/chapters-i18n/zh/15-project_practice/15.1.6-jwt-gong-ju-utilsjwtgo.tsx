import React from 'react';

interface Props {
  className?: string;
}

export default function Jwt工具Utilsjwtgo({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">15.1.6 JWT工具 (utils/jwt.go)</h3>

      <pre className="code-block">
        <code className="language-go">{`package utils

import (
    "errors"
    "time"

    "github.com/golang-jwt/jwt/v4"
)

type Claims struct {
    UserID int <code>json:"user_id"</code>
    jwt.RegisteredClaims
}

func GenerateToken(userID int, secret string, expiration int) (string, error) {
    claims := Claims{
        UserID: userID,
        RegisteredClaims: jwt.RegisteredClaims{
            ExpiresAt: jwt.NewNumericDate(time.Now().Add(time.Duration(expiration) * time.Second)),
            IssuedAt:  jwt.NewNumericDate(time.Now()),
        },
    }

    token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
    return token.SignedString([]byte(secret))
}

func ValidateToken(tokenString, secret string) (*Claims, error) {
    token, err := jwt.ParseWithClaims(tokenString, &Claims{}, func(token *jwt.Token) (interface{}, error) {
        return []byte(secret), nil
    })

    if err != nil {
        return nil, err
    }

    if claims, ok := token.Claims.(*Claims); ok && token.Valid {
        return claims, nil
    }

    return nil, errors.New("invalid token")
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '15-1-6',
  title: 'JWT工具 (utils/jwt.go)',
  section: '15.1.6'
};
