import React, { Component } from 'react'
import Item from '../Item'
import "./index.css" 

export default class List extends Component {
  render() {
    const {todos,deleteItem,updateItem} = this.props
    return (
      <ul className="todo-main">
        {
          todos.map((todoObj,index)=>{
            return <Item 
              key={todoObj.id} 
              index={index}
              {...todoObj}
              deleteItem={deleteItem}
              updateItem={updateItem}
            />
          })
        }
      </ul>
    )
  }
}
