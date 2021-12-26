const { response } = require('express')
const express = require('express')

const app = express()

app.get('/cars',(request,response)=>{
  const data = {
    car:'JEEP',
    price:'180w'
  }
  response.send(data)
})

app.listen(5001, ()=>{
  console.log("服务已经启动, 请求汽车信息地址为：http://127.0.0.1:5002/cars");
})