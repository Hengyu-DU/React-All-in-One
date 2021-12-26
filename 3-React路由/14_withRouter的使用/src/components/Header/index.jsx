import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

import './index.css'

class Header extends Component {
  
  back = ()=>{
    this.props.history.goBack()
  }
  forward = ()=>{
    this.props.history.goForward()
  }
  go = ()=>{
    this.props.history.go(2) // 前进2
    // this.props.history.go(-2) // 回退2
  }

  render() {
    return (
      <div>

        <h2>React Router Demo</h2>

        <button onClick={this.back}>后退</button> &nbsp;
        <button onClick={this.forward}>前进</button> &nbsp;
        <button onClick={this.go}>go</button>
      </div>
    )
  }
}

export default withRouter(Header)