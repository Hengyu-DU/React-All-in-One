import { DECREMENT, INCREMENT } from "../constant"

export const add = value => ({type:INCREMENT,data:value*1})
export const subtract = value => ({type:DECREMENT,data:value*1})
export const addasync = (value,time) => {
  return (dispatch)=>{ 
    setTimeout(() => {
      dispatch(add(value))
    }, time);
  }
}