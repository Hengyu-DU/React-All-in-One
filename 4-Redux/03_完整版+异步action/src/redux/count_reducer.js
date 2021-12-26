// 该文件是定义为Count组件服务器的reducer

import { DECREMENT, INCREMENT } from "./constant";


// reducer可以：初始化状态、加工状态
export default function countReducer(preState=0,action){
  console.log('countReducer已执行', preState, action );
  // 如果preState是undefined,那么就是在初始化状态
  // if(preState === undefined) newState = 0 // 此处可优化，与switch合并

  // 从action对象中获取type、data
  const {type,data} = action

  // 根据type，决定如何操作状态
  switch (type) {
    case INCREMENT:
      return preState + data
    case DECREMENT:
      return preState - data
  
    default: // 非加非减，即为初始化
      return preState
  }
}