import React from 'react';

interface Props {
  className?: string;
}

export default function TodoハンドラHandlerstodogo({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">15.1.11 Todoハンドラ (handlers/todo.go)</h3>

      <pre className="code-block">
        <code className="language-go">{`package handlers

import (
    "database/sql"
    "encoding/json"
    "net/http"
    "strconv"
    "todoapi/database"
    "todoapi/middleware"
    "todoapi/models"
    "todoapi/utils"

    "github.com/gorilla/mux"
)

type TodoHandler struct {
    db *database.DB
}

func NewTodoHandler(db *database.DB) *TodoHandler {
    return &TodoHandler{db: db}
}

func (h *TodoHandler) Create(w http.ResponseWriter, r *http.Request) {
    userID, ok := middleware.GetUserID(r.Context())
    if !ok {
        utils.SendError(w, http.StatusUnauthorized, "Unauthorized")
        return
    }

    var req models.CreateTodoRequest
    if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
        utils.SendError(w, http.StatusBadRequest, "Invalid request body")
        return
    }

    if req.Title == "" {
        utils.SendError(w, http.StatusBadRequest, "Title is required")
        return
    }

    result, err := h.db.Exec(
        "INSERT INTO todos (user_id, title, description) VALUES (?, ?, ?)",
        userID, req.Title, req.Description,
    )
    if err != nil {
        utils.SendError(w, http.StatusInternalServerError, "Failed to create todo")
        return
    }

    todoID, _ := result.LastInsertId()
    todo := &models.Todo{
        ID:          int(todoID),
        UserID:      userID,
        Title:       req.Title,
        Description: req.Description,
        Completed:   false,
    }

    utils.SendSuccess(w, todo)
}

func (h *TodoHandler) List(w http.ResponseWriter, r *http.Request) {
    userID, ok := middleware.GetUserID(r.Context())
    if !ok {
        utils.SendError(w, http.StatusUnauthorized, "Unauthorized")
        return
    }

    rows, err := h.db.Query(
        "SELECT id, user_id, title, description, completed, created_at, updated_at FROM todos WHERE user_id = ?",
        userID,
    )
    if err != nil {
        utils.SendError(w, http.StatusInternalServerError, "Database error")
        return
    }
    defer rows.Close()

    var todos []models.Todo
    for rows.Next() {
        var todo models.Todo
        if err := rows.Scan(&todo.ID, &todo.UserID, &todo.Title, &todo.Description,
            &todo.Completed, &todo.CreatedAt, &todo.UpdatedAt); err != nil {
            continue
        }
        todos = append(todos, todo)
    }

    utils.SendSuccess(w, todos)
}

func (h *TodoHandler) Get(w http.ResponseWriter, r *http.Request) {
    userID, ok := middleware.GetUserID(r.Context())
    if !ok {
        utils.SendError(w, http.StatusUnauthorized, "Unauthorized")
        return
    }

    vars := mux.Vars(r)
    todoID, err := strconv.Atoi(vars["id"])
    if err != nil {
        utils.SendError(w, http.StatusBadRequest, "Invalid todo ID")
        return
    }

    var todo models.Todo
    err = h.db.QueryRow(
        "SELECT id, user_id, title, description, completed, created_at, updated_at FROM todos WHERE id = ? AND user_id = ?",
        todoID, userID,
    ).Scan(&todo.ID, &todo.UserID, &todo.Title, &todo.Description,
        &todo.Completed, &todo.CreatedAt, &todo.UpdatedAt)

    if err == sql.ErrNoRows {
        utils.SendError(w, http.StatusNotFound, "Todo not found")
        return
    }
    if err != nil {
        utils.SendError(w, http.StatusInternalServerError, "Database error")
        return
    }

    utils.SendSuccess(w, todo)
}

func (h *TodoHandler) Update(w http.ResponseWriter, r *http.Request) {
    userID, ok := middleware.GetUserID(r.Context())
    if !ok {
        utils.SendError(w, http.StatusUnauthorized, "Unauthorized")
        return
    }

    vars := mux.Vars(r)
    todoID, err := strconv.Atoi(vars["id"])
    if err != nil {
        utils.SendError(w, http.StatusBadRequest, "Invalid todo ID")
        return
    }

    var req models.UpdateTodoRequest
    if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
        utils.SendError(w, http.StatusBadRequest, "Invalid request body")
        return
    }

    // 更新クエリを構築
    query := "UPDATE todos SET "
    args := []interface{}{}
    updates := []string{}

    if req.Title != nil {
        updates = append(updates, "title = ?")
        args = append(args, *req.Title)
    }
    if req.Description != nil {
        updates = append(updates, "description = ?")
        args = append(args, *req.Description)
    }
    if req.Completed != nil {
        updates = append(updates, "completed = ?")
        args = append(args, *req.Completed)
    }

    if len(updates) == 0 {
        utils.SendError(w, http.StatusBadRequest, "No fields to update")
        return
    }

    query += strings.Join(updates, ", ")
    query += ", updated_at = NOW() WHERE id = ? AND user_id = ?"
    args = append(args, todoID, userID)

    result, err := h.db.Exec(query, args...)
    if err != nil {
        utils.SendError(w, http.StatusInternalServerError, "Failed to update todo")
        return
    }

    rows, _ := result.RowsAffected()
    if rows == 0 {
        utils.SendError(w, http.StatusNotFound, "Todo not found")
        return
    }

    utils.SendSuccess(w, map[string]string{"message": "Todo updated successfully"})
}

func (h *TodoHandler) Delete(w http.ResponseWriter, r *http.Request) {
    userID, ok := middleware.GetUserID(r.Context())
    if !ok {
        utils.SendError(w, http.StatusUnauthorized, "Unauthorized")
        return
    }

    vars := mux.Vars(r)
    todoID, err := strconv.Atoi(vars["id"])
    if err != nil {
        utils.SendError(w, http.StatusBadRequest, "Invalid todo ID")
        return
    }

    result, err := h.db.Exec("DELETE FROM todos WHERE id = ? AND user_id = ?", todoID, userID)
    if err != nil {
        utils.SendError(w, http.StatusInternalServerError, "Failed to delete todo")
        return
    }

    rows, _ := result.RowsAffected()
    if rows == 0 {
        utils.SendError(w, http.StatusNotFound, "Todo not found")
        return
    }

    w.WriteHeader(http.StatusNoContent)
}`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '15-1-11',
  title: 'Todoハンドラ (handlers/todo.go)',
  section: '15.1.11'
};
