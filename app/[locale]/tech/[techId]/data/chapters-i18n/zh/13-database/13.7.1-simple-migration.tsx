import React from 'react';

interface Props {
  className?: string;
}

export default function 简单迁移系统({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">13.7.1 简单迁移系统</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "database/sql"
    "fmt"
    "time"
)

type Migration struct {
    Version int
    Name    string
    Up      string
    Down    string
}

var migrations = []Migration{
    {
        Version: 1,
        Name:    "create_users_table",
        Up: \`CREATE TABLE users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(50) NOT NULL UNIQUE,
            email VARCHAR(100) NOT NULL
        )\`,
        Down: <code>DROP TABLE users</code>,
    },
    {
        Version: 2,
        Name:    "add_created_at_to_users",
        Up:      <code>ALTER TABLE users ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP</code>,
        Down:    <code>ALTER TABLE users DROP COLUMN created_at</code>,
    },
}

func createMigrationTable(db *sql.DB) error {
    query := \`
    CREATE TABLE IF NOT EXISTS migrations (
        version INT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )\`

    _, err := db.Exec(query)
    return err
}

func getCurrentVersion(db *sql.DB) (int, error) {
    var version int
    err := db.QueryRow("SELECT COALESCE(MAX(version), 0) FROM migrations").Scan(&version)
    return version, err
}

func migrateUp(db *sql.DB) error {
    if err := createMigrationTable(db); err != nil {
        return err
    }

    currentVersion, err := getCurrentVersion(db)
    if err != nil {
        return err
    }

    for _, migration := range migrations {
        if migration.Version <= currentVersion {
            continue
        }

        fmt.Printf("Applying migration %d: %s\n", migration.Version, migration.Name)

        tx, err := db.Begin()
        if err != nil {
            return err
        }

        _, err = tx.Exec(migration.Up)
        if err != nil {
            tx.Rollback()
            return fmt.Errorf("migration %d failed: %w", migration.Version, err)
        }

        _, err = tx.Exec("INSERT INTO migrations (version, name) VALUES (?, ?)",
            migration.Version, migration.Name)
        if err != nil {
            tx.Rollback()
            return err
        }

        if err := tx.Commit(); err != nil {
            return err
        }

        fmt.Printf("Migration %d completed\n", migration.Version)
    }

    return nil
}

func migrateDown(db *sql.DB, steps int) error {
    currentVersion, err := getCurrentVersion(db)
    if err != nil {
        return err
    }

    for i := len(migrations) - 1; i >= 0 && steps > 0; i-- {
        migration := migrations[i]
        if migration.Version > currentVersion {
            continue
        }

        fmt.Printf("Reverting migration %d: %s\n", migration.Version, migration.Name)

        tx, err := db.Begin()
        if err != nil {
            return err
        }

        _, err = tx.Exec(migration.Down)
        if err != nil {
            tx.Rollback()
            return fmt.Errorf("rollback %d failed: %w", migration.Version, err)
        }

        _, err = tx.Exec("DELETE FROM migrations WHERE version = ?", migration.Version)
        if err != nil {
            tx.Rollback()
            return err
        }

        if err := tx.Commit(); err != nil {
            return err
        }

        fmt.Printf("Migration %d reverted\n", migration.Version)
        steps--
        currentVersion--
    }

    return nil
}`}</code>
      </pre>
      <p>## 13.8 实战：用户管理系统</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "database/sql"
    "errors"
    "fmt"
    "time"

    _ "github.com/go-sql-driver/mysql"
)

type User struct {
    ID        int
    Username  string
    Email     string
    Password  string
    CreatedAt time.Time
    UpdatedAt time.Time
}

type UserRepository struct {
    db *sql.DB
}

func NewUserRepository(db *sql.DB) *UserRepository {
    return &UserRepository{db: db}
}

func (r *UserRepository) Create(username, email, password string) (*User, error) {
    query := \`
        INSERT INTO users (username, email, password, created_at, updated_at)
        VALUES (?, ?, ?, NOW(), NOW())
    \`

    result, err := r.db.Exec(query, username, email, password)
    if err != nil {
        return nil, err
    }

    id, err := result.LastInsertId()
    if err != nil {
        return nil, err
    }

    return r.GetByID(int(id))
}

func (r *UserRepository) GetByID(id int) (*User, error) {
    query := \`
        SELECT id, username, email, password, created_at, updated_at
        FROM users WHERE id = ?
    \`

    var user User
    err := r.db.QueryRow(query, id).Scan(
        &user.ID,
        &user.Username,
        &user.Email,
        &user.Password,
        &user.CreatedAt,
        &user.UpdatedAt,
    )

    if err == sql.ErrNoRows {
        return nil, errors.New("user not found")
    }
    if err != nil {
        return nil, err
    }

    return &user, nil
}

func (r *UserRepository) GetByUsername(username string) (*User, error) {
    query := \`
        SELECT id, username, email, password, created_at, updated_at
        FROM users WHERE username = ?
    \`

    var user User
    err := r.db.QueryRow(query, username).Scan(
        &user.ID,
        &user.Username,
        &user.Email,
        &user.Password,
        &user.Created&user.UpdatedAt,
    )

    if err == sql.ErrNoRows {
        return nil, errors.New("user not found")
    }
    if err != nil {
        return nil, err
    }

    return &user, nil
}

func (r *UserRepository) Update(id int, username, email string) error {
    query := \`
        UPDATE users
        SET username = ?, email = ?, updated_at = NOW()
        WHERE id = ?
    \`

    result, err := r.db.Exec(query, username, email, id)
    if err != nil {
        return err
    }

    rows, err := result.RowsAffected()
    if err != nil {
        return err
    }

    if rows == 0 {
        return errors.New("user not found")
    }

    return nil
}

func (r *UserRepository) Delete(id int) error {
    query := "DELETE FROM users WHERE id = ?"

    result, err := r.db.Exec(query, id)
    if err != nil {
        return err
    }

    rows, err := result.RowsAffected()
    if err != nil {
        return err
    }

    if rows == 0 {
        return errors.New("user not found")
    }

    return nil
}

func (r *UserRepository) List(limit, offset int) ([]User, error) {
    query := \`
        SELECT id, username, email, password, created_at, updated_at
        FROM users
        ORDER BY created_at DESC
        LIMIT ? OFFSET ?
    \`

    rows, err := r.db.Query(query, limit, offset)
    if err != nil {
        return nil, err
    }
    defer rows.Close()

    var users []User
    for rows.Next() {
        var user User
        err := rows.Scan(
            &user.ID,
            &user.Username,
            &user.Email,
            &user.Password,
            &user.CreatedAt,
            &user.UpdatedAt,
        )
        if err != nil {
            return nil, err
        }
        users = append(users, user)
    }

    return users, rows.Err()
}

func (r *UserRepository) Count() (int, error) {
    var count int
    err := r.db.QueryRow("SELECT COUNT(*) FROM users").Scan(&count)
    return count, err
}

func main() {
    db, err := sql.Open("mysql", "root:password@tcp(localhost:3306)/testdb")
    if err != nil {
        panic(err)
    }
    defer db.Close()

    repo := NewUserRepository(db)

    // 创建用户
    user, err := repo.Create("alice", "alice@example.com", "password123")
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Printf("Created user: %+v\n", user)

    // 获取用户
    user, err = repo.GetByID(user.ID)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Printf("Retrieved user: %+v\n", user)

    // 列出所有用户
    users, err := repo.List(10, 0)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Printf("Found %d users\n", len(users))

    // 统计用户数
    count, err := repo.Count()
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Printf("Total users: %d\n", count)
}`}</code>
      </pre>
      <p>## 13.9 练习题</p>

    </div>
  );
}

export const metadata = {
  id: '13-7-1',
  title: '简单迁移系统',
  section: '13.7.1'
};
