/**
 * Go 文档配置文件
 * 基于 go-chapters-i18n 目录的多语言文档结构
 */

export interface Section {
  id: string;
  title: string;
  section: string;
  component: string; // 组件导入路径
}

export interface Chapter {
  id: string;
  title: string;
  path: string;
  sections: Section[];
}

/**
 * 根据语言获取章节路径前缀
 */
export function getChapterPathPrefix(locale: string): string {
  // 支持 zh, en, ja，默认为 zh
  const supportedLocales = ['zh', 'en', 'ja'];
  const normalizedLocale = supportedLocales.includes(locale) ? locale : 'zh';
  return `go-chapters-i18n/${normalizedLocale}`;
}

/**
 * 章节配置
 * 每个章节包含多个小节
 */
export const goDocsChapters: Chapter[] = [
  {
    id: '01',
    title: 'Go语言入门',
    path: '01-introduction',
    sections: [
      { id: '1-1-1', title: 'Go语言的历史', section: '1.1.1', component: '1.1.1-go-history' },
      { id: '1-1-2', title: 'Go语言的特性', section: '1.1.2', component: '1.1.2-go-features' },
      { id: '1-1-3', title: 'Go语言的应用场景', section: '1.1.3', component: '1.1.3-go-use-cases' },
      { id: '1-2-1', title: '下载与安装', section: '1.2.1', component: '1.2.1-download-install' },
      { id: '1-2-2', title: '环境配置', section: '1.2.2', component: '1.2.2-environment-setup' },
      { id: '1-2-3', title: 'IDE选择', section: '1.2.3', component: '1.2.3-ide-selection' },
      { id: '1-3-1', title: 'Hello World', section: '1.3.1', component: '1.3.1-hello-world' },
      { id: '1-3-2', title: '运行程序', section: '1.3.2', component: '1.3.2-run-program' },
      { id: '1-3-3', title: '程序结构', section: '1.3.3', component: '1.3.3-program-structure' },
      { id: '1-4-1', title: '常用命令', section: '1.4.1', component: '1.4.1-common-commands' },
      { id: '1-4-2', title: 'go run', section: '1.4.2', component: '1.4.2-go-run' },
      { id: '1-4-3', title: 'go build', section: '1.4.3', component: '1.4.3-go-build' },
      { id: '1-4-4', title: 'go mod', section: '1.4.4', component: '1.4.4-go-mod' },
      { id: '1-4-5', title: 'go fmt', section: '1.4.5', component: '1.4.5-go-fmt' },
      { id: '1-5-1', title: '命名规范', section: '1.5.1', component: '1.5.1-naming-conventions' },
      { id: '1-5-2', title: '注释规范', section: '1.5.2', component: '1.5.2-comment-conventions' },
      { id: '1-5-3', title: '代码组织', section: '1.5.3', component: '1.5.3-code-organization' },
    ],
  },
  {
    id: '02',
    title: '基本语法',
    path: '02-basic_syntax',
    sections: [
      { id: '2-1-1', title: '变量声明', section: '2.1.1', component: '2.1.1-variable-declaration' },
      { id: '2-1-2', title: '变量作用域', section: '2.1.2', component: '2.1.2-variable-scope' },
      { id: '2-1-3', title: '零值', section: '2.1.3', component: '2.1.3-zero-values' },
      { id: '2-1-4', title: '匿名变量', section: '2.1.4', component: '2.1.4-anonymous-variables' },
      { id: '2-2-1', title: '常量声明', section: '2.2.1', component: '2.2.1-constant-declaration' },
      { id: '2-2-2', title: 'iota枚举', section: '2.2.2', component: '2.2.2-iota-enumeration' },
      { id: '2-3-1', title: '整数类型', section: '2.3.1', component: '2.3.1-integer-types' },
      { id: '2-3-2', title: '浮点类型', section: '2.3.2', component: '2.3.2-float-types' },
      { id: '2-3-3', title: '布尔类型', section: '2.3.3', component: '2.3.3-boolean-type' },
      { id: '2-3-4', title: '字符串类型', section: '2.3.4', component: '2.3.4-string-type' },
      { id: '2-3-5', title: '类型转换', section: '2.3.5', component: '2.3.5-type-conversion' },
      { id: '2-4-1', title: '算术运算符', section: '2.4.1', component: '2.4.1-arithmetic-operators' },
      { id: '2-4-2', title: '关系运算符', section: '2.4.2', component: '2.4.2-relational-operators' },
      { id: '2-4-3', title: '逻辑运算符', section: '2.4.3', component: '2.4.3-logical-operators' },
      { id: '2-4-4', title: '位运算符', section: '2.4.4', component: '2.4.4-bitwise-operators' },
      { id: '2-4-5', title: '赋值运算符', section: '2.4.5', component: '2.4.5-assignment-operators' },
      { id: '2-4-6', title: '运算符优先级', section: '2.4.6', component: '2.4.6-operator-precedence' },
      { id: '2-5-1', title: 'if语句', section: '2.5.1', component: '2.5.1-if-statement' },
      { id: '2-5-2', title: 'for循环', section: '2.5.2', component: '2.5.2-for-loop' },
      { id: '2-5-3', title: 'switch语句', section: '2.5.3', component: '2.5.3-switch-statement' },
      { id: '2-5-4', title: 'goto和标签', section: '2.5.4', component: '2.5.4-goto-and-labels' },
    ],
  },
  {
    id: '03',
    title: '复合数据类型',
    path: '03-data_types',
    sections: [
      { id: '3-1-1', title: '数组定义', section: '3.1.1', component: '3.1.1-array-definition' },
      { id: '3-1-2', title: '数组操作', section: '3.1.2', component: '3.1.2-array-operations' },
      { id: '3-1-3', title: '多维数组', section: '3.1.3', component: '3.1.3-multidimensional-arrays' },
      { id: '3-1-4', title: '数组作为参数', section: '3.1.4', component: '3.1.4-array-as-parameters' },
      { id: '3-2-1', title: '切片定义', section: '3.2.1', component: '3.2.1-slice-definition' },
      { id: '3-2-2', title: '切片操作', section: '3.2.2', component: '3.2.2-slice-operations' },
      { id: '3-2-3', title: '切片原理', section: '3.2.3', component: '3.2.3-slice-internals' },
      { id: '3-2-4', title: '切片作为参数', section: '3.2.4', component: '3.2.4-slice-as-parameters' },
      { id: '3-3-1', title: 'map定义', section: '3.3.1', component: '3.3.1-map-definition' },
      { id: '3-3-2', title: 'map操作', section: '3.3.2', component: '3.3.2-map-operations' },
      { id: '3-3-3', title: 'map键类型', section: '3.3.3', component: '3.3.3-map-key-types' },
      { id: '3-3-4', title: 'map作为参数', section: '3.3.4', component: '3.3.4-map-as-parameters' },
      { id: '3-4-1', title: 'strings包', section: '3.4.1', component: '3.4.1-strings-package' },
      { id: '3-4-2', title: 'strconv包', section: '3.4.2', component: '3.4.2-strconv-package' },
      { id: '3-4-3', title: '字符串拼接', section: '3.4.3', component: '3.4.3-string-concatenation' },
      { id: '3-4-4', title: 'rune和字符', section: '3.4.4', component: '3.4.4-rune-and-characters' },
    ],
  },
  {
    id: '04',
    title: '函数',
    path: '04-functions',
    sections: [
      { id: '4-1-1', title: '函数定义', section: '4.1.1', component: '4.1.1-function-definition' },
      { id: '4-1-2', title: '命名返回值', section: '4.1.2', component: '4.1.2-named-returns' },
      { id: '4-1-3', title: '可变参数', section: '4.1.3', component: '4.1.3-variadic-parameters' },
      { id: '4-2-1', title: '函数作为值', section: '4.2.1', component: '4.2.1-functions-as-values' },
      { id: '4-2-2', title: '闭包', section: '4.2.2', component: '4.2.2-closures' },
      { id: '4-2-4', title: 'defer延迟调用', section: '4.2.4', component: '4.2.4-defer' },
      { id: '4-3-1', title: '自定义函数类型', section: '4.3.1', component: '4.3.1-custom-function-types' },
      { id: '4-3-2', title: '函数选项模式', section: '4.3.2', component: '4.3.2-functional-options' },
      { id: '4-4-1', title: '错误返回', section: '4.4.1', component: '4.4.1-returning-errors' },
    ],
  },
  {
    id: '05',
    title: '结构体与方法',
    path: '05-struct_methods',
    sections: [
      { id: '5-1-1', title: '结构体定义', section: '5.1.1', component: '5.1.1-struct-definition' },
      { id: '5-1-2', title: '结构体指针', section: '5.1.2', component: '5.1.2-struct-pointers' },
      { id: '5-1-3', title: '结构体标签', section: '5.1.3', component: '5.1.3-struct-tags' },
      { id: '5-2-1', title: '方法定义', section: '5.2.1', component: '5.2.1-method-definition' },
      { id: '5-2-2', title: '值接收者 vs 指针接收者', section: '5.2.2', component: '5.2.2-value-vs-pointer-receivers' },
      { id: '5-2-3', title: '方法链', section: '5.2.3', component: '5.2.3-method-chaining' },
      { id: '5-3-1', title: '组合与继承', section: '5.3.1', component: '5.3.1-composition-inheritance' },
      { id: '5-3-2', title: '多重嵌入', section: '5.3.2', component: '5.3.2-multiple-embedding' },
      { id: '5-4-1', title: '构造函数', section: '5.4.1', component: '5.4.1-constructors' },
      { id: '5-4-2', title: '工厂模式', section: '5.4.2', component: '5.4.2-factory-pattern' },
      { id: '5-5-1', title: '方法集规则', section: '5.5.1', component: '5.5.1-method-set-rules' },
    ],
  },
  {
    id: '06',
    title: '接口',
    path: '06-interfaces',
    sections: [
      { id: '6-1-1', title: '接口定义', section: '6.1.1', component: '6.1.1-interface-definition' },
      { id: '6-1-2', title: '空接口', section: '6.1.2', component: '6.1.2-empty-interface' },
      { id: '6-1-3', title: '类型断言', section: '6.1.3', component: '6.1.3-type-assertion' },
      { id: '6-1-4', title: '类型选择', section: '6.1.4', component: '6.1.4-type-switch' },
      { id: '6-2-1', title: '接口嵌入', section: '6.2.1', component: '6.2.1-interface-embedding' },
      { id: '6-2-2', title: '接口的多态', section: '6.2.2', component: '6.2.2-interface-polymorphism' },
      { id: '6-3-1', title: 'Stringer接口', section: '6.3.1', component: '6.3.1-stringer-interface' },
      { id: '6-3-2', title: 'Error接口', section: '6.3.2', component: '6.3.2-error-interface' },
      { id: '6-3-3', title: 'Sort接口', section: '6.3.3', component: '6.3.3-sort-interface' },
      { id: '6-4-1', title: '小接口原则', section: '6.4.1', component: '6.4.1-small-interface-principle' },
      { id: '6-4-2', title: '接口隔离原则', section: '6.4.2', component: '6.4.2-interface-segregation' },
      { id: '6-4-3', title: '依赖倒置原则', section: '6.4.3', component: '6.4.3-dependency-inversion' },
      { id: '6-5-1', title: '接口值', section: '6.5.1', component: '6.5.1-interface-values' },
      { id: '6-5-2', title: '函数式选项模式', section: '6.5.2', component: '6.5.2-functional-options-pattern' },
      { id: '6-5-3', title: '策略模式', section: '6.5.3', component: '6.5.3-strategy-pattern' },
    ],
  },
  {
    id: '07',
    title: '并发编程',
    path: '07-concurrency',
    sections: [
      { id: '7-1-1', title: '什么是Goroutine', section: '7.1.1', component: '7.1.1-shen-me-shi-goroutine' },
      { id: '7-1-2', title: '匿名Goroutine', section: '7.1.2', component: '7.1.2-anonymous-goroutine' },
      { id: '7-1-3', title: 'Goroutine调度', section: '7.1.3', component: '7.1.3-goroutine-scheduling' },
      { id: '7-2-1', title: 'Channel基础', section: '7.2.1', component: '7.2.1-channel-basics' },
      { id: '7-2-2', title: 'Channel方向', section: '7.2.2', component: '7.2.2-channel-direction' },
      { id: '7-2-3', title: '关闭Channel', section: '7.2.3', component: '7.2.3-close-channel' },
      { id: '7-2-4', title: 'Select语句', section: '7.2.4', component: '7.2.4-select-statement' },
      { id: '7-3-1', title: 'Worker Pool模式', section: '7.3.1', component: '7.3.1-worker-pool-pattern' },
      { id: '7-3-2', title: 'Pipeline模式', section: '7.3.2', component: '7.3.2-pipeline-pattern' },
      { id: '7-3-3', title: 'Fan-out/Fan-in模式', section: '7.3.3', component: '7.3.3-fan-out-fan-in-pattern' },
      { id: '7-3-4', title: '超时和取消', section: '7.3.4', component: '7.3.4-timeout-cancellation' },
      { id: '7-4-1', title: 'Mutex互斥锁', section: '7.4.1', component: '7.4.1-mutex-hu-chi-suo' },
      { id: '7-4-2', title: 'RWMutex读写锁', section: '7.4.2', component: '7.4.2-rwmutex-du-xie-suo' },
      { id: '7-4-3', title: 'WaitGroup', section: '7.4.3', component: '7.4.3-waitgroup' },
      { id: '7-4-4', title: 'Once', section: '7.4.4', component: '7.4.4-once' },
      { id: '7-4-5', title: 'Cond条件变量', section: '7.4.5', component: '7.4.5-cond-tiao-jian-bian-liang' },
      { id: '7-5-1', title: '原子操作', section: '7.5.1', component: '7.5.1-atomic-operations' },
      { id: '7-5-2', title: 'sync.Map', section: '7.5.2', component: '7.5.2-sync-map' },
    ],
  },
  {
    id: '08',
    title: '包管理和模块',
    path: '08-package_management',
    sections: [
      { id: '8-1-1', title: '什么是包', section: '8.1.1', component: '8.1.1-what-is-package' },
      { id: '8-1-2', title: '包的命名规则', section: '8.1.2', component: '8.1.2-package-naming' },
      { id: '8-1-3', title: '包的可见性', section: '8.1.3', component: '8.1.3-package-visibility' },
      { id: '8-2-1', title: '项目结构', section: '8.2.1', component: '8.2.1-project-structure' },
      { id: '8-2-2', title: '创建自定义包', section: '8.2.2', component: '8.2.2-custom-packages' },
      { id: '8-3-1', title: '初始化模块', section: '8.3.1', component: '8.3.1-module-init' },
      { id: '8-3-2', title: '添加依赖', section: '8.3.2', component: '8.3.2-add-dependencies' },
      { id: '8-3-3', title: 'go.mod 文件详解', section: '8.3.3', component: '8.3.3-gomod-wen-jian-xiang-jie' },
      { id: '8-3-4', title: 'go.sum 文件', section: '8.3.4', component: '8.3.4-gosum-wen-jian' },
      { id: '8-4-1', title: '版本管理', section: '8.4.1', component: '8.4.1-version-management' },
      { id: '8-4-2', title: 'vendor 目录', section: '8.4.2', component: '8.4.2-vendor-mu-lu' },
      { id: '8-4-3', title: '私有模块', section: '8.4.3', component: '8.4.3-private-modules' },
      { id: '8-5-1', title: '包的初始化', section: '8.5.1', component: '8.5.1-package-initialization' },
      { id: '8-5-2', title: '包的导入', section: '8.5.2', component: '8.5.2-package-import' },
      { id: '8-5-3', title: '内部包（internal）', section: '8.5.3', component: '8.5.3-nei-bu-bao-internal' },
      { id: '8-6-1', title: 'fmt - 格式化I/O', section: '8.6.1', component: '8.6.1-fmt-ge-shi-hua-io' },
      { id: '8-6-2', title: 'strings - 字符串处理', section: '8.6.2', component: '8.6.2-strings-zi-fu-chuan-chu-li' },
      { id: '8-6-3', title: 'time - 时间处理', section: '8.6.3', component: '8.6.3-time-shi-jian-chu-li' },
      { id: '8-6-4', title: 'os - 操作系统功能', section: '8.6.4', component: '8.6.4-os-cao-zuo-xi-tong-gong-neng' },
      { id: '8-6-5', title: 'io - 输入输出', section: '8.6.5', component: '8.6.5-io-shu-ru-shu-chu' },
      { id: '8-7-1', title: '项目结构', section: '8.7.1', component: '8.7.1-project-structure' },
      { id: '8-7-2', title: 'models/task.go', section: '8.7.2', component: '8.7.2-models-task-go' },
      { id: '8-7-3', title: 'utils/validator.go', section: '8.7.3', component: '8.7.3-utils-validator-go' },
      { id: '8-7-4', title: 'services/taskservice.go', section: '8.7.4', component: '8.7.4-services-task-service-go' },
      { id: '8-7-5', title: 'main.go', section: '8.7.5', component: '8.7.5-main-go' },
    ],
  },
  {
    id: '09',
    title: '错误处理',
    path: '09-error_handling',
    sections: [
      { id: '9-1-1', title: 'error 接口', section: '9.1.1', component: '9.1.1-error-interface' },
      { id: '9-1-2', title: '基本错误处理', section: '9.1.2', component: '9.1.2-basic-error-handling' },
      { id: '9-2-1', title: 'errors.New', section: '9.2.1', component: '9.2.1-errors-new' },
      { id: '9-2-2', title: 'fmt.Errorf', section: '9.2.2', component: '9.2.2-fmt-errorf' },
      { id: '9-2-3', title: '自定义错误类型', section: '9.2.3', component: '9.2.3-custom-error-types' },
      { id: '9-3-1', title: '类型断言', section: '9.3.1', component: '9.3.1-type-assertion' },
      { id: '9-3-2', title: 'errors.Is (Go 1.13+)', section: '9.3.2', component: '9.3.2-errors-is-go-1-13' },
      { id: '9-3-3', title: 'errors.As (Go 1.13+)', section: '9.3.3', component: '9.3.3-errors-as-go-1-13' },
      { id: '9-4-1', title: '使用 fmt.Errorf 包装', section: '9.4.1', component: '9.4.1-fmt-errorf-wrapping' },
      { id: '9-4-2', title: '错误链', section: '9.4.2', component: '9.4.2-error-chain' },
      { id: '9-5-1', title: 'panic 基础', section: '9.5.1', component: '9.5.1-panic-ji-chu' },
      { id: '9-5-2', title: 'recover 恢复', section: '9.5.2', component: '9.5.2-recover-hui-fu' },
      { id: '9-5-3', title: '实用的 panic/recover 模式', section: '9.5.3', component: '9.5.3-shi-yong-de-panicrecover-mo-shi' },
      { id: '9-6-1', title: '错误处理模式', section: '9.6.1', component: '9.6.1-error-handling-patterns' },
      { id: '9-6-2', title: '哨兵错误（Sentinel Errors）', section: '9.6.2', component: '9.6.2-shao-bing-cuo-wu-sentinel-errors' },
      { id: '9-6-3', title: '错误处理函数', section: '9.6.3', component: '9.6.3-error-handling-functions' },
    ],
  },
  {
    id: '10',
    title: '测试',
    path: '10-testing',
    sections: [
      { id: '10-1-1', title: '测试文件命名', section: '10.1.1', component: '10.1.1-test-file-naming' },
      { id: '10-1-2', title: '第一个测试', section: '10.1.2', component: '10.1.2-first-test' },
      { id: '10-2-1', title: '基本表格测试', section: '10.2.1', component: '10.2.1-basic-table-tests' },
      { id: '10-2-2', title: '复杂表格测试', section: '10.2.2', component: '10.2.2-complex-table-tests' },
      { id: '10-3-1', title: 'Helper函数', section: '10.3.1', component: '10.3.1-helper-han-shu' },
      { id: '10-3-2', title: 'Setup和Teardown', section: '10.3.2', component: '10.3.2-setup-he-teardown' },
      { id: '10-4-1', title: '基本基准测试', section: '10.4.1', component: '10.4.1-basic-benchmarks' },
      { id: '10-4-2', title: '基准测试技巧', section: '10.4.2', component: '10.4.2-benchmark-tips' },
      { id: '10-5-1', title: '基本示例', section: '10.5.1', component: '10.5.1-basic-examples' },
      { id: '10-5-2', title: '带名称的示例', section: '10.5.2', component: '10.5.2-named-examples' },
      { id: '10-6-1', title: '使用接口进行测试', section: '10.6.1', component: '10.6.1-testing-with-interfaces' },
      { id: '10-7-1', title: '生成覆盖率报告', section: '10.7.1', component: '10.7.1-coverage-report' },
      { id: '10-7-2', title: '提高测试覆盖率', section: '10.7.2', component: '10.7.2-improve-coverage' },
      { id: '10-8-1', title: '测试HTTP Handler', section: '10.8.1', component: '10.8.1-ce-shi-http-handler' },
      { id: '10-8-2', title: '测试HTTP客户端', section: '10.8.2', component: '10.8.2-ce-shi-http-ke-hu-duan' },
    ],
  },
  {
    id: '11',
    title: '文件IO和系统编程',
    path: '11-file_io',
    sections: [
      { id: '11-1-1', title: '创建和打开文件', section: '11.1.1', component: '11.1.1-create-open-files' },
      { id: '11-1-2', title: '读取文件', section: '11.1.2', component: '11.1.2-read-files' },
      { id: '11-1-3', title: '写入文件', section: '11.1.3', component: '11.1.3-write-files' },
      { id: '11-2-1', title: '获取文件信息', section: '11.2.1', component: '11.2.1-file-info' },
      { id: '11-2-2', title: '文件和目录操作', section: '11.2.2', component: '11.2.2-file-directory-ops' },
      { id: '11-3-1', title: '读取目录内容', section: '11.3.1', component: '11.3.1-read-directory' },
      { id: '11-3-2', title: '查找文件', section: '11.3.2', component: '11.3.2-find-files' },
      { id: '11-4-1', title: '路径处理', section: '11.4.1', component: '11.4.1-path-handling' },
      { id: '11-5-1', title: '创建临时文件', section: '11.5.1', component: '11.5.1-temp-files' },
      { id: '11-6-1', title: 'JSON文件操作', section: '11.6.1', component: '11.6.1-json-wen-jian-cao-zuo' },
      { id: '11-7-1', title: '读写CSV', section: '11.7.1', component: '11.7.1-du-xie-csv' },
      { id: '11-8-1', title: '使用bufio包', section: '11.8.1', component: '11.8.1-shi-yong-bufio-bao' },
    ],
  },
  {
    id: '12',
    title: 'Web开发基础',
    path: '12-web_development',
    sections: [
      { id: '12-1-1', title: '简单的HTTP服务器', section: '12.1.1', component: '12.1.1-jian-dan-de-http-fu-wu-qi' },
      { id: '12-1-2', title: '多个路由', section: '12.1.2', component: '12.1.2-multiple-routes' },
      { id: '12-2-1', title: '请求信息', section: '12.2.1', component: '12.2.1-request-info' },
      { id: '12-2-2', title: '查询参数', section: '12.2.2', component: '12.2.2-query-params' },
      { id: '12-2-3', title: '处理表单数据', section: '12.2.3', component: '12.2.3-form-data' },
      { id: '12-3-1', title: '返回JSON', section: '12.3.1', component: '12.3.1-fan-hui-json' },
      { id: '12-3-2', title: '接收JSON', section: '12.3.2', component: '12.3.2-jie-shou-json' },
      { id: '12-4-1', title: '自定义路由器', section: '12.4.1', component: '12.4.1-custom-router' },
      { id: '12-4-2', title: '中间件', section: '12.4.2', component: '12.4.2-middleware' },
      { id: '12-5-1', title: '文件上传', section: '12.5.1', component: '12.5.1-file-upload' },
      { id: '12-5-2', title: '文件下载', section: '12.5.2', component: '12.5.2-file-download' },
      { id: '12-6-1', title: 'HTML模板', section: '12.6.1', component: '12.6.1-html-mu-ban' },
      { id: '12-6-2', title: '模板文件', section: '12.6.2', component: '12.6.2-template-files' },
      { id: '12-7-1', title: 'Cookie操作', section: '12.7.1', component: '12.7.1-cookie-cao-zuo' },
      { id: '12-7-2', title: 'Session管理', section: '12.7.2', component: '12.7.2-session-guan-li' },
    ],
  },
  {
    id: '13',
    title: '数据库编程',
    path: '13-database',
    sections: [
      { id: '13-1-1', title: '连接数据库', section: '13.1.1', component: '13.1.1-connect-database' },
      { id: '13-1-2', title: '创建表', section: '13.1.2', component: '13.1.2-create-table' },
      { id: '13-2-1', title: '插入数据', section: '13.2.1', component: '13.2.1-insert-data' },
      { id: '13-2-2', title: '查询数据', section: '13.2.2', component: '13.2.2-query-data' },
      { id: '13-2-3', title: '更新数据', section: '13.2.3', component: '13.2.3-update-data' },
      { id: '13-2-4', title: '删除数据', section: '13.2.4', component: '13.2.4-delete-data' },
      { id: '13-3-1', title: '基本事务', section: '13.3.1', component: '13.3.1-basic-transactions' },
      { id: '13-3-2', title: '事务选项', section: '13.3.2', component: '13.3.2-transaction-options' },
      { id: '13-4-1', title: '连接池配置', section: '13.4.1', component: '13.4.1-connection-pool' },
      { id: '13-5-1', title: '使用预处理语句', section: '13.5.1', component: '13.5.1-prepared-statements' },
      { id: '13-6-1', title: '使用sql.Null类型', section: '13.6.1', component: '13.6.1-shi-yong-sqlnull-lei-xing' },
      { id: '13-7-1', title: '简单迁移系统', section: '13.7.1', component: '13.7.1-simple-migration' },
    ],
  },
  {
    id: '14',
    title: '高级主题',
    path: '14-advanced_topics',
    sections: [
      { id: '14-1-1', title: '基本反射操作', section: '14.1.1', component: '14.1.1-basic-reflection' },
      { id: '14-1-2', title: '修改值', section: '14.1.2', component: '14.1.2-modify-values' },
      { id: '14-1-3', title: '结构体反射', section: '14.1.3', component: '14.1.3-struct-reflection' },
      { id: '14-1-4', title: '方法调用', section: '14.1.4', component: '14.1.4-method-calls' },
      { id: '14-2-1', title: '基本泛型', section: '14.2.1', component: '14.2.1-basic-generics' },
      { id: '14-2-2', title: '泛型类型', section: '14.2.2', component: '14.2.2-generic-types' },
      { id: '14-2-3', title: '约束和接口', section: '14.2.3', component: '14.2.3-constraints-interfaces' },
      { id: '14-3-1', title: '基本用法', section: '14.3.1', component: '14.3.1-basic-usage' },
      { id: '14-3-2', title: '传递值', section: '14.3.2', component: '14.3.2-passing-values' },
      { id: '14-3-3', title: '实际应用', section: '14.3.3', component: '14.3.3-practical-use' },
      { id: '14-4-1', title: '内存分配', section: '14.4.1', component: '14.4.1-memory-allocation' },
      { id: '14-4-2', title: '对象池', section: '14.4.2', component: '14.4.2-object-pool' },
      { id: '14-4-3', title: '性能基准测试', section: '14.4.3', component: '14.4.3-performance-benchmarks' },
      { id: '14-5-1', title: '基本CGO', section: '14.5.1', component: '14.5.1-ji-ben-cgo' },
      { id: '14-5-2', title: '传递字符串', section: '14.5.2', component: '14.5.2-passing-strings' },
      { id: '14-6-1', title: '指针操作', section: '14.6.1', component: '14.6.1-pointer-operations' },
    ],
  },
  {
    id: '15',
    title: '项目实战',
    path: '15-project_practice',
    sections: [
      { id: '15-1-1', title: '项目结构', section: '15.1.1', component: '15.1.1-project-structure' },
      { id: '15-1-2', title: '配置管理 (config/config.go)', section: '15.1.2', component: '15.1.2-pei-zhi-guan-li-configconfiggo' },
      { id: '15-1-3', title: '数据模型 (models/user.go)', section: '15.1.3', component: '15.1.3-shu-ju-mo-xing-modelsusergo' },
      { id: '15-1-4', title: '数据模型 (models/todo.go)', section: '15.1.4', component: '15.1.4-shu-ju-mo-xing-modelstodogo' },
      { id: '15-1-5', title: '数据库层 (database/db.go)', section: '15.1.5', component: '15.1.5-shu-ju-ku-ceng-databasedbgo' },
      { id: '15-1-6', title: 'JWT工具 (utils/jwt.go)', section: '15.1.6', component: '15.1.6-jwt-gong-ju-utilsjwtgo' },
      { id: '15-1-7', title: '响应工具 (utils/response.go)', section: '15.1.7', component: '15.1.7-xiang-ying-gong-ju-utilsresponsego' },
      { id: '15-1-8', title: '认证中间件 (middleware/auth.go)', section: '15.1.8', component: '15.1.8-ren-zheng-zhong-jian-jian-middlewareauthgo' },
      { id: '15-1-9', title: '日志中间件 (middleware/logger.go)', section: '15.1.9', component: '15.1.9-ri-zhi-zhong-jian-jian-middlewareloggergo' },
      { id: '15-1-10', title: '认证处理器 (handlers/auth.go)', section: '15.1.10', component: '15.1.10-ren-zheng-chu-li-qi-handlersauthgo' },
      { id: '15-1-11', title: 'Todo处理器 (handlers/todo.go)', section: '15.1.11', component: '15.1.11-todo-chu-li-qi-handlerstodogo' },
      { id: '15-1-12', title: '主程序 (main.go)', section: '15.1.12', component: '15.1.12-main-program-main-go' },
      { id: '15-1-13', title: '测试API', section: '15.1.13', component: '15.1.13-ce-shi-api' },
      { id: '15-4-1', title: 'Docker化', section: '15.4.1', component: '15.4.1-docker-hua' },
    ],
  },
];

