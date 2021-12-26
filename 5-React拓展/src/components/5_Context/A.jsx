import React, { Component } from 'react'
import B from './B'
import { MyContext } from './context'
import './index.css'

const {Provider} = MyContext

export default class A extends Component {
  state = {name:'老刘',age:18,sex:'女'}
  render() {
    const {name,age,sex} = this.state
    return (
      <div className="a">
        <h2>我是A组件</h2>
        <h4>我存储的是：{name}--{age}--{sex}</h4>
        <Provider value={{name,age,sex}}>
          <B/>
        </Provider>
      </div>
    )
  }
}
