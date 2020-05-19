import React, { ReactElement, ReactChild } from 'react'
import { Button, Layout } from 'antd'

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons'

import SwitchLight from '../Button/SwitchLight'

interface Props {
    children: ReactChild | ReactChild[];
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void ;
}

export default function Content(props: Props): ReactElement {
    return (
        <Layout.Content>
          <Button type="primary" onClick={() => props.setCollapsed(!props.collapsed)} style={{ marginBottom: 16 }}>
            {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
          </Button>
          <SwitchLight />
          {props.children}
        </Layout.Content>
    )
}
