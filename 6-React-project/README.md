## 1. antd 按需引入：
https://3x.ant.design/docs/react/use-with-create-react-app-cn?theme=dark

## 2. 自定义主题

需要配置less-loader
且less-loader版本需要在6.0.0以上，又不能太高

```
addLessLoader({
    lessOptions:{
      javascriptEnabled: true, // 允许js修改antd里less文件
      modifyVars: { '@primary-color': '#36da7c' },
    }
  }),
```

## 3. 正则表达式的校验：
test() 方法
定义和用法：
test() 方法用于检测一个字符串是否匹配某个模式.

语法：
`RegExpObject.test(string)`


### 4. 手机号校验：
export const phoneReg = /^(0|86|17951)?(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/


## 5. 开启服务器

3. 