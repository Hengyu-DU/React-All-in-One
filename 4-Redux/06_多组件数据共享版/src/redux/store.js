// 该文件是创建整个redux中最核心的store对象

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' // 引入用于支持异步action的中间件
import countReducer from './reducers/count'
import personReducer from './reducers/person'
import { combineReducers } from 'redux'

const allReducer = combineReducers({
  sumUp: countReducer,
  personInfo: personReducer
})

export default createStore (allReducer,applyMiddleware(thunk))