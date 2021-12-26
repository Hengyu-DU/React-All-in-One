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

### 3.4.1 基本使用

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

### 3.4.2 封装NavLink

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

