const express = require("express")
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// test1路由，响应GET请求，不接参数，只返回数据
app.get('/test1',(req,res)=>{
  console.log('有人请求test1了！');
  res.send('我是test1返回的一些数据')
})

// test2路由，响应GET请求，接query参数，返回数据
app.get('/test2',(req,res)=>{
  console.log('有人请求test2了！');
  console.log('我是test2，我接到的query参数是', req.query);
  res.send('我是test2返回的一些数据')
})

// test3路由，响应GET请求，接params参数，返回数据
app.get('/test3/:name/:age/:sex',(req,res)=>{
  console.log('有人请求test3了！');
  console.log('我是test3，我接到的params参数是', req.params);
  res.send('我是test3返回的一些数据')
})

// test4路由，响应POST请求，接query参数，返回数据
app.post('/test4',(req,res)=>{
  console.log('有人请求test4了！');
  console.log('我是test4，我接到的query参数是', req.query);
  res.send('我是test4返回的一些数据')
})

// test5路由，响应POST请求，接params参数，返回数据
app.post('/test5/:name/:age/:sex',(req,res)=>{
  console.log('有人请求test5了！');
  console.log('我是test5，我接到的query参数是', req.params);
  res.send('我是test5返回的一些数据')
})

// test6路由，响应POST请求，接请求体参数，返回数据
app.post('/test6',(req,res)=>{
  console.log('有人请求test6了！');
  console.log('我是test6，我接到的请求体参数是', req.body);
  res.send('我是test6返回的一些数据')
})

// test7路由，响应POST请求，接query\params\请求体参数，返回数据
app.post('/test7/:age',(req,res)=>{
  console.log('有人请求test7了！');
  console.log('我是test7，我接到的query参数是', req.query);
  console.log('我是test7，我接到的params参数是', req.params);
  console.log('我是test7，我接到的请求体参数是', req.body);
  res.send('我是test7返回的一些数据')
})

app.listen(8080,(err)=>{
  if(!err) console.log('测试前端发送请求服务器开启成功了！')
})