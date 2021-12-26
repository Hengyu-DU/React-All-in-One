import React, { Component, lazy, Suspense} from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import NavLink from './MyNavLink/index'
// import Home from './Home'
// import About from './About'
import Loading from './Loading'
const Home = lazy(()=>{return import('./Home')})
const About = lazy(()=>{return import('./About')})



export default class Count extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-xs-offset-2 col-xs-8'>
            <div className='page-header'>
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-offset-2 col-xs-2'>
            <div className='list-group'>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/home">Home</NavLink>
            </div>
          </div>
        </div>
        <div className='col-xs-6 col-xs-offset-2'>
          <div className='panel'>
            <div className='panel-body'>
              <Suspense fallback={<Loading/>}>
                <Switch>
                  <Route path="/about" component={About}/>
                  <Route path="/home" component={Home}/>
                </Switch>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
