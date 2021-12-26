import React, { Component } from 'react'

export default class Count extends Component {
  state = {sum:0}

  add = ()=>{
   

    /** 对象式的setState
     * const {sum} = this.state
     * this.setState({sum:sum+1},()=>{
     *     console.log('由React直接控制的add sum：',this.state.sum);
     * })
     * 
     * */ 
    
    // 函数式写法
    // this.setState( state =>({sum: state.sum+1}) )
    // 可以传props：
    this.setState( (state,props) =>{console.log(props);return{sum: state.sum+1}} )

  }

  change = ()=>{
    this.setState({sum:99}) // 新状态不依赖于原状态，适合对象式setState
  }

  render() {
    const {sum} = this.state
    return (
      <div>
        <h2>当前求和为:{sum}</h2>
        <button onClick={this.add}>点我+1</button>
        <button onClick={this.change}>点我将更改和为99</button>
      </div>
    )
  }
}
