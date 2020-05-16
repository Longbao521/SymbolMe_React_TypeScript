import React, { ReactChild, ReactElement } from 'react'
import { Layout } from 'antd';

interface Props {
    children: ReactChild | ReactChild [];
}

export default function Content(props: Props): ReactElement {
    return (
        <Layout.Content>
            { props.children }
        </Layout.Content>
    )
}
