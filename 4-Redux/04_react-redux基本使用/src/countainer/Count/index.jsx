// 该文件是Count的容器组件，用于连接Count的UI和redux
// 引入connect, 用于连接UI与redux、生成容器组件
import {connect} from 'react-redux'

import CountUI from '../../Component/Count'
import { creatIncrementAction,
  creatDecrementAction,
  creatIncrementAsyncAction } from '../../redux/count_action'

/**
 * a 函数的返回值必须是一个对象
 * 返回的对象key就作为传递给UI组件的props的key
 * 返回的对象value就作为传递给UI组件的props的value
 * 【a函数主要用于给UI组件传递状态】
 * 【b函数主要用于给UI组件传递操作状态的方法】
 */
function mapStateToProps(state){
  return { //a
    sum:state
  }
}

function mapDispatchToProps(dispatch){
  return { // b
    add: value => dispatch(creatIncrementAction(value)),
    subtract: value => dispatch(creatDecrementAction(value)),
    addasync: (value,time) => dispatch(creatIncrementAsyncAction(value,time))
  }
}

// 连接UI与redux、生产容器组件
const CountContainer = connect(mapStateToProps,mapDispatchToProps)(CountUI)

export default CountContainer