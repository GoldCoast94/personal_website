import React from 'react';

interface Props {
  className?: string;
}

export default function 测试api({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">15.1.13 测试API</h3>

      <pre className="code-block">
        <code className="language-bash">{`# 注册用户
curl -X POST http://localhost:8080/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"alice","email":"alice@example.com","password":"password123"}'

# 登录
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"alice@example.com","password":"password123"}'

# 创建Todo（需要token）
curl -X POST http://localhost:8080/api/todos \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"title":"Learn Go","description":"Complete Go tutorial"}'

# 获取所有Todos
curl -X GET http://localhost:8080/api/todos \
  -H "Authorization: Bearer YOUR_TOKEN"

# 更新Todo
curl -X PUT http://localhost:8080/api/todos/1 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"completed":true}'

# 删除Todo
curl -X DELETE http://localhost:8080/api/todos/1 \
  -H "Authorization: Bearer YOUR_TOKEN"`}</code>
      </pre>
      <p>## 15.2 项目总结</p>
      <p>这个Todo List API项目展示了：</p>

      <ul>
        <li>**项目结构**：清晰的分层架构</li>
        <li>**配置管理**：环境变量配置</li>
        <li>**数据库操作**：MySQL CRUD操作</li>
        <li>**认证系统**：JWT token认证</li>
        <li>**中间件**：认证和日志中间件</li>
        <li>**RESTful API**：标准的REST接口设计</li>
        <li>**错误处理**：统一的错误响应格式</li>
        <li>**安全性**：密码哈希、token验证</li>
      </ul>
      <p>## 15.3 扩展建议</p>
      <p>可以继续添加以下功能：</p>

      <ul>
        <li>**分页和排序**：为列表接口添加分页</li>
        <li>**搜索功能**：按标题搜索todos</li>
        <li>**数据验证**：更完善的输入验证</li>
        <li>**单元测试**：为各个层添加测试</li>
        <li>**API文档**：使用Swagger生成文档</li>
        <li>**速率限制**：防止API滥用</li>
        <li>**缓存**：使用Redis缓存数据</li>
        <li>**WebSocket**：实时更新功能</li>
      </ul>
      <p>## 15.4 部署指南</p>

    </div>
  );
}

export const metadata = {
  id: '15-1-13',
  title: '测试API',
  section: '15.1.13'
};
