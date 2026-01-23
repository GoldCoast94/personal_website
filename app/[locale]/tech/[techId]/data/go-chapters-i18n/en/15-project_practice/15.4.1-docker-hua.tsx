import React from 'react';

interface Props {
  className?: string;
}

export default function Dockerization({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">15.4.1 Dockerization</h3>

      <ul>
        <li>**Dockerfile:**</li>
      </ul>

      <pre className="code-block">
        <code className="language-dockerfile">{`FROM golang:1.21-alpine AS builder

WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o main .

FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/

COPY --from=builder /app/main .

EXPOSE 8080
CMD ["./main"]`}</code>
      </pre>

      <ul>
        <li>**docker-compose.yml:**</li>
      </ul>

      <pre className="code-block">
        <code className="language-yaml">{`version: '3.8'

services:
  app:
    build: .
    ports:
      - "8080:8080"
    environment:
      - DATABASE_URL=root:password@tcp(db:3306)/todoapp
      - JWT_SECRET=your-secret-key
    depends_on:
      - db

  db:
    image: mysql:8.0
    environment:
      - MYSQL_ROOT_PASSWORD=password
      - MYSQL_DATABASE=todoapp
    volumes:
      - mysql_data:/var/lib/mysql

volumes:
  mysql_data:`}</code>
      </pre>
      <p>## 15.5 Chapter Summary</p>
      <p>This chapter demonstrated through a complete Todo List API project:</p>

      <ul>
        <li>**Project Architecture**: Layered design and modularity</li>
        <li>**Database Integration**: MySQL operations and migrations</li>
        <li>**Authentication & Authorization**: JWT token implementation</li>
        <li>**Middleware Pattern**: Handling cross-cutting concerns</li>
        <li>**RESTful Design**: API best practices</li>
        <li>**Deployment Solutions**: Docker containerization</li>
      </ul>
      <p>This project covers the core concepts of Go web development and can serve as a starting point for real-world projects.</p>
      <p>## Book Summary</p>
      <p>Congratulations on completing "Go Language: From Beginner to Expert"!</p>
      <p>You have mastered:</p>

      <ul>
        <li>**Go Language Fundamentals**: Syntax, data types, control flow</li>
        <li>**Object-Oriented Programming**: Structs, methods, interfaces</li>
        <li>**Concurrent Programming**: Goroutines, channels, sync</li>
        <li>**Standard Library**: Package management, IO, error handling</li>
        <li>**Testing**: Unit testing, benchmark testing</li>
        <li>**Web Development**: HTTP servers, RESTful APIs</li>
        <li>**Database**: SQL operations, transaction processing</li>
        <li>**Advanced Features**: Reflection, generics, Context</li>
        <li>**Practical Projects**: Complete API project</li>
      </ul>
      <p>Recommendations for continued learning:</p>

      <ul>
        <li>Write more code and participate in open-source projects</li>
        <li>Study Go standard library source code in depth</li>
        <li>Learn microservice architecture (gRPC, Kubernetes)</li>
        <li>Explore Go applications in cloud-native computing</li>
        <li>Follow the Go community and latest developments</li>
      </ul>
      <p>Best wishes on your journey in the world of Go!</p>

    </div>
  );
}

export const metadata = {
  id: '15-4-1',
  title: 'Dockerization',
  section: '15.4.1'
};
