// 该文件是创建整个redux中最核心的store对象

// 引入createStore函数，用于创建store对象
import { createStore } from 'redux'

//引入为了Count组件服务的reducer
import countReducer from './count_reducer'

// 创建一个store对象
const store = createStore (countReducer)

// 暴露store
export default store