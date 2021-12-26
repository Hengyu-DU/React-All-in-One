import React, { Component } from 'react'
import CountContainer from './countainer/Count'
import Person from './countainer/Person'

export default class App extends Component {
  render() {
    return (
      <div>
        <CountContainer/>
        <hr />
        <Person/>
      </div>
    )
  }
}
