import React, { ReactElement, ReactChild, useState } from 'react'
import { Layout, Menu } from 'antd'
import { PhotoContainer } from '../index'

import logoImg from '../../assets/img/login.svg'
import { ThemeContext } from '../../context';


interface Props {
  children: ReactChild | ReactChild[];
  collapsed: boolean;
}

export default function Sider(props: Props): ReactElement {
  return (
    <ThemeContext.Consumer>
      {
        ({ theme, setTheme }): ReactChild => (
          <Layout.Sider trigger={null} collapsible collapsed={props.collapsed} theme={theme}>
            <PhotoContainer width="50%" src={logoImg} />
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme={theme}
            >
              {props.children}
            </Menu>
          </Layout.Sider>
        )
      }
    </ThemeContext.Consumer>
  )
}
