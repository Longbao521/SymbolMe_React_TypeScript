import React, { ReactChild, ReactElement } from 'react'
import { Layout } from 'antd';

interface Props {
    children: ReactChild | ReactChild [];
}

export default function Sider(props: Props): ReactElement {
    return (
        <Layout.Sider>
            { props.children }
        </Layout.Sider>
    )
}
