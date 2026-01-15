import { TechDetail } from '../../../types';

export const javascriptDataJa: TechDetail = {
  name: "JavaScript",
  description: "軽量なインタープリタ型プログラミング言語",
  icon: "/images/javascript-logo.svg",
  color: "from-yellow-500 to-orange-500",
  officialLink: "https://developer.mozilla.org/ja/docs/Web/JavaScript",
  content: [
    {
      title: "JavaScriptコア概念",
      items: [
        {
          id: "es6-features",
          name: "ES6+機能",
          link: "https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide",
          description: "ES6+は多くのモダンな構文機能を導入し、JavaScriptコードをより簡潔で読みやすくします。",
          content: `ES6(ECMAScript 2015)以降のバージョンは、JavaScriptに革命的な改善をもたらしました。これらの機能は、コードの可読性と開発効率を大幅に向上させます。

**アロー関数(Arrow Functions)**:
アロー関数はより簡潔な関数構文を提供し、独自のthis値をバインドしません。コールバック関数や短い関数式に特に適しています。

**アロー関数の特徴**:
1. **簡潔な構文**: functionキーワードを省略
2. **暗黙的なreturn**: 単一行の式は自動的に結果を返す
3. **レキシカルthis**: 外側のスコープからthisを継承
4. **コンストラクタとして使用不可**: newで呼び出すことができない

**分割代入(Destructuring)**:
分割代入により、配列やオブジェクトから値を抽出して変数に代入できます。これによりコードがより簡潔で読みやすくなります。

**スプレッド演算子とレストパラメータ**:
スプレッド演算子(...)は配列やオブジェクトを展開でき、レストパラメータは複数の引数を配列に収集できます。

**テンプレートリテラル(Template Literals)**:
バッククォートで定義された文字列は、複数行文字列と式の補間をサポートし、文字列連結よりも直感的です。`,
          codeExample: `// アロー関数の異なる構文
// 従来の関数
function add(a, b) {
  return a + b;
}

// アロー関数 - 完全形式
const add = (a, b) => {
  return a + b;
};

// アロー関数 - 暗黙的return
const add = (a, b) => a + b;

// 単一パラメータは括弧を省略可能
const square = x => x * x;

// パラメータなしは空の括弧が必要
const sayHello = () => console.log('Hello!');

// オブジェクトリテラルを返すには括弧が必要
const createUser = (name, age) => ({ name, age });

// オブジェクトの分割代入
const user = {
  name: '太郎',
  age: 25,
  email: 'taro@example.com',
  address: {
    city: '東京',
    country: '日本'
  }
};

// 基本的な分割代入
const { name, age } = user;
console.log(name, age); // '太郎' 25

// 変数名の変更
const { name: userName, age: userAge } = user;

// ネストされた分割代入
const { address: { city } } = user;
console.log(city); // '東京'

// デフォルト値
const { phone = '未提供' } = user;

// 配列の分割代入
const colors = ['赤', '緑', '青', '黄'];

// 基本的な分割代入
const [first, second] = colors;
console.log(first, second); // '赤' '緑'

// 要素をスキップ
const [, , third] = colors;
console.log(third); // '青'

// 残りの要素
const [primary, ...otherColors] = colors;
console.log(otherColors); // ['緑', '青', '黄']

// スプレッド演算子の例
// 配列のスプレッド
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// 配列のコピー
const original = [1, 2, 3];
const copy = [...original];

// オブジェクトのスプレッド
const baseConfig = { host: 'localhost', port: 3000 };
const config = { ...baseConfig, port: 8080 }; // portを上書き

// オブジェクトのマージ
const person = { name: '花子' };
const employee = { id: 123, department: '開発部' };
const fullInfo = { ...person, ...employee };

// レストパラメータ
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

// テンプレートリテラル
const name = 'React';
const version = 18;

// 従来の方法
const message1 = 'ようこそ ' + name + ' バージョン ' + version;

// テンプレートリテラル
const message2 = \`ようこそ \${name} バージョン \${version}\`;

// 複数行文字列
const html = \`
  <div class="user">
    <h1>\${user.name}</h1>
    <p>\${user.email}</p>
  </div>
\`;

// 式の計算
const price = 100;
const tax = 0.1;
const total = \`合計: \${(price * (1 + tax)).toFixed(2)} 円\`;

// タグ付きテンプレート(高度な使用法)
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i] ? \`<strong>\${values[i]}</strong>\` : '';
    return result + str + value;
  }, '');
}

const highlighted = highlight\`ユーザー \${name} 年齢 \${age}\`;`,
        },
        {
          id: "async-programming",
          name: "非同期プログラミング",
          link: "https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Using_promises",
          description: "非同期プログラミングは、メインスレッドをブロックせずに時間のかかる操作を処理するために不可欠です。",
          content: `JavaScriptはシングルスレッド言語であり、非同期プログラミングにより、時間のかかる操作(ネットワークリクエスト、ファイル読み込みなど)を待っている間に他のコードを実行し続けることができます。

**非同期プログラミングの進化**:

1. **コールバック(Callbacks)**: 最も初期の非同期ソリューションですが、コールバック地獄に陥りやすい
2. **Promise**: ES6で導入され、より洗練された非同期処理方法を提供
3. **Async/Await**: ES2017で導入され、非同期コードを同期コードのように見せる

**Promiseの状態**:

- **Pending(保留中)**: 初期状態
- **Fulfilled(成功)**: 操作が正常に完了
- **Rejected(失敗)**: 操作が失敗

**Promiseの特徴**:

1. **チェーン化**: thenメソッドを通じて複数の非同期操作を連結
2. **エラー処理**: catchを使用して統一的にエラーを処理
3. **不変の状態**: 一度変更されると、再び変更されない

**Async/Awaitの利点**:

1. **より明確なコード**: 同期コードのように見え、理解しやすい
2. **シンプルなエラー処理**: try/catchを使用できる
3. **デバッグが容易**: ブレークポイントとコールスタックがより直感的

**並列実行**:

Promise.allを使用して複数の非同期操作を並列実行し、効率を大幅に向上させます。`,
          codeExample: `// コールバック(古い方法、コールバック地獄に陥りやすい)
function fetchUserData(userId, callback) {
  setTimeout(() => {
    callback(null, { id: userId, name: '太郎' });
  }, 1000);
}

fetchUserData(1, (error, user) => {
  if (error) {
    console.error(error);
  } else {
    console.log(user);
  }
});

// コールバック地獄の例
fetchUser(1, (user) => {
  fetchPosts(user.id, (posts) => {
    fetchComments(posts[0].id, (comments) => {
      console.log(comments);
    });
  });
});

// Promise基礎
// Promiseの作成
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve('操作が成功しました！');
  } else {
    reject('操作が失敗しました！');
  }
});

// Promiseの使用
myPromise
  .then(result => {
    console.log(result); // '操作が成功しました！'
  })
  .catch(error => {
    console.error(error);
  });

// Promiseチェーン
function fetchUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: '花子' });
    }, 1000);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: '最初の投稿' },
        { id: 2, title: '2番目の投稿' }
      ]);
    }, 1000);
  });
}

// チェーンによりコールバック地獄を回避
fetchUser(1)
  .then(user => {
    console.log('ユーザー:', user);
    return fetchPosts(user.id);
  })
  .then(posts => {
    console.log('投稿:', posts);
  })
  .catch(error => {
    console.error('エラーが発生しました:', error);
  });

// Async/Await構文
// 基本的な使用法
async function getUserData() {
  try {
    const user = await fetchUser(1);
    console.log('ユーザー:', user);

    const posts = await fetchPosts(user.id);
    console.log('投稿:', posts);

    return { user, posts };
  } catch (error) {
    console.error('エラーが発生しました:', error);
  }
}

// async関数の呼び出し
getUserData().then(data => {
  console.log('すべてのデータ:', data);
});

// エラー処理
async function fetchDataWithErrorHandling() {
  try {
    const response = await fetch('https://api.example.com/data');

    if (!response.ok) {
      throw new Error(\`HTTPエラー! ステータス: \${response.status}\`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('データの取得に失敗しました:', error);
    throw error; // 呼び出し元が処理できるように再スロー
  }
}

// 複数の非同期操作の並列実行
async function fetchAllData() {
  try {
    // 複数のリクエストを同時に開始
    const [users, posts, comments] = await Promise.all([
      fetch('/api/users').then(r => r.json()),
      fetch('/api/posts').then(r => r.json()),
      fetch('/api/comments').then(r => r.json())
    ]);

    return { users, posts, comments };
  } catch (error) {
    console.error('データの取得に失敗しました:', error);
  }
}

// Promise.race(最初に完了したものを返す)
async function fetchWithTimeout(url, timeout = 5000) {
  const fetchPromise = fetch(url);
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('リクエストタイムアウト')), timeout);
  });

  try {
    const response = await Promise.race([fetchPromise, timeoutPromise]);
    return response;
  } catch (error) {
    console.error('リクエストが失敗しました:', error);
  }
}

// 複数の非同期操作の順次実行
async function processInSequence(items) {
  const results = [];

  for (const item of items) {
    const result = await processItem(item);
    results.push(result);
  }

  return results;
}

// 実用例: 完全なデータ取得フロー
async function loadUserDashboard(userId) {
  try {
    // 1. ローディング状態を表示
    console.log('読み込み中...');

    // 2. ユーザー情報を取得
    const user = await fetch(\`/api/users/\${userId}\`).then(r => r.json());

    // 3. ユーザー関連データを並列取得
    const [posts, followers, stats] = await Promise.all([
      fetch(\`/api/users/\${userId}/posts\`).then(r => r.json()),
      fetch(\`/api/users/\${userId}/followers\`).then(r => r.json()),
      fetch(\`/api/users/\${userId}/stats\`).then(r => r.json())
    ]);

    // 4. データを組み合わせる
    const dashboard = {
      user,
      posts,
      followers,
      stats
    };

    console.log('読み込み完了!', dashboard);
    return dashboard;
  } catch (error) {
    console.error('ダッシュボードの読み込みに失敗しました:', error);
    throw error;
  }
}`,
        },
        {
          id: "array-methods",
          name: "配列メソッド",
          link: "https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array",
          description: "JavaScriptは、データ処理と変換のための豊富な配列メソッドを提供します。",
          content: `モダンなJavaScriptは強力な配列メソッドを提供し、データ処理を簡潔でエレガントにします。これらのメソッドは元の配列を変更せず(特定のメソッドを除く)、新しい結果を返します。

**一般的な配列メソッド**:

1. **map()**: 配列の各要素を変換し、新しい配列を返す
   - 用途: データ変換、フォーマット、プロパティ抽出

2. **filter()**: 条件を満たす要素をフィルタリングし、新しい配列を返す
   - 用途: データフィルタリング、条件付きクエリ

3. **reduce()**: 配列を単一の値に集約
   - 用途: 合計、カウント、データ集約、オブジェクト変換

4. **forEach()**: 配列を反復処理し、戻り値なし
   - 用途: 副作用操作の実行(印刷、DOM更新など)

5. **find()**: 条件を満たす最初の要素を検索
   - 用途: 特定の要素の検索

6. **some()**: 少なくとも1つの要素が条件を満たすかチェック
   - 用途: 存在チェック

7. **every()**: すべての要素が条件を満たすかチェック
   - 用途: 完全性検証

**メソッド選択ガイド**:

- データ変換が必要? **map**を使用
- データフィルタリングが必要? **filter**を使用
- データ集約が必要? **reduce**を使用
- 反復処理のみ? **forEach**を使用
- 要素検索? **find**または**findIndex**を使用
- 条件チェック? **some**または**every**を使用

**チェーン化**:

これらのメソッドはチェーン化でき、強力なデータ処理パイプラインを構築できます。`,
          codeExample: `// map - 配列の変換
const numbers = [1, 2, 3, 4, 5];

// 各数値を2倍にする
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// オブジェクトプロパティの抽出
const users = [
  { id: 1, name: '太郎', age: 25 },
  { id: 2, name: '花子', age: 30 },
  { id: 3, name: '次郎', age: 28 }
];

const names = users.map(user => user.name);
console.log(names); // ['太郎', '花子', '次郎']

// データのフォーマット
const formatted = users.map(user => ({
  ...user,
  label: \`\${user.name} (\${user.age}歳)\`
}));

// filter - 配列のフィルタリング
// 偶数をフィルタリング
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// 26歳以上のユーザーをフィルタリング
const adults = users.filter(user => user.age > 26);

// 特定の文字を含む文字列をフィルタリング
const fruits = ['りんご', 'バナナ', 'オレンジ', 'ぶどう'];
const filtered = fruits.filter(fruit => fruit.includes('ん'));
console.log(filtered); // ['りんご', 'オレンジ']

// filterとmapの組み合わせ
const youngUserNames = users
  .filter(user => user.age < 30)
  .map(user => user.name);

// reduce - 配列の集約
// 合計
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15

// 最大値を見つける
const max = numbers.reduce((max, num) => num > max ? num : max, numbers[0]);
console.log(max); // 5

// カウント
const fruits2 = ['りんご', 'バナナ', 'りんご', 'オレンジ', 'バナナ', 'りんご'];
const count = fruits2.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count); // { りんご: 3, バナナ: 2, オレンジ: 1 }

// 配列をオブジェクトに変換
const usersById = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});

// 配列をフラット化
const nested = [[1, 2], [3, 4], [5, 6]];
const flattened = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log(flattened); // [1, 2, 3, 4, 5, 6]

// forEach - 配列の反復処理
// 各要素を出力
numbers.forEach(num => {
  console.log(\`数値: \${num}\`);
});

// オブジェクトの更新(副作用操作)
const products = [
  { id: 1, price: 100 },
  { id: 2, price: 200 }
];

products.forEach(product => {
  product.priceWithTax = product.price * 1.1;
});

// find - 要素の検索
// 最初の偶数を検索
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 2

// 特定のユーザーを検索
const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: '花子', age: 30 }

// findIndex - インデックスの検索
const index = users.findIndex(u => u.name === '次郎');
console.log(index); // 2

// some - 存在チェック
// 偶数があるかチェック
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true

// 成人ユーザーがいるかチェック
const hasAdult = users.some(user => user.age >= 18);
console.log(hasAdult); // true

// every - すべてチェック
// すべて正の数かチェック
const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true

// すべて成人かチェック
const allAdults = users.every(user => user.age >= 18);
console.log(allAdults); // true

// その他の便利なメソッド
// includes - 含まれているかチェック
const hasThree = numbers.includes(3);
console.log(hasThree); // true

// sort - ソート
const sorted = [...numbers].sort((a, b) => b - a); // 降順
console.log(sorted); // [5, 4, 3, 2, 1]

const sortedUsers = [...users].sort((a, b) => a.age - b.age); // 年齢で昇順

// slice - スライス(元の配列を変更しない)
const sliced = numbers.slice(1, 3);
console.log(sliced); // [2, 3]

// concat - 配列のマージ
const combined = numbers.concat([6, 7, 8]);

// 実用例: 複雑なデータ処理パイプライン
const orders = [
  { id: 1, product: 'スマホ', price: 3000, quantity: 2, status: 'completed' },
  { id: 2, product: 'パソコン', price: 5000, quantity: 1, status: 'completed' },
  { id: 3, product: 'イヤホン', price: 200, quantity: 3, status: 'pending' },
  { id: 4, product: 'キーボード', price: 300, quantity: 2, status: 'completed' }
];

// 完了した注文の合計収益を計算
const totalRevenue = orders
  .filter(order => order.status === 'completed')
  .map(order => order.price * order.quantity)
  .reduce((sum, amount) => sum + amount, 0);

console.log(\`総収益: \${totalRevenue} 円\`); // 総収益: 11600 円

// 最も高い完了注文を取得
const highestOrder = orders
  .filter(order => order.status === 'completed')
  .reduce((highest, order) => {
    const orderTotal = order.price * order.quantity;
    const highestTotal = highest.price * highest.quantity;
    return orderTotal > highestTotal ? order : highest;
  });`,
        },
        {
          id: "object-oriented",
          name: "オブジェクト指向",
          link: "https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Details_of_the_Object_Model",
          description: "JavaScriptのオブジェクト指向プログラミングは、プロトタイプとクラスの概念に基づいています。",
          content: `JavaScriptはオブジェクト指向プログラミングをサポートし、クラス構文とプロトタイプメカニズムを提供します。ES6で導入されたクラス構文により、オブジェクト指向プログラミングがより直感的になりました。

**オブジェクト指向の核心概念**:

1. **カプセル化(Encapsulation)**:
   - データとメソッドをオブジェクト内にカプセル化
   - 実装の詳細を隠す
   - プライベートフィールド(#)を使用してデータを保護

2. **継承(Inheritance)**:
   - サブクラスは親クラスのプロパティとメソッドを継承
   - extendsキーワードを使用
   - superを通じて親クラスにアクセス

3. **ポリモーフィズム(Polymorphism)**:
   - サブクラスは親クラスのメソッドをオーバーライドできる
   - 同じインターフェース、異なる実装

**クラス構文**:

- **constructor**: コンストラクタ、インスタンス作成時に呼び出される
- **メソッド**: クラスのインスタンスメソッド
- **静的メソッド**: staticキーワードを使用、クラス名を通じて呼び出す
- **Getter/Setter**: get/setキーワードを使用
- **プライベートフィールド**: #プレフィックスを使用

**プロトタイプチェーン**:

JavaScriptは継承にプロトタイプチェーンを使用します。各オブジェクトにはプロトタイプオブジェクトがあり、そこからプロパティとメソッドを継承します。

**ベストプラクティス**:

1. クラスは単一責任を保つ
2. 継承よりも合成を優先
3. プライベートフィールドを使用して内部状態を保護
4. 静的メソッドを適切に使用`,
          codeExample: `// 基本的なクラス定義
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // インスタンスメソッド
  introduce() {
    return \`こんにちは、私は\${this.name}で、\${this.age}歳です\`;
  }

  // Getter
  get info() {
    return \`\${this.name} (\${this.age}歳)\`;
  }

  // Setter
  set birthYear(year) {
    this.age = new Date().getFullYear() - year;
  }

  // 静的メソッド
  static compare(person1, person2) {
    return person1.age - person2.age;
  }
}

// インスタンスの作成
const person = new Person('太郎', 25);
console.log(person.introduce()); // 'こんにちは、私は太郎で、25歳です'
console.log(person.info); // '太郎 (25歳)'

person.birthYear = 1998;
console.log(person.age); // 現在の年に基づいて計算

// 静的メソッドの呼び出し
const person2 = new Person('花子', 30);
console.log(Person.compare(person, person2)); // -5

// クラスの継承
class Student extends Person {
  constructor(name, age, school) {
    super(name, age); // 親コンストラクタの呼び出し
    this.school = school;
    this.grades = [];
  }

  // 親メソッドのオーバーライド
  introduce() {
    return \`\${super.introduce()}、\${this.school}で勉強しています\`;
  }

  // 新しいメソッド
  addGrade(subject, score) {
    this.grades.push({ subject, score });
  }

  getAverage() {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((acc, g) => acc + g.score, 0);
    return sum / this.grades.length;
  }
}

const student = new Student('次郎', 20, '東京大学');
console.log(student.introduce());
// 'こんにちは、私は次郎で、20歳です、東京大学で勉強しています'

student.addGrade('数学', 95);
student.addGrade('英語', 88);
console.log(student.getAverage()); // 91.5

// プライベートフィールド(ES2022)
class BankAccount {
  #balance = 0; // プライベートフィールド

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return true;
    }
    return false;
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      return true;
    }
    return false;
  }

  get balance() {
    return this.#balance;
  }
}

const account = new BankAccount('太郎');
account.deposit(1000);
console.log(account.balance); // 1000
// console.log(account.#balance); // エラー: プライベートフィールドにアクセスできません

// プロトタイプチェーンの例
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(\`\${this.name}が音を出します\`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(\`\${this.name}がワンワン吠えます\`);
  }

  fetch() {
    console.log(\`\${this.name}がボールを取りに行きます\`);
  }
}

const dog = new Dog('ポチ', 'ゴールデンレトリバー');
dog.speak(); // 'ポチがワンワン吠えます'
dog.fetch(); // 'ポチがボールを取りに行きます'

// プロトタイプチェーンのチェック
console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true
console.log(dog instanceof Object); // true

// 実用例: タスク管理システム
class Task {
  static idCounter = 0;

  constructor(title, description) {
    this.id = ++Task.idCounter;
    this.title = title;
    this.description = description;
    this.status = 'pending';
    this.createdAt = new Date();
  }

  complete() {
    this.status = 'completed';
    this.completedAt = new Date();
  }

  cancel() {
    this.status = 'cancelled';
  }

  get isCompleted() {
    return this.status === 'completed';
  }

  get duration() {
    if (this.completedAt) {
      return this.completedAt - this.createdAt;
    }
    return null;
  }
}

class TaskManager {
  #tasks = [];

  addTask(title, description) {
    const task = new Task(title, description);
    this.#tasks.push(task);
    return task;
  }

  completeTask(taskId) {
    const task = this.#tasks.find(t => t.id === taskId);
    if (task) {
      task.complete();
      return true;
    }
    return false;
  }

  getTasks(status = null) {
    if (status) {
      return this.#tasks.filter(t => t.status === status);
    }
    return [...this.#tasks];
  }

  get completedCount() {
    return this.#tasks.filter(t => t.isCompleted).length;
  }

  get pendingCount() {
    return this.#tasks.filter(t => t.status === 'pending').length;
  }
}

// タスクマネージャーの使用
const manager = new TaskManager();
const task1 = manager.addTask('JavaScriptを学ぶ', 'ES6の章を完了');
const task2 = manager.addTask('コードを書く', 'プロジェクト機能を完了');

manager.completeTask(task1.id);

console.log(\`完了: \${manager.completedCount}\`);
console.log(\`保留中: \${manager.pendingCount}\`);`,
        },
        {
          id: "modules",
          name: "モジュールシステム",
          link: "https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Modules",
          description: "ES6モジュールシステムにより、コードの整理と再利用がより簡単になります。",
          content: `ES6はimportとexportキーワードを使用するネイティブモジュールシステムを導入しました。モジュール化により、コードをより良く整理し、関心の分離とコードの再利用を実現できます。

**モジュールの利点**:

1. **コードの整理**: コードを論理単位に分割
2. **スコープの分離**: 各モジュールは独自のスコープを持つ
3. **依存関係の管理**: 明確な依存関係
4. **コードの再利用**: プロジェクト間でコードを簡単に再利用

**エクスポート方法**:

1. **名前付きエクスポート(Named Export)**:
   - 複数の値をエクスポート可能
   - インポート時は同じ名前を使用する必要がある(またはasで名前変更)
   - \`export { value }\`または\`export const value = ...\`

2. **デフォルトエクスポート(Default Export)**:
   - モジュールごとに1つのデフォルトエクスポートのみ
   - インポート時は任意の名前を使用可能
   - \`export default value\`

**インポート方法**:

1. **名前付きインポート**: \`import { name } from './module'\`
2. **デフォルトインポート**: \`import name from './module'\`
3. **すべてインポート**: \`import * as name from './module'\`
4. **混合インポート**: \`import defaultName, { namedExport } from './module'\`

**ベストプラクティス**:

1. ファイルごとに1つの主要な機能
2. 名前付きエクスポートを優先(リファクタリングが容易)
3. 循環依存を避ける
4. 明確な命名を使用`,
          codeExample: `// ========== math.js ==========
// 名前付きエクスポート - 方法1(宣言時にエクスポート)
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// 名前付きエクスポート - 方法2(統一エクスポート)
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

export { multiply, divide };

// エクスポート名の変更
const square = (x) => x * x;
export { square as pow2 };

// ========== calculator.js ==========
// デフォルトエクスポート - 方法1(クラスのエクスポート)
export default class Calculator {
  constructor() {
    this.result = 0;
  }

  add(value) {
    this.result += value;
    return this;
  }

  multiply(value) {
    this.result *= value;
    return this;
  }

  getResult() {
    return this.result;
  }
}

// ========== utils.js ==========
// 混合エクスポート(名前付き + デフォルト)
export const formatDate = (date) => {
  return date.toLocaleDateString('ja-JP');
};

export const formatCurrency = (amount) => {
  return \`¥\${amount.toFixed(2)}\`;
};

// デフォルトエクスポート
export default {
  formatDate,
  formatCurrency,
  version: '1.0.0'
};

// ========== main.js ==========
// 名前付きエクスポートのインポート
import { add, subtract, multiply } from './math.js';

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
console.log(multiply(5, 3)); // 15

// インポート名の変更
import { add as sum, multiply as times } from './math.js';

console.log(sum(2, 3)); // 5
console.log(times(2, 3)); // 6

// デフォルトエクスポートのインポート
import Calculator from './calculator.js';

const calc = new Calculator();
calc.add(10).multiply(2);
console.log(calc.getResult()); // 20

// すべてインポート
import * as MathUtils from './math.js';

console.log(MathUtils.PI); // 3.14159
console.log(MathUtils.add(1, 2)); // 3

// 混合インポート
import utils, { formatDate, formatCurrency } from './utils.js';

console.log(formatDate(new Date()));
console.log(formatCurrency(1234.5));
console.log(utils.version); // '1.0.0'

// 副作用のみのインポート
import './setup.js'; // setup.jsの初期化コードを実行

// 動的インポート(遅延ロード)
async function loadModule() {
  const module = await import('./heavy-module.js');
  module.doSomething();
}

// 条件付きインポート
if (condition) {
  import('./module-a.js').then(module => {
    module.init();
  });
} else {
  import('./module-b.js').then(module => {
    module.init();
  });
}

// ========== 実用例 ==========

// ========== api.js ==========
// APIユーティリティモジュール
const BASE_URL = 'https://api.example.com';

export async function get(endpoint) {
  const response = await fetch(\`\${BASE_URL}\${endpoint}\`);
  return response.json();
}

export async function post(endpoint, data) {
  const response = await fetch(\`\${BASE_URL}\${endpoint}\`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return response.json();
}

export default { get, post };

// ========== userService.js ==========
// ユーザーサービスモジュール
import { get, post } from './api.js';

export async function getUser(userId) {
  return get(\`/users/\${userId}\`);
}

export async function createUser(userData) {
  return post('/users', userData);
}

export async function getUserPosts(userId) {
  return get(\`/users/\${userId}/posts\`);
}

// ========== app.js ==========
// アプリケーションメインファイル
import * as userService from './userService.js';

async function init() {
  try {
    const user = await userService.getUser(1);
    console.log('ユーザー情報:', user);

    const posts = await userService.getUserPosts(1);
    console.log('ユーザーの投稿:', posts);
  } catch (error) {
    console.error('初期化に失敗しました:', error);
  }
}

init();

// ========== constants.js ==========
// 定数モジュール
export const COLORS = {
  PRIMARY: '#007bff',
  SUCCESS: '#28a745',
  DANGER: '#dc3545',
  WARNING: '#ffc107'
};

export const API_ENDPOINTS = {
  USERS: '/api/users',
  POSTS: '/api/posts',
  COMMENTS: '/api/comments'
};

export const CONFIG = {
  API_TIMEOUT: 5000,
  MAX_RETRIES: 3,
  CACHE_DURATION: 600000 // 10分
};

// ========== types.js ==========
// 型定義モジュール(JSDocと併用)
/**
 * @typedef {Object} User
 * @property {number} id
 * @property {string} name
 * @property {string} email
 */

/**
 * @typedef {Object} Post
 * @property {number} id
 * @property {string} title
 * @property {string} content
 * @property {number} userId
 */

export {};`,
        },
      ],
    },
  ],
};
