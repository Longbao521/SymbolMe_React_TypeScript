import React, { ReactElement, useState, createContext } from 'react';
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

import './App.less'
import logoImg from './assets/img/login.svg'

const { SubMenu } = Menu

// TODO:使用Context来传递theme全局属性
const ThemeContext = createContext('light')

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

  return (
    <ConnectedRouter history={history}>
      <ThemeContext.Provider value="light">
        <Layout>
          <Sider collapsed={collapsed}>
            {
              navList.map(elem => {
                console.log(elem)
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
