import React, { Component, ReactChild } from 'react'

interface Props {
    onClick: () => {};
    children:  ReactChild | ReactChild[];
}


export default class Button extends Component<Props> {
    state = {}

    render() {
        return (
            <div>
                <button onClick={() => this.props.onClick()}>this.props.children</button>
            </div>
        )
    }
}
