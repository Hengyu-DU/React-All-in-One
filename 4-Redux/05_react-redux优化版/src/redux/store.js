// 该文件是创建整个redux中最核心的store对象

import { createStore, applyMiddleware } from 'redux'
import countReducer from './count_reducer'
import thunk from 'redux-thunk' // 引入用于支持异步action的中间件

const store = createStore (countReducer,applyMiddleware(thunk))
export default store