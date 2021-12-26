import React, { Component } from 'react'

export default class Count extends Component {
  state = {
    sum:0
  }

  // 情况一：add是由React控制的事件回调，所以其中的setState更新状态的动作是【异步的】
  add = ()=>{
    // 获取原状态
    const {sum} = this.state
    // 更新状态
    this.setState({sum:sum+1})
    console.log('由React直接控制的add sum：',this.state.sum);
  }

  // 情况一：componentDidMount是由React控制的事件回调，所以其中的setState更新状态的动作是【异步的】
  componentDidMount(){
    // 原状态
    const {sum} = this.state
    // 更新状态
    this.setState({sum:sum+1})
    console.log('componentDidMount sum:',this.state.sum); // 0

    // 情况二：addEventListener不由React控制，所以其中的setState更新状态的动作是【同步的】
    const {btn} = this
    btn.addEventListener('click',()=>{
      const {sum} = this.state
      this.setState({sum:sum+1})
      console.log('addEventListener sum：',this.state.sum);
    })
  }

  add2 = ()=>{
    // 情况二：setTimeout不由React控制，所以其中的setState更新状态的动作是【同步的】
    setTimeout(()=>{
      const {sum} = this.state
      this.setState({sum:sum+1})
      console.log('add2里的 sum：',this.state.sum); // 0
    })
  }

  render() {
    const {sum} = this.state
    return (
      <div>
        <h2>当前求和为：{sum}</h2>
        <button onClick={this.add}>点我+1</button>
        <button onClick={this.add2}>点我+1</button>
        <button ref={c => this.btn = c}>点我+1</button>
      </div>
    )
  }
}
