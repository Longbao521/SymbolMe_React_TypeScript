import React, { ReactElement } from 'react';
import { DatePicker, Layout } from 'antd';
// 引入路由
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { Login, PersonalInfo } from './views'
import { Header, Sider, Content } from './components/Layout'
import history from './stores/history'

export default function App(): ReactElement {
  return (
    <Layout>
      <Header>
        {/** ConnectedRouter是Redux与Router的结合，实现用Redux来操作路由 */}
        <ConnectedRouter history={history}>
          <Link to="/login">登录</Link>
          <Link to="/personInfo">个人信息</Link>
          <Switch>
            <Route path="/login" component={ Login }/>
            <Route path="/personInfo" component = { PersonalInfo }/>
            <Redirect to="/login" />
          </Switch>
        </ConnectedRouter>
      </Header>
      <Content>

      </Content>
    </Layout>
  );
}
