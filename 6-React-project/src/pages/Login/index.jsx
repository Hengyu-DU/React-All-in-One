import React, { Component } from 'react'
import { NavBar, Toast, Input, List, Button } from 'antd-mobile'
import { phoneReg,codeReg } from '../../config/reg'
import 'antd-mobile/es/global'
import './index.css'

const back = () =>
  Toast.show({
    content: '点击了返回区域', duration: 1000,
  })

export default class Login extends Component {

  state = { phone:'', code:'', time:10 , canClick: true}

  login = ()=>{
    const {phone,code} = this.state
    let errMsg
    if(!phone && !code){
      errMsg = '请输入正确的手机号和验证码'
    }else if(!phone){
      errMsg = '请输入正确的手机号'
    }else if(!code){
      errMsg = '请输入正确的验证码'
    }
    if(errMsg){
      Toast.show({icon: 'fail',content: errMsg})
    }else{
      console.log(`send Ajax request, ${phone} + verified code ${code}`);
    }
  }

  /**
   * @author hengyu
   * @param {存储数据的类别} type 
   * @returns 
   */
  saveData = (type)=>{
    return (value)=>{
      if ((type === 'phone' && phoneReg.test(value))||(type === 'code' && codeReg.test(value))){
        this.setState({[type]:value})
      } else {
        this.setState({[type]:''})
      }
    }
  }

  getcode = ()=>{
    const {phone} = this.state
    if(!phone){
      Toast.show({icon: 'fail',content: '请输入正确的手机号'})
    } else{
      console.log('发送验证码：203842');
      this.codebtn.className = 'unactive'
      this.setState({canClick:false})
      const timer = setInterval(()=>{
        const {time} = this.state
        this.setState({time:time - 1})
        if (time <= 1) {
          clearInterval(timer)
          this.codebtn.className = 'active'
          this.setState({canClick:true,time:10})
        }
      },1000)
    }
  }

  render() {
    const {canClick,time} = this.state
    return (
      <div className="login-wrapper">
        {/* 顶部导航栏 */}
        <NavBar  onBack={back}>
          手机验证码登陆
        </NavBar>

        {/* 验证码区 */}
        <List  style={{'--prefix-width': '6em',}}>
          <List.Item prefix='手机号'>
            <Input 
              placeholder='输入手机号' 
              clearable
              onChange={this.saveData('phone')} />
          </List.Item>
          <List.Item prefix='验证码' 
            extra={<div className='active'
                      onClick={this.getcode}
                      ref={c => this.codebtn = c}
          >获取验证码{canClick ? '':`(${time})`}</div>}>
            <Input 
              placeholder='输入验证码' 
              clearable
              onChange={this.saveData('code')} />
          </List.Item>
        </List>

        {/* 提交区 */}

        <Button className='submit-btn' block color='primary' size='large' onClick={this.login}>登陆</Button>
        <div className='footer'>
          未注册的手机号，验证后会自动创建PornHub账号，登陆即代表您同意<a id='policy' href='https://baidu.com'>《PornHub用户隐私政策》</a>
        </div>

      </div>
    )
  }
}
