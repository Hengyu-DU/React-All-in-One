import React, { Component } from 'react'
import { connect } from 'react-redux'
import {creatAddPersonAction} from '../../redux/actions/person'

class Person extends Component {
  state = {
    name:'',
    age:''
  }

  addPerson = ()=>{
    this.props.addPerson(this.state)
  }

  savePersonData = type => event => this.setState({[type]:event.target.value})

  render() {
    return (
      <div className="Person">
        <h2>我是Person组件</h2>
        <div className='wind'>我读取Count组件的和是： {this.props.sum}</div>
        <input onChange={this.savePersonData('name')} type="text" placeholder="名字" />
        <input onChange={this.savePersonData('age')} type="text" placeholder="年龄" />
        <button onClick={this.addPerson}>添加</button>
        {
          this.props.personInfo.map((personObj,index)=>{
            return <div key={index}>Name: {personObj.name} &nbsp; Age:{personObj.age}</div>
          })
        }
      </div>
    )
  }
}

export default connect(
  state => ({sum:state.sumUp,personInfo:state.personInfo}),
  {addPerson:creatAddPersonAction}
)(Person)