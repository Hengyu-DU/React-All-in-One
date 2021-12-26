# 第4章 Redux

##  4.1  redux简介

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

##  4.2  求和案例 redux迷你版

##  4.3  求和案例 redux完整版

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

##  4.4 异步action

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

### 4.6.1 容器优化

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

### 4.6.2 Provider

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

### 4.6.3 一个组件要和redux“打交道”要经过哪几步

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

### 4.9.1 纯函数

1. 一类特别的函数：只要同样的输入（实参），必定得到同样的输出（返回）
2. 必须遵守以下一些约束

   - 不得改写参数数据
   - 不会产生任何副作用，例如网络请求、输入和输出设备
   - 不能调用Date.now()或者Math.random() 等不纯的方法

3. redux的reducer函数必须是一个纯函数：
   ！！！ 一定不要使用push\unshift等改变原数据的API

### 4.9.2 高阶函数

1. 理解：一类特别的函数

   - 情况1：参数是函数

   - 情况2：返回的是函数


2. 常见的高阶函数

   1. 定时器设置函数
   2. 数组的forEach() map() filter() reduce() find() bind()
   3. promise
   4. react-redux中的connect函数

3. 作用： 能实现更加动态，更加可扩展的功能

