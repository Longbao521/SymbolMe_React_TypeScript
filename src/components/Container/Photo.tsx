import React, { ReactElement } from 'react'

import './Photo.less'

interface Props {
    src: string;
    width?: string;
    height?: string;  // 若不设置高，则图片的高度等于宽度
    isCollapsed?: boolean;
}

export default function Photo(props: Props): ReactElement {
    return (
        <div className="container">
            <img src={props.src} width={props.width} height={props.height}/>
        </div>
    )
}
