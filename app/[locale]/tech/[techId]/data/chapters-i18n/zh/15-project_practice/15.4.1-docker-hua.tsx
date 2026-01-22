import React from 'react';

interface Props {
  className?: string;
}

export default function Docker化({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">15.4.1 Docker化</h3>

      <ul>
        <li>*Dockerfile:**</li>
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
        <li>*docker-compose.yml:**</li>
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
      <p>## 15.5 本章小结</p>
      <p>本章通过一个完整的Todo List API项目，展示了：</p>

      <ul>
        <li>**项目架构**：分层设计和模块化</li>
        <li>**数据库集成**：MySQL操作和迁移</li>
        <li>**认证授权**：JWT token实现</li>
        <li>**中间件模式**：横切关注点处理</li>
        <li>**RESTful设计**：API最佳实践</li>
        <li>**部署方案**：Docker容器化</li>
      </ul>
      <p>这个项目涵盖了Go Web开发的核心概念，可以作为实际项目的起点。</p>
      <p>## 全书总结</p>
      <p>恭喜你完成了《Go语言从入门到精通》的学习！</p>
      <p>你已经掌握了：</p>

      <ul>
        <li>**Go语言基础**：语法、数据类型、控制流程</li>
        <li>**面向对象**：结构体、方法、接口</li>
        <li>**并发编程**：goroutine、channel、sync</li>
        <li>**标准库**：包管理、IO、错误处理</li>
        <li>**测试**：单元测试、基准测试</li>
        <li>**Web开发**：HTTP服务器、RESTful API</li>
        <li>**数据库**：SQL操作、事务处理</li>
        <li>**高级特性**：反射、泛型、Context</li>
        <li>**实战项目**：完整的API项目</li>
      </ul>
      <p>继续学习的建议：</p>

      <ul>
        <li>多写代码，参与开源项目</li>
        <li>深入学习Go标准库源码</li>
        <li>学习微服务架构（gRPC、Kubernetes）</li>
        <li>探索Go在云原生领域的应用</li>
        <li>关注Go语言社区和最新发展</li>
      </ul>
      <p>祝你在Go语言的世界里越走越远！</p>

    </div>
  );
}

export const metadata = {
  id: '15-4-1',
  title: 'Docker化',
  section: '15.4.1'
};
