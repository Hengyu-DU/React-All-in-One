import React, { Component } from 'react'
import store from '../../redux/store'
import { creatIncrementAction,
  creatDecrementAction,
  creatIncrementAsyncAction } from '../../redux/count_action'
import './index.css'

export default class Count extends Component {
  state = {
    wind:'北风六级'
  }

  increment = () => {
    // 获取数字
    const {value} = this.numberNode
    store.dispatch(creatIncrementAction(value))
  }
  decrement = () => {
    const {value} = this.numberNode
    store.dispatch(creatDecrementAction(value))
  }
  incrementIfOdd = () => {
    const {value} = this.numberNode
    if(store.getState() % 2 !== 0){
      store.dispatch(creatIncrementAction(value))
    }
  }
  incrementAsync = () => {
    const {value} = this.numberNode
      store.dispatch(creatIncrementAsyncAction(value,500))
  }

  render() {
    return (
      <div>
        <h2>当前求和为：{store.getState()}</h2>
        <div className="wind">今天{this.state.wind}</div>
        <select ref={c => this.numberNode = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>奇数再加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}
