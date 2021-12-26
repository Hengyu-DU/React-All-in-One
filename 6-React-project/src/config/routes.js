// 专门用于管理路由

import Login from "../pages/Login";
import User from "../pages/User";

// 数组中存储着所有的路由配置，每个路由配置都是一个对象
const routes = [
  {
    path:'/login',
    component:Login
  },
  {
    path:'/user',
    component:User
  }
]

export default routes