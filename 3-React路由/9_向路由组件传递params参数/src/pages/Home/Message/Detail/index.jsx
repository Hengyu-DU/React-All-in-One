import React, { Component } from 'react'

// 模拟服务器传回的数据
const DetailData = [
  {id:'01',content:'你好，中国'},
  {id:'02',content:'你好，上官坏'},
  {id:'03',content:'你好，尚硅谷'}
]

export default class Detail extends Component {
  render() {

    // 接收params参数
    const {id,title} = this.props.match.params
    const result = DetailData.find((detailObj)=>{
      return detailObj.id === id
    })

    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title} </li>
        <li>CONTENT:{result.content} </li>
      </ul>
    )
  }
}
