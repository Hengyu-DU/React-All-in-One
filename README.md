# React全家桶（All-in-One） <!-- omit in toc -->


本仓库内容根据哔哩哔哩 [《2021版React技术全家桶》](https://www.bilibili.com/video/BV1Ey4y1u7vi?share_source=copy_web)和 [《2020版React技术全家桶》](https://www.bilibili.com/video/BV1wy4y1D7JT?p=74&share_source=copy_web) 视频整理的学习笔记，视频教程讲的特别好，配合本仓库的代码测试环境来练习，学习效果更佳，欢迎朋友们 Star 和 Fork。

（课程涉及的移动端开发请移步 => [移动端开发核心要点](https://github.com/Hengyu-DU/Mobile-Development)）

根据React基础部分知识，整理了一份3页的cheat sheet（小抄），便于快速查阅和复习遗忘的知识：
![React基础知识速查表（预览）](/React基础速查表/react.png)

**React基础知识速查表，pdf版（共3页，[点击下载](https://github.com/Hengyu-DU/React-All-in-One/tree/master/React%E5%9F%BA%E7%A1%80%E9%80%9F%E6%9F%A5%E8%A1%A8)）**

# 文档目录 <!-- omit in toc -->

- [第1章 React基础使用](#第1章-react基础使用)
- [第2章 React组件式开发应用](#第2章-react组件式开发应用)
- [第3章 React路由](#第3章-react路由)
- [第4章 Redux](#第4章-redux)
- [第5章 React扩展知识及总结](#第5章-react扩展知识及总结)

# 第1章 React基础使用

基本语法部分参见React基础知识速查表（共3页，[点击下载](https://github.com/Hengyu-DU/React-All-in-One/tree/master/React%E5%9F%BA%E7%A1%80%E9%80%9F%E6%9F%A5%E8%A1%A8)）：


## 1.1 React

1. 用于动态构建用户界面的JavaScript库（只关注于试图）
2. 由Facebook开源

- **React的特点**
  1. 声明式编码
  2. 组件化编码
  3. React Native 编写原生应用
  4. 高效（优秀的Diffing算法）

- **React高效的原因**
  1. 使用虚拟DOM，不总是直接操作页面真实的DOM
  2. DOM Diffing算法，最小化页面重绘

## 1.2 模块与组件、模块化与组件化的理解

- 模块：复用js
- 组件：用来实现局部功能效果的代码和资源的集合（html/css/js/image等），可以复用编码、简化、提高运行效率

- **定义组件的方式**
  1. 使用函数定义组件 （补救措施加上，目前官方推荐）
  2. 使用类定义组件 （最完整的功能）

## 1.3 React应用（基于React脚手架）

- **React脚手架**
  1. xxx 脚手架：用来帮助程序员快速创建一个基于xxx库的模板项目

     - 包含了所有需要的配置（语法检查、jsx编译、devServer）
     - 下载好了所有相关的依赖
     - 可以直接运行一个简单的效果

  2. react提供了一个用于创建react项目的脚手架库： creat-react-app
  3. 项目的整体技术架构为： react + webpack + es6 + eslint
  4. 使用脚手架开发的项目特点： 模块化、组件化、工程化

- **创建项目并启动**
  第一步，全局安装 npm i -g create-react-app
  第二步，切换到想创项目的目录，使用命令 create-react-app hello-react
  第三步，进入项目文件夹 cd hello-react
  第四步，启动项目 npm start



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

### 2.2.1 通用流程  <!-- omit in toc -->

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

### 2.2.2 关于父子之间通信 <!-- omit in toc -->

1. 【父组件】给【子组件】传递数据：通过props传递
2. 【子组件】给【父组件】传递数据：通过props传递，要求父提前给子传递一个有形参的函数

### 2.2.3 关于check框 <!-- omit in toc -->

* checked:
  - 不仅仅展示勾选的状态，后期还需要响应勾选的动作
  - 注意：用了checked就必须配合onChange使用；

* defaultChecked：
  - 只在第一次渲染时起作用，仅初次展示勾选状态，后期不会通过状态改变再次渲染。

* value和defaultValue也是同理的。

### 2.2.4 关于uuid (Universally Unique Identifier) <!-- omit in toc -->

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



# 第3章 React路由

## 3.1 相关理解

- ***SPA***

   1. 单页Web应用（Single Page Web Application SPA）
   2. 整个应用只有**一个完整的页面**
   3. 点击页面中的链接**不会刷新**页面，只会做页面的**局部更新**
   4. 数据都需要通过ajax请求获取，并在前端异步展现

- ***路由***

   1. 什么是路由？
      1. 一个路由就是一个映射关系（key:value）
      2. key为路径，value可能是function或component
   2. 路由分类
      1. 后端路由：
         - 理解： value 是 function, 用来处理客户端提交的请求。
         - 注册路由：`router.get(path, function(req, res))`
         - 工作过程：当node接收到一个请求时，根据请求路径找到匹配的路由，调用路由中的函数来处理请求，返回响应数据。
      2. 前端路由：
         - 浏览器端路由，value是component，用于展示页面内容
         - 注册路由：`<Route path="/test" component={Test}>`
         - 工作过程：当浏览器的path变成/test时，当前路由组件就会变成Test组件

- ***React-router（-DOM） 的理解***

   1. react 的一个插件库
      - 一共有三个库 web\native\anywhere
   2. 专门用来实现一个SPA应用
   3. 基于react的web项目基本都会用到这个库。

## 3.2 路由的基本使用

1. 明确好界面中的导航区、展示区
2. 导航区的a标签改为link标签 => 编写路由链接
   `<Link to="/abc">Demo</Link>`
3. 展示区写Route标签进行路径的匹配 => 注册路由
   `<Route path='/abc' component={Demo}/>`
4. `\<App>` 的最外侧包裹了一个`<BrowserRouter>`或`<HashRouter>`

## 3.3 路由组件与一般组件

1. 写法不同：

   * 一般组件：`<Demo/>`
   * 路由组件：`<Route path='/demo' component={Demo}/>`

2. 存放位置不同：

   * 一般组件：components
   * 路由组件：pages

3. 接收到的props不同：

   * 一般组件：写组件标签时传递了什么，就能收到什么
   * 路由组件：接收到三个固定的属性：

   ```
   history:
       go: ƒ go(n)
       goBack: ƒ goBack()
       goForward: ƒ goForward()
       push: ƒ push(path, state)
       replace: ƒ replace(path, state)
   location:
       pathname: "/about"
       search: ""
       state: undefined
   match:
       params: {}
       path: "/about"
       url: "/about"
   ```

## 3.4 NavLink的使用

### 3.4.1 基本使用 <!-- omit in toc -->

首先引入：
import {NavLink} from 'react-router-dom'

```jsx
 <NavLink activeClassName='atguigu' className='list-group-item' to="/about">About</NavLink>
 <NavLink activeClassName='atguigu' className='list-group-item' to="/home">Home</NavLink>
```

* activeClassName属性用来指定active状态下的类名，默认叫active
* 样式如果被bootstrap覆盖，则加 !important ：

```css
.atguigu{
        background-color: cornflowerblue !important;
        color: darkblue !important;
        font-weight: bold !important;
      }
```

### 3.4.2 封装NavLink <!-- omit in toc -->

封装一个MyNavLink：

1. index.js 中引入 NavLink

```jsx
  import React, { Component } from 'react'
  import { NavLink } from 'react-router-dom'

  export default class MyNavLink extends Component {
    render() {
      return (
        <NavLink activeClassName='atguigu' className='list-group-item' {...this.props} />
      )
    }
  }
```

* {...this.props} 作为一个对象展开，其中包括children属性（标签体的内容，this.props.children）

2. App.jsx 中：
   只需将不同的部份以props的形式传入，即可完成封装组件的调用。

```js
  <MyNavLink to="/about">About</MyNavLink>
  <MyNavLink to="/home">Home</MyNavLink>
```


## 3.5 Switch的使用

用于解决路由单一匹配的效率问题，在相同路由下只会匹配一次。
引入Switch：
import {Switch, Route} from 'react-router-dom'

用<Switch>标签包裹注册的路由：

```jsx
  {/* 注册路由 */}
    <Switch>
      <Route path="/about" component={About}/>
      <Route path="/home" component={Home}/>
      <Route path="/home" component={Test}/>
    </Switch>
```

## 3.6 解决样式丢失的问题

在路由地址添加多级路径时，二次刷新网页会导致样式丢失，
解决方法一：
    public/index.html中css引入时，去掉绝对地址的./，直接用/
解决方法二：
    public/index.html中css引入时，绝对路径以：  %PUBLIC_URL%   开头，代表public文件夹
解决方法三：（不常用）
    index.js中引入{HashRouter},而非{BrowserRouter}.

## 3.7 路由的模糊匹配和严格匹配

* 模糊匹配：
  只要to输入的路径与目标路径开头一致（包含目标路径），后面再接不同的也算匹配
* 严格匹配：
  必须完全一致

除非页面出现问题，否则不轻易开启严格匹配，因为有时开启会导致无法匹配二级路由。
开启严格匹配的方法：

```js
  {/* 注册路由 */}
    <Switch>
      <Route exact={true} path="/about" component={About}/>
      <Route exact={true} path="/home" component={Home}/>
    </Switch>
```

  (仅写exact也是可以的)

## 3.8 Redirect的使用

1. 一般写在所有路由注册的最下方，switch之内，当所有路由都无法匹配时，跳转到Redirect指定的路由。
2. 具体编码：
   引入：

```js
import {Switch, Route, Redirect} from 'react-router-dom'
```

使用：

  ```jsx
  <Switch>
    <Route path="/about" component={About}/>
    <Route path="/home" component={Home}/>
    <Redirect to="/about"/>
  </Switch>
  ```

## 3.9 嵌套路由

1. 注册子路由时要写上父路由的path值
2. 路由的匹配是按照注册路由的顺序进行的

## 3.10 给路由组件传递参数

* *Ajax传递参数的方法：
  1. query
  2. params
  3. body(包括 
         urlencoded => key=value&key=value
         json)

- ***(1) params参数(props.match.params)***

  - 路由链接（携带参数）：`<Link to='/demo/test/tom/18'>详情</Link>`
  - 注册路由（声明接收）: `<Route path="/demo/test/:name/:age" component={Test}/>`
  - 接收参数： const {name, age} = this.props.match.params

- ***(2) search参数(props.location.search)***

  - 路由链接（携带参数）：`<Link to='/demo/test?name=to&age=18'>详情</Link>`
  - 注册路由（无需声明，正常注册即可）：`<Route path='/demo/test' component={Test}/>`
  - 接收参数：const {search} = this.props.location
  - 备注：获取到的search是urlencoded编码字符串，需要借助querystring解析

  ```js
  import qs from 'querystring'  

  qs.stringify({name:'A',age:'18'})  // 结果为   name=A&age=18
  qs.parse('name=A&age=18') // 结果为  {name:'A',age:'18'}
  ```

- ***(3) state参数(props.location.state)***

  - 路由链接（携带参数）：`<Link to={{path:"/demo/test", state:{name:'tom',age:18}}}>详情</Link>`
  - 注册路由（无需声明，正常注册即可）：`<Route path='/demo/test' component={Test}/>`
  - 接收参数：const {state} = this.props.location
  - 备注：刷新也可保留住参数！！！（删除浏览器缓存和历史记录后则会失效）

## 3.11 replace与push

如果开启了replace模式，则新点击的路由组件会替换栈顶的历史记录，将不可以回退。
开启方式：在路由组件中加 replace={true} 或 直接 replace

```js
      <MyNavLink replace to="/home/message">Message</MyNavLink>
```

## 3.12 编程式路由导航

借助this.props.history对象上的API对操作路由跳转、前进、后退

  - this.props.history.push(path[,state])
  - this.props.history.replace(path[,state])
  - this.props.history.goBack()
  - this.props.history.goForward()
  - this.props.history.go(n)

## 3.13 withRouter()

withRouter()函数可以加工一般组件，让一般组件具备路由组件所特有的API，其返回值是一个新组件
引入：

```
import {withRouter} from 'react-router-dom'
```

在需要加工的一般组件内使用：

```
export default withRouter(Header)
```

## 3.14 BrowserRouter与HashRouter的区别

    1. 底层原理不一样：
    
    - BrowserRouter使用的是H5的history API，不兼容IE9及以下版本。
    - HashRouter使用的是URL的哈希值
    
    2. path表现形式不一样
    
    - BrowserRouter的路径中没有#
    - HashRouter的路径包含#
    
    3. 刷新对路由state参数的影响
    
    - （1）BrowserRouter无影响，因为state保存在history对象中
    - （2）HashRouter刷新后会导致路由state参数的丢失！！！
    
    4. 备注：HashRouter可以用于解决一些路径错误相关的问题。



# 第4章 Redux

## 4.1  redux简介

**1. redux是什么？**

   1. redux是一个专门用于做**状态管理**的JS库（不是react插件库）
   2. 基本与react配合使用
   3. 作用：集中式管理react应用中多个组件**共享的state状态**

**2. 工作流程**

​	<img src="C:/Users/victo/Desktop/source/Q  React/4-Redux/原理图/redux原理图.png" style="zoom: 33%;" />


* 需要创建的文件：

   ```
       components
       redux
         |- action.js
         |- reducer.js
         |- store.js
   ```

## 4.2  求和案例 redux迷你版

## 4.3  求和案例 redux完整版

总体需要安装的包：

1. redux
2. redux-thunk
3. react-redux
4. redux-devtools-extension

* 注意：index.js中要使用store.subscribe来检测redux中状态的改变

```js
store.subscribe(()=>{
  ReactDOM.render(
  <App/>,document.getElementById('root'))
})
```

## 4.4 异步action

引入 applyMiddleware
引入 thunk

* 在store.js中：

```js
import { createStore, applyMiddleware } from 'redux'
import countReducer from './count_reducer'
import thunk from 'redux-thunk' // 引入用于支持异步action的中间件

const store = createStore (countReducer,applyMiddleware(thunk))

export default store
```

* 异步action函数的返回值是一个函数，而不是{type,action}对象，因此store会自动识别出来。同时无需引入store，可直接在返回值函数中使用dispatch。

```js
export const creatIncrementAsyncAction = (value,time) => {
  return (dispatch)=>{ 
    setTimeout(() => {
      dispatch(creatIncrementAction(value))
    }, time);
  }
}
```


## 4.5  react-redux的基本使用

（1） 明确两个概念：

  - 1）UI 组件： 不能使用任何redux的API，只负责页面的呈现、交互等

  - 1）容器组件：负责和redux通信，结果交给UI组件

（2）如何创建一个容器组件：靠react-redux的 connect函数

  - 引入：

    ```js
    import {connect} from 'react-redux'
    ```

  - 写法：

    ```js
    connect(mapStateToProps, mapDispatchToProps)(UI组件)
    ```

    - mapStateToProps 映射状态，返回值需要是一个对象
    - mapDispatchToProps 映射操作状态的方法，返回值需是一个对象

（3）备注：容器组件中的store是在App.jsx中靠props传进去的，不是在容器组件中直接引入

  ```js
  import store from './redux/store'

  export default class App extends Component {
    render() {
      return (
        <CountContainer store={store}/>
      )
    }
  }
  ```

  <img src="C:/Users/victo/Desktop/source/Q  React/4-Redux/原理图/react-redux模型图.png" style="zoom:33%;" />

## 4.6 优化

### 4.6.1 容器优化 <!-- omit in toc -->

mapDispatchToProps也可简单地定义为对象，此时react-redux会自动dispatch其中value为action的内容，如遇addasync这种返回一个函数的，走异步action流程。

```js
const mapStateToProps = state => ({sum:state}) // 映射状态

const mapDispatchToProps = {
  add: creatIncrementAction,
  subtract: creatDecrementAction,
  addasync: creatIncrementAsyncAction
} // 映射操作状态的方法

export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
```

### 4.6.2 Provider <!-- omit in toc -->

有了Provier, App.jsx中靠props给容器组件Count传进去的store可以删去，也免去了未来有多个容器组件需要store的麻烦。直接在index.js中，为App组件包一个Provider。

* Provider同时有store.subscribe的功能,因此subscribe也可删去。

```js
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import store from "./redux/store"
import {Provider} from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,document.getElementById('root'))

```

### 4.6.3 一个组件要和redux“打交道”要经过哪几步 <!-- omit in toc -->

1. 定义好UI组件——不暴露
2. 引入connect生产一个容器组件，并暴露，写法如下：

  ```js
connect(
  state => ({key:value}), // 映射状态
  {key:xxxxxAction} // 映射操作状态的方法
)(UI组件)
  ```

3. 在UI组件中通过this.props.xxxxx读取和操作状态
3. 容器组件和UI组件合二为一！


## 4.7 数据共享版，reducer合并

在store中对多个组件的reducer进行合并：

```js
import countReducer from './reducers/count'
import personReducer from './reducers/person'
import { combineReducers } from 'redux'

const allReducer = combineReducers({
  sumUp: countReducer,      // 左边的key代表该reducer下处理并保存的state
  personInfo: personReducer
})

export default createStore (allReducer,applyMiddleware(thunk))
```

## 4.8 开发者工具Redux DevTools Extension

通过chrome store下载，并npm：
npm install --save redux-devtools-extension

store.js引入并使用：

```js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));
```

## 4.9 纯函数和高阶函数

### 4.9.1 纯函数 <!-- omit in toc -->

1. 一类特别的函数：只要同样的输入（实参），必定得到同样的输出（返回）
2. 必须遵守以下一些约束

   - 不得改写参数数据
   - 不会产生任何副作用，例如网络请求、输入和输出设备
   - 不能调用Date.now()或者Math.random() 等不纯的方法

3. redux的reducer函数必须是一个纯函数：
   ！！！ 一定不要使用push\unshift等改变原数据的API

### 4.9.2 高阶函数 <!-- omit in toc -->

1. 理解：一类特别的函数

   - 情况1：参数是函数

   - 情况2：返回的是函数


2. 常见的高阶函数

   1. 定时器设置函数
   2. 数组的forEach() map() filter() reduce() find() bind()
   3. promise
   4. react-redux中的connect函数

3. 作用： 能实现更加动态，更加可扩展的功能



# 第5章 React扩展知识及总结

## 5.1 setState

**一、 setState()更新状态是异步还是同步的？**--> 要看setState的执行位置
  （1）在【由react所控制的回调中】更新的动作是【异步】的：生命周期钩子、react事件监听回调
  （2）在【非react控制的异步回调中】更新的动作是【同步】的：定时器回调、原生事件回调、Promise

**二、setState的两种写法：**
  （1）对象式写法：setState(stateChange,[callback])
      1.stateChange为状态改变对象（该对象可以体现出状态的更改）
      2.callback是可选的回调函数，它在状态更新完毕、界面也更新后（render调用后）才被调用。

```js
const {sum} = this.state
  this.setState({sum:sum+1},()=>{
      console.log('由React直接控制的add sum：',this.state.sum);
  })
```

  （2）函数式写法：setState(updater,[callback])
      1.updater为【返回stateChange对象】的函数。
      2.updater可以接收到state和props
      3.callback是可选的回调函数，它在状态更新、界面也更新后(render调用后)才被调用。

```js
  this.setState( state =>({sum: state.sum+1}) )
```

**总结：**

1. 对象式的setState是函数式的setState的简写方式（语法糖）
2. 使用原则：
   （1）如果新状态不依赖于原状态 ===> 使用对象方式
   （2）如果新状态依赖于原状态 ===> 使用函数方式
   （3）如果需要在setState()执行后获取最新的状态数据，要在第二个[callback]函数中读取



## 5.2 LazyLoad

路由组件的lazyLoad，实现路由组件的分开打包：

```js
// 引入
import React, { Component, lazy, Suspense } from 'react'

const Home = lazy(()=>{return import('./Home')})  // 返回值为import函数
const About = lazy(()=>{return import('./About')})
```

通过`<Suspense fallback={<Loading组件>}>`指定在加载得到打包文件前显示一个自定义的loading界面

```js
    <Suspense fallback={<Loading/>}>
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/home" component={Home}/>
      </Switch>
    </Suspense>
```



## 5.3 Hooks

### 5.3.1 Hooks是什么？ <!-- omit in toc -->

1. Hook是React 16.8.0版本增加的新特性/新语法
2. 可以让你在【函数组件】中使用 state 以及 其它的 React 特性

### 5.3.2 三个常用的Hook <!-- omit in toc -->

1. State Hook： React.useState()
2. Effect Hook: React.useEffect()
3. Ref Hook: React.useRef()

### 5.3.3 State Hook <!-- omit in toc -->

1. State Hook 让函数组件也可以有state状态，并进行状态数据的读写操作
2. 语法： const [xxx, setXxx] = React.useState(initValue)
3. useState()说明：
   参数：第一次初始化的值在内部作缓存
   返回值：包含2个元素的数组，第1个为内部当前状态值，第2个为更新状态值的函数
4. setXxx()2种写法：
   setXxx(newValue):参数为非函数值，直接指定新的状态值，内部用其覆盖原来的状态值
   setXxx(value => newValue):参数为函数，接收原本的状态值，返回新的状态值，内部用其覆盖原来的状态值
   (第二种稳定性高)

```js
  const [sum, setSum] = React.useState(0)
  const [name, setName] = React.useState('老刘')

  function add(){
    // setSum(sum+3) // 以下情况写简写有问题
    setSum(sum => sum+3) // 完整版 稳定性更高
```

### 5.3.4 Effect Hook <!-- omit in toc -->

1. Effect Hook 可以让你在函数组件中执行副作用操作，用于模拟类式组件中的生命周期勾子
2. React中的副作用操作：
   发送Ajax请求数据获取
   设置订阅
   启动定时器
3. 语法和说明：
   componentDidMount():

```
  useEffect(()=>{
    // 操作(仅在函数组件第一次调用后执行)
  },[])
```

componentDidUpdate():

```
  1.不传第二个参数
  useEffect(()=>{
    // 状态更新后执行的操作
  }) 

  或

  2.传第二个参数，且指定监测对象
  useEffect(()=>{
    // 状态更新后执行的操作
  },[stateValue])
```

componentWillUnmount():

```
  useEffect(()=>{
    // 操作
    return ()=>{
      // 收尾时的操作
    }
  },[])
```

### 5.3.5 Ref Hook <!-- omit in toc -->

1. Ref Hook可以在函数组件中存储/查找组件内的标签或任意其它数据
2. 语法：

```
const xxx = useRef()
```

用法与React.createRef()一模一样



## 5.4 Fragment

1. 作用，避免无用的嵌套层级
2. 使用
   引入：

```js
import React, { Component, Fragment} from 'react'
```

使用： `<Fragment></Fragment>或<></>`

```js
render() {
    return (
      <Fragment>
        <div>123</div>
        <div>456</div>
      </Fragment>
    )
  }
```



## 5.5 Context

1. 理解： 一种组件间的通信方式，常用于【祖组件】和【后代组件】间通信
2. 使用：

```
1. 创建Context容器对象：（一般单独建立一个context.js，在需要的组件引入）
  const XXXContext = React.createContext()

2. 渲染子组件时，外面包裹xxxContext.Provider,或提前将Provider解构赋值出来，通过value属性给后代组件传递数据：
  <xxxContext.Provider value={数据}>
    子组件
  </xxxContext.Provider>

3. 后代组件读取数据：

  // 第一种方式：仅适用于类组件
   static contextType = xxxContext // 声明接收context
   const {} = this.context // 解构赋值，读取context中的value数据

  // 第二种方式：函数组件与类组件都可以
    const {Consumer} = xxxContext

   export default function C() {
      return( 
      <Consumer>
        {
          (value) => (
            要显示的内容{value.xxx}
          )
        }
      </Consumer>)
    }

```

3. 备注： 在开发中一般不用context，一般都用它封装react插件



## 5.6 组件间通信方式总结

- ***组件间的关系***

   * 父子组件
   * 兄弟组件（非嵌套组件）
   * 祖孙组件（跨级组件）
   * 其他关系

- ***几种通信方式***

   1. props：最简单的方式
   2. 消息订阅-发布：pub-sub\event
   3. 集中式管理: redux\dva
   4. context:生产者-消费者模式

- ***比较好的搭配方式：***

   1. 父子组件：props
   2. 兄弟组件：消息订阅、集中式管理
   3. 祖孙组件：消息订阅、集中式、context
   4. 其他关系：消息订阅、集中式

