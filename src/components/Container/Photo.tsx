import React, { ReactElement } from 'react'

interface Props {
    src: string;
    width: number;
    height: number;
    isCollapsed: boolean;
}

export default function Photo(props: Props): ReactElement {
    return (
        <div className="container">
            <img src={props.src} />
        </div>
    )
}
