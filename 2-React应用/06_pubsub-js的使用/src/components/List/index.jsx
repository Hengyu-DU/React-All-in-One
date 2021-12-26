import React, { Component } from 'react'
import PubSub from 'pubsub-js'


export default class List extends Component {
  state = {
    users:[], // 存储用户信息
    isFirst:true, // 是否为初始展示
    isLoading:false, // 标识是否为加载中
    errorMsg:'' // 存储错误信息
  }

  componentDidMount(){
    this.msgid = PubSub.subscribe('status',(_,data)=>{
      this.setState(data)
    })
  }

  componentWillUnmount(){
    PubSub.unsubscribe(this.msgid) // 取消订阅
  }

  render() {
    const {users,isFirst,isLoading,errorMsg} = this.state
    return (
      <div className="row">

        {
          isFirst ? <h1>Welcome!</h1> :
          isLoading ? <img id="loading" alt='loading' src="https://gifimage.net/wp-content/uploads/2017/09/ajax-loading-gif-11.gif" style={{width:'200px'}}></img> :
          errorMsg ? <h1>{errorMsg}</h1> :
          users.map((userObjs)=>{
            // 函数体
            return (
              <div className="card" key={userObjs.id}>
                <a href={userObjs.html_url} target="_blank" rel="noreferrer">
                  <img alt='avatar' src={userObjs.avatar_url} style={{width:'100px'}} />
                </a>
                <p className="card-text">{userObjs.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
