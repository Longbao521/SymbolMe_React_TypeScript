import React, { ReactChild, ReactElement } from 'react'
import { Layout } from 'antd';

interface Props {
    children: ReactChild | ReactChild [];
}

export default function Header(props: Props): ReactElement {
    return (
        <Layout.Header>
            { props.children }
        </Layout.Header>
    )
}
