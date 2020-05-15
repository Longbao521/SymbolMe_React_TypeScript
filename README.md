<!--
 * @Descripttion: 
 * @version: 
 * @Author: liyulong
 * @Date: 2020-05-14 08:25:31
 * @LastEditors: liyulong
 * @LastEditTime: 2020-05-15 11:03:18
 -->
# my-app-ts

### 项目目录

+ src
    - components: 项目中常用组件
    - views: 项目中的页面
    - storages: redux文件夹
    - services: 服务相关文件夹，如ajax配置等
### 框架搭建步骤
+ 按需导入antd
    + 安装antd 及babel-plugin-import
    + 并修改package.json
    ```json"plugins": [
    ["import", {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": "css"
      }]
    ]
    ```
    + 即可在各组件中引入
+ 引入eslint
    + 加入eslintignore, .eslintrc.json 
    + 加入eslint命令
+ 引入Router
+ 引入Redux
    + yarn add redux react-redux @types/react-redux redux-logger redux-promise redux-thunk @types/redux-logger @types/redux-promise --dev
    + 在store的入口文件中，使用中间件，创建加强版storeCreator，使用reducer创建store
**rm -rf node_modules 可以很快删除所有依赖**