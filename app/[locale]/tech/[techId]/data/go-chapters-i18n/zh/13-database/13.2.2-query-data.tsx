import React from 'react';

interface Props {
  className?: string;
}

export default function 查询数据({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">13.2.2 查询数据</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "database/sql"
    "fmt"
    "log"
)

// 查询单条记录
func getUserByID(db *sql.DB, id int) (*User, error) {
    query := "SELECT id, username, email FROM users WHERE id = ?"

    var user User
    err := db.QueryRow(query, id).Scan(&user.ID, &user.Username, &user.Email)
    if err != nil {
        if err == sql.ErrNoRows {
            return nil, fmt.Errorf("user not found")
        }
        return nil, err
    }

    return &user, nil
}

// 查询多条记录
func getAllUsers(db *sql.DB) ([]User, error) {
    query := "SELECT id, username, email FROM users"

    rows, err := db.Query(query)
    if err != nil {
        return nil, err
    }
    defer rows.Close()

    var users []User
    for rows.Next() {
        var user User
        err := rows.Scan(&user.ID, &user.Username, &user.Email)
        if err != nil {
            return nil, err
        }
        users = append(users, user)
    }

    // 检查迭代错误
    if err = rows.Err(); err != nil {
        return nil, err
    }

    return users, nil
}

// 条件查询
func searchUsers(db *sql.DB, keyword string) ([]User, error) {
    query := "SELECT id, username, email FROM users WHERE username LIKE ?"

    rows, err := db.Query(query, "%"+keyword+"%")
    if err != nil {
        return nil, err
    }
    defer rows.Close()

    var users []User
    for rows.Next() {
        var user User
        if err := rows.Scan(&user.ID, &user.Username, &user.Email); err != nil {
            return nil, err
        }
        users = append(users, user)
    }

    return users, rows.Err()
}

func main() {
    db, _ := sql.Open("mysql", "root:password@tcp(localhost:3306)/testdb")
    defer db.Close()

    // 查询单个用户
    user, err := getUserByID(db, 1)
    if err != nil {
        log.Println(err)
    } else {
        fmt.Printf("User: %+v\n", user)
    }

    // 查询所有用户
    users, err := getAllUsers(db)
    if err != nil {
        log.Println(err)
    } else {
        for _, u := range users {
            fmt.Printf("User: %+v\n", u)
        }
    }
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '13-2-2',
  title: '查询数据',
  section: '13.2.2'
};
