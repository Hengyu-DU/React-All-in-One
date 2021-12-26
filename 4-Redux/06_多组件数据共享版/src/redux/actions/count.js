import { DECREMENT, INCREMENT } from "../constant"

// 该文件是用于定义创建action的函数
export const creatIncrementAction = value => ({type:INCREMENT,data:value*1})
export const creatDecrementAction = value => ({type:DECREMENT,data:value*1})
export const creatIncrementAsyncAction = (value,time) => {
  return (dispatch)=>{ 
    setTimeout(() => {
      dispatch(creatIncrementAction(value))
    }, time);
  }
}