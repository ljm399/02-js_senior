# JavaScript 高级进阶学习笔记

JavaScript 高级知识学习路径，涵盖从底层原理到 ES6+ 新特性的系统性学习内容。

## **学习来源**：跟随codewhy老师系统学习

## 学习顺序

1. **基础原理**（Day 31-32）：理解 JavaScript 底层执行机制
2. **面向对象**（Day 33-36）：掌握原型、继承、手写实现
3. **ES6+ 特性**（Day 37-39）：熟悉现代 JavaScript 语法
4. **异步编程**（Day 38-40）：深入理解异步机制
5. **工程化技巧**（Day 41-43）：性能优化与实战应用

## 📚 学习内容目录

### Day 31 - 基础原理

#### 📁 [d31-this 中函数的指向](./d31-this中函数的指向/)

- this 绑定规则（默认/隐式/显式/new 绑定）
- call/apply/bind 实现原理
- 箭头函数中的 this

#### 📁 [d31-浏览器原理](./d31-浏览器原理/)

- 浏览器渲染原理
- 重排与重绘
- 性能优化

---

### Day 32 - 执行原理与内存管理

#### 📝 [d32-js 执行原理-内存管理-闭包.md](./d32js执行原理-内存管理-闭包.md)

**核心知识点：**

- 执行上下文（Execution Context）
- 变量对象（VO）和活动对象（AO）
- 作用域链（Scope Chain）
- 内存管理（GC 垃圾回收）
- 闭包原理与应用

**关键概念：**

- GO（Global Object）全局对象
- 引用计数 vs 标记清除
- 栈内存与堆内存

---

### Day 33 - 函数与对象增强

#### 📝 [d33-函数增强和对象增强.md](./d33-函数增强和对象增强.md)

**核心知识点：**

- 函数对象属性（name、length）
- arguments 转数组的三种方式
- 剩余参数（Rest Parameters）
- 纯函数（Pure Function）
- 柯里化（Currying）
- 组合函数（Compose）

---

### Day 34 - 面向对象

#### 📝 [d34-对象原型-面对函数思想-继承.md](./d34-对象原型-面对函数思想-继承.md)

**核心知识点：**

- 原型（prototype）与原型链
- 构造函数与 new 操作符
- 继承的多种实现方式
- 面向对象编程思想

#### 📁 [d35-原型](./d35-原型/)

- 深入理解原型链
- 原型的实际应用

---

### Day 36 - 手写实现

#### 📁 [d36-面向对象补充-手动实现 apply 等](./d36-面向对象补充-手动实现apply等/)

**实现内容：**

- 手写 call/apply/bind
- 手写 new 操作符
- 手写 instanceof
- 手写继承的多种方式

---

### Day 37 - ES6-ES11 新特性

#### 📁 [d37_ES6-ES11 的知识-如模版字符串-set-map](./d37_ES6-ES11的知识-如模版字符串-set-map/)

**核心特性：**

- 模板字符串（Template Literals）
- 标签模板字符串
- 函数默认参数与解构
- 展开语法（Spread Operator）
- Symbol 类型
- Set/Map 数据结构
- 数组新方法（flat、flatMap、entries）
- 数字连接符
- BigInt

**代码示例：**

- `01-标签模版字符串.html`
- `08-set的方法.html`
- `12-bigNumber.html`

---

### Day 38 - ES12-ES13 与异步编程

#### 📁 [d38-ES12-ES13-Proxy-Reflect-Promise](./d38-ES12-ES13-Proxy-Reflect-Promise/)

**核心知识点：**

- Proxy 对象拦截
- Reflect 反射机制
- Promise 原理与使用
- async/await 语法糖
- ES12-ES13 新特性

---

### Day 39 - 迭代器与生成器

#### 📁 [d39\_迭代器-生成器](./d39_迭代器-生成器/)

**核心知识点：**

- Iterator 迭代器协议
- 可迭代对象（Iterable）
- Generator 生成器函数
- yield 关键字
- 自定义迭代器

---

### Day 40 - 异步编程进阶

#### 📁 [d40\_异步函数-事件队列和循环-异常处理](./d40_异步函数-事件队列和循环-异常处理/)

**核心知识点：**

- 事件循环（Event Loop）
- 宏任务（Macro Task）与微任务（Micro Task）
- 异步函数执行顺序
- try/catch 异常处理
- Promise 错误捕获

---

### Day 41 - Storage 与正则

#### 📁 [d41_Storage-正则表达-认识防抖](./d41_Storage-正则表达-认识防抖/)

**核心知识点：**

- localStorage/sessionStorage
- Cookie 操作
- 正则表达式
- 防抖（Debounce）基础

---

### Day 42 - 性能优化与设计模式

#### 📁 [d42\_防抖和节流-深拷贝-事件总线](./d42_防抖和节流-深拷贝-事件总线/)

**核心知识点：**

- **防抖（Debounce）**
  - 基础防抖
  - 立即执行防抖
  - 取消防抖
- **节流（Throttle）**
  - 时间戳节流
  - 定时器节流
  - 尾部执行节流
- **深拷贝（Deep Clone）**
  - 递归实现
  - 循环引用处理
- **事件总线（Event Bus）**
  - 发布订阅模式
  - on/emit/off 实现

**代码示例：**

- `节流_防抖/` - 完整实现代码
- `深拷贝和事件总线/` - 实际应用

---

### Day 43 - 网络请求

#### 📁 [d43\_服务器相关知识-如 Http 协议-XMLHttpRequest](./d43_服务器相关知识-如Http协议-XMLHttpRequest/)

**核心知识点：**

- HTTP 协议
- XMLHttpRequest（XHR）
- Ajax 请求封装
- 跨域解决方案
- Fetch API

### 实践方式

- 每个知识点都有对应的 `.html` 示例文件
- 建议运行代码、调试、修改，加深理解
- 尝试手写实现核心功能（call/apply/bind、Promise 等）
- 结合实际项目场景应用所学知识
