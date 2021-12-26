import React from 'react'

export default function Count() {

  const [sum, setSum] = React.useState(0)
  const [name] = React.useState('老刘')

  function add(){
    // setSum(sum+3) // 以下情况写简写有问题
    // setSum(sum => sum+3) // 完整版 稳定性更高
    setInterval(()=>{
      setSum(sum => sum+3)
    },500)
  }

  return (
    <div>
    <h2>当前求和为：{sum}</h2>
    <h2>名字：{name}</h2>
    <button onClick={add}>点我+3</button>
  </div>
  )
}
