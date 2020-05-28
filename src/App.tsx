import React, { ReactElement, useState } from 'react';
import { Layout, Menu, Button } from 'antd';

// 引入路由
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import history from './stores/history'
import {mainRouter} from './routes'
// 引入组件
import { PhotoContainer, Sider, Content, Background } from './components'
import { ThemeContext, ThemeType } from './context/index';
// 引入常量
import { NavList } from './constant'

import './App.less'
import logoImg from './assets/img/login.svg'

const { SubMenu } = Menu

export default function App(): ReactElement {
  const [collapsed, setCollapsed] = useState(false)
  const [navList] = useState(NavList)

  const [theme, setTheme] = useState<ThemeType>('light')
  // useState本身可以通过传入函数作为state的初始值，所以必须要包裹一层
  // const [switchTheme] = useState(() => {return  (): void => {
  //     FIXME:这个只在初始化时完成，相当于构造函数
  //     // const newTheme: ThemeType = 
  //     setTheme(theme === 'light' ? 'dark' : 'light')
  // }})
  return (
    <ConnectedRouter history={history}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Layout>
          <Background color={theme === 'light' ? "0, 0, 0" : "0, 168, 255"} stroke={theme === 'light' ? "0, 0, 0" : "0, 168, 255"} />
          <Sider collapsed={collapsed}>
            {
              navList.map(elem => {
                return elem.children ?
                  <SubMenu key={elem.key} icon={elem.icon} title={elem.text}>
                    {
                      elem.children.map(elemChild => (
                        <Menu.Item key={elemChild.key}><Link to={elemChild.path}>{elemChild.text}</Link></Menu.Item>
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
          <Content collapsed={collapsed} setCollapsed={setCollapsed} style={theme === 'light' ? { background: "#b598a1" } : { background: "#353b48" }}>
            <Switch>
              {
                mainRouter.map(route => (
                  <Route key={route.pathname} path={route.pathname} component={route.component} />
                ))
              }
              <Redirect to="/personInfo" from="/" exact />
              <Redirect to="/404" exact/>
            </Switch>
          </Content>
        </Layout>
      </ThemeContext.Provider>
    </ConnectedRouter>
  );
}
