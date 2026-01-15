import { TechDetail } from '../../../types';

export const goDataJa: TechDetail = {
  name: "Go",
  description: "効率的でシンプルな並行処理プログラミング言語",
  icon: "/images/go-gopher.png",
  color: "from-cyan-500 to-blue-600",
  officialLink: "https://go.dev/",
  content: [
    {
      title: "Go のコア概念",
      items: [
        {
          id: "goroutines-channels",
          name: "Goroutines & Channels",
          link: "https://go.dev/tour/concurrency/1",
          description: "Go の並行処理モデルは CSP（Communicating Sequential Processes）に基づいており、goroutines と channels により軽量な並行処理を実現します。",
          content: `Go 言語の並行処理モデルは、最も強力な機能の一つです。従来のスレッドモデルとは異なり、Go は goroutines により軽量な並行処理サポートを提供し、channels を通じて goroutines 間の安全な通信を実現します。

**Goroutines**：
Goroutines は Go ランタイムが管理する軽量スレッドです。オペレーティングシステムのスレッドと比較して、goroutines は使用メモリが小さく（初期は 2KB のみ）、作成とコンテキストスイッチのオーバーヘッドも低くなります。

**Goroutines の特徴**：
1. **軽量**：数千から数万の goroutines を簡単に作成できる
2. **Go ランタイムによるスケジューリング**：手動でスレッドを管理する必要がない
3. **シンプルな起動構文**：関数呼び出しの前に \`go\` キーワードを付けるだけ
4. **メモリ共有**：複数の goroutines が共有変数にアクセス可能（同期機構が必要）

**Channels**：
Channels は Go で goroutines 間の通信に使用されるパイプです。型安全な方法でデータを送受信できます。

**Channels の特徴**：
1. **型安全**：channel は特定の型のデータのみを転送できる
2. **同期機構**：バッファなし channel は送受信操作をブロックする
3. **方向性**：channel を読み取り専用または書き込み専用として指定できる
4. **クローズ通知**：channel をクローズして受信側に通知できる

**バッファあり vs バッファなし Channels**：
- バッファなし channel：受信側が準備できるまで送信操作がブロックされる
- バッファあり channel：バッファが満杯になったときのみ送信操作がブロックされる`,
          codeExample: `// 基本的な Goroutine
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
    // goroutine を起動
    go sayHello("Alice")
    go sayHello("Bob")

    // メイン goroutine が実行を継続
    time.Sleep(400 * time.Millisecond)
    fmt.Println("Main done")
}

// バッファなし Channel
func main() {
    ch := make(chan string)

    // 送信 goroutine
    go func() {
        ch <- "Hello from goroutine"
    }()

    // データを受信（データがあるまでブロック）
    msg := <-ch
    fmt.Println(msg)
}

// バッファあり Channel
func main() {
    ch := make(chan int, 2) // 容量 2

    ch <- 1
    ch <- 2
    // ch <- 3 // これはブロックされる、バッファが満杯のため

    fmt.Println(<-ch) // 1
    fmt.Println(<-ch) // 2
}

// 単方向 Channel
func sendOnly(ch chan<- string) {
    ch <- "data" // 送信のみ可能
}

func receiveOnly(ch <-chan string) {
    msg := <-ch // 受信のみ可能
    fmt.Println(msg)
}

// select を使用して複数の channel を処理
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

    // select はいずれかの case が準備できるまでブロック
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

// Channel をクローズ
func worker(jobs <-chan int, results chan<- int) {
    for job := range jobs { // range は channel がクローズされると終了
        results <- job * 2
    }
}

func main() {
    jobs := make(chan int, 5)
    results := make(chan int, 5)

    // 3 つの worker を起動
    for w := 1; w <= 3; w++ {
        go worker(jobs, results)
    }

    // タスクを送信
    for j := 1; j <= 5; j++ {
        jobs <- j
    }
    close(jobs) // jobs channel をクローズ

    // 結果を収集
    for a := 1; a <= 5; a++ {
        <-results
    }
}

// WaitGroup を使用して複数の goroutine の完了を待つ
import "sync"

func main() {
    var wg sync.WaitGroup

    for i := 1; i <= 3; i++ {
        wg.Add(1) // カウンターを増加

        go func(id int) {
            defer wg.Done() // 完了時にカウンターを減少
            fmt.Printf("Worker %d starting\\n", id)
            time.Sleep(time.Second)
            fmt.Printf("Worker %d done\\n", id)
        }(i)
    }

    wg.Wait() // カウンターが 0 になるまでブロック
    fmt.Println("All workers done")
}`,
        },
        {
          id: "interfaces",
          name: "Interfaces（インターフェース）",
          link: "https://go.dev/tour/methods/9",
          description: "Go のインターフェースは暗黙的に実装され、柔軟なポリモーフィズム機構を提供します。",
          content: `Go のインターフェースシステムは、型システムのコア機能です。他の言語とは異なり、Go のインターフェースは暗黙的に実装されます。型はインターフェースを実装していることを明示的に宣言する必要がありません。

**インターフェースの定義**：
インターフェースはメソッドシグネチャの集合です。型がインターフェース内のすべてのメソッドを実装すれば、自動的にそのインターフェースを実装したことになります。

**インターフェースの特徴**：
1. **暗黙的実装**：実装関係を明示的に宣言する必要がない
2. **小さなインターフェース原則**：Go は小さく洗練されたインターフェースの定義を推奨
3. **継承より合成**：インターフェースの埋め込みによりインターフェース合成を実現
4. **空インターフェース**：\`interface{}\` は任意の型の値を保持できる

**インターフェースの利点**：
1. **疎結合**：具体的な実装ではなく抽象に依存
2. **テスト容易性**：モックオブジェクトを簡単に作成できる
3. **柔軟性**：異なる型に統一的な振る舞いを提供できる
4. **ポリモーフィズム**：インターフェースを通じてポリモーフィズムを実現

**型アサーションと型スイッチ**：
型アサーションを使用してインターフェースの基底にある具体的な型を取得したり、型スイッチを使用して異なる型を処理できます。

**よく使用されるインターフェース**：
- \`io.Reader\`、\`io.Writer\`：I/O 操作
- \`fmt.Stringer\`：カスタム文字列表現
- \`error\`：エラー処理
- \`sort.Interface\`：ソート`,
          codeExample: `// インターフェースの定義
package main

import (
    "fmt"
    "math"
)

// 図形インターフェース
type Shape interface {
    Area() float64
    Perimeter() float64
}

// 矩形型
type Rectangle struct {
    Width, Height float64
}

// Shape インターフェースを実装（暗黙的）
func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

func (r Rectangle) Perimeter() float64 {
    return 2 * (r.Width + r.Height)
}

// 円型
type Circle struct {
    Radius float64
}

func (c Circle) Area() float64 {
    return math.Pi * c.Radius * c.Radius
}

func (c Circle) Perimeter() float64 {
    return 2 * math.Pi * c.Radius
}

// インターフェースの使用
func printShapeInfo(s Shape) {
    fmt.Printf("面積: %.2f\\n", s.Area())
    fmt.Printf("周長: %.2f\\n", s.Perimeter())
}

func main() {
    rect := Rectangle{Width: 10, Height: 5}
    circle := Circle{Radius: 7}

    printShapeInfo(rect)
    printShapeInfo(circle)
}

// 空インターフェース
func describe(i interface{}) {
    fmt.Printf("値: %v, 型: %T\\n", i, i)
}

func main() {
    describe(42)
    describe("hello")
    describe(true)
    describe([]int{1, 2, 3})
}

// 型アサーション
func main() {
    var i interface{} = "hello"

    // 型アサーション
    s := i.(string)
    fmt.Println(s) // "hello"

    // 安全な型アサーション
    s, ok := i.(string)
    if ok {
        fmt.Println("文字列です:", s)
    }

    // 間違った型アサーション（panic が発生）
    // f := i.(float64) // panic!

    // 安全版
    f, ok := i.(float64)
    if !ok {
        fmt.Println("float64 ではありません")
    }
}

// 型スイッチ
func do(i interface{}) {
    switch v := i.(type) {
    case int:
        fmt.Printf("整数: %d\\n", v)
    case string:
        fmt.Printf("文字列: %s\\n", v)
    case bool:
        fmt.Printf("ブール値: %t\\n", v)
    default:
        fmt.Printf("未知の型: %T\\n", v)
    }
}

func main() {
    do(21)
    do("hello")
    do(true)
    do([]int{1, 2, 3})
}

// インターフェース合成
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

// fmt.Stringer インターフェースの実装
type Person struct {
    Name string
    Age  int
}

func (p Person) String() string {
    return fmt.Sprintf("%s (%d 歳)", p.Name, p.Age)
}

func main() {
    p := Person{Name: "Alice", Age: 30}
    fmt.Println(p) // String() メソッドが自動的に呼ばれる
}

// エラーインターフェース
type MyError struct {
    When time.Time
    What string
}

func (e MyError) Error() string {
    return fmt.Sprintf("%v にエラーが発生: %s", e.When, e.What)
}

func doSomething() error {
    return MyError{
        When: time.Now(),
        What: "エラーが発生しました",
    }
}`,
        },
        {
          id: "struct-methods",
          name: "Struct & Methods",
          link: "https://go.dev/tour/methods/1",
          description: "構造体とメソッドは Go でオブジェクト指向プログラミングを実現する基礎です。",
          content: `Go は伝統的なオブジェクト指向言語ではありませんが、構造体（struct）とメソッド（methods）を通じて似た機能を提供します。

**構造体**：
構造体はフィールドの集合で、関連するデータをまとめるために使用されます。

**構造体の特徴**：
1. **値型**：構造体は値型で、代入時にコピーされる
2. **埋め込み**：構造体の埋め込みにより継承に似た機能を実現
3. **タグ**：フィールドにメタデータタグを追加できる
4. **ゼロ値**：構造体のゼロ値は、すべてのフィールドがゼロ値の構造体

**メソッド**：
メソッドは型に付加される関数です。レシーバー（receiver）を通じて関数を型にバインドします。

**メソッドの特徴**：
1. **レシーバー型**：値レシーバーまたはポインタレシーバーを使用できる
2. **自動デリファレンス**：Go はポインタと値の変換を自動的に処理
3. **メソッドセット**：型のメソッドセットはそのすべてのメソッドを含む

**値レシーバー vs ポインタレシーバー**：
- **値レシーバー**：メソッドは値のコピーを受け取り、元の値を変更できない
- **ポインタレシーバー**：メソッドはポインタを受け取り、元の値を変更できる

**ポインタレシーバーを使用する場合**：
1. メソッドがレシーバーを変更する必要がある
2. レシーバーが大きな構造体で、コピーを避けたい
3. 一貫性を保つため（あるメソッドがポインタを使用する場合、他のメソッドも使用すべき）

**構造体の埋め込み**：
Go は埋め込みによりコードの再利用を実現します。継承に似ていますがより柔軟です。`,
          codeExample: `// 構造体の定義
package main

import "fmt"

type Person struct {
    Name    string
    Age     int
    Email   string
}

// 構造体インスタンスの作成
func main() {
    // 方法 1：フィールド名で初期化
    p1 := Person{
        Name:  "Alice",
        Age:   30,
        Email: "alice@example.com",
    }

    // 方法 2：順序で初期化
    p2 := Person{"Bob", 25, "bob@example.com"}

    // 方法 3：ゼロ値で初期化
    var p3 Person
    p3.Name = "Charlie"

    // 方法 4：new を使用
    p4 := new(Person)
    p4.Name = "David"

    fmt.Println(p1, p2, p3, p4)
}

// 値レシーバーメソッド
type Rectangle struct {
    Width, Height float64
}

func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

func (r Rectangle) Scale(factor float64) {
    r.Width *= factor  // コピーを変更、元の値に影響しない
    r.Height *= factor
}

func main() {
    rect := Rectangle{Width: 10, Height: 5}
    fmt.Println("面積:", rect.Area())

    rect.Scale(2)
    fmt.Println(rect) // {10 5} - 変更されていない
}

// ポインタレシーバーメソッド
func (r *Rectangle) ScalePtr(factor float64) {
    r.Width *= factor  // 元の値を変更
    r.Height *= factor
}

func main() {
    rect := Rectangle{Width: 10, Height: 5}
    rect.ScalePtr(2) // Go は自動的に (&rect).ScalePtr(2) に変換
    fmt.Println(rect) // {20 10} - 変更された
}

// 構造体の埋め込み
type Animal struct {
    Name string
    Age  int
}

func (a Animal) Speak() {
    fmt.Printf("%s makes a sound\\n", a.Name)
}

type Dog struct {
    Animal      // Animal を埋め込み
    Breed string
}

func (d Dog) Speak() { // メソッドをオーバーライド
    fmt.Printf("%s barks\\n", d.Name)
}

func main() {
    dog := Dog{
        Animal: Animal{Name: "Buddy", Age: 5},
        Breed:  "Golden Retriever",
    }

    dog.Speak()        // "Buddy barks"
    dog.Animal.Speak() // "Buddy makes a sound"

    // 埋め込み型のフィールドに直接アクセス可能
    fmt.Println(dog.Name) // "Buddy"
    fmt.Println(dog.Age)  // 5
}

// 構造体タグ
import (
    "encoding/json"
    "fmt"
)

type User struct {
    Name     string \`json:"name"\`
    Email    string \`json:"email,omitempty"\`
    Password string \`json:"-"\` // このフィールドを無視
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

// コンストラクタパターン
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
    fmt.Printf("残高: %.2f\\n", acc.Balance())
}`,
        },
        {
          id: "error-handling",
          name: "Error Handling",
          link: "https://go.dev/blog/error-handling-and-go",
          description: "Go は例外機構ではなく、明示的なエラー戻り値を使用してエラーを処理します。",
          content: `Go のエラー処理メカニズムは、他のほとんどの言語とは異なります。Go は例外（exceptions）を使用せず、明示的なエラー戻り値を使用します。

**Error インターフェース**：
Go のエラー処理は組み込みの \`error\` インターフェースに基づいています：
\`\`\`go
type error interface {
    Error() string
}
\`\`\`

**エラー処理の特徴**：
1. **明示的処理**：エラーを明示的にチェックし処理する必要がある
2. **複数の戻り値**：関数は通常、結果とエラーを返す
3. **早期リターン**：エラーに遭遇したら即座に返す
4. **カスタムエラー**：カスタムエラー型を作成できる

**エラーの作成**：
1. \`errors.New()\`：シンプルなエラーを作成
2. \`fmt.Errorf()\`：エラーメッセージをフォーマット
3. カスタムエラー型：\`error\` インターフェースを実装

**エラー処理パターン**：
1. **チェック後リターン**：最も一般的なパターン
2. **エラーラッピング**：\`%w\` を使用して元のエラーを保持
3. **エラー判定**：\`errors.Is()\` と \`errors.As()\` を使用
4. **panic と recover**：回復不可能なエラーに使用

**ベストプラクティス**：
1. エラーを無視しない
2. エラーにコンテキスト情報を追加
3. 適切なレベルでエラーを処理
4. センチネルエラー（sentinel errors）を使用して特定のエラー条件を表す`,
          codeExample: `// 基本的なエラー処理
package main

import (
    "errors"
    "fmt"
)

func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("ゼロで除算できません")
    }
    return a / b, nil
}

func main() {
    result, err := divide(10, 2)
    if err != nil {
        fmt.Println("エラー:", err)
        return
    }
    fmt.Println("結果:", result)

    _, err = divide(10, 0)
    if err != nil {
        fmt.Println("エラー:", err)
    }
}

// fmt.Errorf を使用してエラーをフォーマット
import (
    "fmt"
    "os"
)

func readFile(filename string) ([]byte, error) {
    data, err := os.ReadFile(filename)
    if err != nil {
        return nil, fmt.Errorf("ファイル %s の読み取りに失敗: %w", filename, err)
    }
    return data, nil
}

// カスタムエラー型
type ValidationError struct {
    Field   string
    Message string
}

func (e ValidationError) Error() string {
    return fmt.Sprintf("検証エラー [%s]: %s", e.Field, e.Message)
}

func validateUser(name string, age int) error {
    if name == "" {
        return ValidationError{
            Field:   "name",
            Message: "名前を空にすることはできません",
        }
    }
    if age < 0 || age > 150 {
        return ValidationError{
            Field:   "age",
            Message: "年齢は 0 から 150 の間でなければなりません",
        }
    }
    return nil
}

func main() {
    err := validateUser("", 25)
    if err != nil {
        fmt.Println(err) // "検証エラー [name]: 名前を空にすることはできません"
    }
}

// センチネルエラー（Sentinel Errors）
var (
    ErrNotFound    = errors.New("見つかりません")
    ErrUnauthorized = errors.New("権限がありません")
    ErrInvalidInput = errors.New("無効な入力")
)

func getUser(id int) (*User, error) {
    if id <= 0 {
        return nil, ErrInvalidInput
    }
    // ユーザーを検索...
    return nil, ErrNotFound
}

func main() {
    _, err := getUser(0)
    if errors.Is(err, ErrInvalidInput) {
        fmt.Println("入力が無効です")
    } else if errors.Is(err, ErrNotFound) {
        fmt.Println("ユーザーが存在しません")
    }
}

// エラーのラッピングとアンラッピング
func processData() error {
    err := fetchData()
    if err != nil {
        return fmt.Errorf("データ処理に失敗: %w", err)
    }
    return nil
}

func fetchData() error {
    return fmt.Errorf("ネットワークエラー: %w", ErrNotFound)
}

func main() {
    err := processData()
    if err != nil {
        fmt.Println(err)
        // "データ処理に失敗: ネットワークエラー: 見つかりません"

        // 元のエラーをチェック
        if errors.Is(err, ErrNotFound) {
            fmt.Println("根本原因はデータが見つからないこと")
        }
    }
}

// 型アサーションエラー
func main() {
    err := validateUser("", 25)

    var validationErr ValidationError
    if errors.As(err, &validationErr) {
        fmt.Printf("フィールド %s の検証に失敗: %s\\n",
            validationErr.Field,
            validationErr.Message)
    }
}

// panic と recover
func riskyOperation() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("panic から回復:", r)
        }
    }()

    fmt.Println("操作を開始...")
    panic("重大なエラーが発生!")
    fmt.Println("この行は実行されません")
}

func main() {
    riskyOperation()
    fmt.Println("プログラムは実行を継続")
}

// 複数のエラー処理
func processMultipleFiles(files []string) error {
    var errs []error

    for _, file := range files {
        if err := processFile(file); err != nil {
            errs = append(errs, fmt.Errorf("%s の処理: %w", file, err))
        }
    }

    if len(errs) > 0 {
        return fmt.Errorf("ファイル処理中に %d 個のエラーが発生", len(errs))
    }
    return nil
}`,
        },
        {
          id: "packages-modules",
          name: "Packages & Modules",
          link: "https://go.dev/doc/modules/managing-dependencies",
          description: "Go のパッケージシステムとモジュール管理は、明確なコード組織化方法を提供します。",
          content: `Go のパッケージシステムはコード組織化の基礎であり、Go Modules は依存関係管理の現代的なソリューションです。

**パッケージ（Packages）**：
パッケージは Go コードの基本的な組織単位です。各 Go ファイルは一つのパッケージに属します。

**パッケージの特徴**：
1. **パッケージ宣言**：各ファイルの先頭で \`package\` を宣言する必要がある
2. **main パッケージ**：実行可能プログラムのエントリポイントパッケージ
3. **インポートパス**：パッケージを一意に識別
4. **可視性**：大文字で始まる識別子はエクスポートされる（公開）

**モジュール（Modules）**：
Go Modules は Go 1.11 で導入された依存関係管理システムです。

**モジュールの特徴**：
1. **go.mod ファイル**：モジュールパスと依存関係を定義
2. **セマンティックバージョニング**：semver バージョン番号を使用
3. **最小バージョン選択**：要件を満たす最小バージョンを選択
4. **go.sum ファイル**：依存関係のチェックサムを記録

**パッケージの組織化**：
1. **internal パッケージ**：\`internal\` ディレクトリを使用してアクセス範囲を制限
2. **コマンド**：\`cmd\` ディレクトリを使用して実行可能プログラムを保存
3. **パッケージドキュメント**：コメントを使用してパッケージとエクスポートされた識別子にドキュメントを追加

**よく使用されるコマンド**：
- \`go mod init\`：モジュールを初期化
- \`go mod tidy\`：依存関係を整理
- \`go get\`：依存関係を追加または更新
- \`go list -m all\`：すべての依存関係をリスト

**ベストプラクティス**：
1. 意味のあるパッケージ名を使用（短く、小文字、単数形）
2. パッケージ名はその提供する機能を説明すべき
3. 循環依存を避ける
4. パッケージの責任を単一に保つ`,
          codeExample: `// パッケージ宣言とインポート
package main

import (
    "fmt"           // 標準ライブラリ
    "math/rand"     // ネストされたパッケージ

    "github.com/user/project/utils" // 外部パッケージ
)

func main() {
    fmt.Println("Hello")
}

// カスタムパッケージの作成
// ファイル: mathutil/mathutil.go
package mathutil

// Max は 2 つの整数の大きい方を返します（エクスポート関数）
func Max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

// min はパッケージ内のプライベート関数（エクスポートされない）
func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}

// カスタムパッケージの使用
// ファイル: main.go
package main

import (
    "fmt"
    "myproject/mathutil"
)

func main() {
    result := mathutil.Max(10, 20)
    fmt.Println(result) // 20

    // mathutil.min(10, 20) // エラー：min はエクスポートされていない
}

// 初期化関数
package database

import "database/sql"

var db *sql.DB

// init 関数はパッケージがインポートされたときに自動的に実行される
func init() {
    var err error
    db, err = sql.Open("postgres", "connection_string")
    if err != nil {
        panic(err)
    }
}

// パッケージエイリアス
import (
    "crypto/rand"
    mrand "math/rand" // エイリアスを使用して競合を回避
)

func main() {
    // crypto/rand を使用
    rand.Read(bytes)

    // math/rand を使用
    mrand.Intn(100)
}

// Go Module の初期化
// ターミナルで実行:
// $ go mod init github.com/username/projectname

// go.mod ファイルの内容例:
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
    // ... その他の間接依存関係
)
*/

// 依存関係の追加
// $ go get github.com/gin-gonic/gin

// 依存関係の更新
// $ go get -u github.com/gin-gonic/gin

// 依存関係の整理
// $ go mod tidy

// プロジェクト構造の例
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

// internal パッケージ（アクセス制限）
// internal/database/db.go
package database

type Connection struct {
    // ...
}

// myproject とそのサブパッケージのみが internal/database をインポートできる
// 外部プロジェクトはインポートできない

// パッケージドキュメント
// ファイル: calculator/calculator.go

// Package calculator は基本的な数学演算機能を提供します。
//
// このパッケージは加算、減算、乗算、除算などの基本演算を実装します。
// すべての関数はエラーチェックを行い、ゼロ除算チェックなどを含みます。
package calculator

// Add は 2 つの整数の合計を返します。
//
// 例:
//   result := Add(2, 3) // result = 5
func Add(a, b int) int {
    return a + b
}

// Divide は a を b で割った結果を返します。
// b が 0 の場合、エラーを返します。
func Divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("ゼロで除算できません")
    }
    return a / b, nil
}

// ドキュメントの表示
// $ go doc calculator
// $ go doc calculator.Add`,
        },
      ],
    },
    {
      title: "実践事例",
      items: [
        {
          id: "go-examples",
          name: "Go 実践事例",
          link: "https://go.dev/",
          description: "実際の事例を通じて Go の使用方法とベストプラクティスを深く学びます。",
          content: `これらの事例は、Go の実際の開発における応用を示し、並行処理プログラミング、Web 開発、データベース操作などの一般的なシナリオをカバーしています。`,
          codeExample: `// 実例は専用のコンポーネントを通じて表示されます
console.log("以下の実践事例の展示をご覧ください");`,
        },
      ],
    },
  ],
};
