import React, { Component } from 'react'
import { MyContext } from './context'

const {Consumer} = MyContext

// export default class C extends Component {
//   static contextType = MyContext
//   render() {
//     const {name,age,sex} = this.context
//     return (
//       <div className="c">
//         <h2>我是C组件</h2>
//         <h4>我收到B给我的：{name}--{age}--{sex}</h4>
//       </div>
//     )
//   }
// }

export default function C() {
  return(
    <div className="c">
      <h2>我是C组件</h2>
      <Consumer>
        {
          ({name,age,sex})=> <h4>我收到B给我的：{name}--{age}--{sex}</h4>
          // (value)=> <h4>我收到B给我的：{value.name}--{value.age}--{value.sex}</h4>
        }
      </Consumer>
    </div>
  )
}

