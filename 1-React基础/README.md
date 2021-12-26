# 第1章 React基础使用

## 1.1 React

1. 用于动态构建用户界面的JavaScript库（只关注于试图）
2. 由Facebook开源

- **React的特点**
  1. 声明式编码
  2. 组件化编码
  3. React Native 编写原生应用
  4. 高效（优秀的Diffing算法）

- **React高效的原因**
  1. 使用虚拟DOM，不总是直接操作页面真实的DOM
  2. DOM Diffing算法，最小化页面重绘

## 1.2 模块与组件、模块化与组件化的理解

- 模块：复用js
- 组件：用来实现局部功能效果的代码和资源的集合（html/css/js/image等），可以复用编码、简化、提高运行效率

- **定义组件的方式**
  1. 使用函数定义组件 （补救措施加上，目前官方推荐）
  2. 使用类定义组件 （最完整的功能）

## 1.3 React应用（基于React脚手架）

- **React脚手架**
  1. xxx 脚手架：用来帮助程序员快速创建一个基于xxx库的模板项目

     - 包含了所有需要的配置（语法检查、jsx编译、devServer）
     - 下载好了所有相关的依赖
     - 可以直接运行一个简单的效果

  2. react提供了一个用于创建react项目的脚手架库： creat-react-app
  3. 项目的整体技术架构为： react + webpack + es6 + eslint
  4. 使用脚手架开发的项目特点： 模块化、组件化、工程化

- **创建项目并启动**
  第一步，全局安装 npm i -g create-react-app
  第二步，切换到想创项目的目录，使用命令 create-react-app hello-react
  第三步，进入项目文件夹 cd hello-react
  第四步，启动项目 npm start

