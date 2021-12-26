import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './index.css'

export default class Add extends Component {

  handleKeyUp = (event)=>{
    if(event.keyCode === 13){
      if(event.target.value.trim() === ''){
        alert('输入内容不能为空')
      } else {
        const todoObj = {
          id: uuidv4(),
          name: event.target.value,
          done: false,
        }
        this.props.add(todoObj)
        event.target.value = ''
        
      }
    }
  }

  render() {
    return (
      <div className="todo-header">
        <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
