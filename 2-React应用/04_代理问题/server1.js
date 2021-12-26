const { response } = require('express')
const express = require('express')

const app = express()

app.use((request,response,next)=>{
  console.log('有人请求服务器1了')
  console.log('请求来自于：', request.get('Host'));
  console.log('请求的地址为', request.url);
  next()
})

app.get('/students',(request,response)=>{
  const data = {
    name:'A',
    age:'18',
    gender:'male'
  }
  response.send(data)
})

app.listen(5000, ()=>{
  console.log("服务已经启动, 请求学生信息地址为：http://127.0.0.1:5000/students");
})