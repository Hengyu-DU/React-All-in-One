import React, { Component } from 'react'

export default class Message extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="/message1">message001</a> &nbsp;&nbsp;
          </li>
          <li>
            <a href="/message2">message002</a> &nbsp;&nbsp;
          </li>
          <li>
            <a href="/message3">message003</a> &nbsp;&nbsp;
          </li>
        </ul>
      </div>
    )
  }
}
