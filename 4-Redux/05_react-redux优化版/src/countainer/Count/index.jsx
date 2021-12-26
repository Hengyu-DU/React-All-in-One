import React, {Component} from 'react'
import {connect} from 'react-redux'
import { creatIncrementAction,
  creatDecrementAction,
  creatIncrementAsyncAction } from '../../redux/count_action'
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
        <div>
          <h2>当前求和为：{this.props.sum}</h2>
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


const mapStateToProps = state => ({sum:state}) // 映射状态

const mapDispatchToProps = {
  add: creatIncrementAction,
  subtract: creatDecrementAction,
  addasync: creatIncrementAsyncAction
} // 映射操作状态的方法

export default connect(mapStateToProps,mapDispatchToProps)(Count)