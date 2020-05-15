import React, { Component, ReactElement } from 'react'
import { Button } from 'antd';
import { connect } from 'react-redux';
import { LoginState } from '../../stores/reducers/Login';
import { CombinedState } from '../../stores/reducers'
import { Dispatch } from 'redux';
import { LOGIN, LOGOUT } from '../../stores/action-types';

// state是store中组合的State， 通过次函数，将state中的login传递给属性
const mapStateToProps = (state: CombinedState): LoginState => state.login
// dispatch是store中reducers提供的dispatch方法
const mapDispatchToProps = (dispatch: Dispatch) => (
    {
        login: (msg: string): void => {
            dispatch({ type: LOGIN, payload: msg })
        },
        logout: (msg: string): void => {
            dispatch({ type: LOGOUT, payload: msg })
        }
    }
)
// 将mapStateProps的返回值作为Props的类型，其实就是LoginState
type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> 

class Login extends Component<Props> {
    render(): ReactElement {
        return (
            <>
                <p> { this.props.isLogin ? 'isLogIN': 'isLogOut' }</p>
                <p> { this.props.msg }</p>
                <Button type="primary" onClick={(): void => this.props.login('login')}>Log In</Button>
                <Button type="primary" onClick={(): void => this.props.logout('logout byby')}>Log Out</Button>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)