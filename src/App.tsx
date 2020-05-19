import React, { ReactElement, useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import {
  IdcardOutlined,
  GlobalOutlined,
  ScheduleOutlined,
  UserSwitchOutlined
} from '@ant-design/icons';
// 引入路由
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { Login, PersonalInfo } from './views'
import history from './stores/history'
// 引入组件
import { PhotoContainer, Sider, Content } from './components'
import { ThemeContext, ThemeType } from './context/index';

import './App.less'
import logoImg from './assets/img/login.svg'

const { SubMenu } = Menu



export default function App(): ReactElement {
  const [collapsed, setCollapsed] = useState(false)
  const [navList] = useState([
    { key: '1', path: '/personInfo', icon: <IdcardOutlined />, text: '个人信息' },
    {
      key: '2', path: '/project', icon: <UserSwitchOutlined />, text: '项目经历', children: [
        { key: '2.1', path: '/project/deepEarth', text: '深时地球' },
        { key: '2.2', path: '/project/DDG', text: '全球离散格网' },
      ]
    },
    { key: '3', path: '/skill', icon: <ScheduleOutlined />, text: '技术栈' },
    { key: '4', path: '/cesium', icon: <GlobalOutlined />, text: 'Cesium平台' },
  ])

  const [theme, setTheme] = useState<ThemeType>('light')
  // useState本身可以通过传入函数作为state的初始值，所以必须要包裹一层
  // const [switchTheme] = useState(() => {return  (): void => {
  //     FIXME:这个只在初始化时完成，相当于构造函数
  //     // const newTheme: ThemeType = 
  //     setTheme(theme === 'light' ? 'dark' : 'light')
  // }})
  return (
    <ConnectedRouter history={history}>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <Layout>
          <Sider collapsed={collapsed}>
            {
              navList.map(elem => {
                return elem.children ?
                  <SubMenu key={elem.key} icon={elem.icon} title={elem.text}>
                    {
                      elem.children.map(elemChild => (
                        <Menu.Item key={elemChild.key}>{elemChild.text}</Menu.Item>
                      ))
                    }
                  </SubMenu>
                  :
                  <Menu.Item key={elem.key} icon={elem.icon}>
                    <Link to={elem.path}>{elem.text}</Link>
                  </Menu.Item>
              })
            }
          </Sider>
          <Content collapsed={collapsed} setCollapsed={setCollapsed}>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/personInfo" component={PersonalInfo} />
              <Redirect to="/login" />
            </Switch>
          </Content>
        </Layout>
      </ThemeContext.Provider>
    </ConnectedRouter>
  );
}
