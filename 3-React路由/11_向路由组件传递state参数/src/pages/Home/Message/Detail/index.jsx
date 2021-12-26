import React, { Component } from 'react'
import qs from 'querystring'

// 模拟服务器传回的数据
const DetailData = [
  {id:'01',content:'你好，中国'},
  {id:'02',content:'你好，上官坏'},
  {id:'03',content:'你好，尚硅谷'}
]

export default class Detail extends Component {
  render() {

    // 接收params参数
    // const {id,title} = this.props.match.params

    // 接收search参数
    // const {search} = this.props.location
    // const {id,title} = qs.parse(search.slice(1)) //截掉问号

    // 接收state参数
    const {id,title} = this.props.location.state || {}

    const result = DetailData.find((detailObj)=>{
      return detailObj.id === id
    }) || {}

    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title} </li>
        <li>CONTENT:{result.content} </li>
      </ul>
    )
  }
}