/**
 * 获取章节信息
 */
export function getChapterById(id: string): Chapter | undefined {
  return goDocsChapters.find(chapter => chapter.id === id);
}

/**
 * 获取小节信息（已优化）
 */
export function getSectionById(sectionId: string): { chapter: Chapter; section: Section } | undefined {
  initializeCache();
  return cachedSectionMap!.get(sectionId);
}

/**
 * 获取所有章节
 */
export function getAllChapters(): Chapter[] {
  return goDocsChapters;
}

// 性能优化：缓存计算结果
let cachedAllSections: Array<{ chapter: Chapter; section: Section }> | null = null;
let cachedSectionMap: Map<string, { chapter: Chapter; section: Section }> | null = null;
let cachedSectionIndexMap: Map<string, number> | null = null;

/**
 * 初始化缓存
 */
function initializeCache() {
  if (cachedAllSections && cachedSectionMap && cachedSectionIndexMap) {
    return;
  }

  cachedAllSections = [];
  cachedSectionMap = new Map();
  cachedSectionIndexMap = new Map();

  let index = 0;
  for (const chapter of goDocsChapters) {
    for (const section of chapter.sections) {
      const item = { chapter, section };
      cachedAllSections.push(item);
      cachedSectionMap.set(section.id, item);
      cachedSectionIndexMap.set(section.id, index);
      index++;
    }
  }
}

/**
 * 获取所有小节的扁平列表（已优化）
 */
export function getAllSections(): Array<{ chapter: Chapter; section: Section }> {
  initializeCache();
  return cachedAllSections!;
}

/**
 * 获取上一节（已优化）
 */
export function getPreviousSection(currentSectionId: string): { chapter: Chapter; section: Section } | undefined {
  initializeCache();
  const currentIndex = cachedSectionIndexMap!.get(currentSectionId);

  if (currentIndex !== undefined && currentIndex > 0) {
    return cachedAllSections![currentIndex - 1];
  }

  return undefined;
}

/**
 * 获取下一节（已优化）
 */
export function getNextSection(currentSectionId: string): { chapter: Chapter; section: Section } | undefined {
  initializeCache();
  const currentIndex = cachedSectionIndexMap!.get(currentSectionId);

  if (currentIndex !== undefined && currentIndex < cachedAllSections!.length - 1) {
    return cachedAllSections![currentIndex + 1];
  }

  return undefined;
}
