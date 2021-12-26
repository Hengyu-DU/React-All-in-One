// 引入react核心库，当年通过script标签引入
import React from 'react'; // 默认暴露
// 引入react-dom
import ReactDOM from 'react-dom';
// 引入样式（index.css），通常是通用的手写的样式文件
// import './index.css';
// 引入App【根组件】（.js可以省略）
import App from './App';
// 用于分析页面性能
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
