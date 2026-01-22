import React from 'react';

interface Props {
  className?: string;
}

export default function 练习5图片处理api({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">0 练习5：图片处理API</h3>
      <p>实现图片上传、缩放和格式转换功能。</p>
      <p>## 12.10 本章小结</p>
      <p>本章介绍了Go语言的Web开发基础：</p>

      <ul>
        <li>**HTTP服务器**：创建和配置HTTP服务器</li>
        <li>**请求处理**：处理不同类型的HTTP请求</li>
        <li>**JSON API**：构建RESTful API</li>
        <li>**路由和中间件**：组织和增强请求处理</li>
        <li>**文件操作**：上传和下载文件</li>
        <li>**模板引擎**：渲染HTML页面</li>
        <li>**Session管理**：用户会话和认证</li>
        <li>**实战项目**：完整的RESTful API</li>
      </ul>
      <p>Go的标准库提供了强大的Web开发能力，可以构建高性能的Web应用。</p>

    </div>
  );
}

export const metadata = {
  id: '0',
  title: '练习5：图片处理API',
  section: '0'
};
