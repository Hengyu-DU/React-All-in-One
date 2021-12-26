// 该文件是定义为Count组件服务器的reducer，用于初始化状态、加工状态

import { DECREMENT, INCREMENT } from "./constant";

export default function countReducer(preState=0,action){

  const {type,data} = action
  switch (type) {
    case INCREMENT:
      return preState + data
    case DECREMENT:
      return preState - data
    default: // 非加非减，即为初始化
      return preState
  }
}