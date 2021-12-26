import React, { Component } from 'react'

export default class News extends Component {
  state = {
    time: 4
  }

  componentDidMount(){
    setTimeout(() => {
      clearInterval(timer)
      this.props.history.push('/home/message')
    }, 4000);

    const timer = setInterval(() => {
      const {time} = this.state
      this.setState({time:time-1})
    }, 1000);
  }

  render() {
    return (
      <ul>
        <p>剩下{this.state.time}秒自动跳转</p>
        <li>news001</li>
        <li>news002</li>
        <li>news003</li>
      </ul>
    )
  }
}
