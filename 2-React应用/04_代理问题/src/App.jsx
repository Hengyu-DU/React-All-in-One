import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

  getStudentsInfo = () =>{
    const result = axios({
      url:'http://localhost:3000/api1/students',
      method:'GET'
    }).then(
      response =>{console.log('成功了', response.data);},
      error =>{console.log('失败了',error);}
    )

    console.log('axios() 函数的返回值：',result); // Promise

    axios.get('http://localhost:3000/api2/cars').then(  // 简写方式
      response =>{console.log('成功了', response.data);},
      error =>{console.log('失败了',error);}
    )

  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentsInfo}>点我获取信息</button>
      </div>
    )
  }
}
