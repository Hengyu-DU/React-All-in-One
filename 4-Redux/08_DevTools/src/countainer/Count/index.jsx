import React, {Component} from 'react'
import {connect} from 'react-redux'
import { add,subtract,addasync } from '../../redux/actions/count'
import './index.css'

class Count extends Component {
    state = {
      wind:'北风六级'
    }
  
    increment = () => {
      // 获取数字
      const {value} = this.numberNode
      this.props.add(value)
    }
    decrement = () => {
      const {value} = this.numberNode
      this.props.subtract(value)
    }
    incrementIfOdd = () => {
      const {value} = this.numberNode
      if(this.props.sum % 2 !== 0){
        this.props.add(value)
      }
    }
    incrementAsync = () => {
      const {value} = this.numberNode
      this.props.addasync(value,500)
    }
  
    render() {
      return (
        <div className='Count'>
          <h2>当前求和为：{this.props.sum}</h2>
          <div className="wind">
            我是Count组件，今天{this.state.wind},下面共有{this.props.personInfo.length}人
            </div>
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

export default connect(
  state => ({sum:state.sumUp,personInfo:state.personInfo}),
  {add,subtract,addasync}
  )(Count)