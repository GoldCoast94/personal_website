import React from 'react';

interface Props {
  className?: string;
}

export default function 错误处理函数({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">9.6.3 错误处理函数</h3>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "fmt"
    "log"
)

// 错误处理辅助函数
func must(err error) {
    if err != nil {
        log.Fatal(err)
    }
}

func check(err error) {
    if err != nil {
        log.Println("Error:", err)
    }
}

func ignore(_ error) {
    // 显式忽略错误
}

// 链式错误处理
type Result struct {
    value interface{}
    err   error
}

func (r *Result) Then(fn func(interface{}) (interface{}, error)) *Result {
    if r.err != nil {
        return r
    }
    r.value, r.err = fn(r.value)
    return r
}

func (r *Result) Error() error {
    return r.err
}

func (r *Result) Value() interface{} {
    return r.value
}

func main() {
    // 使用must
    // must(someOperationThatMustSucceed())

    // 使用链式处理
    result := &Result{value: "hello"}
    result.Then(func(v interface{}) (interface{}, error) {
        s := v.(string)
        return s + " world", nil
    }).Then(func(v interface{}) (interface{}, error) {
        s := v.(string)
        return fmt.Sprintf("Message: %s", s), nil
    })

    if result.Error() != nil {
        fmt.Println("Error:", result.Error())
    } else {
        fmt.Println(result.Value())
    }
}`}</code>
      </pre>
      <p>## 9.7 实战：HTTP客户端错误处理</p>

      <pre className="code-block">
        <code className="language-go">{`package main

import (
    "context"
    "errors"
    "fmt"
    "io"
    "net/http"
    "time"
)

// 自定义错误类型
type HTTPError struct {
    StatusCode int
    Status     string
    URL        string
}

func (e *HTTPError) Error() string {
    return fmt.Sprintf("HTTP %d: %s (URL: %s)", e.StatusCode, e.Status, e.URL)
}

type TimeoutError struct {
    Duration time.Duration
}

func (e *TimeoutError) Error() string {
    return fmt.Sprintf("request timeout after %v", e.Duration)
}

func (e *TimeoutError) Timeout() bool {
    return true
}

// HTTP客户端
type Client struct {
    httpClient *http.Client
    timeout    time.Duration
}

func NewClient(timeout time.Duration) *Client {
    return &Client{
        httpClient: &http.Client{
            Timeout: timeout,
        },
        timeout: timeout,
    }
}

func (c *Client) Get(url string) ([]byte, error) {
    ctx, cancel := context.WithTimeout(context.Background(), c.timeout)
    defer cancel()

    req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
    if err != nil {
        return nil, fmt.Errorf("failed to create request: %w", err)
    }

    resp, err := c.httpClient.Do(req)
    if err != nil {
        if ctx.Err() == context.DeadlineExceeded {
            return nil, &TimeoutError{Duration: c.timeout}
        }
        return nil, fmt.Errorf("request failed: %w", err)
    }
    defer resp.Body.Close()

    if resp.StatusCode != http.StatusOK {
        return nil, &HTTPError{
            StatusCode: resp.StatusCode,
            Status:     resp.Status,
            URL:        url,
        }
    }

    body, err := io.ReadAll(resp.Body)
    if err != nil {
        return nil, fmt.Errorf("failed to read response body: %w", err)
    }

    return body, nil
}

func (c *Client) GetWithRetry(url string, maxRetries int) ([]byte, error) {
    var lastErr error

    for i := 0; i < maxRetries; i++ {
        data, err := c.Get(url)
        if err == nil {
            return data, nil
        }

        lastErr = err

        // 检查是否是临时错误
        var timeoutErr *TimeoutError
        var httpErr *HTTPError

        if errors.As(err, &timeoutErr) {
            fmt.Printf("Attempt %d: timeout, retrying...\n", i+1)
            time.Sleep(time.Second * time.Duration(i+1))
            continue
        }

        if errors.As(err, &httpErr) && httpErr.StatusCode >= 500 {
            fmt.Printf("Attempt %d: server error, retrying...\n", i+1)
            time.Sleep(time.Second * time.Duration(i+1))
            continue
        }

        // 不可重试的错误
        return nil, err
    }

    return nil, fmt.Errorf("max retries exceeded: %w", lastErr)
}

func main() {
    client := NewClient(5 * time.Second)

    // 测试正常请求
    data, err := client.Get("https://api.github.com")
    if err != nil {
        handleHTTPError(err)
    } else {
        fmt.Printf("Success: received %d bytes\n", len(data))
    }

    // 测试带重试的请求
    data, err = client.GetWithRetry("https://api.github.com", 3)
    if err != nil {
        handleHTTPError(err)
    } else {
        fmt.Printf("Success with retry: received %d bytes\n", len(data))
    }
}

func handleHTTPError(err error) {
    var httpErr *HTTPError
    var timeoutErr *TimeoutError

    switch {
    case errors.As(err, &httpErr):
        if httpErr.StatusCode == 404 {
            fmt.Println("Resource not found")
        } else if httpErr.StatusCode >= 500 {
            fmt.Println("Server error, please try again later")
        } else {
            fmt.Println("HTTP error:", httpErr)
        }
    case errors.As(err, &timeoutErr):
        fmt.Println("Request timeout, please check your connection")
    default:
        fmt.Println("Error:", err)
    }
}`}</code>
      </pre>
      <p>## 9.8 练习题</p>

    </div>
  );
}

export const metadata = {
  id: '9-6-3',
  title: '错误处理函数',
  section: '9.6.3'
};
