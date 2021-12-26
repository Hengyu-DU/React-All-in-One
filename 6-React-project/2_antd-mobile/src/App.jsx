import React, { Component } from 'react'
// import { Button, Space } from 'antd-mobile'
import Button from 'antd-mobile/es/components/button'
import 'antd-mobile/es/global'

export default class App extends Component {
  render() {
    return (
      <>
         <Button onClick={() => { alert('hello.')}}>Default</Button>
          <Button color='primary'>Primary</Button>
      </> 
    )
  }
}
