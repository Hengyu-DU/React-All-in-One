import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
import './components/List/index.css'

export default class App extends Component {

  state = {
    users:[], // 存储用户信息
    isFirst:true, // 是否为初始展示
    isLoading:false, // 标识是否为加载中
    errorMsg:'' // 存储错误信息
  }

  updateAppState = (obj) =>{
    this.setState(obj) // 借用属性名和属性值相同的特点写的简写方式
  }

  // saveUsers = (userArr)=>{
  //   this.setState({users:userArr})
  // }

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        <List {...this.state}/>
      </div>
    )
  }
}
