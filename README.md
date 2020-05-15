<!--
 * @Descripttion: 
 * @version: 
 * @Author: liyulong
 * @Date: 2020-05-14 08:25:31
 * @LastEditors: liyulong
 * @LastEditTime: 2020-05-15 09:33:28
 -->
# my-app-ts

### 项目目录

+ src
    - components: 项目中常用组件
    - views: 项目中的页面
    - storages: redux文件夹
    - services: 服务相关文件夹，如ajax配置等

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
**rm -rf node_modules 可以很快删除所有依赖**