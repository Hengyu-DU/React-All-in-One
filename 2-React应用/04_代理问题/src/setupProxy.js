const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    createProxyMiddleware( 
      '/api1', // 只要/api 开头的请求，才转发给后端服务器
      {
        target:'http://localhost:5000',
        changeOrigin:false, // 控制服务器接收到的请求头中host字段的值,使host显示与目标服务器域名和端口号一致，用于欺骗目标服务器，防止因对方设置而获取不到数据
        pathRewrite:{'^/api1':''} // 重写路径（目的：去掉api前缀）
      }),

    createProxyMiddleware( 
      '/api2',
      {
        target:'http://localhost:5001',
        changeOrigin:true, 
        pathRewrite:{'^/api2':''} 
      })
  )
}