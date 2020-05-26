<!--
 * @Descripttion: 
 * @version: 
 * @Author: liyulong
 * @Date: 2020-05-14 08:25:31
 * @LastEditors: liyulong
 * @LastEditTime: 2020-05-26 10:44:30
 -->
# my-app-ts

### 项目目录

+ src
    - assets: 资源文件夹
    - components: 项目中常用组件
    - constant: 项目中使用的一些常量
    - context: React上下文，用于传递操作类似于theme这种共有变量
    - views: 项目中的页面
    - stores: redux文件夹
    - services: 服务相关文件夹，如ajax配置等
    - utils: 工具函数，用于储存一些实现特定功能的函数，且这些函数会在多个组件中使用

### 更新日志
1. 5.14:  
    +     创建项目,并导出配置文件
    +     完成第一次单元测试(jest)
    +     增加eslint
    +     github第一次提交
2. 5.15  
    +     使用antd,写两个简单的组件
    +     增加Redux,实现简单的例子
5. 5.16  
    +     增加Router以及完善Redux
    +     修改webpack配置，增加less-loader，安装相应模块，支持less与sass
6. 5.17
    +     创建Sider与Content分支，完成项目页面基本框架
    +     完成switchButton组件的样式与基本行为
7. 5.19
    +     完成PhotoContainer组件
    +     完成阿里icon自定义图标的设定
8. 5.20
    +     完成context，实现theme(风格属性)的组件共享
9. 5.21
    +     完成canvasBackground组件，使用canvas绘制粒子背景
10. 5.22
    +     完成白天与夜晚模式的切换
    +     使用json-server完成mock，实现前后端分离，因隐私问题，不上传db.json, db.json可按以下格式自行增加, 最好要用id字段，可以实现post增加字段
    ```json
    {
        "users": [
            {
                "id": "1",
                "username": "zhangsan"
            },
            {
                "id": "2",
                "username": "lisi"
            },
            {
                "id": "3",
                "username": "jiawu"
            }
        ]
    }
    ```
11. 5.23
    +     完成axios请求， mock响应数据
12. 5.24
    +     完成Card模块，完成个人信息页面的实现
13. 5.25
    +     修改夜晚模式侧边栏的样式，修改webpack配置可以使用Cesium(Require),修改部分在config文件夹下的webpack.config.js与env.js,使用FIXME:标明
14. 5.26
    +     完成部分技能页面(使用dangerouslySetInnerHTML, 后期考虑检查，以防XSS攻击), 改善路由，剥离出routes文件夹