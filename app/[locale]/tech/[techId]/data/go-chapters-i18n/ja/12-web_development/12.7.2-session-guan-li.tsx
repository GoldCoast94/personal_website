import React from 'react';

interface Props {
  className?: string;
}

export default function Session管理({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">12.7.2 Session管理</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "crypto/rand"
    "encoding/base64"
    "fmt"
    "net/http"
    "sync"
    "time"
)

type Session struct {
    ID      string
    Data    map[string]interface{}
    Expires time.Time
}

type SessionManager struct {
    sessions map[string]*Session
    mu       sync.RWMutex
}

func NewSessionManager() *SessionManager {
    sm := &SessionManager{
        sessions: make(map[string]*Session),
    }

    // 期限切れのセッションをクリーンアップ
    go sm.cleanup()

    return sm
}

func (sm *SessionManager) Create() *Session {
    sm.mu.Lock()
    defer sm.mu.Unlock()

    session := &Session{
        ID:      generateSessionID(),
        Data:    make(map[string]interface{}),
        Expires: time.Now().Add(30 * time.Minute),
    }

    sm.sessions[session.ID] = session
    return session
}

func (sm *SessionManager) Get(id string) (*Session, bool) {
    sm.mu.RLock()
    defer sm.mu.RUnlock()

    session, exists := sm.sessions[id]
    if !exists || session.Expires.Before(time.Now()) {
        return nil, false
    }

    return session, true
}

func (sm *SessionManager) Destroy(id string) {
    sm.mu.Lock()
    defer sm.mu.Unlock()

    delete(sm.sessions, id)
}

func (sm *SessionManager) cleanup() {
    for {
        time.Sleep(5 * time.Minute)

        sm.mu.Lock()
        for id, session := range sm.sessions {
            if session.Expires.Before(time.Now()) {
                delete(sm.sessions, id)
            }
        }
        sm.mu.Unlock()
    }
}

func generateSessionID() string {
    b := make([]byte, 32)
    rand.Read(b)
    return base64.URLEncoding.EncodeToString(b)
}

var sessionManager = NewSessionManager()

func loginHandler(w http.ResponseWriter, r *http.Request) {
    session := sessionManager.Create()

    http.SetCookie(w, &http.Cookie{
        Name:     "session_id",
        Value:    session.ID,
        Expires:  session.Expires,
        HttpOnly: true,
        Path:     "/",
    })

    session.Data["username"] = "john"
    session.Data["role"] = "admin"

    fmt.Fprintf(w, "Logged in successfully")
}

func profileHandler(w http.ResponseWriter, r *http.Request) {
    cookie, err := r.Cookie("session_id")
    if err != nil {
        http.Error(w, "Unauthorized", http.StatusUnauthorized)
        return
    }

    session, exists := sessionManager.Get(cookie.Value)
    if !exists {
        http.Error(w, "Session expired", http.StatusUnauthorized)
        return
    }

    username := session.Data["username"]
    fmt.Fprintf(w, "Welcome, %s!", username)
}

func logoutHandler(w http.ResponseWriter, r *http.Request) {
    cookie, err := r.Cookie("session_id")
    if err == nil {
        sessionManager.Destroy(cookie.Value)
    }

    http.SetCookie(w, &http.Cookie{
        Name:    "session_id",
        Value:   "",
        Expires: time.Now().Add(-1 * time.Hour),
        Path:    "/",
    })

    fmt.Fprintf(w, "Logged out")
}

func main() {
    http.HandleFunc("/login", loginHandler)
    http.HandleFunc("/profile", profileHandler)
    http.HandleFunc("/logout", logoutHandler)

    fmt.Println("Server running on :8080")
    http.ListenAndServe(":8080", nil)
}`}</code>
      </pre>
      <p>## 12.8 実践：RESTful API</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "encoding/json"
    "fmt"
    "net/http"
    "strconv"
    "strings"
    "sync"
)

type User struct {
    ID    int    \`json:"id"\`
    Name  string \`json:"name"\`
    Email string \`json:"email"\`
}

type UserStore struct {
    users  map[int]*User
    nextID int
    mu     sync.RWMutex
}

func NewUserStore() *UserStore {
    return &UserStore{
        users:  make(map[int]*User),
        nextID: 1,
    }
}

func (s *UserStore) Create(name, email string) *User {
    s.mu.Lock()
    defer s.mu.Unlock()

    user := &User{
        ID:    s.nextID,
        Name:  name,
        Email: email,
    }
    s.nextID++
    s.users[user.ID] = user

    return user
}

func (s *UserStore) GetAll() []*User {
    s.mu.RLock()
    defer s.mu.RUnlock()

    users := make([]*User, 0, len(s.users))
    for _, user := range s.users {
        users = append(users, user)
    }
    return users
}

func (s *UserStore) Get(id int) (*User, bool) {
    s.mu.RLock()
    defer s.mu.RUnlock()

    user, exists := s.users[id]
    return user, exists
}

func (s *UserStore) Update(id int, name, email string) bool {
    s.mu.Lock()
    defer s.mu.Unlock()

    user, exists := s.users[id]
    if !exists {
        return false
    }

    if name != "" {
        user.Name = name
    }
    if email != "" {
        user.Email = email
    }

    return true
}

func (s *UserStore) Delete(id int) bool {
    s.mu.Lock()
    defer s.mu.Unlock()

    _, exists := s.users[id]
    if !exists {
        return false
    }

    delete(s.users, id)
    return true
}

type APIServer struct {
    store *UserStore
}

func NewAPIServer() *APIServer {
    return &APIServer{
        store: NewUserStore(),
    }
}

func (s *APIServer) ServeHTTP(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")

    path := r.URL.Path

    if path == "/api/users" {
        switch r.Method {
        case http.MethodGet:
            s.handleGetUsers(w, r)
        case http.MethodPost:
            s.handleCreateUser(w, r)
        default:
            w.WriteHeader(http.StatusMethodNotAllowed)
        }
        return
    }

    if strings.HasPrefix(path, "/api/users/") {
        idStr := strings.TrimPrefix(path, "/api/users/")
        id, err := strconv.Atoi(idStr)
        if err != nil {
            w.WriteHeader(http.StatusBadRequest)
            return
        }

        switch r.Method {
        case http.MethodGet:
            s.handleGetUser(w, r, id)
        case http.MethodPut:
            s.handleUpdateUser(w, r, id)
        case http.MethodDelete:
            s.handleDeleteUser(w, r, id)
        default:
            w.WriteHeader(http.StatusMethodNotAllowed)
        }
        return
    }

    w.WriteHeader(http.StatusNotFound)
}

func (s *APIServer) handleGetUsers(w http.ResponseWriter, r *http.Request) {
    users := s.store.GetAll()
    json.NewEncoder(w).Encode(users)
}

func (s *APIServer) handleCreateUser(w http.ResponseWriter, r *http.Request) {
    var req struct {
        Name  string \`json:"name"\`
        Email string \`json:"email"\`
    }

    if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
        w.WriteHeader(http.StatusBadRequest)
        return
    }

    user := s.store.Create(req.Name, req.Email)
    w.WriteHeader(http.StatusCreated)
    json.NewEncoder(w).Encode(user)
}

func (s *APIServer) handleGetUser(w http.ResponseWriter, r *http.Request, id int) {
    user, exists := s.store.Get(id)
    if !exists {
        w.WriteHeader(http.StatusNotFound)
        return
    }

    json.NewEncoder(w).Encode(user)
}

func (s *APIServer) handleUpdateUser(w http.ResponseWriter, r *http.Request, id int) {
    var req struct {
        Name  string \`json:"name"\`
        Email string \`json:"email"\`
    }

    if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
        w.WriteHeader(http.StatusBadRequest)
        return
    }

    if !s.store.Update(id, req.Name, req.Email) {
        w.WriteHeader(http.StatusNotFound)
        return
    }

    user, _ := s.store.Get(id)
    json.NewEncoder(w).Encode(user)
}

func (s *APIServer) handleDeleteUser(w http.ResponseWriter, r *http.Request, id int) {
    if !s.store.Delete(id) {
        w.WriteHeader(http.StatusNotFound)
        return
    }

    w.WriteHeader(http.StatusNoContent)
}

func main() {
    server := NewAPIServer()

    fmt.Println("Server running on :8080")
    fmt.Println("Try:")
    fmt.Println("  GET    http://localhost:8080/api/users")
    fmt.Println("  POST   http://localhost:8080/api/users")
    fmt.Println("  GET    http://localhost:8080/api/users/1")
    fmt.Println("  PUT    http://localhost:8080/api/users/1")
    fmt.Println("  DELETE http://localhost:8080/api/users/1")

    http.ListenAndServe(":8080", server)
}`}</code>
      </pre>
      <p>## 12.9 練習問題</p>

    </div>
  );
}

export const metadata = {
  id: '12-7-2',
  title: 'Session管理',
  section: '12.7.2'
};
