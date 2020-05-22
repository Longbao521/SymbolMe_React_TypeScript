import React, { ReactElement, ReactChild, CSSProperties } from 'react'
import { Button, Layout } from 'antd'

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons'

import SwitchLight from '../Button/SwitchLight'
import Background from '../canvas/Background'

interface Props {
    children: ReactChild | ReactChild[];
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void ;
    style: CSSProperties;
}

export default function Content(props: Props): ReactElement {
    return (
        <Layout.Content style={props.style}>
          <Button type="primary" onClick={(): void => props.setCollapsed(!props.collapsed)} style={{ marginBottom: 16 }}>
            {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
          </Button>
          <SwitchLight />
          {props.children}
        </Layout.Content>
    )
}
