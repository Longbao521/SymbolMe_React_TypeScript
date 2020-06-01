import React, { ReactElement } from 'react'
import { Card } from 'antd'
import './View.less'

export default function View(): ReactElement {
    return (
        <div id="blog-view">
            <Card title="html" className="html">1</Card>
            <Card title="javascript" className="javascript">3</Card>
            <Card title="css" className="css">2</Card>
            <Card title="react" className="react">5</Card>
            <Card title="vue" className="vue">4</Card>
            <Card title="node" className="node">6</Card>
            <Card title="more" className="more">9</Card>
        </div>
    )
}
