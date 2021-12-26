import React from "react";

export default class Weather extends React.Component{
  state={
    isHot:true
  }
  changeWeather = ()=>{
    const {isHot} = this.state
    this.setState({isHot:!isHot})
  }
  render(){
    return(
      <div>
        <h1>今天天气很{this.state.isHot ? '炎热':'凉爽'}</h1>
        <button onClick={this.changeWeather}>切换天气</button>
      </div>
    )
  }
}