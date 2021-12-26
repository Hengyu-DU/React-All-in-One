import React, { Component } from 'react'
import './index.css'

export default class Count extends Component {
  state = {sum:0}

  increment = () => {
    const {sum} = this.state
    const {value} = this.numberNode
    this.setState({sum:sum+value*1})
  }
  decrement = () => {
    const {sum} = this.state
    const {value} = this.numberNode
    this.setState({sum:sum-value*1})
  }
  incrementIfOdd = () => {
    const {sum} = this.state
    const {value} = this.numberNode
    if(sum & 2 !== 0){
      this.setState({sum:sum+value*1})
    }
  }
  incrementAsync = () => {
    const {sum} = this.state
    const {value} = this.numberNode
    setTimeout(() => {
      this.setState({sum:sum+value*1})
    }, 1000);
  }

  render() {
    return (
      <div>
        <h2>当前求和为：{this.state.sum}</h2>
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
