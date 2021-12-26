import React, { Component } from 'react'
import {Button} from 'antd'
import { DatePicker, Space } from 'antd';
import { SearchOutlined,WechatOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

export default class App extends Component {
  render() {
    return (
      <>
      <button>123</button>
      <Button>456</Button>
      <Button type="primary">789</Button>
      <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      <Button type="primary" size="large" shape="circle" icon={<WechatOutlined />} />
      <RangePicker />
      </> 
    )
  }
}
