import React, { Component } from 'react'
import Add from './components/Add'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  //初始化状态，因为Add要用todos(添加)，List也要读取数据
  state = {
    tasklist: [
      { id: '001', name: '抽烟', done: true },
      { id: '002', name: '喝酒', done: false },
      { id: '003', name: '烫头', done: false },
    ]
  }

  add = (newtask)=>{
    const {tasklist} = this.state
    this.setState({tasklist:[newtask, ...tasklist]})
  }

  delete = (id)=>{
    const {tasklist} = this.state
    const newList = tasklist.filter((todoObj)=>{
      return todoObj.id !== id
    })
    this.setState({tasklist:newList})
  }
  
  // delete = (index)=>{
    //   const {tasklist} = this.state
    //   tasklist.splice(index,1) // 返回被删掉的值，因此不用变量去接
    //   this.setState({tasklist:tasklist})
    //   // 应尽量避免直接对原数组的值进行处理
    // }
    
  update = (id,done)=>{
    const {tasklist} = this.state
    const newList = tasklist.map((todoObj)=>{
      if(todoObj.id === id) todoObj.done = done
      return todoObj
    })
    this.setState({tasklist:newList})
  }

  checkAbove = (done)=>{
    const {tasklist} = this.state
    const newList = tasklist.map((todoObj)=>({...todoObj,done}))
    this.setState({tasklist:newList})
  }

  clearDone = ()=>{
    const {tasklist} = this.state
    const newList = tasklist.filter((todoObj)=>{
      return !todoObj.done
    })
    this.setState({tasklist:newList})
  }

  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Add add={this.add}/>
          <List 
            todos={this.state.tasklist} 
            deleteItem={this.delete}
            updateItem={this.update}
          />
          <Footer
            todos={this.state.tasklist}
            checkAbove={this.checkAbove}   
            clearDone={this.clearDone}        
          />
        </div>
      </div>
    )
  }
}
