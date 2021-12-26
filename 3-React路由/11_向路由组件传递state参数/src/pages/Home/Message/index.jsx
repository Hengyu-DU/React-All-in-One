import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    messageArr:[
      {id:'01',title:'message001'},
      {id:'02',title:'message002'},
      {id:'03',title:'message003'},
    ]
  }
  render() {
    const {messageArr} = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map((msgObj)=>{
              return(
                <li key={msgObj.id}>

                  {/* 向路由组件传递params参数 */}
                  {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> &nbsp;&nbsp; */}

                  {/* 向路由组件传递search参数 */}
                  {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> &nbsp;&nbsp; */}

                  {/* 向路由组件传递state参数 */}
                  <Link to={{pathname:"/home/message/detail", state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link> &nbsp;&nbsp;

                </li>
              )
            })
          }
        </ul>
        <hr/>
          {/* 声明接收params参数 */}
          {/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}

          {/* search参数无需接收声明 */}
          {/* <Route path="/home/message/detail" component={Detail}/> */}

          {/* state参数无需接收声明 */}
          <Route path="/home/message/detail" component={Detail}/>
      </div>
    )
  }
}
