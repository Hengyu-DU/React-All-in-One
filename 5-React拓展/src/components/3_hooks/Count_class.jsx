import React, { Component } from 'react'
import ReactDOM  from 'react-dom'

export default class Count extends Component {
  state = {sum:0}
  add = ()=>{
    const {sum} = this.state
    this.setState({sum:sum+3})
  }
  
  uninstall = ()=>{
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  
  componentDidMount(){
    this.timer = setInterval(() => {
      this.add()
    }, 500);
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  render() {
    const {sum} = this.state
    return (
      <div>
        <h2>当前求和为：{sum}</h2>
        <button onClick={this.add}>点我+3</button>
        <button onClick={this.uninstall}>卸载</button>
      </div>
    )
  }
}
