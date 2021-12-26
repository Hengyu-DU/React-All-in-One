// 该文件是专门用于汇总所有reducer的
import { combineReducers } from 'redux'

import countReducer from './count'
import personReducer from './person'

export default combineReducers({
  sumUp: countReducer,
  personInfo: personReducer
})