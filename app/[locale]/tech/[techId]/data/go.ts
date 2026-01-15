import { TechDetail } from '../types';

export const goData: TechDetail = {
  name: "Go",
  description: "高效、简洁、并发的编程语言",
  icon: "/images/go-gopher.png",
  color: "from-cyan-500 to-blue-600",
  officialLink: "https://go.dev/",
  content: [
    {
      title: "Go 核心概念",
      items: [
        {
          id: "goroutines-channels",
          name: "Goroutines & Channels",
          link: "https://go.dev/tour/concurrency/1",
          description: "Go 的并发模型基于 CSP（通信顺序进程），通过 goroutines 和 channels 实现轻量级并发。",
          content: `Go 语言的并发模型是其最强大的特性之一。与传统的线程模型不同，Go 使用 goroutines 提供轻量级的并发支持，并通过 channels 实现 goroutines 之间的安全通信。

**Goroutines**：
Goroutines 是 Go 运行时管理的轻量级线程。相比操作系统线程，goroutines 占用的内存更小（初始只有 2KB），创建和切换的开销也更低。

**Goroutines 的特点**：
1. **轻量级**：可以轻松创建成千上万个 goroutines
2. **由 Go 运行时调度**：不需要手动管理线程
3. **简单的启动语法**：只需在函数调用前加 \`go\` 关键字
4. **共享内存**：多个 goroutines 可以访问共享变量（需要同步机制）

**Channels**：
Channels 是 Go 中用于 goroutines 之间通信的管道。它们提供了一种类型安全的方式来发送和接收数据。

**Channels 的特点**：
1. **类型安全**：channel 只能传输特定类型的数据
2. **同步机制**：无缓冲 channel 会阻塞发送和接收操作
3. **方向性**：可以指定 channel 为只读或只写
4. **关闭通知**：可以关闭 channel 来通知接收方

**缓冲 vs 无缓冲 Channels**：
- 无缓冲 channel：发送操作会阻塞直到有接收方准备好
- 缓冲 channel：只有当缓冲区满时发送操作才会阻塞`,
          codeExample: `// 基本的 Goroutine
package main

import (
    "fmt"
    "time"
)

func sayHello(name string) {
    for i := 0; i < 3; i++ {
        fmt.Printf("Hello, %s! (%d)\\n", name, i)
        time.Sleep(100 * time.Millisecond)
    }
}

func main() {
    // 启动 goroutine
    go sayHello("Alice")
    go sayHello("Bob")

    // 主 goroutine 继续执行
    time.Sleep(400 * time.Millisecond)
    fmt.Println("Main done")
}

// 无缓冲 Channel
func main() {
    ch := make(chan string)

    // 发送 goroutine
    go func() {
        ch <- "Hello from goroutine"
    }()

    // 接收数据（会阻塞直到有数据）
    msg := <-ch
    fmt.Println(msg)
}

// 缓冲 Channel
func main() {
    ch := make(chan int, 2) // 容量为 2

    ch <- 1
    ch <- 2
    // ch <- 3 // 这会阻塞，因为缓冲区已满

    fmt.Println(<-ch) // 1
    fmt.Println(<-ch) // 2
}

// 单向 Channel
func sendOnly(ch chan<- string) {
    ch <- "data" // 只能发送
}

func receiveOnly(ch <-chan string) {
    msg := <-ch // 只能接收
    fmt.Println(msg)
}

// 使用 select 处理多个 channel
func main() {
    ch1 := make(chan string)
    ch2 := make(chan string)

    go func() {
        time.Sleep(1 * time.Second)
        ch1 <- "from channel 1"
    }()

    go func() {
        time.Sleep(2 * time.Second)
        ch2 <- "from channel 2"
    }()

    // select 会阻塞直到某个 case 准备好
    for i := 0; i < 2; i++ {
        select {
        case msg1 := <-ch1:
            fmt.Println(msg1)
        case msg2 := <-ch2:
            fmt.Println(msg2)
        case <-time.After(3 * time.Second):
            fmt.Println("timeout")
        }
    }
}

// 关闭 Channel
func worker(jobs <-chan int, results chan<- int) {
    for job := range jobs { // range 会在 channel 关闭后退出
        results <- job * 2
    }
}

func main() {
    jobs := make(chan int, 5)
    results := make(chan int, 5)

    // 启动 3 个 worker
    for w := 1; w <= 3; w++ {
        go worker(jobs, results)
    }

    // 发送任务
    for j := 1; j <= 5; j++ {
        jobs <- j
    }
    close(jobs) // 关闭 jobs channel

    // 收集结果
    for a := 1; a <= 5; a++ {
        <-results
    }
}

// WaitGroup 用于等待多个 goroutine 完成
import "sync"

func main() {
    var wg sync.WaitGroup

    for i := 1; i <= 3; i++ {
        wg.Add(1) // 增加计数器

        go func(id int) {
            defer wg.Done() // 完成时减少计数器
            fmt.Printf("Worker %d starting\\n", id)
            time.Sleep(time.Second)
            fmt.Printf("Worker %d done\\n", id)
        }(i)
    }

    wg.Wait() // 阻塞直到计数器为 0
    fmt.Println("All workers done")
}`,
        },
        {
          id: "interfaces",
          name: "Interfaces（接口）",
          link: "https://go.dev/tour/methods/9",
          description: "Go 的接口是隐式实现的，提供了灵活的多态机制。",
          content: `Go 的接口系统是其类型系统的核心特性。与其他语言不同，Go 的接口是隐式实现的——类型不需要显式声明它实现了某个接口。

**接口的定义**：
接口是方法签名的集合。任何类型只要实现了接口中的所有方法，就自动实现了该接口。

**接口的特点**：
1. **隐式实现**：不需要显式声明实现关系
2. **小接口原则**：Go 推荐定义小而精的接口
3. **组合优于继承**：通过嵌入接口实现接口组合
4. **空接口**：\`interface{}\` 可以持有任何类型的值

**接口的优势**：
1. **解耦**：依赖抽象而非具体实现
2. **可测试性**：容易创建 mock 对象
3. **灵活性**：可以为不同类型提供统一的行为
4. **多态**：通过接口实现多态性

**类型断言和类型切换**：
可以使用类型断言来获取接口底层的具体类型，或使用类型切换来处理不同类型。

**常用接口**：
- \`io.Reader\`、\`io.Writer\`：I/O 操作
- \`fmt.Stringer\`：自定义字符串表示
- \`error\`：错误处理
- \`sort.Interface\`：排序`,
          codeExample: `// 定义接口
package main

import (
    "fmt"
    "math"
)

// 形状接口
type Shape interface {
    Area() float64
    Perimeter() float64
}

// 矩形类型
type Rectangle struct {
    Width, Height float64
}

// 实现 Shape 接口（隐式）
func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

func (r Rectangle) Perimeter() float64 {
    return 2 * (r.Width + r.Height)
}

// 圆形类型
type Circle struct {
    Radius float64
}

func (c Circle) Area() float64 {
    return math.Pi * c.Radius * c.Radius
}

func (c Circle) Perimeter() float64 {
    return 2 * math.Pi * c.Radius
}

// 使用接口
func printShapeInfo(s Shape) {
    fmt.Printf("面积: %.2f\\n", s.Area())
    fmt.Printf("周长: %.2f\\n", s.Perimeter())
}

func main() {
    rect := Rectangle{Width: 10, Height: 5}
    circle := Circle{Radius: 7}

    printShapeInfo(rect)
    printShapeInfo(circle)
}

// 空接口
func describe(i interface{}) {
    fmt.Printf("值: %v, 类型: %T\\n", i, i)
}

func main() {
    describe(42)
    describe("hello")
    describe(true)
    describe([]int{1, 2, 3})
}

// 类型断言
func main() {
    var i interface{} = "hello"

    // 类型断言
    s := i.(string)
    fmt.Println(s) // "hello"

    // 安全的类型断言
    s, ok := i.(string)
    if ok {
        fmt.Println("是字符串:", s)
    }

    // 错误的类型断言（会 panic）
    // f := i.(float64) // panic!

    // 安全版本
    f, ok := i.(float64)
    if !ok {
        fmt.Println("不是 float64")
    }
}

// 类型切换
func do(i interface{}) {
    switch v := i.(type) {
    case int:
        fmt.Printf("整数: %d\\n", v)
    case string:
        fmt.Printf("字符串: %s\\n", v)
    case bool:
        fmt.Printf("布尔值: %t\\n", v)
    default:
        fmt.Printf("未知类型: %T\\n", v)
    }
}

func main() {
    do(21)
    do("hello")
    do(true)
    do([]int{1, 2, 3})
}

// 接口组合
type Reader interface {
    Read(p []byte) (n int, err error)
}

type Writer interface {
    Write(p []byte) (n int, err error)
}

type ReadWriter interface {
    Reader
    Writer
}

// 实现 fmt.Stringer 接口
type Person struct {
    Name string
    Age  int
}

func (p Person) String() string {
    return fmt.Sprintf("%s (%d 岁)", p.Name, p.Age)
}

func main() {
    p := Person{Name: "Alice", Age: 30}
    fmt.Println(p) // 自动调用 String() 方法
}

// 错误接口
type MyError struct {
    When time.Time
    What string
}

func (e MyError) Error() string {
    return fmt.Sprintf("在 %v 发生错误: %s", e.When, e.What)
}

func doSomething() error {
    return MyError{
        When: time.Now(),
        What: "出错了",
    }
}`,
        },
        {
          id: "struct-methods",
          name: "Struct & Methods",
          link: "https://go.dev/tour/methods/1",
          description: "结构体和方法是 Go 实现面向对象编程的基础。",
          content: `Go 虽然不是传统的面向对象语言，但通过结构体（struct）和方法（methods）提供了类似的功能。

**结构体**：
结构体是字段的集合，用于将相关数据组合在一起。

**结构体的特点**：
1. **值类型**：结构体是值类型，赋值时会复制
2. **嵌入**：支持结构体嵌入实现类似继承的功能
3. **标签**：可以为字段添加元数据标签
4. **零值**：结构体的零值是所有字段都为零值的结构体

**方法**：
方法是附加在类型上的函数。通过接收者（receiver）将函数绑定到类型上。

**方法的特点**：
1. **接收者类型**：可以是值接收者或指针接收者
2. **自动解引用**：Go 会自动处理指针和值的转换
3. **方法集**：类型的方法集包含其所有方法

**值接收者 vs 指针接收者**：
- **值接收者**：方法接收值的副本，不能修改原始值
- **指针接收者**：方法接收指针，可以修改原始值

**何时使用指针接收者**：
1. 方法需要修改接收者
2. 接收者是大型结构体，避免复制
3. 保持一致性（如果某个方法使用指针，其他方法也应该使用）

**结构体嵌入**：
Go 通过嵌入实现代码复用，类似于继承但更灵活。`,
          codeExample: `// 定义结构体
package main

import "fmt"

type Person struct {
    Name    string
    Age     int
    Email   string
}

// 创建结构体实例
func main() {
    // 方式 1：字段名初始化
    p1 := Person{
        Name:  "Alice",
        Age:   30,
        Email: "alice@example.com",
    }

    // 方式 2：按顺序初始化
    p2 := Person{"Bob", 25, "bob@example.com"}

    // 方式 3：零值初始化
    var p3 Person
    p3.Name = "Charlie"

    // 方式 4：使用 new
    p4 := new(Person)
    p4.Name = "David"

    fmt.Println(p1, p2, p3, p4)
}

// 值接收者方法
type Rectangle struct {
    Width, Height float64
}

func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

func (r Rectangle) Scale(factor float64) {
    r.Width *= factor  // 修改的是副本，不影响原始值
    r.Height *= factor
}

func main() {
    rect := Rectangle{Width: 10, Height: 5}
    fmt.Println("面积:", rect.Area())

    rect.Scale(2)
    fmt.Println(rect) // {10 5} - 没有改变
}

// 指针接收者方法
func (r *Rectangle) ScalePtr(factor float64) {
    r.Width *= factor  // 修改原始值
    r.Height *= factor
}

func main() {
    rect := Rectangle{Width: 10, Height: 5}
    rect.ScalePtr(2) // Go 自动转换为 (&rect).ScalePtr(2)
    fmt.Println(rect) // {20 10} - 已改变
}

// 结构体嵌入
type Animal struct {
    Name string
    Age  int
}

func (a Animal) Speak() {
    fmt.Printf("%s makes a sound\\n", a.Name)
}

type Dog struct {
    Animal      // 嵌入 Animal
    Breed string
}

func (d Dog) Speak() { // 重写方法
    fmt.Printf("%s barks\\n", d.Name)
}

func main() {
    dog := Dog{
        Animal: Animal{Name: "Buddy", Age: 5},
        Breed:  "Golden Retriever",
    }

    dog.Speak()        // "Buddy barks"
    dog.Animal.Speak() // "Buddy makes a sound"

    // 可以直接访问嵌入类型的字段
    fmt.Println(dog.Name) // "Buddy"
    fmt.Println(dog.Age)  // 5
}

// 结构体标签
import (
    "encoding/json"
    "fmt"
)

type User struct {
    Name     string \`json:"name"\`
    Email    string \`json:"email,omitempty"\`
    Password string \`json:"-"\` // 忽略该字段
    Age      int    \`json:"age,string"\`
}

func main() {
    user := User{
        Name:     "Alice",
        Email:    "alice@example.com",
        Password: "secret123",
        Age:      30,
    }

    jsonData, _ := json.Marshal(user)
    fmt.Println(string(jsonData))
    // {"name":"Alice","email":"alice@example.com","age":"30"}
}

// 构造函数模式
type Account struct {
    id      int
    balance float64
}

func NewAccount(id int) *Account {
    return &Account{
        id:      id,
        balance: 0,
    }
}

func (a *Account) Deposit(amount float64) {
    a.balance += amount
}

func (a *Account) Withdraw(amount float64) bool {
    if a.balance >= amount {
        a.balance -= amount
        return true
    }
    return false
}

func (a *Account) Balance() float64 {
    return a.balance
}

func main() {
    acc := NewAccount(1001)
    acc.Deposit(100)
    acc.Withdraw(30)
    fmt.Printf("余额: %.2f\\n", acc.Balance())
}`,
        },
        {
          id: "error-handling",
          name: "Error Handling",
          link: "https://go.dev/blog/error-handling-and-go",
          description: "Go 使用显式的错误返回值而非异常机制来处理错误。",
          content: `Go 的错误处理机制与大多数其他语言不同。Go 不使用异常（exceptions），而是使用显式的错误返回值。

**Error 接口**：
Go 的错误处理基于内置的 \`error\` 接口：
\`\`\`go
type error interface {
    Error() string
}
\`\`\`

**错误处理的特点**：
1. **显式处理**：必须显式检查和处理错误
2. **多返回值**：函数通常返回结果和错误
3. **及早返回**：遇到错误立即返回
4. **自定义错误**：可以创建自定义错误类型

**创建错误**：
1. \`errors.New()\`：创建简单的错误
2. \`fmt.Errorf()\`：格式化错误信息
3. 自定义错误类型：实现 \`error\` 接口

**错误处理模式**：
1. **检查后返回**：最常见的模式
2. **错误包装**：使用 \`%w\` 保留原始错误
3. **错误判断**：使用 \`errors.Is()\` 和 \`errors.As()\`
4. **panic 和 recover**：用于不可恢复的错误

**最佳实践**：
1. 不要忽略错误
2. 为错误添加上下文信息
3. 在适当的层级处理错误
4. 使用哨兵错误（sentinel errors）表示特定的错误条件`,
          codeExample: `// 基本错误处理
package main

import (
    "errors"
    "fmt"
)

func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("除数不能为零")
    }
    return a / b, nil
}

func main() {
    result, err := divide(10, 2)
    if err != nil {
        fmt.Println("错误:", err)
        return
    }
    fmt.Println("结果:", result)

    _, err = divide(10, 0)
    if err != nil {
        fmt.Println("错误:", err)
    }
}

// 使用 fmt.Errorf 格式化错误
import (
    "fmt"
    "os"
)

func readFile(filename string) ([]byte, error) {
    data, err := os.ReadFile(filename)
    if err != nil {
        return nil, fmt.Errorf("读取文件 %s 失败: %w", filename, err)
    }
    return data, nil
}

// 自定义错误类型
type ValidationError struct {
    Field   string
    Message string
}

func (e ValidationError) Error() string {
    return fmt.Sprintf("验证错误 [%s]: %s", e.Field, e.Message)
}

func validateUser(name string, age int) error {
    if name == "" {
        return ValidationError{
            Field:   "name",
            Message: "名称不能为空",
        }
    }
    if age < 0 || age > 150 {
        return ValidationError{
            Field:   "age",
            Message: "年龄必须在 0 到 150 之间",
        }
    }
    return nil
}

func main() {
    err := validateUser("", 25)
    if err != nil {
        fmt.Println(err) // "验证错误 [name]: 名称不能为空"
    }
}

// 哨兵错误（Sentinel Errors）
var (
    ErrNotFound    = errors.New("未找到")
    ErrUnauthorized = errors.New("未授权")
    ErrInvalidInput = errors.New("无效输入")
)

func getUser(id int) (*User, error) {
    if id <= 0 {
        return nil, ErrInvalidInput
    }
    // 查找用户...
    return nil, ErrNotFound
}

func main() {
    _, err := getUser(0)
    if errors.Is(err, ErrInvalidInput) {
        fmt.Println("输入无效")
    } else if errors.Is(err, ErrNotFound) {
        fmt.Println("用户不存在")
    }
}

// 错误包装和解包
func processData() error {
    err := fetchData()
    if err != nil {
        return fmt.Errorf("处理数据失败: %w", err)
    }
    return nil
}

func fetchData() error {
    return fmt.Errorf("网络错误: %w", ErrNotFound)
}

func main() {
    err := processData()
    if err != nil {
        fmt.Println(err)
        // "处理数据失败: 网络错误: 未找到"

        // 检查原始错误
        if errors.Is(err, ErrNotFound) {
            fmt.Println("根本原因是未找到数据")
        }
    }
}

// 类型断言错误
func main() {
    err := validateUser("", 25)

    var validationErr ValidationError
    if errors.As(err, &validationErr) {
        fmt.Printf("字段 %s 验证失败: %s\\n",
            validationErr.Field,
            validationErr.Message)
    }
}

// panic 和 recover
func riskyOperation() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("恢复自 panic:", r)
        }
    }()

    fmt.Println("开始操作...")
    panic("出现严重错误!")
    fmt.Println("这行不会执行")
}

func main() {
    riskyOperation()
    fmt.Println("程序继续运行")
}

// 多个错误处理
func processMultipleFiles(files []string) error {
    var errs []error

    for _, file := range files {
        if err := processFile(file); err != nil {
            errs = append(errs, fmt.Errorf("处理 %s: %w", file, err))
        }
    }

    if len(errs) > 0 {
        return fmt.Errorf("处理文件时出现 %d 个错误", len(errs))
    }
    return nil
}`,
        },
        {
          id: "packages-modules",
          name: "Packages & Modules",
          link: "https://go.dev/doc/modules/managing-dependencies",
          description: "Go 的包系统和模块管理提供了清晰的代码组织方式。",
          content: `Go 的包系统是其代码组织的基础，而 Go Modules 是依赖管理的现代解决方案。

**包（Packages）**：
包是 Go 代码的基本组织单位。每个 Go 文件都属于一个包。

**包的特点**：
1. **包声明**：每个文件开头必须声明 \`package\`
2. **main 包**：可执行程序的入口包
3. **导入路径**：唯一标识一个包
4. **可见性**：大写字母开头的标识符是导出的（公开的）

**模块（Modules）**：
Go Modules 是 Go 1.11 引入的依赖管理系统。

**模块的特点**：
1. **go.mod 文件**：定义模块路径和依赖
2. **语义版本化**：使用 semver 版本号
3. **最小版本选择**：选择满足要求的最小版本
4. **go.sum 文件**：记录依赖的校验和

**包的组织**：
1. **内部包**：使用 \`internal\` 目录限制访问范围
2. **命令**：使用 \`cmd\` 目录存放可执行程序
3. **包文档**：使用注释为包和导出标识符添加文档

**常用命令**：
- \`go mod init\`：初始化模块
- \`go mod tidy\`：整理依赖
- \`go get\`：添加或更新依赖
- \`go list -m all\`：列出所有依赖

**最佳实践**：
1. 使用有意义的包名（简短、小写、单数）
2. 包名应该描述其提供的功能
3. 避免循环依赖
4. 保持包的职责单一`,
          codeExample: `// 包声明和导入
package main

import (
    "fmt"           // 标准库
    "math/rand"     // 嵌套包

    "github.com/user/project/utils" // 外部包
)

func main() {
    fmt.Println("Hello")
}

// 创建自定义包
// 文件: mathutil/mathutil.go
package mathutil

// Max 返回两个整数中的较大值（导出函数）
func Max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

// min 是包内私有函数（未导出）
func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}

// 使用自定义包
// 文件: main.go
package main

import (
    "fmt"
    "myproject/mathutil"
)

func main() {
    result := mathutil.Max(10, 20)
    fmt.Println(result) // 20

    // mathutil.min(10, 20) // 错误：min 未导出
}

// 初始化函数
package database

import "database/sql"

var db *sql.DB

// init 函数在包被导入时自动执行
func init() {
    var err error
    db, err = sql.Open("postgres", "connection_string")
    if err != nil {
        panic(err)
    }
}

// 包别名
import (
    "crypto/rand"
    mrand "math/rand" // 使用别名避免冲突
)

func main() {
    // 使用 crypto/rand
    rand.Read(bytes)

    // 使用 math/rand
    mrand.Intn(100)
}

// 初始化 Go Module
// 在终端执行:
// $ go mod init github.com/username/projectname

// go.mod 文件内容示例:
/*
module github.com/username/projectname

go 1.21

require (
    github.com/gin-gonic/gin v1.9.1
    gorm.io/gorm v1.25.5
)

require (
    github.com/bytedance/sonic v1.9.1 // indirect
    github.com/jinzhu/inflection v1.0.0 // indirect
    // ... 其他间接依赖
)
*/

// 添加依赖
// $ go get github.com/gin-gonic/gin

// 更新依赖
// $ go get -u github.com/gin-gonic/gin

// 整理依赖
// $ go mod tidy

// 项目结构示例
/*
myproject/
├── go.mod
├── go.sum
├── main.go
├── cmd/
│   ├── server/
│   │   └── main.go
│   └── worker/
│       └── main.go
├── internal/
│   ├── database/
│   │   └── db.go
│   └── auth/
│       └── auth.go
├── pkg/
│   ├── utils/
│   │   └── utils.go
│   └── models/
│       └── user.go
└── api/
    └── handler.go
*/

// internal 包（限制访问）
// internal/database/db.go
package database

type Connection struct {
    // ...
}

// 只有 myproject 及其子包可以导入 internal/database
// 外部项目无法导入

// 包文档
// 文件: calculator/calculator.go

// Package calculator 提供基本的数学运算功能。
//
// 此包实现了加、减、乘、除等基本运算。
// 所有函数都会进行错误检查，如除零检查。
package calculator

// Add 返回两个整数的和。
//
// 示例:
//   result := Add(2, 3) // result = 5
func Add(a, b int) int {
    return a + b
}

// Divide 返回 a 除以 b 的结果。
// 如果 b 为 0，返回错误。
func Divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("除数不能为零")
    }
    return a / b, nil
}

// 查看文档
// $ go doc calculator
// $ go doc calculator.Add`,
        },
      ],
    },
    {
      title: "实战案例",
      items: [
        {
          id: "go-examples",
          name: "Go 实战案例",
          link: "https://go.dev/",
          description: "通过实际案例深入学习 Go 的使用方法和最佳实践。",
          content: `这些案例展示了 Go 在实际开发中的应用，涵盖并发编程、Web 开发、数据库操作等常见场景。`,
          codeExample: `// 示例案例将通过专门的组件展示
console.log("查看下方的实战案例展示");`,
        },
      ],
    },
  ],
};
