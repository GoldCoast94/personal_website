import { TechDetail } from '../../../types';

export const goDataEn: TechDetail = {
  name: "Go",
  description: "Efficient, concise, and concurrent programming language",
  icon: "/images/go-gopher.png",
  color: "from-cyan-500 to-blue-600",
  officialLink: "https://go.dev/",
  content: [
    {
      title: "Go Core Concepts",
      items: [
        {
          id: "goroutines-channels",
          name: "Goroutines & Channels",
          link: "https://go.dev/tour/concurrency/1",
          description: "Go's concurrency model is based on CSP (Communicating Sequential Processes), implementing lightweight concurrency through goroutines and channels.",
          content: `Go's concurrency model is one of its most powerful features. Unlike traditional thread models, Go uses goroutines to provide lightweight concurrency support and enables safe communication between goroutines through channels.

**Goroutines**:
Goroutines are lightweight threads managed by the Go runtime. Compared to operating system threads, goroutines consume less memory (initially only 2KB) and have lower overhead for creation and context switching.

**Goroutines Characteristics**:
1. **Lightweight**: Can easily create thousands of goroutines
2. **Scheduled by Go runtime**: No need for manual thread management
3. **Simple startup syntax**: Just add the \`go\` keyword before a function call
4. **Shared memory**: Multiple goroutines can access shared variables (requires synchronization mechanisms)

**Channels**:
Channels are pipes in Go used for communication between goroutines. They provide a type-safe way to send and receive data.

**Channels Characteristics**:
1. **Type-safe**: Channels can only transmit specific types of data
2. **Synchronization mechanism**: Unbuffered channels block send and receive operations
3. **Directionality**: Channels can be specified as read-only or write-only
4. **Close notification**: Channels can be closed to notify receivers

**Buffered vs Unbuffered Channels**:
- Unbuffered channel: Send operations block until a receiver is ready
- Buffered channel: Send operations only block when the buffer is full`,
          codeExample: `// Basic Goroutine
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
    // Start goroutine
    go sayHello("Alice")
    go sayHello("Bob")

    // Main goroutine continues execution
    time.Sleep(400 * time.Millisecond)
    fmt.Println("Main done")
}

// Unbuffered Channel
func main() {
    ch := make(chan string)

    // Sender goroutine
    go func() {
        ch <- "Hello from goroutine"
    }()

    // Receive data (blocks until data is available)
    msg := <-ch
    fmt.Println(msg)
}

// Buffered Channel
func main() {
    ch := make(chan int, 2) // Capacity of 2

    ch <- 1
    ch <- 2
    // ch <- 3 // This would block because buffer is full

    fmt.Println(<-ch) // 1
    fmt.Println(<-ch) // 2
}

// Unidirectional Channel
func sendOnly(ch chan<- string) {
    ch <- "data" // Can only send
}

func receiveOnly(ch <-chan string) {
    msg := <-ch // Can only receive
    fmt.Println(msg)
}

// Using select to handle multiple channels
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

    // select blocks until one case is ready
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

// Closing Channel
func worker(jobs <-chan int, results chan<- int) {
    for job := range jobs { // range exits when channel is closed
        results <- job * 2
    }
}

func main() {
    jobs := make(chan int, 5)
    results := make(chan int, 5)

    // Start 3 workers
    for w := 1; w <= 3; w++ {
        go worker(jobs, results)
    }

    // Send jobs
    for j := 1; j <= 5; j++ {
        jobs <- j
    }
    close(jobs) // Close jobs channel

    // Collect results
    for a := 1; a <= 5; a++ {
        <-results
    }
}

// WaitGroup for waiting for multiple goroutines to complete
import "sync"

func main() {
    var wg sync.WaitGroup

    for i := 1; i <= 3; i++ {
        wg.Add(1) // Increment counter

        go func(id int) {
            defer wg.Done() // Decrement counter when done
            fmt.Printf("Worker %d starting\\n", id)
            time.Sleep(time.Second)
            fmt.Printf("Worker %d done\\n", id)
        }(i)
    }

    wg.Wait() // Block until counter is 0
    fmt.Println("All workers done")
}`,
        },
        {
          id: "interfaces",
          name: "Interfaces",
          link: "https://go.dev/tour/methods/9",
          description: "Go's interfaces are implicitly implemented, providing a flexible polymorphism mechanism.",
          content: `Go's interface system is a core feature of its type system. Unlike other languages, Go's interfaces are implicitly implemented—types don't need to explicitly declare that they implement an interface.

**Interface Definition**:
An interface is a collection of method signatures. Any type that implements all methods in an interface automatically implements that interface.

**Interface Characteristics**:
1. **Implicit implementation**: No need to explicitly declare implementation relationship
2. **Small interface principle**: Go recommends defining small and focused interfaces
3. **Composition over inheritance**: Achieve interface composition through embedding
4. **Empty interface**: \`interface{}\` can hold values of any type

**Interface Advantages**:
1. **Decoupling**: Depend on abstractions rather than concrete implementations
2. **Testability**: Easy to create mock objects
3. **Flexibility**: Can provide unified behavior for different types
4. **Polymorphism**: Achieve polymorphism through interfaces

**Type Assertion and Type Switch**:
Use type assertions to get the underlying concrete type of an interface, or use type switches to handle different types.

**Common Interfaces**:
- \`io.Reader\`, \`io.Writer\`: I/O operations
- \`fmt.Stringer\`: Custom string representation
- \`error\`: Error handling
- \`sort.Interface\`: Sorting`,
          codeExample: `// Defining interface
package main

import (
    "fmt"
    "math"
)

// Shape interface
type Shape interface {
    Area() float64
    Perimeter() float64
}

// Rectangle type
type Rectangle struct {
    Width, Height float64
}

// Implement Shape interface (implicitly)
func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

func (r Rectangle) Perimeter() float64 {
    return 2 * (r.Width + r.Height)
}

// Circle type
type Circle struct {
    Radius float64
}

func (c Circle) Area() float64 {
    return math.Pi * c.Radius * c.Radius
}

func (c Circle) Perimeter() float64 {
    return 2 * math.Pi * c.Radius
}

// Using interface
func printShapeInfo(s Shape) {
    fmt.Printf("Area: %.2f\\n", s.Area())
    fmt.Printf("Perimeter: %.2f\\n", s.Perimeter())
}

func main() {
    rect := Rectangle{Width: 10, Height: 5}
    circle := Circle{Radius: 7}

    printShapeInfo(rect)
    printShapeInfo(circle)
}

// Empty interface
func describe(i interface{}) {
    fmt.Printf("Value: %v, Type: %T\\n", i, i)
}

func main() {
    describe(42)
    describe("hello")
    describe(true)
    describe([]int{1, 2, 3})
}

// Type assertion
func main() {
    var i interface{} = "hello"

    // Type assertion
    s := i.(string)
    fmt.Println(s) // "hello"

    // Safe type assertion
    s, ok := i.(string)
    if ok {
        fmt.Println("is string:", s)
    }

    // Wrong type assertion (will panic)
    // f := i.(float64) // panic!

    // Safe version
    f, ok := i.(float64)
    if !ok {
        fmt.Println("not float64")
    }
}

// Type switch
func do(i interface{}) {
    switch v := i.(type) {
    case int:
        fmt.Printf("Integer: %d\\n", v)
    case string:
        fmt.Printf("String: %s\\n", v)
    case bool:
        fmt.Printf("Boolean: %t\\n", v)
    default:
        fmt.Printf("Unknown type: %T\\n", v)
    }
}

func main() {
    do(21)
    do("hello")
    do(true)
    do([]int{1, 2, 3})
}

// Interface composition
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

// Implementing fmt.Stringer interface
type Person struct {
    Name string
    Age  int
}

func (p Person) String() string {
    return fmt.Sprintf("%s (%d years old)", p.Name, p.Age)
}

func main() {
    p := Person{Name: "Alice", Age: 30}
    fmt.Println(p) // Automatically calls String() method
}

// Error interface
type MyError struct {
    When time.Time
    What string
}

func (e MyError) Error() string {
    return fmt.Sprintf("error occurred at %v: %s", e.When, e.What)
}

func doSomething() error {
    return MyError{
        When: time.Now(),
        What: "something went wrong",
    }
}`,
        },
        {
          id: "struct-methods",
          name: "Struct & Methods",
          link: "https://go.dev/tour/methods/1",
          description: "Structs and methods are the foundation for implementing object-oriented programming in Go.",
          content: `While Go is not a traditional object-oriented language, it provides similar functionality through structs and methods.

**Structs**:
Structs are collections of fields used to group related data together.

**Struct Characteristics**:
1. **Value type**: Structs are value types and are copied on assignment
2. **Embedding**: Support struct embedding for inheritance-like functionality
3. **Tags**: Can add metadata tags to fields
4. **Zero value**: A struct's zero value is a struct with all fields set to their zero values

**Methods**:
Methods are functions attached to types. They bind functions to types through receivers.

**Method Characteristics**:
1. **Receiver types**: Can be value receivers or pointer receivers
2. **Automatic dereferencing**: Go automatically handles pointer and value conversions
3. **Method set**: A type's method set includes all its methods

**Value Receiver vs Pointer Receiver**:
- **Value receiver**: Method receives a copy of the value, cannot modify original value
- **Pointer receiver**: Method receives a pointer, can modify original value

**When to Use Pointer Receiver**:
1. Method needs to modify the receiver
2. Receiver is a large struct, avoid copying
3. Consistency (if one method uses pointer, others should too)

**Struct Embedding**:
Go implements code reuse through embedding, similar to inheritance but more flexible.`,
          codeExample: `// Defining struct
package main

import "fmt"

type Person struct {
    Name    string
    Age     int
    Email   string
}

// Creating struct instances
func main() {
    // Method 1: Initialize with field names
    p1 := Person{
        Name:  "Alice",
        Age:   30,
        Email: "alice@example.com",
    }

    // Method 2: Initialize in order
    p2 := Person{"Bob", 25, "bob@example.com"}

    // Method 3: Zero value initialization
    var p3 Person
    p3.Name = "Charlie"

    // Method 4: Using new
    p4 := new(Person)
    p4.Name = "David"

    fmt.Println(p1, p2, p3, p4)
}

// Value receiver method
type Rectangle struct {
    Width, Height float64
}

func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

func (r Rectangle) Scale(factor float64) {
    r.Width *= factor  // Modifies copy, doesn't affect original value
    r.Height *= factor
}

func main() {
    rect := Rectangle{Width: 10, Height: 5}
    fmt.Println("Area:", rect.Area())

    rect.Scale(2)
    fmt.Println(rect) // {10 5} - unchanged
}

// Pointer receiver method
func (r *Rectangle) ScalePtr(factor float64) {
    r.Width *= factor  // Modifies original value
    r.Height *= factor
}

func main() {
    rect := Rectangle{Width: 10, Height: 5}
    rect.ScalePtr(2) // Go automatically converts to (&rect).ScalePtr(2)
    fmt.Println(rect) // {20 10} - changed
}

// Struct embedding
type Animal struct {
    Name string
    Age  int
}

func (a Animal) Speak() {
    fmt.Printf("%s makes a sound\\n", a.Name)
}

type Dog struct {
    Animal      // Embed Animal
    Breed string
}

func (d Dog) Speak() { // Override method
    fmt.Printf("%s barks\\n", d.Name)
}

func main() {
    dog := Dog{
        Animal: Animal{Name: "Buddy", Age: 5},
        Breed:  "Golden Retriever",
    }

    dog.Speak()        // "Buddy barks"
    dog.Animal.Speak() // "Buddy makes a sound"

    // Can directly access embedded type's fields
    fmt.Println(dog.Name) // "Buddy"
    fmt.Println(dog.Age)  // 5
}

// Struct tags
import (
    "encoding/json"
    "fmt"
)

type User struct {
    Name     string \`json:"name"\`
    Email    string \`json:"email,omitempty"\`
    Password string \`json:"-"\` // Ignore this field
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

// Constructor pattern
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
    fmt.Printf("Balance: %.2f\\n", acc.Balance())
}`,
        },
        {
          id: "error-handling",
          name: "Error Handling",
          link: "https://go.dev/blog/error-handling-and-go",
          description: "Go uses explicit error return values rather than exception mechanisms to handle errors.",
          content: `Go's error handling mechanism differs from most other languages. Go doesn't use exceptions but instead uses explicit error return values.

**Error Interface**:
Go's error handling is based on the built-in \`error\` interface:
\`\`\`go
type error interface {
    Error() string
}
\`\`\`

**Error Handling Characteristics**:
1. **Explicit handling**: Must explicitly check and handle errors
2. **Multiple return values**: Functions typically return result and error
3. **Early return**: Return immediately upon encountering an error
4. **Custom errors**: Can create custom error types

**Creating Errors**:
1. \`errors.New()\`: Create simple errors
2. \`fmt.Errorf()\`: Format error messages
3. Custom error types: Implement the \`error\` interface

**Error Handling Patterns**:
1. **Check and return**: Most common pattern
2. **Error wrapping**: Use \`%w\` to preserve original error
3. **Error checking**: Use \`errors.Is()\` and \`errors.As()\`
4. **panic and recover**: For unrecoverable errors

**Best Practices**:
1. Don't ignore errors
2. Add context to errors
3. Handle errors at appropriate levels
4. Use sentinel errors to represent specific error conditions`,
          codeExample: `// Basic error handling
package main

import (
    "errors"
    "fmt"
)

func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("divisor cannot be zero")
    }
    return a / b, nil
}

func main() {
    result, err := divide(10, 2)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Println("Result:", result)

    _, err = divide(10, 0)
    if err != nil {
        fmt.Println("Error:", err)
    }
}

// Using fmt.Errorf to format errors
import (
    "fmt"
    "os"
)

func readFile(filename string) ([]byte, error) {
    data, err := os.ReadFile(filename)
    if err != nil {
        return nil, fmt.Errorf("failed to read file %s: %w", filename, err)
    }
    return data, nil
}

// Custom error type
type ValidationError struct {
    Field   string
    Message string
}

func (e ValidationError) Error() string {
    return fmt.Sprintf("validation error [%s]: %s", e.Field, e.Message)
}

func validateUser(name string, age int) error {
    if name == "" {
        return ValidationError{
            Field:   "name",
            Message: "name cannot be empty",
        }
    }
    if age < 0 || age > 150 {
        return ValidationError{
            Field:   "age",
            Message: "age must be between 0 and 150",
        }
    }
    return nil
}

func main() {
    err := validateUser("", 25)
    if err != nil {
        fmt.Println(err) // "validation error [name]: name cannot be empty"
    }
}

// Sentinel Errors
var (
    ErrNotFound    = errors.New("not found")
    ErrUnauthorized = errors.New("unauthorized")
    ErrInvalidInput = errors.New("invalid input")
)

func getUser(id int) (*User, error) {
    if id <= 0 {
        return nil, ErrInvalidInput
    }
    // Find user...
    return nil, ErrNotFound
}

func main() {
    _, err := getUser(0)
    if errors.Is(err, ErrInvalidInput) {
        fmt.Println("Invalid input")
    } else if errors.Is(err, ErrNotFound) {
        fmt.Println("User does not exist")
    }
}

// Error wrapping and unwrapping
func processData() error {
    err := fetchData()
    if err != nil {
        return fmt.Errorf("failed to process data: %w", err)
    }
    return nil
}

func fetchData() error {
    return fmt.Errorf("network error: %w", ErrNotFound)
}

func main() {
    err := processData()
    if err != nil {
        fmt.Println(err)
        // "failed to process data: network error: not found"

        // Check original error
        if errors.Is(err, ErrNotFound) {
            fmt.Println("Root cause is data not found")
        }
    }
}

// Type asserting errors
func main() {
    err := validateUser("", 25)

    var validationErr ValidationError
    if errors.As(err, &validationErr) {
        fmt.Printf("Field %s validation failed: %s\\n",
            validationErr.Field,
            validationErr.Message)
    }
}

// panic and recover
func riskyOperation() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Recovered from panic:", r)
        }
    }()

    fmt.Println("Starting operation...")
    panic("serious error occurred!")
    fmt.Println("This line won't execute")
}

func main() {
    riskyOperation()
    fmt.Println("Program continues")
}

// Multiple error handling
func processMultipleFiles(files []string) error {
    var errs []error

    for _, file := range files {
        if err := processFile(file); err != nil {
            errs = append(errs, fmt.Errorf("processing %s: %w", file, err))
        }
    }

    if len(errs) > 0 {
        return fmt.Errorf("%d errors occurred while processing files", len(errs))
    }
    return nil
}`,
        },
        {
          id: "packages-modules",
          name: "Packages & Modules",
          link: "https://go.dev/doc/modules/managing-dependencies",
          description: "Go's package system and module management provide a clear way to organize code.",
          content: `Go's package system is the foundation of its code organization, and Go Modules is the modern solution for dependency management.

**Packages**:
Packages are the basic organizational unit of Go code. Every Go file belongs to a package.

**Package Characteristics**:
1. **Package declaration**: Every file must declare \`package\` at the beginning
2. **main package**: Entry package for executable programs
3. **Import path**: Uniquely identifies a package
4. **Visibility**: Identifiers starting with uppercase letters are exported (public)

**Modules**:
Go Modules is the dependency management system introduced in Go 1.11.

**Module Characteristics**:
1. **go.mod file**: Defines module path and dependencies
2. **Semantic versioning**: Uses semver version numbers
3. **Minimal version selection**: Selects minimum version that meets requirements
4. **go.sum file**: Records dependency checksums

**Package Organization**:
1. **Internal packages**: Use \`internal\` directory to restrict access scope
2. **Commands**: Use \`cmd\` directory for executable programs
3. **Package documentation**: Use comments to add documentation for packages and exported identifiers

**Common Commands**:
- \`go mod init\`: Initialize module
- \`go mod tidy\`: Tidy dependencies
- \`go get\`: Add or update dependencies
- \`go list -m all\`: List all dependencies

**Best Practices**:
1. Use meaningful package names (short, lowercase, singular)
2. Package names should describe the functionality they provide
3. Avoid circular dependencies
4. Keep package responsibilities single`,
          codeExample: `// Package declaration and import
package main

import (
    "fmt"           // Standard library
    "math/rand"     // Nested package

    "github.com/user/project/utils" // External package
)

func main() {
    fmt.Println("Hello")
}

// Creating custom package
// File: mathutil/mathutil.go
package mathutil

// Max returns the larger of two integers (exported function)
func Max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

// min is a package-private function (not exported)
func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}

// Using custom package
// File: main.go
package main

import (
    "fmt"
    "myproject/mathutil"
)

func main() {
    result := mathutil.Max(10, 20)
    fmt.Println(result) // 20

    // mathutil.min(10, 20) // Error: min not exported
}

// Initialization function
package database

import "database/sql"

var db *sql.DB

// init function automatically executes when package is imported
func init() {
    var err error
    db, err = sql.Open("postgres", "connection_string")
    if err != nil {
        panic(err)
    }
}

// Package aliases
import (
    "crypto/rand"
    mrand "math/rand" // Use alias to avoid conflict
)

func main() {
    // Use crypto/rand
    rand.Read(bytes)

    // Use math/rand
    mrand.Intn(100)
}

// Initialize Go Module
// In terminal execute:
// $ go mod init github.com/username/projectname

// go.mod file example content:
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
    // ... other indirect dependencies
)
*/

// Add dependency
// $ go get github.com/gin-gonic/gin

// Update dependency
// $ go get -u github.com/gin-gonic/gin

// Tidy dependencies
// $ go mod tidy

// Project structure example
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

// internal package (restricted access)
// internal/database/db.go
package database

type Connection struct {
    // ...
}

// Only myproject and its subpackages can import internal/database
// External projects cannot import

// Package documentation
// File: calculator/calculator.go

// Package calculator provides basic mathematical operation functionality.
//
// This package implements basic operations such as addition, subtraction, multiplication, and division.
// All functions perform error checking, such as division by zero checking.
package calculator

// Add returns the sum of two integers.
//
// Example:
//   result := Add(2, 3) // result = 5
func Add(a, b int) int {
    return a + b
}

// Divide returns the result of dividing a by b.
// Returns an error if b is 0.
func Divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("divisor cannot be zero")
    }
    return a / b, nil
}

// View documentation
// $ go doc calculator
// $ go doc calculator.Add`,
        },
      ],
    },
    {
      title: "Practical Examples",
      items: [
        {
          id: "go-examples",
          name: "Go Practical Examples",
          link: "https://go.dev/",
          description: "Learn Go usage methods and best practices through practical examples.",
          content: `These examples demonstrate Go's application in real development, covering common scenarios such as concurrent programming, web development, and database operations.`,
          codeExample: `// Example cases will be shown through dedicated components
console.log("View practical example demonstrations below");`,
        },
      ],
    },
  ],
};
