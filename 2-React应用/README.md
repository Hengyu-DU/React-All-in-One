# 第2章 React组件式开发应用

## 2.1 学习笔记

* IOS\Android应用开发方式：

1. 原生开发（OC\JAVA）
2. 经过翻译生成原生应用（ReactNative\uniapp） 
3. 加壳

* 输入‘rcc’可快速输入：

```js
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
```

## 2.2 功能界面的组件化编码流程

### 2.2.1 通用流程

1. 拆分组件：根据功能点划分组件。
2. 实现静态组件：使用组件实现静态页面效果
3. 实现动态组件
   3.1 动态显示初始化数据
   3.1.1 数据类型
   3.1.2 数据名称
   3.1.3 保存在哪个组件
       - 某个组件用：放在自身
           - 某些组件用：放在共同父组件中 ==> 状态提升
           3.2 交互（从绑定事件监听开始）

* 状态在哪里，操作状态的方法就在哪里

### 2.2.2 关于父子之间通信

1. 【父组件】给【子组件】传递数据：通过props传递
2. 【子组件】给【父组件】传递数据：通过props传递，要求父提前给子传递一个有形参的函数

### 2.2.3 关于check框

* checked:
  - 不仅仅展示勾选的状态，后期还需要响应勾选的动作
  - 注意：用了checked就必须配合onChange使用；

* defaultChecked：
  - 只在第一次渲染时起作用，仅初次展示勾选状态，后期不会通过状态改变再次渲染。

* value和defaultValue也是同理的。

### 2.2.4 关于uuid (Universally Unique Identifier)

```powershell
$ npm i uuid
```

使用：

```js
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
```

## 2.3 react 脚手架配置代理总结

- ***方法一：***

  在package.json中追加如下配置（端口号是目标服务器的端口号）：

   ```json
  "proxy":"http://localhost:5000"
   ```

   请求的地址改为本地地址+目标后缀

   ```js
  url:'http://localhost:3000/students',
  method:'GET'
   ```

   说明：

        1. 优点：配置简单，前端请求资源时可以不加任何前缀
        2. 缺点：不能配置多个代理。
        3. 工作方式：上述方式配置代理，当用Ajax请求了3000不存在的资源时，该请求会转发给5000（如果3000存在资源，则优先匹配前端资源，localhost:3000 即是public路径）

- ***方法二：***

  安装http-proxy-middleware,
  编写setupProxy.js配置具体代理规则：

  ```js
  const {createProxyMiddleware} = require('http-proxy-middleware')
  
  module.exports = function(app) {
    app.use(
      createProxyMiddleware( 
        '/api1', // 只要/api 开头的请求，才转发给后端服务器
        {
          target:'http://localhost:5000',
          changeOrigin:true, // 控制服务器接收到的请求头中host字段的值
            // false(默认值)：服务器请求来自于原地址 localhost:3000
            // true：服务器请求来自于5000（请求目标地址），可迷惑目标服务器
          pathRewrite:{'^/api1':''} // 重写路径（目的：去掉api前缀）
        }),
      createProxyMiddleware( 
        '/api2',
        {
          target:'http://localhost:5001',
          changeOrigin:true, 
          pathRewrite:{'^/api2':''} 
        })
    )
  }
  ```

## 2.4 GitHub搜索案例

* 列表展示页面需要暗藏几个元素：
  1. welcome
  2. loading...
  3. users(内容展示)
  4. error

* 注意：通过response返回的error是一个对象，错误信息在下面的error.message

## 2.5 消息订阅与发布

* pubsub-js
  npm install pubsub-js

* 先订阅，再发布
* 适用于任意组件间的通信
* 要在组件componentWillUnmount中取消订阅

```
PubSub.publish('status',data)
this.msgis = PubSub.subscribe('status',函数(_,data))
PubSub.unsubscribe(this.msgid) // 取消订阅
```

