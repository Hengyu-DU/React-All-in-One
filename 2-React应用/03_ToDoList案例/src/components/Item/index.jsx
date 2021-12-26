import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = {mouseIsEnter:false}

  handleMouse = (mouseIsEnter)=>{
    return ()=>{
      this.setState({mouseIsEnter})
    }
  }  
  handleDelete = (id)=>{
    return () => {
      if(window.confirm('确定删除吗？')){
        this.props.deleteItem(id)
      }
    }
  }

  handleCheck = (id)=>{
    return (event) =>{
      this.props.updateItem(id,event.target.checked)
    }
  }

  render() {
    const {id, name, done} = this.props
    const {mouseIsEnter} = this.state
    return (
      <li 
        onMouseEnter={this.handleMouse(true)} 
        onMouseLeave={this.handleMouse(false)}
        className={mouseIsEnter? 'active' : ''}
      >
        <label>
          <input
           type="checkbox"
           checked={done} 
           onChange={this.handleCheck(id)} />
          <span>{name}</span>
        </label>
        <button 
          className="btn btn-danger" 
          style={{ display: mouseIsEnter ? "block" : "none" }}
          onClick={this.handleDelete(id)}
        >删除</button>
      </li>
    )
  }
}
