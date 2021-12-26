import React, { Component } from 'react'
// import { Button, Space } from 'antd-mobile'
// import Button from 'antd-mobile/es/components/button'

import { Switch,Route,Redirect } from 'react-router-dom'

import routes from './config/routes'


export default class App extends Component {
  render() {
    return (
      <>
        <Switch>
          {
            routes.map((routeObj)=>{
              // return <Route path={routeObj.path} component={routeObj.component}></Route>
              return <Route key={routeObj.path} {...routeObj} />
            })
          }
          <Redirect to='/login' />
        </Switch>
      </> 
    )
  }
}
