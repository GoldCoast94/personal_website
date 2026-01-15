import { TechDetail } from '../../../types';

export const reactDataJa: TechDetail = {
  name: "React",
  description: "ユーザーインターフェースを構築するためのJavaScriptライブラリ",
  icon: "/images/react-logo.svg",
  color: "from-blue-500 to-cyan-500",
  officialLink: "https://ja.react.dev/",
  content: [
    {
      title: "Reactコア概念",
      items: [
        {
          id: "components",
          name: "コンポーネント開発",
          link: "https://ja.react.dev/learn/your-first-component",
          description: "Reactのコアアイデアは、UIを独立した再利用可能なコンポーネントに分解することです。",
          content: `コンポーネントはReactアプリケーションの基本的な構成要素です。各コンポーネントは独立した再利用可能なコード片で、入力（props）を受け取り、画面に表示される内容を記述するReact要素を返します。

**関数コンポーネント**：
関数コンポーネントは最もシンプルで一般的に使用されるコンポーネント形式です。JSXを返すJavaScript関数です。

**コンポーネントの特徴**：
1. **独立性**：各コンポーネントは独自のロジックとスタイルを持ち、他のコンポーネントに依存しません
2. **再利用性**：同じコンポーネントを異なる場所で複数回使用できます
3. **組み合わせ性**：小さなコンポーネントを組み合わせて大きなコンポーネントを作り、コンポーネントツリーを形成できます
4. **カプセル化**：コンポーネント内部の実装の詳細は外部から見えません

**ベストプラクティス**：
- コンポーネントは単一の目的を持つようにし、一つのコンポーネントは一つのことだけを行う
- propsを使用してデータを渡し、コンポーネントの柔軟性を保つ
- 再利用可能なロジックをカスタムHookに抽出する
- 大きなコンポーネントを適切に分割し、過度に複雑にならないようにする`,
          codeExample: `// シンプルな関数コンポーネント
function Welcome({ name }) {
  return <h1>ようこそ, {name}!</h1>;
}

// コンポーネントの使用
function App() {
  return (
    <div>
      <Welcome name="太郎" />
      <Welcome name="花子" />
    </div>
  );
}

// 複数のpropsを持つコンポーネント
function UserCard({ avatar, name, role, email }) {
  return (
    <div className="user-card">
      <img src={avatar} alt={name} />
      <h2>{name}</h2>
      <p>{role}</p>
      <a href={\`mailto:\${email}\`}>{email}</a>
    </div>
  );
}

// コンポーネントの組み合わせ
function UserList({ users }) {
  return (
    <div className="user-list">
      {users.map(user => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
}`,
        },
        {
          id: "virtual-dom",
          name: "仮想DOM",
          link: "https://ja.react.dev/learn/preserving-and-resetting-state",
          description: "仮想DOMはReactのコアパフォーマンス最適化メカニズムで、高コストなDOM操作を最小限に抑えます。",
          content: `Reactはメモリ上に軽量な仮想DOMツリーを保持します。状態が変更されると、Reactは新しい仮想DOMツリーを作成し、差分検出アルゴリズム（diffアルゴリズム）を使用して前のツリーと効率的に比較します。このプロセスにより、必要な最小限の変更セットを特定し、それらをバッチ処理して実際のDOMに適用します。

**仮想DOMの動作原理**:
1. **初回レンダリング**: ReactはUIを表す仮想DOMツリーを作成します
2. **状態更新**: 状態が変更されると、Reactは新しい仮想DOMツリーを作成します
3. **差分検出**: Reactは新しいツリーと前のツリーを比較します
4. **再調整**: Reactは必要な最小限の変更セットを計算します
5. **バッチ更新**: 変更はバッチ処理され、実際のDOMに効率的に適用されます

**パフォーマンスの利点**:
- **バッチ更新**: 複数の状態変更が単一のレンダリングをトリガーします
- **最小限のDOM操作**: 変更された要素のみが更新されます
- **効率的なアルゴリズム**: O(n³)ではなくO(n)の複雑度
- **自動最適化**: Reactが内部的にパフォーマンスを処理します

**キー最適化 - Keys**:
適切なキーを使用することで、Reactはどのアイテムが変更、追加、削除されたかを識別でき、効率的なリスト更新が可能になります。`,
          codeExample: `// Reactの仮想DOMの動作概念
import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Reactを学ぶ', completed: false },
    { id: 2, text: 'プロジェクトを構築する', completed: false }
  ]);

  // toggleTodoが呼び出されると、Reactは:
  // 1. 新しい仮想DOMツリーを作成します
  // 2. 前の仮想DOMと比較します（差分検出）
  // 3. 実際のDOMで変更された<li>要素のみを更新します
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <ul>
      {todos.map(todo => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
}`,
          cases: [
            {
              title: "仮想DOMの再調整プロセス",
              description: "Reactの再調整アルゴリズムがレンダリングを最適化する仕組みを理解する",
              code: `// Reactの再調整アルゴリズムはキーを使用して要素を識別します
function UserList({ users }) {
  return (
    <div>
      {users.map(user => (
        // ✅ 良い例: 安定したキーを使用することで、Reactはどのアイテムが変更されたかを識別できます
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}

      {/* ❌ 悪い例: インデックスをキーとして使用すると、リストの順序が変わった時に問題が発生します
      {users.map((user, index) => (
        <div key={index}>
          <h3>{user.name}</h3>
        </div>
      ))} */}
    </div>
  );
}

// ユーザーが追加/削除/並び替えされた場合:
// - 適切なキーを使用: Reactは正確にどの要素が変更されたかを認識します
// - キーなしまたはインデックスキー: Reactは不必要に再レンダリングする可能性があります`
            },
            {
              title: "パフォーマンス比較: 仮想DOM vs 直接DOM操作",
              description: "仮想DOMの効率性と直接DOM操作の比較",
              code: `// 直接DOM操作（複雑な更新には非効率的）
function updateDOMDirectly(data) {
  const container = document.getElementById('container');
  container.innerHTML = ''; // DOM全体をクリア

  data.forEach(item => {
    const div = document.createElement('div');
    div.textContent = item.text;
    container.appendChild(div); // 各追加でリフローが発生
  });
}

// 仮想DOMを使用したReact（効率的）
function DataList({ data }) {
  // Reactは更新をバッチ処理し、変更された要素のみを変更します
  return (
    <div id="container">
      {data.map(item => (
        <div key={item.id}>{item.text}</div>
      ))}
    </div>
  );
}

// パフォーマンスの利点:
// 1. バッチ更新: 複数の状態変更が単一のレンダリングをトリガー
// 2. 最小限のDOM操作: 変更された要素のみが更新される
// 3. 効率的な差分検出: O(n³)ではなくO(n)の複雑度
// 4. 自動最適化: Reactが内部的にパフォーマンスを処理`
            }
          ]
        },
        {
          id: "jsx",
          name: "JSX構文",
          link: "https://ja.react.dev/learn/writing-markup-with-jsx",
          description: "JSXはJavaScriptの構文拡張で、JavaScriptコード内にHTMLライクなマークアップを記述できます。",
          content: `JSXはコンポーネント構造をより直感的で読みやすくします。コンパイル時に、JSXは通常のJavaScript関数呼び出しに変換されます。

**JSXの本質**:
JSXはシンタックスシュガーであり、最終的には \`React.createElement()\` 関数呼び出しに変換されます。これにより、宣言的な方法でUIを記述でき、マークアップとロジックを同じファイルに保持できます。

**JSXの基本ルール**:
1. **単一のルート要素**: コンポーネントは単一のルート要素を返す必要があります（または Fragment を使用）
2. **すべてのタグを閉じる**: HTMLとは異なり、すべてのタグを明示的に閉じる必要があります（例：\`<img />\`、\`<br />\`）
3. **キャメルケース**: ほとんどの属性はキャメルケースで記述します（例：\`className\`、\`onClick\`）
4. **予約語を避ける**: JavaScriptの予約語と衝突する属性には異なる名前を使用します（例：\`class\` の代わりに \`className\`）

**JSX内のJavaScript式**:
中括弧 \`{}\` を使用してJSX内にJavaScript式を埋め込むことができます。変数、関数呼び出し、算術演算、三項演算子などが使用できます。

**一般的なJSXパターン**:
- **条件付きレンダリング**: 三項演算子または論理AND演算子を使用
- **リストレンダリング**: \`map()\` を使用して配列をレンダリング
- **フラグメント**: 不要なDOM要素を追加せずに複数の要素をグループ化
- **スタイリング**: インラインスタイルまたはCSSクラスを使用`,
          codeExample: `// 基本的なJSX
function Greeting() {
  const name = "田中さん";
  const isLoggedIn = true;

  return (
    <div className="greeting-container">
      <h1>こんにちは、{name}！</h1>
      <p>{isLoggedIn ? "ログイン中" : "ログアウト中"}</p>
    </div>
  );
}

// JSXは React.createElement() に変換されます
// 上記のコードは以下と同等です：
function Greeting() {
  const name = "田中さん";
  const isLoggedIn = true;

  return React.createElement(
    'div',
    { className: 'greeting-container' },
    React.createElement('h1', null, 'こんにちは、', name, '！'),
    React.createElement('p', null, isLoggedIn ? 'ログイン中' : 'ログアウト中')
  );
}

// フラグメントの使用（不要な div を避ける）
function UserInfo() {
  return (
    <>
      <h2>ユーザー情報</h2>
      <p>名前：山田太郎</p>
      <p>メール：yamada@example.com</p>
    </>
  );
}

// 条件付きレンダリング
function StatusMessage({ status }) {
  return (
    <div>
      {status === 'success' && <p className="success">成功しました！</p>}
      {status === 'error' && <p className="error">エラーが発生しました。</p>}
      {status === 'loading' && <p className="loading">読み込み中...</p>}
    </div>
  );
}

// リストレンダリング
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <input type="checkbox" checked={todo.completed} />
          <span>{todo.text}</span>
        </li>
      ))}
    </ul>
  );
}`,
          cases: [
            {
              title: "JSX式とテンプレート",
              description: "JSX内でJavaScript式を使用するさまざまな方法",
              code: `function ProductCard({ product }) {
  const discount = 0.2;
  const finalPrice = product.price * (1 - discount);

  return (
    <div className="product-card">
      {/* 変数の埋め込み */}
      <h3>{product.name}</h3>

      {/* 算術演算 */}
      <p className="price">
        元の価格: ¥{product.price}
      </p>
      <p className="final-price">
        セール価格: ¥{finalPrice.toFixed(0)}
      </p>

      {/* 関数呼び出し */}
      <p className="savings">
        {Math.round(discount * 100)}% オフ！
      </p>

      {/* 条件付き式 */}
      <span className={product.inStock ? 'in-stock' : 'out-of-stock'}>
        {product.inStock ? '在庫あり' : '在庫切れ'}
      </span>

      {/* テンプレートリテラル */}
      <img
        src={\`/images/\${product.id}.jpg\`}
        alt={\`\${product.name}の画像\`}
      />
    </div>
  );
}`
            },
            {
              title: "条件付きレンダリングパターン",
              description: "さまざまな条件付きレンダリング手法",
              code: `function ConditionalRendering({ user, isLoading, error }) {
  // パターン1: 早期リターン
  if (isLoading) {
    return <div className="loading">読み込み中...</div>;
  }

  if (error) {
    return <div className="error">エラー: {error.message}</div>;
  }

  if (!user) {
    return <div className="not-found">ユーザーが見つかりません</div>;
  }

  return (
    <div className="user-profile">
      <h2>{user.name}</h2>

      {/* パターン2: 論理AND演算子 */}
      {user.isPremium && (
        <span className="badge">プレミアム会員</span>
      )}

      {/* パターン3: 三項演算子 */}
      <p>
        ステータス: {user.isActive ? 'アクティブ' : '非アクティブ'}
      </p>

      {/* パターン4: 複数条件 */}
      <div className="permissions">
        {user.role === 'admin' ? (
          <div>
            <h3>管理者権限</h3>
            <p>すべての機能にアクセスできます</p>
          </div>
        ) : user.role === 'editor' ? (
          <div>
            <h3>編集者権限</h3>
            <p>コンテンツの編集が可能です</p>
          </div>
        ) : (
          <div>
            <h3>一般ユーザー</h3>
            <p>基本機能のみ利用可能です</p>
          </div>
        )}
      </div>

      {/* パターン5: 即時実行関数 */}
      {(() => {
        switch (user.status) {
          case 'online':
            return <span className="status-online">オンライン</span>;
          case 'away':
            return <span className="status-away">離席中</span>;
          case 'busy':
            return <span className="status-busy">取り込み中</span>;
          default:
            return <span className="status-offline">オフライン</span>;
        }
      })()}
    </div>
  );
}`
            },
            {
              title: "リストレンダリングとkey属性",
              description: "配列のレンダリングとkey属性の重要性",
              code: `function UserList({ users, onUserSelect, selectedUserId }) {
  return (
    <div className="user-list">
      {/* 基本的なリストレンダリング */}
      {users.map(user => (
        <div
          key={user.id}  // ✅ 一意のIDをkeyとして使用
          className={\`user-item \${selectedUserId === user.id ? 'selected' : ''}\`}
          onClick={() => onUserSelect(user.id)}
        >
          <img src={user.avatar} alt={user.name} />
          <div className="user-info">
            <h4>{user.name}</h4>
            <p>{user.email}</p>
          </div>
        </div>
      ))}

      {/* フィルタリングとマッピング */}
      <h3>プレミアム会員</h3>
      {users
        .filter(user => user.isPremium)
        .map(user => (
          <div key={user.id} className="premium-user">
            {user.name} ⭐
          </div>
        ))}

      {/* ネストされたリスト */}
      {users.map(user => (
        <div key={user.id} className="user-with-posts">
          <h4>{user.name}</h4>
          <ul>
            {user.posts.map(post => (
              <li key={post.id}>
                {post.title}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* 空のリストの処理 */}
      {users.length === 0 ? (
        <div className="empty-state">
          <p>ユーザーが見つかりません</p>
        </div>
      ) : (
        <p className="user-count">合計: {users.length}人</p>
      )}
    </div>
  );
}

// ❌ 悪い例：インデックスをkeyとして使用
function BadExample({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>  // リストの順序が変わると問題が発生
      ))}
    </ul>
  );
}

// ✅ 良い例：一意の識別子をkeyとして使用
function GoodExample({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>  // 安定した一意のID
      ))}
    </ul>
  );
}`
            },
            {
              title: "イベントハンドリング",
              description: "JSXでのイベント処理とイベントハンドラのパターン",
              code: `function EventHandling() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  // イベントハンドラ関数
  const handleSubmit = (e) => {
    e.preventDefault();  // デフォルトの動作を防ぐ
    if (inputValue.trim()) {
      setItems([...items, { id: Date.now(), text: inputValue }]);
      setInputValue('');
    }
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setInputValue('');
    }
  };

  return (
    <div>
      {/* フォーム送信 */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="アイテムを入力..."
        />
        <button type="submit">追加</button>
      </form>

      {/* インラインイベントハンドラ（シンプルな場合） */}
      <button onClick={() => setItems([])}>
        すべてクリア
      </button>

      {/* 引数付きイベントハンドラ */}
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => handleDelete(item.id)}>
              削除
            </button>
          </li>
        ))}
      </ul>

      {/* マウスイベント */}
      <div
        onMouseEnter={() => console.log('マウスが入りました')}
        onMouseLeave={() => console.log('マウスが出ました')}
        onClick={(e) => {
          console.log('クリック位置:', e.clientX, e.clientY);
        }}
      >
        マウスイベント領域
      </div>
    </div>
  );
}`
            },
            {
              title: "スタイリングパターン",
              description: "JSXでのさまざまなスタイリング方法",
              code: `function StylingPatterns({ theme, isActive, priority }) {
  // スタイルオブジェクト
  const containerStyle = {
    padding: '20px',
    backgroundColor: theme === 'dark' ? '#333' : '#fff',
    color: theme === 'dark' ? '#fff' : '#333',
    borderRadius: '8px',
    transition: 'all 0.3s ease'
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    ...(isActive && {
      backgroundColor: '#007bff',
      color: 'white'
    })
  };

  // 動的クラス名
  const cardClasses = [
    'card',
    isActive && 'card--active',
    priority === 'high' && 'card--priority-high',
    theme === 'dark' && 'card--dark'
  ].filter(Boolean).join(' ');

  return (
    <div>
      {/* パターン1: インラインスタイル */}
      <div style={containerStyle}>
        <h2 style={{ marginBottom: '16px', fontWeight: 'bold' }}>
          タイトル
        </h2>
      </div>

      {/* パターン2: 動的クラス名（文字列連結） */}
      <div className={\`card \${isActive ? 'active' : ''} \${theme}\`}>
        シンプルな動的クラス
      </div>

      {/* パターン3: 動的クラス名（配列とfilter） */}
      <div className={cardClasses}>
        複雑な動的クラス
      </div>

      {/* パターン4: 条件付きスタイル */}
      <button style={buttonStyle}>
        ボタン
      </button>

      {/* パターン5: CSSモジュール風 */}
      <div
        className={[
          'container',
          isActive && 'container--active',
          \`container--\${theme}\`
        ].filter(Boolean).join(' ')}
      >
        CSSモジュール風のクラス
      </div>

      {/* パターン6: 動的スタイル値 */}
      <div
        style={{
          width: '100%',
          height: \`\${priority * 20}px\`,
          opacity: isActive ? 1 : 0.5,
          transform: \`scale(\${isActive ? 1.1 : 1})\`
        }}
      >
        動的スタイル値
      </div>
    </div>
  );
}`
            }
          ]
        },
        {
          id: "state",
          name: "状態管理",
          link: "https://ja.react.dev/learn/state-a-components-memory",
          description: "状態（State）は時間とともに変化するデータを格納するコンポーネントのメモリです。",
          content: `状態（State）はReactコンポーネントの中核概念の一つです。時間とともに変化する可能性のあるデータを表します。状態が更新されると、Reactは自動的にコンポーネントを再レンダリングして最新のデータを反映します。

**Stateの特性**：

1. **リアクティブ**：状態が変更されると、コンポーネントは自動的に再レンダリングされます
2. **独立性**：各コンポーネントインスタンスは独自の状態を持ちます
3. **不変性**：状態を直接変更せず、setState関数を使用する必要があります
4. **非同期更新**：Reactはパフォーマンス最適化のため、複数の状態更新をバッチ処理する場合があります

**State vs Props**：

- **State**：コンポーネント内部で管理されるデータで、変更可能
- **Props**：親コンポーネントから渡されるデータで、読み取り専用

**Stateを使用する場面**：

- 時間とともに変化するデータ（ユーザー入力、ネットワークレスポンスなど）
- コンポーネントのレンダリング出力に影響するデータ
- propsから計算されないデータ

**State更新のルール**：

1. **setter関数を使用**：常にsetStateを使用して状態を更新します
2. **不変な更新**：オブジェクトや配列の場合、元のオブジェクトを変更せず新しいコピーを作成します
3. **バッチ更新**：Reactは複数の状態更新をバッチ処理します
4. **関数型更新**：新しい状態が前の状態に依存する場合、関数形式を使用します`,
          codeExample: `import { useState } from 'react';

// 基本的な状態の使用
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>増加</button>
      <button onClick={() => setCount(count - 1)}>減少</button>
      <button onClick={() => setCount(0)}>リセット</button>
    </div>
  );
}

// 複数の状態
function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, age });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="名前"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="メールアドレス"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="年齢"
      />
      <button type="submit">送信</button>
    </form>
  );
}

// オブジェクト状態の更新（不変な方法）
function Profile() {
  const [user, setUser] = useState({
    name: '山田太郎',
    age: 25,
    address: { city: '東京', country: '日本' }
  });

  const updateName = (newName) => {
    setUser({ ...user, name: newName });
  };

  const updateCity = (newCity) => {
    setUser({
      ...user,
      address: { ...user.address, city: newCity }
    });
  };

  return (
    <div>
      <p>名前: {user.name}</p>
      <p>都市: {user.address.city}</p>
      <button onClick={() => updateName('田中花子')}>名前を変更</button>
      <button onClick={() => updateCity('大阪')}>都市を変更</button>
    </div>
  );
}

// 配列状態の更新
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>追加</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 関数型更新（前の状態に依存）
function Counter() {
  const [count, setCount] = useState(0);

  const incrementBy = (amount) => {
    // 関数型更新を使用して最新の状態を確実に取得
    setCount(prevCount => prevCount + amount);
  };

  const handleMultipleClicks = () => {
    // これらの更新は正しく累積されます
    incrementBy(1);
    incrementBy(1);
    incrementBy(1);
  };

  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={handleMultipleClicks}>+3</button>
    </div>
  );
}`,
        },
        {
          id: "lifecycle",
          name: "ライフサイクル",
          link: "https://ja.react.dev/learn/lifecycle-of-reactive-effects",
          description: "コンポーネントのライフサイクルは、作成から破棄までの全プロセスを記述します。",
          content: `コンポーネントライフサイクルとは、コンポーネントの作成、更新、破棄までの完全なプロセスを指します。関数コンポーネントでは、useEffect Hookを使用して副作用やライフサイクル関連のロジックを処理します。

**ライフサイクルの3つのフェーズ**：

1. **マウント（Mounting）**：コンポーネントが作成されDOMに挿入される
2. **更新（Updating）**：コンポーネントのpropsまたはstateが変化する
3. **アンマウント（Unmounting）**：コンポーネントがDOMから削除される

**useEffectの動作原理**：

\`useEffect(setup, dependencies)\`

- **setup関数**：副作用のロジックを含み、オプションでクリーンアップ関数を返す
- **dependencies配列**：effectをいつ実行するかを制御する

**依存配列の3つのパターン**：

1. **依存配列なし**：レンダリングごとに実行される
2. **空の依存配列 []**：マウント時に一度だけ実行される
3. **依存項目あり [dep1, dep2]**：依存項目が変化したときに実行される

**クリーンアップ関数**：

effectから返される関数は以下のタイミングで実行されます：
- コンポーネントのアンマウント前
- effectの再実行前（前回の副作用をクリーンアップ）

**一般的な副作用**：

- データの取得
- サブスクリプション/リスナー
- 手動のDOM操作
- タイマー
- ログ記録`,
          codeExample: `import { useState, useEffect } from 'react';

// 基本的な使い方 - マウント時に一度実行
function WelcomeMessage() {
  useEffect(() => {
    console.log('コンポーネントがマウントされました');

    return () => {
      console.log('コンポーネントがアンマウントされます');
    };
  }, []); // 空の依存配列

  return <h1>ようこそ！</h1>;
}

// 特定の依存関係の変化を監視
function SearchResults({ query }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // queryが変更されたときに実行
    setLoading(true);

    fetch(\`/api/search?q=\${query}\`)
      .then(res => res.json())
      .then(data => {
        setResults(data);
        setLoading(false);
      });
  }, [query]); // queryが変化したときに再実行

  if (loading) return <p>読み込み中...</p>;
  return <ul>{results.map(r => <li key={r.id}>{r.title}</li>)}</ul>;
}

// タイマーとクリーンアップ
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // クリーンアップ関数：コンポーネントのアンマウント時にタイマーをクリア
    return () => {
      clearInterval(interval);
      console.log('タイマーをクリアしました');
    };
  }, []); // マウント時にのみタイマーを作成

  return <div>経過時間 {seconds} 秒</div>;
}

// イベントリスナーとクリーンアップ
function WindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // イベントリスナーを追加
    window.addEventListener('resize', handleResize);

    // クリーンアップ関数：イベントリスナーを削除
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // リスナーを一度だけ設定

  return (
    <div>
      ウィンドウサイズ: {size.width} x {size.height}
    </div>
  );
}

// 複数のEffectで関心事を分離
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  // Effect 1: ユーザー情報を取得
  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(setUser);
  }, [userId]);

  // Effect 2: ユーザーの投稿を取得
  useEffect(() => {
    fetch(\`/api/users/\${userId}/posts\`)
      .then(res => res.json())
      .then(setPosts);
  }, [userId]);

  // Effect 3: ページタイトルを更新
  useEffect(() => {
    if (user) {
      document.title = \`\${user.name}のプロフィール\`;
    }

    return () => {
      document.title = 'マイアプリ';
    };
  }, [user]);

  if (!user) return <p>読み込み中...</p>;

  return (
    <div>
      <h1>{user.name}</h1>
      <h2>投稿 ({posts.length})</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

// 条件付きEffect実行
function Chat({ roomId, isOpen }) {
  useEffect(() => {
    if (!isOpen) return; // 開いていない場合は実行しない

    const connection = createConnection(roomId);
    connection.connect();

    return () => {
      connection.disconnect();
    };
  }, [roomId, isOpen]);

  return <div>{isOpen ? 'チャット接続中' : 'チャット切断中'}</div>;
}`,
        },
      ],
    },
    {
      title: "React Hooks",
      items: [
        {
          id: "usestate",
          name: "useState",
          link: "https://ja.react.dev/reference/react/useState",
          description: "useStateは関数コンポーネントに状態を追加するための最も基本的なHookです。",
          content: "useStateは状態値とその状態を更新する関数を返します。更新関数を呼び出すとコンポーネントの再レンダリングがトリガーされます。",
          codeExample: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}`,
        },
        {
          id: "useeffect",
          name: "useEffect",
          link: "https://ja.react.dev/reference/react/useEffect",
          description: "useEffectはデータフェッチ、サブスクリプション、DOM操作などの副作用を処理します。",
          content: "useEffectはレンダリングごとに実行され、依存配列で制御できます。返されるクリーンアップ関数は、コンポーネントのアンマウント前または依存関係の変更前に実行されます。",
          codeExample: `import { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div>タイマー: {count}秒</div>;
}`,
        },
        {
          id: "usecontext",
          name: "useContext",
          link: "https://ja.react.dev/reference/react/useContext",
          description: "useContextはコンポーネントツリーでデータを共有し、propsの階層的な受け渡しを回避します。",
          content: "Contextオブジェクトを作成し、Providerを使用して値を提供することで、任意の子コンポーネントがuseContextを使用してこれらの値にアクセスできます。これはテーマ、ユーザー情報、言語設定などのグローバルデータに特に便利です。",
          codeExample: `import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      現在のテーマ: {theme}
    </button>
  );
}`,
        },
        {
          id: "usereducer",
          name: "useReducer",
          link: "https://ja.react.dev/reference/react/useReducer",
          description: "useReducerは複雑な状態ロジックのためのuseStateの代替です。",
          content: "useReducerはreducer関数と初期状態を受け取り、現在の状態とdispatch関数を返します。このパターンはReduxに似ており、状態の更新をより予測可能でテスト可能にします。",
          codeExample: `import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>カウント: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
    </div>
  );
}`,
        },
        {
          id: "usecallback",
          name: "useCallback",
          link: "https://ja.react.dev/reference/react/useCallback",
          description: "useCallbackはパフォーマンス最適化のためにメモ化されたコールバック関数を返します。",
          content: "useCallbackは関数インスタンスをキャッシュし、依存関係が変更された場合にのみ新しい関数を作成します。これは子コンポーネントに渡されるコールバックに特に便利で、不要な再レンダリングを防ぎます。",
          codeExample: `import { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('クリックされました！', count);
  }, [count]);

  return <Child onClick={handleClick} />;
}`,
        },
        {
          id: "usememo",
          name: "useMemo",
          link: "https://ja.react.dev/reference/react/useMemo",
          description: "useMemoは高価な計算を最適化するためにメモ化された値を返します。",
          content: "useMemoは計算結果をキャッシュし、依存関係が変更された場合にのみ再計算します。これは複雑なデータ変換またはフィルタリング操作に特に便利です。",
          codeExample: `import { useMemo } from 'react';

