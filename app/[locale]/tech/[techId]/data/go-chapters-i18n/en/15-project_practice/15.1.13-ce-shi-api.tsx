import React from 'react';

interface Props {
  className?: string;
}

export default function TestingApi({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">15.1.13 Testing API</h3>

      <pre className="code-block">
        <code className="language-bash">{`# Register user
curl -X POST http://localhost:8080/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"alice","email":"alice@example.com","password":"password123"}'

# Login
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"alice@example.com","password":"password123"}'

# Create Todo (requires token)
curl -X POST http://localhost:8080/api/todos \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"title":"Learn Go","description":"Complete Go tutorial"}'

# Get all Todos
curl -X GET http://localhost:8080/api/todos \
  -H "Authorization: Bearer YOUR_TOKEN"

# Update Todo
curl -X PUT http://localhost:8080/api/todos/1 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"completed":true}'

# Delete Todo
curl -X DELETE http://localhost:8080/api/todos/1 \
  -H "Authorization: Bearer YOUR_TOKEN"`}</code>
      </pre>
      <p>## 15.2 Project Summary</p>
      <p>This Todo List API project demonstrates:</p>

      <ul>
        <li>**Project Structure**: Clean layered architecture</li>
        <li>**Configuration Management**: Environment variable configuration</li>
        <li>**Database Operations**: MySQL CRUD operations</li>
        <li>**Authentication System**: JWT token authentication</li>
        <li>**Middleware**: Authentication and logging middleware</li>
        <li>**RESTful API**: Standard REST interface design</li>
        <li>**Error Handling**: Unified error response format</li>
        <li>**Security**: Password hashing, token validation</li>
      </ul>
      <p>## 15.3 Extension Suggestions</p>
      <p>You can continue to add the following features:</p>

      <ul>
        <li>**Pagination and Sorting**: Add pagination for list endpoints</li>
        <li>**Search Functionality**: Search todos by title</li>
        <li>**Data Validation**: More comprehensive input validation</li>
        <li>**Unit Testing**: Add tests for each layer</li>
        <li>**API Documentation**: Generate documentation using Swagger</li>
        <li>**Rate Limiting**: Prevent API abuse</li>
        <li>**Caching**: Use Redis for data caching</li>
        <li>**WebSocket**: Real-time update functionality</li>
      </ul>
      <p>## 15.4 Deployment Guide</p>

    </div>
  );
}

export const metadata = {
  id: '15-1-13',
  title: 'Testing API',
  section: '15.1.13'
};
