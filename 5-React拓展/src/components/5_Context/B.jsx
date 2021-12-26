import React, { Component } from 'react'
import C from './C'

export default class B extends Component {
  render() {
    return (
      <div className="b">
        <h2>我是B组件</h2>
        <C/>
      </div>
    )
  }
}