function ProductList({ products, filter }) {
  const filteredProducts = useMemo(() => {
    return products.filter(p =>
      p.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [products, filter]);

  return <ul>{filteredProducts.map(p => <li key={p.id}>{p.name}</li>)}</ul>;
}`,
        },
      ],
    },
    {
      title: "実践例",
      items: [
        {
          id: "react-examples",
          name: "React Hooks 実践例",
          link: "https://ja.react.dev/reference/react",
          description: "実際の例を通じてReact Hooksの使用法とベストプラクティスを学びます。",
          content: "これらの例は、状態管理、副作用処理、パフォーマンス最適化などのコアシナリオを含む、実際の開発におけるReact Hooksの応用を示しています。各例には完全なコード実装と詳細な説明が含まれており、React Hooksの本質を素早く習得するのに役立ちます。"
        },
      ],
    },
    {
      title: "Reactエコシステム",
      items: [
        {
          id: "react-router",
          name: "React Router",
          link: "https://reactrouter.com/",
          description: "React RouterはReactアプリケーションの標準的なルーティングソリューションです。",
          content: "React Routerは宣言的なルーティング設定を提供し、ネストされたルート、動的ルート、ルートパラメータをサポートします。"
        },
        {
          id: "redux",
          name: "Redux",
          link: "https://redux.js.org/",
          description: "Reduxは大規模アプリケーションの状態管理のための予測可能な状態コンテナです。",
          content: "Reduxは単一の状態ツリーと純粋なreducer関数を使用してアプリケーションの状態を管理します。"
        },
        {
          id: "nextjs",
          name: "Next.js",
          link: "https://nextjs.org/",
          description: "Next.jsはReactベースのフルスタックフレームワークで、SSRとSSGをサポートしています。",
          content: "Next.jsはサーバーサイドレンダリング、静的サイト生成、APIルートをすぐに使用できる形で提供します。"
        },
      ],
    },
  ],
};
