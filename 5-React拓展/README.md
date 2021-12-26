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

### 5.3.1 Hooks是什么？

1. Hook是React 16.8.0版本增加的新特性/新语法
2. 可以让你在【函数组件】中使用 state 以及 其它的 React 特性

### 5.3.2 三个常用的Hook

1. State Hook： React.useState()
2. Effect Hook: React.useEffect()
3. Ref Hook: React.useRef()

### 5.3.3 State Hook

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

### 5.3.4 Effect Hook

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

### 5.3.5 Ref Hook

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

