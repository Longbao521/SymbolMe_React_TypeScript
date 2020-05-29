import React, { Component } from 'react'
import Button from './Button';

interface Props {
    list: string[];
    deleteTodo: (id: number) => {};
}

export default class TODOList extends Component<Props> {
    constructor(props: Props) {
        super(props);
        this.handleTest2 = this.handleTest2.bind(this);
    }
    handleTest = () => {
        console.log('test');
    }

    handleTest2() {
        console.log('test2');
    }

    componentDidMount() {
        console.log('mount')
    }

    render() {
        return (
            <div className="todo-list">
                {this.props.list.map((todo, index) => (<div key={index}>
                    <span className="item-text ">{todo}</span>
                    <Button onClick={() => this.props.deleteTodo(index)} >done</Button>
                </div>))}
            </div>
        );
    }
}
