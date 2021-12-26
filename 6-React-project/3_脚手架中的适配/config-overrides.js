const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile', // 对哪个库进行按需引入
    libraryDirectory: 'es', // 要按需引入的这个库，使用的是哪种模块儿化规范
    // style: 'css', // 对哪种文件进行按需引入
    style: true, // 允许样式修改
  })
);