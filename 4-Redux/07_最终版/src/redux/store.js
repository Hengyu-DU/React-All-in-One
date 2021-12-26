// 该文件是创建整个redux中最核心的store对象

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' // 引入用于支持异步action的中间件
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers/index'


export default createStore (
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
  )