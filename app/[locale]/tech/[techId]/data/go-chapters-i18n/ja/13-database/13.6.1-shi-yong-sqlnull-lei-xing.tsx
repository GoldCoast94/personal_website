import React from 'react';

interface Props {
  className?: string;
}

export default function sqlNull型を使用({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">13.6.1 sql.Null型を使用</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "database/sql"
    "fmt"
)

type UserProfile struct {
    ID       int
    Username string
    Bio      sql.NullString  // NULL可能な文字列
    Age      sql.NullInt64   // NULL可能な整数
    Website  sql.NullString
}

func insertProfile(db *sql.DB, username string, bio *string, age *int) error {
    var nullBio sql.NullString
    if bio != nil {
        nullBio = sql.NullString{String: *bio, Valid: true}
    }

    var nullAge sql.NullInt64
    if age != nil {
        nullAge = sql.NullInt64{Int64: int64(*age), Valid: true}
    }

    query := "INSERT INTO user_profiles (username, bio, age) VALUES (?, ?, ?)"
    _, err := db.Exec(query, username, nullBio, nullAge)
    return err
}

func getProfile(db *sql.DB, id int) (*UserProfile, error) {
    query := "SELECT id, username, bio, age, website FROM user_profiles WHERE id = ?"

    var profile UserProfile
    err := db.QueryRow(query, id).Scan(
        &profile.ID,
        &profile.Username,
        &profile.Bio,
        &profile.Age,
        &profile.Website,
    )
    if err != nil {
        return nil, err
    }

    // NULL値をチェック
    if profile.Bio.Valid {
        fmt.Println("Bio:", profile.Bio.String)
    } else {
        fmt.Println("Bio: NULL")
    }

    if profile.Age.Valid {
        fmt.Println("Age:", profile.Age.Int64)
    } else {
        fmt.Println("Age: NULL")
    }

    return &profile, nil
}`}</code>
      </pre>
      <p>## 13.7 データベースマイグレーション</p>

    </div>
  );
}

export const metadata = {
  id: '13-6-1',
  title: 'sql.Null型を使用',
  section: '13.6.1'
};
